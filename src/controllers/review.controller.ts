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
import {ReviewRepository} from '../repositories';
import {AverageCountReviews} from '../interfaces/expansionDefaultModel/Average(Count)Reviews';

export class ReviewController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
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
            title: 'NewReview',
            exclude: ['id'],
          }),
        },
      },
    })
    review: Omit<Review, 'id'>,
  ): Promise<Review> {
    return this.reviewRepository.create(review);
  }
  @get('/api/reviews/count')
  @response(200, {
    description: 'Review model count',
    content: {'application/json': {
      schema: CountSchema
    }},
  })
  async count(@param.where(Review) where?: Where<Review> & { average?: boolean }): Promise<AverageCountReviews> {
    if (where && where.average) {
      const reviews = await this.reviewRepository.find();
      const totalRating = reviews.reduce((sum, review) => {
        console.log('sum', sum, ' review.reiting_score', review.reiting_score);
        return sum + review.reiting_score;
      }, 0);
      const averageRating = totalRating / reviews.length;
      console.log('totalRating', totalRating, ' reviews.length', reviews.length, ' averageRating', averageRating);
      return { count: reviews.length, average: averageRating } ;
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
    return this.reviewRepository.find(filter);
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
