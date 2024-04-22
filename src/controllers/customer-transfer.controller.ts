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
import {
  Customer,
  Transfer,
} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomerTransferController {
  constructor(
    @repository(CustomerRepository) protected customerRepository: CustomerRepository,
  ) { }

  @get('/customers/{id}/transfers', {
    responses: {
      '200': {
        description: 'Array of Customer has many Transfer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Transfer)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Transfer>,
  ): Promise<Transfer[]> {
    return this.customerRepository.transfers(id).find(filter);
  }

  @post('/customers/{id}/transfers', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transfer)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transfer, {
            title: 'NewTransferInCustomer',
            exclude: ['id'],
            optional: ['customerId']
          }),
        },
      },
    }) transfer: Omit<Transfer, 'id'>,
  ): Promise<Transfer> {
    return this.customerRepository.transfers(id).create(transfer);
  }

  @patch('/customers/{id}/transfers', {
    responses: {
      '200': {
        description: 'Customer.Transfer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transfer, {partial: true}),
        },
      },
    })
    transfer: Partial<Transfer>,
    @param.query.object('where', getWhereSchemaFor(Transfer)) where?: Where<Transfer>,
  ): Promise<Count> {
    return this.customerRepository.transfers(id).patch(transfer, where);
  }

  @del('/customers/{id}/transfers', {
    responses: {
      '200': {
        description: 'Customer.Transfer DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Transfer)) where?: Where<Transfer>,
  ): Promise<Count> {
    return this.customerRepository.transfers(id).delete(where);
  }
}
