import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Review} from '../models';
import {ApartmentRepository, ReviewRepository} from '../repositories';
import {AverageCountScoresReviews} from '../interfaces/expansionDefaultModel/Average(Count)Reviews';
import {calculateAverageRating} from '../services/reviews/calculateAverageRating.service';
import {service} from '@loopback/core';
import {BookingService, ReviewService} from '../services';
export class ReviewController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
    @repository(ApartmentRepository)
    public apartmentRepository: ApartmentRepository,
    @service(ReviewService) private reviewService: ReviewService,
    @service(BookingService) private bookingService: BookingService,
  ) {}

  @post('/api/reviews')
  @response(200, {
    description: 'Review model instance',
    content: {'application/json': {schema: getModelSchemaRef(Review)}},
  })
  async create(
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
      const tokenReview = reviewData.tokenReview;
      const reiting_score = reviewData.reiting_score;
      const {review} = reviewData;

      console.log('tokenReview', tokenReview);
      console.log('reviewData', reviewData);
      if (!tokenReview) {
        return {status: 'error', message: 'Token for review is required'};
      }
      // const listingId = review.listing_id;
      const bookingValidation =
        await this.reviewService.validateReviewToken(tokenReview);
      if (!bookingValidation) {
        throw new Error('No any related booking found');
      }
      // console.log('review', review);
      const extractedData =
        await this.reviewService.extractReviewData(bookingValidation);

      // if (bookingValidation.tokenReview !== tokenReview) {
      //   throw new Error('Invalid review token');
      // }
      console.log({
        tokenReview,
        review,
        reiting_score,
        ...extractedData,
      })
      const newReview = await this.reviewService.createReview({
        tokenReview,
        review,
        reiting_score,
        ...extractedData,
      });
      if (!extractedData) {
        throw new Error('New review is null or undefined');
      }
      console.log('newReview', newReview);

      // const reviewsForListing = await this.reviewRepository.find({
      //   where: {listing_id: listingId},
      // });
      // if (!reviewsForListing) {
      //   throw new Error('Reviews for listing are null or undefined');
      // }

      // TODO: if apartment does not exist, throw an error and delete review

      // const averageRating = calculateAverageRating(reviewsForListing);

      // await this.apartmentRepository
      //   .updateById(listingId, {
      //     review_scores_rating: averageRating,
      //     number_of_reviews: reviewsForListing.length,
      //   })
      //   .catch(error => {
      //     throw new Error(
      //       `Failed to update apartment with ID ${listingId}: ${error}`,
      //     );
      //   });

      return {status: 'success', message: 'Review created successfully'};
    } catch (error) {
      return {status: 'error', message: error.message};
    }
  }

  @get('/api/reviews/count')
  @response(200, {
    description: 'Review model count',
    content: {
      'application/json': {
        schema: CountSchema,
      },
    },
  })
  async count(
    @param.where(Review)
    where?: Where<Review> & {average?: boolean; listing_id?: number},
  ): Promise<AverageCountScoresReviews> {
    if (where && where.average) {
      const reviews = await this.reviewRepository.find();
      const averageRating = calculateAverageRating(reviews);
      return {count: reviews.length, average: averageRating};
    } else if (where && where.listing_id) {
      const reviews = await this.reviewRepository.find({
        where: {listing_id: where.listing_id},
      });
      const averageRating = calculateAverageRating(reviews);
      return {count: reviews.length, average: averageRating};
    }
    return this.reviewRepository.count(where);
  }

  @get('/api/reviews')
  @response(200, {
    description: 'Array of Review model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Review, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Review) filter?: Filter<Review>): Promise<Review[]> {
    if (!filter) {
      filter = {};
    }
    filter.order = filter.order || [];
    if (!Array.isArray(filter.order)) {
      filter.order = [filter.order];
    }
    filter.order.push('reviewDate DESC');
    try {
      return await this.reviewRepository.find(filter);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error in ReviewController.find: ${error.message}`);
      }
      throw error;
    }
  }

  @patch('/api/reviews')
  @response(200, {
    description: 'Review PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Review, {partial: true}),
        },
      },
    })
    review: Review,
    @param.where(Review) where?: Where<Review>,
  ): Promise<Count> {
    return this.reviewRepository.updateAll(review, where);
  }

  @get('/api/reviews/{id}')
  @response(200, {
    description: 'Review model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Review, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Review, {exclude: 'where'})
    filter?: FilterExcludingWhere<Review>,
  ): Promise<Review> {
    return this.reviewRepository.findById(id, filter);
  }

  @patch('/api/reviews/{id}')
  @response(204, {
    description: 'Review PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Review, {partial: true}),
        },
      },
    })
    review: Review,
  ): Promise<void> {
    await this.reviewRepository.updateById(id, review);
  }

  @put('/api/reviews/{id}')
  @response(204, {
    description: 'Review PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() review: Review,
  ): Promise<void> {
    await this.reviewRepository.replaceById(id, review);
  }

  @del('/api/reviews/{id}')
  @response(204, {
    description: 'Review DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reviewRepository.deleteById(id);
  }
}
