import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {BookingRepository} from '../repositories';
import {Apartment, Booking} from '../models';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import bcrypt from 'bcrypt';

dayjs.extend(utc);

@injectable({scope: BindingScope.TRANSIENT})
export class BookingService {
  constructor(
    @repository('BookingRepository')
    public bookingRepository: BookingRepository,
    @repository('ApartmentRepository')
    public apartmentRepository: BookingRepository,
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

  public async generateReviewToken(booking: Partial<Booking>) {
    const reviewToken = await bcrypt.hash(
      `${booking.customerId}-${Date.now()}`,
      10,
    );
    booking.tokenReview = reviewToken;
    return reviewToken;
  }

  public async generateReviewUrl(booking: Partial<Booking>) {
    if (!booking.tokenReview) {
      booking.tokenReview = await this.generateReviewToken(booking);
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

  // public async validateReviewToken(token: string) {

  //   const booking = await this.bookingRepository.findOne({
  //     where: {
  //       reviewToken: token,
  //       isArchived: false
  //     },
  //     include: [
  //       {relation: 'apartment'},
  //       {relation: 'customer'},
  //     ],
  //   });

  //   if (!booking) {
  //     throw new Error('No any related booking found');
  //   }
  //   return booking;
  // }
  public excludeUnnecessaryFields(booking: Partial<Booking>) {
    const {
      reviewUrl,
      reviewTokenExpiry,
      tokenReviewGenerated,
      ...bookingFromFrontend
    } = booking;
    return bookingFromFrontend;
  }

  public async calculatePriceWithDiscount(booking: Partial<Booking>): Promise<Partial<Booking>> {
    if (!booking?.apartmentId) {
      throw new Error('Apartment id is required. Apartment not found');
    }
    const apartment = await this.apartmentRepository.findById(booking.apartmentId);
    if (!apartment) {
      throw new Error('Apartment not found');
    }
    if (!apartment.price) {
      throw new Error('Price is required');
    }
    const discount = apartment.discount || 0;
    const discauntValue = discount && discount > 0 ?
     (discount / 100) * (apartment.price) : 0;
     console.log('apartment.discount', apartment.discount)
    console.log('discount', discount)
    console.log('discauntValue', discauntValue)


    const priceOfBooking = apartment.price - discauntValue;
    return {
      ...booking,
      originalApartmentPrice: apartment?.price,
      priceOfBooking: priceOfBooking,
      discountFromApartment: discount,
    };
  }

  public async handleApartmentPriceState(booking: Partial<Booking>) {
    const { priceOfBooking, checkIn, checkOut, ...rest } = await this.calculatePriceWithDiscount(booking);
    if (!priceOfBooking) {
      throw new Error('Error calculating apartment price state');
    }
    if (!checkIn || !checkOut) {
      throw new Error('CheckIn and CheckOut dates are required');
    }

    console.log('booking', booking);
    const bookingDates = this.getPeriod(new Date(checkIn), new Date(checkOut));

    const calculateBookingPrice = priceOfBooking * bookingDates.length;

    return {
      ...rest,
      priceOfBooking: priceOfBooking,
      price: calculateBookingPrice,
    } as Partial<Booking>;
  }

}
