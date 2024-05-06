import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {ApartmentRepository, BookingRepository, ReviewRepository} from '../repositories';
import {DataObject, repository} from '@loopback/repository';
import {Booking, Review} from '../models';

@injectable({scope: BindingScope.TRANSIENT})
export class ReviewService {
  constructor(
    @repository('BookingRepository')
    public bookingRepository: BookingRepository,
    @repository('ApartmentRepository')
    public apartmentRepository: ApartmentRepository,
    @repository('ReviewRepository')
    public reviewRepository: ReviewRepository,
  ) {}

  public async validateReviewToken(token: string) {
    const booking = await this.bookingRepository.findOne({
      where: {
        tokenReview: token,
        isArchived: false
      },
      include: [
        {relation: 'apartment', scope: {include: [{relation: 'room_type'}]}},
        {relation: 'customer'},
      ],
    });
    if (!booking) {
      throw new Error('No any related booking found');
    }
    return booking;
  }

  async createReview(review: Partial<Review>) {
    const reviewInstance = new Review(review);

    const newReview = await this.reviewRepository.create(
      reviewInstance
    )
    return newReview;
  }

  async extractReviewData(booking: Booking): Promise<Partial<Review>> {

    const {apartment, customer, ...rest} = booking;
    const {room_type:{translations}} = apartment;
    const roomType = JSON.stringify(translations);

    const {name, email} = customer;
    return {
      listing_id: apartment.id,
      complex_id: apartment.complex_id,
      customerId: customer.id,
      name,
      roomType,
    };
  }
}
