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
import {ApartmentCategoty} from '../models';
import {ApartmentCategotyRepository} from '../repositories';

export class ApartmentCategoryController {
  constructor(
    @repository(ApartmentCategotyRepository)
    public apartmentCategotyRepository : ApartmentCategotyRepository,
  ) {}

  @post('/apartment-categories')
  @response(200, {
    description: 'ApartmentCategoty model instance',
    content: {'application/json': {schema: getModelSchemaRef(ApartmentCategoty)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApartmentCategoty, {
            title: 'NewApartmentCategoty',
            exclude: ['id'],
          }),
        },
      },
    })
    apartmentCategoty: Omit<ApartmentCategoty, 'id'>,
  ): Promise<ApartmentCategoty> {
    return this.apartmentCategotyRepository.create(apartmentCategoty);
  }

  @get('/apartment-categories/count')
  @response(200, {
    description: 'ApartmentCategoty model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ApartmentCategoty) where?: Where<ApartmentCategoty>,
  ): Promise<Count> {
    return this.apartmentCategotyRepository.count(where);
  }

  @get('/apartment-categories')
  @response(200, {
    description: 'Array of ApartmentCategoty model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ApartmentCategoty, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ApartmentCategoty) filter?: Filter<ApartmentCategoty>,
  ): Promise<ApartmentCategoty[]> {
    return this.apartmentCategotyRepository.find(filter);
  }

  @patch('/apartment-categories')
  @response(200, {
    description: 'ApartmentCategoty PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApartmentCategoty, {partial: true}),
        },
      },
    })
    apartmentCategoty: ApartmentCategoty,
    @param.where(ApartmentCategoty) where?: Where<ApartmentCategoty>,
  ): Promise<Count> {
    return this.apartmentCategotyRepository.updateAll(apartmentCategoty, where);
  }

  @get('/apartment-categories/{id}')
  @response(200, {
    description: 'ApartmentCategoty model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ApartmentCategoty, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ApartmentCategoty, {exclude: 'where'}) filter?: FilterExcludingWhere<ApartmentCategoty>
  ): Promise<ApartmentCategoty> {
    return this.apartmentCategotyRepository.findById(id, filter);
  }

  @patch('/apartment-categories/{id}')
  @response(204, {
    description: 'ApartmentCategoty PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApartmentCategoty, {partial: true}),
        },
      },
    })
    apartmentCategoty: ApartmentCategoty,
  ): Promise<void> {
    await this.apartmentCategotyRepository.updateById(id, apartmentCategoty);
  }

  @put('/apartment-categories/{id}')
  @response(204, {
    description: 'ApartmentCategoty PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() apartmentCategoty: ApartmentCategoty,
  ): Promise<void> {
    await this.apartmentCategotyRepository.replaceById(id, apartmentCategoty);
  }

  @del('/apartment-categories/{id}')
  @response(204, {
    description: 'ApartmentCategoty DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.apartmentCategotyRepository.deleteById(id);
  }
}
