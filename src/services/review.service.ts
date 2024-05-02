import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {BookingRepository} from '../repositories';
import {repository} from '@loopback/repository';

@injectable({scope: BindingScope.TRANSIENT})
export class ReviewService {
  constructor(
    @repository('BookingRepository')
    public bookingRepository: BookingRepository,
    @repository('ApartmentRepository')
    public apartmentRepository: BookingRepository,
  ) {}

  public async validateReviewToken(token: string) {
    const booking = await this.bookingRepository.findOne({
      where: {
        token: token,
        isArchived: false
      },
      include: [
        // {relation: 'apartment'},
        {relation: 'customer'},
        // {relation: 'transfers'},
      ],
    });
    console.log('booking', booking);
    if (!booking) {
      throw new Error('Invalid booking token');
    }
    return booking;
  }
}
