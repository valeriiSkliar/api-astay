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
import {Locations, Complex} from '../models';
import {LocationsRepository} from '../repositories';

export class LocationsComplexController {
  constructor(
    @repository(LocationsRepository)
    protected locationsRepository: LocationsRepository,
  ) {}

  @get('/locations/{id}/complexes', {
    responses: {
      '200': {
        description: 'Array of Locations has many Complex',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Complex)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Complex>,
  ): Promise<Complex[]> {
    return this.locationsRepository.complexes(id).find(filter);
  }

  @post('/locations/{id}/complexes', {
    responses: {
      '200': {
        description: 'Locations model instance',
        content: {'application/json': {schema: getModelSchemaRef(Complex)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Locations.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Complex, {
            title: 'NewComplexInLocations',
            exclude: ['id'],
            optional: ['location_id'],
          }),
        },
      },
    })
    complex: Omit<Complex, 'id'>,
  ): Promise<Complex> {
    return this.locationsRepository.complexes(id).create(complex);
  }

  @patch('/locations/{id}/complexes', {
    responses: {
      '200': {
        description: 'Locations.Complex PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Complex, {partial: true}),
        },
      },
    })
    complex: Partial<Complex>,
    @param.query.object('where', getWhereSchemaFor(Complex))
    where?: Where<Complex>,
  ): Promise<Count> {
    return this.locationsRepository.complexes(id).patch(complex, where);
  }

  @del('/locations/{id}/complexes', {
    responses: {
      '200': {
        description: 'Locations.Complex DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Complex))
    where?: Where<Complex>,
  ): Promise<Count> {
    return this.locationsRepository.complexes(id).delete(where);
  }
}
