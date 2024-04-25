import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {ApartmentRepository, BookingRepository} from '../repositories';
import {Apartment, Booking} from '../models';

@injectable({scope: BindingScope.TRANSIENT})
export class ApartmentService {
  constructor(
    @repository('ApartmentRepository')
    private apartmentRepository: ApartmentRepository,
    @repository('BookingRepository')
    private bookingRepository: BookingRepository,
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
}
