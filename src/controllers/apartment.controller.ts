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

const cloger = () => {
  let  counter = 0;
  return () => {
     counter += 1;
     console.log(counter);
  };
};
const requestCounter = cloger();
export class ApartmentController {
  constructor(
    @repository(ApartmentRepository)
    public apartmentRepository: ApartmentRepository,
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
          data: {
            schema: getModelSchemaRef(Apartment, {
              title: 'NewApartment',
            exclude: ['id'],
            }),
          }
        },
      },
    })
    {data}: Omit<Apartment, 'id'>,
  ): Promise<Apartment> {
    console.log(data);
    return this.apartmentRepository.create(data);
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
    @param.array('location', 'query', {type: 'string'}) location: string[] = [],
  ): Promise<Apartment[]> {
    requestCounter()
    if (location.length > 0) {
      filter = {
        where: {
          location_id: 1,
        },
      };
    }
    // console.log(filter);
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
    @param.path.number('id') id: number,
    @param.filter(Apartment, {exclude: 'where'})
    filter?: FilterExcludingWhere<Apartment>,
  ): Promise<Apartment> {
    console.log(filter);
    return this.apartmentRepository.findById(id, filter);
  }

  @patch('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
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
    @param.path.number('id') id: number,
    @requestBody() apartment: Apartment,
  ): Promise<void> {
    await this.apartmentRepository.replaceById(id, apartment);
  }

  @del('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.apartmentRepository.deleteById(id);
  }
}
