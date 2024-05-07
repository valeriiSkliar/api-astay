import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {ApartmentRepository, BookingRepository, ReviewRepository} from '../repositories';
import {DataObject, repository} from '@loopback/repository';
import {Booking, Review} from '../models';
import {Transaction} from 'loopback-datasource-juggler';

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
        isArchived: false,
      },
      include: [
        {relation: 'apartment', scope: {include: [{relation: 'room_type'}]}},
        {relation: 'customer'},
      ],
    });
    console.log('booking', booking);
    if (!booking) {
      throw new Error('Invalid review token. No any related booking found');
    }
    if (booking.isReviewed) throw new Error('You have left Review already');


    const now = new Date();
    const createdAt = booking.tokenReview_createdAt;
    if (!createdAt) throw new Error('Review token is invalid. No review token createdAt date found');
    const differenceInMonths = (now.getFullYear() - createdAt.getFullYear()) * 12 + (now.getMonth() - createdAt.getMonth());
    console.log('differenceInMonths', differenceInMonths);
    if (differenceInMonths > 2) throw new Error('Review token is too old');


    return booking;
  }

  async createReview(review: Partial<Review>, transaction: Transaction) {
    const reviewInstance = new Review(review);

    const newReview = await this.reviewRepository.create(
      reviewInstance,
      {transaction},
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
