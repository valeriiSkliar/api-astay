import {injectable, /* inject, */ BindingScope, service} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {ApartmentRepository, BookingRepository} from '../repositories';
import {Apartment, Booking} from '../models';
import {DateTimeService} from './date-time.service';

@injectable({scope: BindingScope.TRANSIENT})
export class ApartmentService {
  constructor(
    @repository(ApartmentRepository)
    private apartmentRepository: ApartmentRepository,
    @repository(BookingRepository)
    private bookingRepository: BookingRepository,
    @service(DateTimeService) private dateTimeService: DateTimeService,
  ) {}

  async find(filter: Filter<Apartment>) {
    const apartments = await this.apartmentRepository.find(filter);

    const bookings: Partial<Booking>[] = await this.bookingRepository.find({
      where: {isArchived: false, status: 'confirmed'},
      fields: {id: true, apartmentId: true, bookingDates: true},
    });

    const bookingsMap = this.createBookingDatesMap(bookings);

    const apartmentsWithDisabledDates = apartments.map(apartment => {
      const apartmentID = apartment.id;
      const disabledDates = apartmentID ? bookingsMap.get(apartmentID) : [];
      return {
        ...apartment,
        disabledDates,
      };
    });
    return apartmentsWithDisabledDates as Apartment[];
  }

  async findById(id: number, filter?: Filter<Apartment>) {
    if (!id) {
      throw new Error('Apartment ID is required');
    }
    const bookings = await this.bookingRepository.find({
      where: {apartmentId: id, isArchived: false, status: 'confirmed'},
    });

    const bookingsMap = this.createBookingDatesMap(bookings);

    const apartment = await this.apartmentRepository.findById(id, filter);
    const disabledDates = bookingsMap.get(id) || [];

    return {
      ...apartment,
      disabledDates,
    } as Apartment;
  }

  private createBookingDatesMap(bookings: Array<Partial<Booking>>) {
    const bookingsMap = new Map<number, Date[]>();

    if (bookings.length === 0) {
      return bookingsMap;
    }

    for (const booking of bookings) {
      const apartmentID = booking.apartmentId;
      if (!apartmentID) {
        throw new Error(
          `Error in during getting disabled dates from booking ID:  ${booking.id}. apartmentID is required`,
        );
      }
      const apartmentBookings = bookingsMap.get(apartmentID) || [];
      for (const date of booking.bookingDates || []) {
        const existingBookingIndex = apartmentBookings.findIndex(
          (b: Date) => b.getTime() === date.getTime(),
        );
        if (existingBookingIndex === -1) {
          apartmentBookings.push(date);
        }
      }
      apartmentBookings.sort((a: Date, b: Date) => a.getTime() - b.getTime());
      bookingsMap.set(apartmentID, apartmentBookings);
    }
    return bookingsMap;
  }

  public async updateApartmentDisabledDates(apartmentId: number, checkIn: string | undefined, checkOut: string | undefined) {
    if (!apartmentId) {
      throw new Error('apartmentId is required');
    }
    if (!checkIn || !checkOut) {
      throw new Error('Invalid dates. CheckIn and CheckOut dates are required');
    }
    const dates = this.dateTimeService.getDatesBetweenCheckInCheckOut(checkIn, checkOut);
    if (!dates) {
      throw new Error('dates are required');
    }

    const updatedApartment = await this.apartmentRepository.findById(apartmentId);
    if (!updatedApartment) {
      throw new Error('Apartment not found');
    }

    const disabledDates = updatedApartment.disabledDates || [];

    const uniqueSet = new Set([...disabledDates, ...dates]);
    const uniqueArray = Array.from(uniqueSet);

    updatedApartment.disabledDates = uniqueArray.map(date => new Date(date));

    await this.apartmentRepository.updateById(apartmentId, { disabledDates:uniqueArray.map(date => new Date(date)) });
    const apartment = await this.apartmentRepository.findById(apartmentId)
    return apartment;
  }

  public async deleteBookingDatesFromApartmentDisabledDates(booking: Partial<Booking>) {

    const apartment = await this.apartmentRepository.findById(booking.apartmentId);
    if (!apartment) {
      throw new Error('Apartment not found. Error in canceling booking');
    }
    const disabledDates = apartment.disabledDates || [];
    const bookingDates = booking.bookingDates || [];
    if (disabledDates?.length === 0) {
      console.log('No dates to delete');
      return;
    }

    const newDisabledDates = disabledDates.filter(date => {
      return !bookingDates.some(bookingDate => bookingDate.getTime() === date.getTime());
    });

    await this.apartmentRepository.updateById(booking.apartmentId, {disabledDates: newDisabledDates});

  }

  public async addBookingDatesToApartmentDisabledDates(booking: Partial<Booking>, bookingDates: Date[]) {

    const apartment = await this.apartmentRepository.findById(booking.apartmentId);
    if (!apartment) {
      throw new Error('Apartment not found. Error in adding booking dates');
    }

    const prevBookingDates = booking.bookingDates || [];
    const disabledDates = (apartment.disabledDates || [])
    .filter(date => {
      return !prevBookingDates.some(bookingDate => bookingDate.getTime() === date.getTime());
    });
    const uniqueSet = new Set([...disabledDates.map(date => new Date(date).toISOString().split('T')[0]), ...bookingDates.map(date => new Date(date).toISOString().split('T')[0])]);
    const newDisabledDates = Array.from(uniqueSet);

    await this.apartmentRepository.updateById(booking.apartmentId, {disabledDates: newDisabledDates.map(date => new Date(date))});
    const apartmentAfterUpdate = await this.apartmentRepository.findById(booking.apartmentId);
  }
}
