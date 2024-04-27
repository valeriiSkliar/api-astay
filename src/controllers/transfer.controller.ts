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
import {Transfer} from '../models';
import {TransferRepository} from '../repositories';

export class TransferController {
  constructor(
    @repository(TransferRepository)
    public transferRepository: TransferRepository,
  ) {}

  @post('/api/transfers')
  @response(200, {
    description: 'Transfer model instance',
    content: {'application/json': {schema: getModelSchemaRef(Transfer)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transfer, {
            title: 'NewTransfer',
            exclude: ['id'],
          }),
        },
      },
    })
    transfer: Omit<Transfer, 'id'>,
  ): Promise<Transfer> {
    // TODO: Check if customer email exists connected to this transfer to it
    // if customer is new create customer and connect to transfer

    return this.transferRepository.create(transfer);
  }

  @get('/api/transfers/count')
  @response(200, {
    description: 'Transfer model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Transfer) where?: Where<Transfer>): Promise<Count> {
    return this.transferRepository.count(where);
  }

  @get('/api/transfers')
  @response(200, {
    description: 'Array of Transfer model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Transfer, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Transfer) filter?: Filter<Transfer>,
  ): Promise<Transfer[]> {
    return this.transferRepository.find(filter);
  }

  @patch('/api/transfers')
  @response(200, {
    description: 'Transfer PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transfer, {partial: true}),
        },
      },
    })
    transfer: Transfer,
    @param.where(Transfer) where?: Where<Transfer>,
  ): Promise<Count> {
    return this.transferRepository.updateAll(transfer, where);
  }

  @get('/api/transfers/{id}')
  @response(200, {
    description: 'Transfer model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Transfer, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Transfer, {exclude: 'where'})
    filter?: FilterExcludingWhere<Transfer>,
  ): Promise<Transfer> {
    return this.transferRepository.findById(id, filter);
  }

  @patch('/api/transfers/{id}')
  @response(204, {
    description: 'Transfer PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transfer, {partial: true}),
        },
      },
    })
    transfer: Partial<Transfer>,
  ): Promise<void> {
    console.log('transfer', transfer);

    await this.transferRepository.updateById(id, transfer);
  }

  @put('/api/transfers/{id}')
  @response(204, {
    description: 'Transfer PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() transfer: Transfer,
  ): Promise<void> {
    await this.transferRepository.replaceById(id, transfer);
  }

  @del('/api/transfers/{id}')
  @response(204, {
    description: 'Transfer DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.transferRepository.deleteById(id);
  }
}
