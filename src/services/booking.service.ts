import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {BookingRepository} from '../repositories';
import {Booking} from '../models';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

@injectable({scope: BindingScope.TRANSIENT})
export class BookingService {
  constructor(
    @repository('BookingRepository')
    public bookingRepository: BookingRepository,
  ) {}

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
    throw booking;
  }
  async archiveBooking(booking: Partial<Booking>) {
    return {
      ...booking,
      isArchived: true,
    }
  }
  private async confirmBookingDates(
    booking: Partial<Booking>,
  ) {
    const {checkIn, checkOut} = booking;
    if (!checkIn || !checkOut) {
      throw new Error('CheckIn and CheckOut dates are required');
    }
    const bookingDates = this.getPeriod(new Date(checkIn), new Date(checkOut));

    return {
      ...booking,
      bookingDates: bookingDates,
    }
  }

  private async cancelBookingDates(
    booking: Partial<Booking>,
  ) {
    return {
      ...booking,
      bookingDates:[],
    }
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
}
