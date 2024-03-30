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
import {Complex} from '../models';
import {ComplexRepository} from '../repositories';

export class ComplexController {
  constructor(
    @repository(ComplexRepository)
    public complexRepository: ComplexRepository,
  ) {}

  @post('/api/complexes')
  @response(200, {
    description: 'Complex model instance',
    content: {'application/json': {schema: getModelSchemaRef(Complex)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Complex, {
            title: 'NewComplex',
            exclude: ['id'],
          }),
        },
      },
    })
    complex: Omit<Complex, 'id'>,
  ): Promise<Complex> {
    return this.complexRepository.create(complex);
  }

  @get('/api/complexes/count')
  @response(200, {
    description: 'Complex model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Complex) where?: Where<Complex>): Promise<Count> {
    return this.complexRepository.count(where);
  }

  @get('/api/complexes')
  @response(200, {
    description: 'Array of Complex model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Complex, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Complex) filter?: Filter<Complex>,
  ): Promise<Complex[]> {
    return this.complexRepository.find(filter);
  }

  @patch('/api/complexes')
  @response(200, {
    description: 'Complex PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Complex, {partial: true}),
        },
      },
    })
    complex: Complex,
    @param.where(Complex) where?: Where<Complex>,
  ): Promise<Count> {
    return this.complexRepository.updateAll(complex, where);
  }

  @get('/api/complexes/{id}')
  @response(200, {
    description: 'Complex model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Complex, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Complex, {exclude: 'where'})
    filter?: FilterExcludingWhere<Complex>,
  ): Promise<Complex> {
    return this.complexRepository.findById(id, filter);
  }

  @patch('/api/complexes/{id}')
  @response(204, {
    description: 'Complex PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Complex, {partial: true}),
        },
      },
    })
    complex: Complex,
  ): Promise<void> {
    await this.complexRepository.updateById(id, complex);
  }

  @put('/api/complexes/{id}')
  @response(204, {
    description: 'Complex PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() complex: Complex,
  ): Promise<void> {
    await this.complexRepository.replaceById(id, complex);
  }

  @del('/api/complexes/{id}')
  @response(204, {
    description: 'Complex DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.complexRepository.deleteById(id);
  }
}
