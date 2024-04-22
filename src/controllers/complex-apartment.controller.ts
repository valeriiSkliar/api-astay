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
import {Complex, Apartment} from '../models';
import {ComplexRepository} from '../repositories';

export class ComplexApartmentController {
  constructor(
    @repository(ComplexRepository)
    protected complexRepository: ComplexRepository,
  ) {}

  @get('/api/complexes/{id}/apartments', {
    responses: {
      '200': {
        description: 'Array of Complex has many Apartment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Apartment)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Apartment>,
  ): Promise<Apartment[]> {
    return this.complexRepository.apartments(id).find(filter);
  }

  @post('/api/complexes/{id}/apartments', {
    responses: {
      '200': {
        description: 'Complex model instance',
        content: {'application/json': {schema: getModelSchemaRef(Apartment)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Complex.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartment, {
            title: 'NewApartmentInComplex',
            exclude: ['id'],
            optional: ['complex_id'],
          }),
        },
      },
    })
    apartment: Omit<Apartment, 'id'>,
  ): Promise<Apartment> {
    return this.complexRepository.apartments(id).create(apartment);
  }

  @patch('/api/complexes/{id}/apartments', {
    responses: {
      '200': {
        description: 'Complex.Apartment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartment, {partial: true}),
        },
      },
    })
    apartment: Partial<Apartment>,
    @param.query.object('where', getWhereSchemaFor(Apartment))
    where?: Where<Apartment>,
  ): Promise<Count> {
    return this.complexRepository.apartments(id).patch(apartment, where);
  }

  @del('/api/complexes/{id}/apartments', {
    responses: {
      '200': {
        description: 'Complex.Apartment DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Apartment))
    where?: Where<Apartment>,
  ): Promise<Count> {
    if (where && 'id' in where) {
      where = {id: where.id};
    }
    return this.complexRepository.apartments(id).delete(where);
  }
}
