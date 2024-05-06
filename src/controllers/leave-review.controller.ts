import { getModelSchemaRef, post, requestBody, response, HttpErrors } from '@loopback/rest';
import { Review } from '../models';
import { repository } from '@loopback/repository';
import { ReviewRepository } from '../repositories';
import { ReviewService } from '../services';
import { service } from '@loopback/core';

export class LeaveReviewController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
    @service(ReviewService) private reviewService: ReviewService,
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
    try {
      const { tokenReview, reiting_score, review } = reviewData;

      if (!tokenReview) {
        throw new HttpErrors.BadRequest('Token for review is required');
      }

      const bookingValidation = await this.reviewService.validateReviewToken(tokenReview);
      if (!bookingValidation) {
        throw new HttpErrors.NotFound('No related booking found for the provided token');
      }

      if (bookingValidation.tokenReview !== tokenReview) {
        throw new HttpErrors.Unauthorized('Invalid review token');
      }

      const extractedData = await this.reviewService.extractReviewData(bookingValidation);
      if (!extractedData) {
        throw new HttpErrors.InternalServerError('Failed to extract review data');
      }

      console.log('extractedData', {
        tokenReview,
        review,
        reiting_score,
        ...extractedData,
      });

      
      const newReview = await this.reviewService.createReview({
        tokenReview,
        review,
        reiting_score,
        ...extractedData,
      });

      console.log('newReview', newReview);

      return {status: 'success', message: 'Review created successfully'};
    } catch (error) {
      console.log('error', error);
      return {status: 'error', message: error.message};
    }
  }
}
