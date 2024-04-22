import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Transfer,
  Customer,
} from '../models';
import {TransferRepository} from '../repositories';

export class TransferCustomerController {
  constructor(
    @repository(TransferRepository)
    public transferRepository: TransferRepository,
  ) { }

  @get('/transfers/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to Transfer',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Customer),
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Transfer.prototype.id,
  ): Promise<Customer> {
    return this.transferRepository.customer(id);
  }
}
