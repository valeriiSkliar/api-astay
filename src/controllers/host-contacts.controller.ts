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
import {HostContacts} from '../models';
import {HostContactsRepository} from '../repositories';

export class HostContactsController {
  constructor(
    @repository(HostContactsRepository)
    public hostContactsRepository: HostContactsRepository,
  ) {}

  @post('/api/host-contacts')
  @response(200, {
    description: 'HostContacts model instance',
    content: {'application/json': {schema: getModelSchemaRef(HostContacts)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HostContacts, {
            title: 'NewHostContacts',
            exclude: ['id'],
          }),
        },
      },
    })
    hostContacts: Omit<HostContacts, 'id'>,
  ): Promise<HostContacts> {
    return this.hostContactsRepository.create(hostContacts);
  }

  @get('/api/host-contacts/count')
  @response(200, {
    description: 'HostContacts model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(HostContacts) where?: Where<HostContacts>,
  ): Promise<Count> {
    return this.hostContactsRepository.count(where);
  }

  @get('/api/host-contacts')
  @response(200, {
    description: 'Array of HostContacts model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(HostContacts, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(HostContacts) filter?: Filter<HostContacts>,
  ): Promise<HostContacts[]> {
    return this.hostContactsRepository.find(filter);
  }

  @patch('/api/host-contacts')
  @response(200, {
    description: 'HostContacts PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HostContacts, {partial: true}),
        },
      },
    })
    hostContacts: HostContacts,
    @param.where(HostContacts) where?: Where<HostContacts>,
  ): Promise<Count> {
    return this.hostContactsRepository.updateAll(hostContacts, where);
  }

  @get('/api/host-contacts/{id}')
  @response(200, {
    description: 'HostContacts model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(HostContacts, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HostContacts, {exclude: 'where'})
    filter?: FilterExcludingWhere<HostContacts>,
  ): Promise<HostContacts> {
    return this.hostContactsRepository.findById(id, filter);
  }

  @patch('/api/host-contacts/{id}')
  @response(204, {
    description: 'HostContacts PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HostContacts, {partial: true}),
        },
      },
    })
    hostContacts: HostContacts,
  ): Promise<void> {
    await this.hostContactsRepository.updateById(id, hostContacts);
  }

  @put('/api/host-contacts/{id}')
  @response(204, {
    description: 'HostContacts PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() hostContacts: HostContacts,
  ): Promise<void> {
    await this.hostContactsRepository.replaceById(id, hostContacts);
  }

  @del('/api/host-contacts/{id}')
  @response(204, {
    description: 'HostContacts DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.hostContactsRepository.deleteById(id);
  }
}
