import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Booking,
  Customer,
} from '../models';
import {BookingRepository} from '../repositories';

export class BookingCustomerController {
  constructor(
    @repository(BookingRepository)
    public bookingRepository: BookingRepository,
  ) { }

  @get('/bookings/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to Booking',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Customer),
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof Booking.prototype.id,
  ): Promise<Customer> {
    return this.bookingRepository.customer(id);
  }
}
