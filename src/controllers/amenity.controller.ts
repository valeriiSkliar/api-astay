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
import {Amenity} from '../models';
import {AmenityRepository} from '../repositories';

export class AmenityController {
  constructor(
    @repository(AmenityRepository)
    public amenityRepository: AmenityRepository,
  ) {}

  @post('/api/amenities')
  @response(200, {
    description: 'Amenity model instance',
    content: {'application/json': {schema: getModelSchemaRef(Amenity)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amenity, {
            title: 'NewAmenity',
            exclude: ['id'],
          }),
        },
      },
    })
    amenity: Omit<Amenity, 'id'>,
  ): Promise<Amenity> {
    return this.amenityRepository.create(amenity);
  }

  @get('/api/amenities/count')
  @response(200, {
    description: 'Amenity model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Amenity) where?: Where<Amenity>): Promise<Count> {
    return this.amenityRepository.count(where);
  }

  @get('/api/amenities')
  @response(200, {
    description: 'Array of Amenity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Amenity, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Amenity) filter?: Filter<Amenity>,
  ): Promise<Amenity[]> {
    return this.amenityRepository.find(filter);
  }

  @patch('/api/amenities')
  @response(200, {
    description: 'Amenity PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amenity, {partial: true}),
        },
      },
    })
    amenity: Amenity,
    @param.where(Amenity) where?: Where<Amenity>,
  ): Promise<Count> {
    return this.amenityRepository.updateAll(amenity, where);
  }

  @get('/api/amenities/{id}')
  @response(200, {
    description: 'Amenity model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Amenity, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Amenity, {exclude: 'where'})
    filter?: FilterExcludingWhere<Amenity>,
  ): Promise<Amenity> {
    return this.amenityRepository.findById(id, filter);
  }

  @patch('/api/amenities/{id}')
  @response(204, {
    description: 'Amenity PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Amenity, {partial: true}),
        },
      },
    })
    amenity: Amenity,
  ): Promise<void> {
    await this.amenityRepository.updateById(id, amenity);
  }

  @put('/api/amenities/{id}')
  @response(204, {
    description: 'Amenity PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() amenity: Amenity,
  ): Promise<void> {
    await this.amenityRepository.replaceById(id, amenity);
  }

  @del('/api/amenities/{id}')
  @response(204, {
    description: 'Amenity DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.amenityRepository.deleteById(id);
  }
}
