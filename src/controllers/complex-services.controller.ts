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
import {ComplexServices} from '../models';
import {ComplexServicesRepository} from '../repositories';

export class ComplexServicesController {
  constructor(
    @repository(ComplexServicesRepository)
    public complexServicesRepository : ComplexServicesRepository,
  ) {}

  @post('/complex-services')
  @response(200, {
    description: 'ComplexServices model instance',
    content: {'application/json': {schema: getModelSchemaRef(ComplexServices)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComplexServices, {
            title: 'NewComplexServices',
            exclude: ['id'],
          }),
        },
      },
    })
    complexServices: Omit<ComplexServices, 'id'>,
  ): Promise<ComplexServices> {
    return this.complexServicesRepository.create(complexServices);
  }

  @get('/complex-services/count')
  @response(200, {
    description: 'ComplexServices model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ComplexServices) where?: Where<ComplexServices>,
  ): Promise<Count> {
    return this.complexServicesRepository.count(where);
  }

  @get('/complex-services')
  @response(200, {
    description: 'Array of ComplexServices model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ComplexServices, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ComplexServices) filter?: Filter<ComplexServices>,
  ): Promise<ComplexServices[]> {
    return this.complexServicesRepository.find(filter);
  }

  @patch('/complex-services')
  @response(200, {
    description: 'ComplexServices PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComplexServices, {partial: true}),
        },
      },
    })
    complexServices: ComplexServices,
    @param.where(ComplexServices) where?: Where<ComplexServices>,
  ): Promise<Count> {
    return this.complexServicesRepository.updateAll(complexServices, where);
  }

  @get('/complex-services/{id}')
  @response(200, {
    description: 'ComplexServices model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ComplexServices, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ComplexServices, {exclude: 'where'}) filter?: FilterExcludingWhere<ComplexServices>
  ): Promise<ComplexServices> {
    return this.complexServicesRepository.findById(id, filter);
  }

  @patch('/complex-services/{id}')
  @response(204, {
    description: 'ComplexServices PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComplexServices, {partial: true}),
        },
      },
    })
    complexServices: ComplexServices,
  ): Promise<void> {
    await this.complexServicesRepository.updateById(id, complexServices);
  }

  @put('/complex-services/{id}')
  @response(204, {
    description: 'ComplexServices PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() complexServices: ComplexServices,
  ): Promise<void> {
    await this.complexServicesRepository.replaceById(id, complexServices);
  }

  @del('/complex-services/{id}')
  @response(204, {
    description: 'ComplexServices DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.complexServicesRepository.deleteById(id);
  }
}
