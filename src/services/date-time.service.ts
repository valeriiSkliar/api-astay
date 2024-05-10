import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {format, isAfter, isBefore} from 'date-fns';

@injectable({scope: BindingScope.TRANSIENT})
export class DateTimeService {
  constructor(/* Add @inject to inject parameters */) {}

  public getCurrentDate() {
    return new Date();
  }

  public getUTCDate() {
    return new Date().toUTCString();
  }

  public normalizeDate(date: string) {
    return new Date(this.convertToDateFns(date)).toISOString().split('T')[0];
  }

  public validateDatesCheckInCheckOutDates(
    checkIn: string | undefined,
    checkOut: string | undefined,
  ) {
    if (!checkIn || !checkOut) {
      throw new Error('Invalid dates. CheckIn and CheckOut dates are required');
    }

    if (
      isBefore(new Date(), checkIn) &&
      isAfter(checkOut, new Date()) &&
      isBefore(checkIn, checkOut)
    ) {
      return {
        normalizeDate: {
          checkIn: this.normalizeDate(checkIn),
          checkOut: this.normalizeDate(checkOut),
        },
      };
    }
    throw new Error('Invalid dates range');
  }

  public getPeriod(start: Date, end: Date) {}

  public getDatesBetweenCheckInCheckOut(startDate: string, endDate: string, format?: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates: Date[] = [];
    let currentDate = start;
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    if (format === 'date') {
      return dates;
    }
    return dates.map(date => date.toISOString().split('T')[0]);
  }

  public getDatesBetweenCheckInCheckOutDateArray(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates: Date[] = [];
    let currentDate = start;
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
      return dates;
  }


  private convertToDateFns(date: string) {
    return format(date, 'yyyy-MM-dd');
  }
}
