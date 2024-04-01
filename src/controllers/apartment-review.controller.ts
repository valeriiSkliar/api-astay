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
import {Apartment, Review} from '../models';
import {ApartmentRepository} from '../repositories';

export class ApartmentReviewController {
  constructor(
    @repository(ApartmentRepository)
    protected apartmentRepository: ApartmentRepository,
  ) {}

  @get('/api/apartments/{id}/reviews', {
    responses: {
      '200': {
        description: 'Array of Apartment has many Review',
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
    return this.apartmentRepository.reviews(id).find(filter);
  }

  @post('/api/apartments/{id}/reviews', {
    responses: {
      '200': {
        description: 'Apartment model instance',
        content: {'application/json': {schema: getModelSchemaRef(Review)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Apartment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Review, {
            title: 'NewReviewInApartment',
            exclude: ['id'],
            optional: ['listing_id'],
          }),
        },
      },
    })
    review: Omit<Review, 'id'>,
  ): Promise<Review> {
    return this.apartmentRepository.reviews(id).create(review);
  }

  @patch('/api/apartments/{id}/reviews', {
    responses: {
      '200': {
        description: 'Apartment.Review PATCH success count',
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
    return this.apartmentRepository.reviews(id).patch(review, where);
  }

  @del('/api/apartments/{id}/reviews', {
    responses: {
      '200': {
        description: 'Apartment.Review DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Review))
    where?: Where<Review>,
  ): Promise<Count> {
    return this.apartmentRepository.reviews(id).delete(where);
  }
}
