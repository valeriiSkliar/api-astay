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


    const bookingsMap = new Map();
    for (const booking of bookings) {
      const apartmentBookings = bookingsMap.get(booking.apartmentId) || [];
      for (const date of booking.bookingDates || []) {
        const existingBookingIndex = apartmentBookings.findIndex((b: Date) => b.getTime() === date.getTime());
        if (existingBookingIndex === -1) {
          apartmentBookings.push(date);
        }
      }
      apartmentBookings.sort((a:Date, b:Date) => a.getTime() - b.getTime());
      bookingsMap.set(booking.apartmentId, apartmentBookings);
    }

    const apartmentsWithDisabledDates = apartments.map(apartment => {
      const disabledDates = bookingsMap.get(apartment.id) || [];
      return {
        ...apartment,
        disabledDates,
      };
    });
    return apartmentsWithDisabledDates as Apartment[];
  }

}
