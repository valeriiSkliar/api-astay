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
import {Customer, Booking} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomerBookingController {
  constructor(
    @repository(CustomerRepository)
    protected customerRepository: CustomerRepository,
  ) {}

  @get('/customers/{id}/bookings', {
    responses: {
      '200': {
        description: 'Array of Customer has many Booking',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Booking)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Booking>,
  ): Promise<Booking[]> {
    return this.customerRepository.bookings(id).find(filter);
  }

  @post('/customers/{id}/bookings', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {schema: getModelSchemaRef(Booking)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {
            title: 'NewBookingInCustomer',
            exclude: ['id'],
            optional: ['customerId'],
          }),
        },
      },
    })
    booking: Omit<Booking, 'id'>,
  ): Promise<Booking> {
    return this.customerRepository.bookings(id).create(booking);
  }

  @patch('/customers/{id}/bookings', {
    responses: {
      '200': {
        description: 'Customer.Booking PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {partial: true}),
        },
      },
    })
    booking: Partial<Booking>,
    @param.query.object('where', getWhereSchemaFor(Booking))
    where?: Where<Booking>,
  ): Promise<Count> {
    return this.customerRepository.bookings(id).patch(booking, where);
  }

  @del('/customers/{id}/bookings', {
    responses: {
      '200': {
        description: 'Customer.Booking DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Booking))
    where?: Where<Booking>,
  ): Promise<Count> {
    return this.customerRepository.bookings(id).delete(where);
  }
}
