import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {IsolationLevel, Transaction, repository} from '@loopback/repository';
import {BookingRepository, CustomerRepository} from '../repositories';
import {Apartment, Booking, Customer} from '../models';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import bcrypt from 'bcrypt';

dayjs.extend(utc);

@injectable({scope: BindingScope.TRANSIENT})
export class BookingService {
  async handleBookingRequest(booking: Omit<Booking, "id">) {
    const transaction =
    await this.bookingRepository.dataSource.beginTransaction({
      isolationLevel: IsolationLevel.READ_COMMITTED,
      timeout: 30000,
    });

    try{
      const {transfer, email, name, phoneNumber, apartmentId, checkIn, checkOut, locale, ...rest} = booking;

      await this.validateBookingData({apartmentId, email, name});

      const { originalApartmentPrice, priceOfBooking, discountFromApartment} = await this.handleApartmentPriceState(
        apartmentId,
        transaction as Transaction,
      )
      const { price } = await this.calculateBookingFromApartmentPriceState({ checkIn, checkOut, originalApartmentPrice, priceOfBooking, discountFromApartment});
      const customer = await this.ensureCustomer({email, name, phoneNumber}, transaction as Transaction);

      const { token, tokenReview, paymentUrl } = await this.handleTokensAndFrontendUrls({apartmentId, customerId: customer.id});


      // const transfers = await this.createTransfers(
      //   booking.transfer,
      //   customer,
      //   transaction as Transaction,
      // );


      await transaction.commit();

      const bookingData = {
        ...rest,
        price,
        // customer,
        customerId: customer.id,
        email,
        name,
        phoneNumber,
        apartmentId,
        checkIn,
        checkOut,
        originalApartmentPrice,
        priceOfBooking,
        discountFromApartment,
        token,
        tokenReview,
        paymentUrl,
      }

      const newBooking = await this.bookingRepository.create(bookingData, transaction as Transaction);
      return newBooking;
    } catch (error) {
      console.log('error', error);
      await transaction.rollback();

    }

    return {
      message: 'Booking request received',
      code: 200,
    };
  }

  private async handleTokensAndFrontendUrls({apartmentId, customerId}: Partial<Booking>): Promise<Partial<Booking>> {
    const saltRounds = 10;
    if (!customerId) {
      throw new Error('Error creating or finding customer');
    }
    if (!apartmentId) {
      throw new Error('Apartment id is required');
    }
    const token= await this.generatePaymentToken(apartmentId, saltRounds);

    const tokenReview = await this.generateReviewToken(customerId, saltRounds);

    const paymentUrl = this.generatePaymentUrl(token);

    return {
      tokenReview,
      paymentUrl,
      token,
    };
  }

  private generatePaymentUrl(token: string): string {
    return `${process.env.FRONTEND_URL}/apartment/payment?token=${token}`;
  }

  // private generateReviewUrl(token: string): string {
  //   return `${process.env.FRONTEND_URL}/apartment/payment?token=${token}`;
  // }
  constructor(
    @repository('BookingRepository')
    public bookingRepository: BookingRepository,
    @repository('ApartmentRepository')
    public apartmentRepository: BookingRepository,
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
  ) {}

  public async handleTokenAndPaymentUrl(booking: Omit<Booking, 'id'>) {
    const saltRounds = 10;
    const token = await bcrypt.hash(
      `${booking.apartmentId}-${Date.now()}`,
      saltRounds,
    );
    booking.token = token;
    const paymentUrl = `${process.env.FRONTEND_URL}/apartment/payment/${booking.apartmentId}/${token}`;
    booking.paymentUrl = paymentUrl;
  }

  async handleBookingStatus(booking: Partial<Booking>) {
    if (booking.status === 'confirmed') {
      return await this.confirmBookingDates(booking);
    }
    if (booking.status === 'cancelled') {
      return await this.cancelBookingDates(booking);
    }
    if (booking.status === 'archived') {
      return await this.archiveBooking(booking);
    }
    if (booking.status === 'pending') {
      return await this.pendingBooking(booking);
    }
    return booking;
  }
  async pendingBooking(booking: Partial<Booking>) {
    return {
      ...booking,
      bookingDates: [],
    };
  }
  async archiveBooking(booking: Partial<Booking>) {
    return {
      ...booking,
      isArchived: true,
    };
  }
  private async confirmBookingDates(booking: Partial<Booking>) {
    const {checkIn, checkOut} = booking;
    if (!checkIn || !checkOut) {
      throw new Error('CheckIn and CheckOut dates are required');
    }
    const bookingDates = this.getPeriod(new Date(checkIn), new Date(checkOut));

    return {
      ...booking,
      bookingDates: bookingDates,
    };
  }

