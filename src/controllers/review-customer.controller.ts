import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Review,
  Customer,
} from '../models';
import {ReviewRepository} from '../repositories';

export class ReviewCustomerController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
  ) { }

  @get('/reviews/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to Review',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Customer),
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Review.prototype.id,
  ): Promise<Customer> {
    return this.reviewRepository.customer(id);
  }
}
