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
import {ComplexService} from '../models';
import {ComplexServiceRepository} from '../repositories';

export class ComplexServiceController {
  constructor(
    @repository(ComplexServiceRepository)
    public complexServiceRepository : ComplexServiceRepository,
  ) {}

  @post('/api/complex-services')
  @response(200, {
    description: 'ComplexService model instance',
    content: {'application/json': {schema: getModelSchemaRef(ComplexService)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComplexService, {
            title: 'NewComplexService',
            exclude: ['id'],
          }),
        },
      },
    })
    complexService: Omit<ComplexService, 'id'>,
  ): Promise<ComplexService> {
    return this.complexServiceRepository.create(complexService);
  }

  @get('/api/complex-services/count')
  @response(200, {
    description: 'ComplexService model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ComplexService) where?: Where<ComplexService>,
  ): Promise<Count> {
    return this.complexServiceRepository.count(where);
  }

  @get('/api/complex-services')
  @response(200, {
    description: 'Array of ComplexService model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ComplexService, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ComplexService) filter?: Filter<ComplexService>,
  ): Promise<ComplexService[]> {
    return this.complexServiceRepository.find(filter);
  }

  @patch('/api/complex-services')
  @response(200, {
    description: 'ComplexService PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComplexService, {partial: true}),
        },
      },
    })
    complexService: ComplexService,
    @param.where(ComplexService) where?: Where<ComplexService>,
  ): Promise<Count> {
    return this.complexServiceRepository.updateAll(complexService, where);
  }

  @get('/api/complex-services/{id}')
  @response(200, {
    description: 'ComplexService model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ComplexService, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ComplexService, {exclude: 'where'}) filter?: FilterExcludingWhere<ComplexService>
  ): Promise<ComplexService> {
    return this.complexServiceRepository.findById(id, filter);
  }

  @patch('/api/complex-services/{id}')
  @response(204, {
    description: 'ComplexService PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ComplexService, {partial: true}),
        },
      },
    })
    complexService: ComplexService,
  ): Promise<void> {
    await this.complexServiceRepository.updateById(id, complexService);
  }

  @put('/api/complex-services/{id}')
  @response(204, {
    description: 'ComplexService PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() complexService: ComplexService,
  ): Promise<void> {
    await this.complexServiceRepository.replaceById(id, complexService);
  }

  @del('/api/complex-services/{id}')
  @response(204, {
    description: 'ComplexService DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.complexServiceRepository.deleteById(id);
  }
}
