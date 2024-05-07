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
import {Booking, Review} from '../models';
import {ApartmentRepository, ReviewRepository} from '../repositories';
import {AverageCountScoresReviews} from '../interfaces/expansionDefaultModel/Average(Count)Reviews';
import {calculateAverageRating} from '../services/reviews/calculateAverageRating.service';
import {service} from '@loopback/core';
import {BookingService, ReviewService} from '../services';
import {authenticate} from '@loopback/authentication';
import {BookingResponse} from '../types';
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
            exclude: ['id'],
          }),
        },
      },
    })
    review: Omit<Review, 'id'>,
  ): Promise<{status: string; message: string, data: Review | null}> {
    try {
      const newReview = await this.reviewRepository.create(review);
      return {status: 'success', message: 'Review created successfully', data: newReview};
    } catch (error) {
      return {status: 'error', message: error.message, data: null};
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
      const whereObj: Where<Review> = {
        average: true,
        status: true,
        isArchived: false,
        listing_id: where.listing_id,
      };
      const reviews = await this.reviewRepository.find(whereObj);
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
    console.log('filter', filter);
    if (!filter) {
      filter = {};
    }
    filter.order = filter.order || [];
    if (!Array.isArray(filter.order)) {
      filter.order = [filter.order];
    }
    filter.order.push('reviewDate DESC');
    console.log('filter', filter);
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
    console.log('review', review);
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

  @post('/api/reviews/validate-token')
  @response(200, {
    description: 'Validate booking token',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Booking, {includeRelations: true}),
      },
    },
  })
  async validateReviewToken(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {partial: true}),
        },
      },
    })
    body: Partial<Booking>,
  ): Promise<{
    status: string;
    data: Partial<Booking> | null | BookingResponse;
    message: string;
  }> {
    const token = body.tokenReview;
    if (!token) {
      return {
        status: 'error',
        message:
          'No any review token in request. Token is required to proceed.',
        data: null,
      };
    }
    try {
      const booking = await this.reviewService.validateReviewToken(token);

      // const {apartment, customer, id, name, email, ...rest} = booking;

      return {
        message: 'Review token is valid',
        status: 'success',
        data: [],
      };
    } catch (error) {
      return {message: error.message, status: 'error', data: null};
    }
  }

}
