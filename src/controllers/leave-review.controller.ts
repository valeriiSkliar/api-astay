// Uncomment these imports to begin using these cool features!

import {getModelSchemaRef, post, requestBody, response} from '@loopback/rest';
import {Review} from '../models';
import {repository} from '@loopback/repository';
import {ReviewRepository} from '../repositories';
import {ReviewService} from '../services';
import {service} from '@loopback/core';

// import {inject} from '@loopback/core';


export class LeaveReviewController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
    @service(ReviewService) private reviewService: ReviewService,
  ) {}

  @post('/api/reviews/leave-review')
  @response(200, {
    description: 'Review model instance',
    content: {'application/json': {schema: {
      message: 'string',
      status: 'string',
    }},
    },
  })
  async leaveReview(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Review, {
            exclude: ['id', 'avatar', 'roomType', 'name', 'reiting_score'],
          }),
        },
      },
    })
    reviewData: Omit<Review, 'id'>,
  ): Promise<{status: string; message: string}> {
    try {
    //   const tokenReview = reviewData.tokenReview;
    //   const reiting_score = reviewData.reiting_score;
    //   const {review} = reviewData;

    //   if (!tokenReview) {
    //     return {status: 'error', message: 'Token for review is required'};
    //   }
    //   const bookingValidation =
    //     await this.reviewService.validateReviewToken(tokenReview);
    //   if (!bookingValidation) {
    //     throw new Error('No any related booking found');
    //   }
    //   const extractedData =
    //     await this.reviewService.extractReviewData(bookingValidation);

    //   if (bookingValidation.tokenReview !== tokenReview) {
    //     throw new Error('Invalid review token');
    //   }
    //   if (!extractedData) {
    //     throw new Error('Null or undefined data in review');
    //   }

    //   const newReview = await this.reviewService.createReview({
    //     tokenReview,
    //     review,
    //     reiting_score,
    //     ...extractedData,
    //   });

    //   console.log('newReview', newReview);

      return {status: 'success - test', message: 'Review created successfully'};
    } catch (error) {
      return {status: 'error', message: error.message};
    }
  }
}
