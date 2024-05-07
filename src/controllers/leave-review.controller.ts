import { getModelSchemaRef, post, requestBody, response, HttpErrors } from '@loopback/rest';
import { Review } from '../models';
import { IsolationLevel, Transaction, repository } from '@loopback/repository';
import { ReviewRepository } from '../repositories';
import { BookingService, MailService, ReviewService } from '../services';
import { service } from '@loopback/core';
import Mail from 'nodemailer/lib/mailer';

export class LeaveReviewController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
    @service(ReviewService) private reviewService: ReviewService,
    @service(BookingService) private bookingServise: BookingService,
    @service(MailService) private mailService: MailService,
  ) {}

  @post('/api/reviews/customer-leave-review')
  @response(200, {
    description: 'Customer leave review',
    content: {'application/json': {schema: {message: 'string', status: 'string'}}},
  })
  async leaveReview(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              tokenReview: {type: 'string'},
              reiting_score: {type: 'number'},
              review: {type: 'string'},
            },
            required: ['tokenReview', 'reiting_score', 'review']
          },
        },
      },
    })
    reviewData: Partial<Review>,
  ): Promise<{status: string; message: string}> {
    const transaction =
    await this.reviewRepository.dataSource.beginTransaction({
      isolationLevel: IsolationLevel.READ_COMMITTED,
      timeout: 30000,
    });
    try {

      const { tokenReview, reiting_score, review } = reviewData;

      if (!tokenReview) {
        throw new Error('Token for review is required');
      }

      const bookingValidation = await this.reviewService.validateReviewToken(tokenReview);
      if (!bookingValidation) {
        throw new Error('No related booking found for the provided token');
      }

      const extractedData = await this.reviewService.extractReviewData(bookingValidation);
      if (!extractedData) {
        throw new Error('Failed to extract review data');
      }


      const newReview = await this.reviewService.createReview({
        tokenReview,
        review,
        reiting_score,
        ...extractedData,
      }, transaction);

      if (!newReview) {
        throw new Error('Failed to create review');
      }

      await this.bookingServise.setBookingAsReviewed(bookingValidation, transaction as Transaction);

      await transaction.commit();

      return {status: 'success', message: 'Review created successfully'};
    } catch (error) {
      console.log('error', error);
      await transaction.rollback();
      return {status: 'error', message: error.message};
    }
  }

  @post('/api/reviews/send-review-link')
  @response(200, {
    description: 'Send review link to customer',
    content: {'application/json': {schema: {message: 'string', status: 'string'}}},
  })
  async sendReviewLink(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              tokenReview: {type: 'string'},
            },
            required: ['tokenReview']
          },
        },
      },
    })
    reviewData: Partial<Review>,
  ) {
    try {
      console.log('reviewData', reviewData);
      const { tokenReview } = reviewData;
      if (!tokenReview) {
        throw new Error('Token for review is required');
      }
      await this.mailService.sendLeaveReviewEmail(tokenReview);

      return {status: 'success', message: 'Review link sent successfully'};
  } catch (error) {
    return {status: 'error', message: error.message};
  }
}
}
