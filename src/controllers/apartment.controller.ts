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
import {Apartment} from '../models';
import {ApartmentRepository} from '../repositories';

export class ApartmentController {
  constructor(
    @repository(ApartmentRepository)
    public apartmentRepository : ApartmentRepository,
  ) {}

  @post('/api/apartments')
  @response(200, {
    description: 'Apartment model instance',
    content: {'application/json': {schema: getModelSchemaRef(Apartment)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartment, {
            title: 'NewApartment',
            exclude: ['id'],
          }),
        },
      },
    })
    apartment: Omit<Apartment, 'id'>,
  ): Promise<Apartment> {
    return this.apartmentRepository.create(apartment);
  }

  @get('/api/apartments/count')
  @response(200, {
    description: 'Apartment model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Apartment) where?: Where<Apartment>,
  ): Promise<Count> {
    return this.apartmentRepository.count(where);
  }

  @get('/api/apartments')
  @response(200, {
    description: 'Array of Apartment model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Apartment, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Apartment) filter?: Filter<Apartment>,
  ): Promise<Apartment[]> {
    return this.apartmentRepository.find(filter);
  }

  @patch('/api/apartments')
  @response(200, {
    description: 'Apartment PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartment, {partial: true}),
        },
      },
    })
    apartment: Apartment,
    @param.where(Apartment) where?: Where<Apartment>,
  ): Promise<Count> {
    return this.apartmentRepository.updateAll(apartment, where);
  }

  @get('/api/apartments/{id}')
  @response(200, {
    description: 'Apartment model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Apartment, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Apartment, {exclude: 'where'}) filter?: FilterExcludingWhere<Apartment>
  ): Promise<Apartment> {
    return this.apartmentRepository.findById(id, filter);
  }

  @patch('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartment, {partial: true}),
        },
      },
    })
    apartment: Apartment,
  ): Promise<void> {
    await this.apartmentRepository.updateById(id, apartment);
  }

  @put('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() apartment: Apartment,
  ): Promise<void> {
    await this.apartmentRepository.replaceById(id, apartment);
  }

  @del('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.apartmentRepository.deleteById(id);
  }
}