  private async cancelBookingDates(booking: Partial<Booking>) {
    return {
      ...booking,
      bookingDates: [],
    };
  }
  private getPeriod(start: Date, end: Date) {
    const dates: Date[] = [];
    let currentDate = dayjs(start);
    const endDate = dayjs(end);
    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
      dates.push(currentDate.toDate());
      currentDate = currentDate.add(1, 'day');
    }
    return dates;
  }

  public async isApartmentExist(apartmentId: number) {
    console.log('apartmentId', apartmentId);
    if (!apartmentId) {
      throw new Error('Apartment ID is required');
    }
    const isApartmentExist = await this.apartmentRepository.exists(
      apartmentId,
      {
        where: {isArchived: false},
      },
    );
    console.log('isApartmentExist', isApartmentExist);
    return isApartmentExist;
  }

  public async validateBookingToken(token: string) {
    const booking = await this.bookingRepository.findOne({
      where: {
        token: token,
        isArchived: false,
      },
      include: [
        // {relation: 'apartment'},
        {relation: 'customer'},
        {relation: 'transfers'},
      ],
    });
    if (!booking) {
      throw new Error('Invalid review token');
    }
    return booking;
  }

  public async generatePaymentToken(apartmentId: number, saltRounds: number) {
    return await bcrypt.hash(
      `${apartmentId}-${Date.now()}`,
      saltRounds,
    );
  }

  public async generateReviewToken(customerId: number, saltRounds: number) {
    return await bcrypt.hash(
      `${customerId}-${Date.now()}`,
      saltRounds,
    );
  }
  public async generateReviewUrl(booking: Partial<Booking>) {
    if (!booking.tokenReview) {
      booking.tokenReview = 'await this.generateReviewToken(booking)';
      // throw new Error('Review token is required');
    }
    const bookingExist = await this.bookingRepository.exists(booking.id);
    if (!bookingExist) {
      throw new Error('Invalid review token');
    }
    if (booking.reviewUrl) {
      throw new Error('Review url is generated already');
    }
    const bookingUrl = `${process.env.FRONTEND_URL}/apartment/leave-review?token=${booking.tokenReview}`;
    try {
      // console.log('bookingUrl', {
      //   reviewUrl: bookingUrl,
      //   ...booking
      // });
      await this.bookingRepository.updateById(booking.id, {
        reviewUrl: bookingUrl,
        ...booking,
      });
      const check = await this.bookingRepository.findById(booking.id);
      console.log('check', check);
    } catch (error) {
      throw new Error('Error generating review url: ' + error.message);
    }
    return bookingUrl;
  }

  public excludeUnnecessaryFields(booking: Partial<Booking>) {
    const {
      reviewUrl,
      reviewTokenExpiry,
      tokenReviewGenerated,
      ...bookingFromFrontend
    } = booking;
    return bookingFromFrontend;
  }

  public async calculateBookingFromApartmentPriceState({priceOfBooking, checkIn, checkOut}: Partial<Booking>): Promise<Partial<Booking>> {   // const { priceOfBooking, checkIn, checkOut, ...rest } = await this.calculatePriceWithDiscount(booking);
    if (!priceOfBooking) {
      throw new Error('Error calculating apartment price state');
    }
    if (!checkIn || !checkOut) {
      throw new Error('CheckIn and CheckOut dates are required');
    }

    const bookingDates = this.getPeriod(new Date(checkIn), new Date(checkOut));

    const calculateBookingPrice = priceOfBooking * bookingDates.length;

    return {
      price: Math.round(calculateBookingPrice * 100) / 100,
    };
  }

  public async handleApartmentPriceState(apartmentId: number, transaction: Transaction): Promise<Partial<Booking>> {
    if (!apartmentId) {
      throw new Error('Apartment id is required. Apartment not found');
    }
    const apartment = await this.apartmentRepository.findById(apartmentId,{}, {
      transaction
    });
    if (!apartment) {
      throw new Error('Apartment not found');
    }
    if (!apartment.price) {
      throw new Error('Price is required');
    }

    const discount = apartment.discount || 0;
    const discauntValue = discount && discount > 0 ?
     (discount / 100) * (apartment.price) : 0;
     const priceOfBooking = apartment.price - discauntValue;

    return {
      originalApartmentPrice: apartment?.price,
      priceOfBooking: priceOfBooking,
      discountFromApartment: discount,
    };
  }

  private async validateBookingData(
    booking: Partial<Booking>) {
    console.log('validateBookingData', booking);
    if (!booking.apartmentId) {
      throw new Error('Apartment id is required. ApartmentID not found');
    }
    if (!booking.name || !booking.email) {
      throw new Error('Name and email are required');
    }
    const isApartmentExist = await this.apartmentRepository.exists(
      booking.apartmentId,
    );
    // const isApartmentExist = await this.isApartmentExist(
    //   booking.apartmentId,
    // );

    return isApartmentExist;
  }

  private async ensureCustomer(
    contactData: Partial<Customer>,
    transaction: Transaction,
  ): Promise<Customer> {
    if (!contactData.email) {
      throw new Error('Email is required');
    }
    let customer = await this.findCustomerByEmail(contactData, transaction);
    if (!customer) {
      customer = await this.createCustomer(contactData, transaction);
    }
    console.log('customer', customer);
    return customer;
  }
  private async findCustomerByEmail({email}: Partial<Customer>, transaction: Transaction): Promise<Customer | null> {
    try {
      return await this.customerRepository.findOne({where: {email}}, {transaction}) ;
    } catch (error) {
      throw new Error('Error finding customer by email: ' + error.message);
    }
  }

  private async createCustomer(
    {email, name, phoneNumber}: Partial<Customer>,
    transaction: Transaction,
  ): Promise<Customer> {
    try {
      return await this.customerRepository.create({
        name,
        email,
        phone: phoneNumber || '',
      }, {transaction});
    } catch (error) {
      throw new Error('Error creating customer: ' + error.message);
    }
  }
}
