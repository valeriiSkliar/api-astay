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
import {Locations} from '../models';
import {LocationsRepository} from '../repositories';

export class LocationController {
  constructor(
    @repository(LocationsRepository)
    public locationsRepository: LocationsRepository,
  ) {}

  @post('/api/locations')
  @response(200, {
    description: 'Locations model instance',
    content: {'application/json': {schema: getModelSchemaRef(Locations)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Locations, {
            title: 'NewLocations',
            exclude: ['id'],
          }),
        },
      },
    })
    locations: Omit<Locations, 'id'>,
  ): Promise<Locations> {
    return this.locationsRepository.create(locations);
  }

  @get('/api/locations/count')
  @response(200, {
    description: 'Locations model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Locations) where?: Where<Locations>,
  ): Promise<Count> {
    return this.locationsRepository.count(where);
  }

  @get('/api/locations')
  @response(200, {
    description: 'Array of Locations model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Locations, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Locations) filter?: Filter<Locations>,
  ): Promise<Locations[]> {
    return this.locationsRepository.find(filter);
  }

  @patch('/api/locations')
  @response(200, {
    description: 'Locations PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Locations, {partial: true}),
        },
      },
    })
    locations: Locations,
    @param.where(Locations) where?: Where<Locations>,
  ): Promise<Count> {
    return this.locationsRepository.updateAll(locations, where);
  }

  @get('/api/locations/{id}')
  @response(200, {
    description: 'Locations model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Locations, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Locations, {exclude: 'where'})
    filter?: FilterExcludingWhere<Locations>,
  ): Promise<Locations> {
    return this.locationsRepository.findById(id, filter);
  }

  @patch('/api/locations/{id}')
  @response(204, {
    description: 'Locations PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Locations, {partial: true}),
        },
      },
    })
    locations: Locations,
  ): Promise<void> {
    await this.locationsRepository.updateById(id, locations);
  }

  @put('/api/locations/{id}')
  @response(204, {
    description: 'Locations PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() locations: Locations,
  ): Promise<void> {
    await this.locationsRepository.replaceById(id, locations);
  }

  @del('/api/locations/{id}')
  @response(204, {
    description: 'Locations DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.locationsRepository.deleteById(id);
  }
}
