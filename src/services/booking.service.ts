import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {BookingRepository} from '../repositories';
import {Apartment, Booking} from '../models';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

@injectable({scope: BindingScope.TRANSIENT})
export class BookingService {
  constructor(
    @repository('BookingRepository')
    public bookingRepository: BookingRepository,
    @repository('ApartmentRepository')
    public apartmentRepository: BookingRepository,
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
        token:token,
        // isArchived: false
      },
      include: [
        {relation: 'apartment'},
        {relation: 'customer'},
        {relation: 'transfers'},
      ],
    });
    console.log('booking', booking);  
    if (!booking) {
      throw new Error('Invalid booking token');
    }
    return booking;
  }
}
