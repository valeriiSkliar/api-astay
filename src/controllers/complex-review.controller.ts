import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Complex, Review} from '../models';
import {ComplexRepository} from '../repositories';

export class ComplexReviewController {
  constructor(
    @repository(ComplexRepository)
    protected complexRepository: ComplexRepository,
  ) {}

  @get('/complexes/{id}/reviews', {
    responses: {
      '200': {
        description: 'Array of Complex has many Review',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Review)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Review>,
  ): Promise<Review[]> {
    return this.complexRepository.reviews(id).find(filter);
  }

  @post('/complexes/{id}/reviews', {
    responses: {
      '200': {
        description: 'Complex model instance',
        content: {'application/json': {schema: getModelSchemaRef(Review)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Complex.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Review, {
            title: 'NewReviewInComplex',
            exclude: ['id'],
            optional: ['complex_id'],
          }),
        },
      },
    })
    review: Omit<Review, 'id'>,
  ): Promise<Review> {
    return this.complexRepository.reviews(id).create(review);
  }

  @patch('/complexes/{id}/reviews', {
    responses: {
      '200': {
        description: 'Complex.Review PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Review, {partial: true}),
        },
      },
    })
    review: Partial<Review>,
    @param.query.object('where', getWhereSchemaFor(Review))
    where?: Where<Review>,
  ): Promise<Count> {
    return this.complexRepository.reviews(id).patch(review, where);
  }

  @del('/complexes/{id}/reviews', {
    responses: {
      '200': {
        description: 'Complex.Review DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Review))
    where?: Where<Review>,
  ): Promise<Count> {
    return this.complexRepository.reviews(id).delete(where);
  }
}
