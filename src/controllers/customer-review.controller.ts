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
import {
  Customer,
  Review,
} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomerReviewController {
  constructor(
    @repository(CustomerRepository) protected customerRepository: CustomerRepository,
  ) { }

  @get('/customers/{id}/reviews', {
    responses: {
      '200': {
        description: 'Array of Customer has many Review',
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
    return this.customerRepository.reviews(id).find(filter);
  }

  @post('/customers/{id}/reviews', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {schema: getModelSchemaRef(Review)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Review, {
            title: 'NewReviewInCustomer',
            exclude: ['id'],
            optional: ['customerId']
          }),
        },
      },
    }) review: Omit<Review, 'id'>,
  ): Promise<Review> {
    return this.customerRepository.reviews(id).create(review);
  }

  @patch('/customers/{id}/reviews', {
    responses: {
      '200': {
        description: 'Customer.Review PATCH success count',
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
    @param.query.object('where', getWhereSchemaFor(Review)) where?: Where<Review>,
  ): Promise<Count> {
    return this.customerRepository.reviews(id).patch(review, where);
  }

  @del('/customers/{id}/reviews', {
    responses: {
      '200': {
        description: 'Customer.Review DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Review)) where?: Where<Review>,
  ): Promise<Count> {
    return this.customerRepository.reviews(id).delete(where);
  }
}
