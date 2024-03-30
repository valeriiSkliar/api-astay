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
import {Apartment, Photo} from '../models';
import {ApartmentRepository} from '../repositories';

export class ApartmentPhotoController {
  constructor(
    @repository(ApartmentRepository)
    protected apartmentRepository: ApartmentRepository,
  ) {}

  @get('/api/apartments/{id}/photos', {
    responses: {
      '200': {
        description: 'Array of Apartment has many Photo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Photo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Photo>,
  ): Promise<Photo[]> {
    return this.apartmentRepository.images(id).find(filter);
  }

  @post('/api/apartments/{id}/photos', {
    responses: {
      '200': {
        description: 'Apartment model instance',
        content: {'application/json': {schema: getModelSchemaRef(Photo)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Apartment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Photo, {
            title: 'NewPhotoInApartment',
            exclude: ['id'],
            optional: ['apartment_id'],
          }),
        },
      },
    })
    photo: Omit<Photo, 'id'>,
  ): Promise<Photo> {
    return this.apartmentRepository.images(id).create(photo);
  }

  @patch('/api/apartments/{id}/photos', {
    responses: {
      '200': {
        description: 'Apartment.Photo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Photo, {partial: true}),
        },
      },
    })
    photo: Partial<Photo>,
    @param.query.object('where', getWhereSchemaFor(Photo)) where?: Where<Photo>,
  ): Promise<Count> {
    return this.apartmentRepository.images(id).patch(photo, where);
  }

  @del('/api/apartments/{id}/photos', {
    responses: {
      '200': {
        description: 'Apartment.Photo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Photo)) where?: Where<Photo>,
  ): Promise<Count> {
    return this.apartmentRepository.images(id).delete(where);
  }
}
