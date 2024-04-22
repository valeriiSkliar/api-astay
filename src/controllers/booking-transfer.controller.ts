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
  Booking,
  Transfer,
} from '../models';
import {BookingRepository} from '../repositories';

export class BookingTransferController {
  constructor(
    @repository(BookingRepository) protected bookingRepository: BookingRepository,
  ) { }

  @get('/bookings/{id}/transfers', {
    responses: {
      '200': {
        description: 'Array of Booking has many Transfer',
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
    return this.bookingRepository.transfers(id).find(filter);
  }

  @post('/bookings/{id}/transfers', {
    responses: {
      '200': {
        description: 'Booking model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transfer)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Booking.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transfer, {
            title: 'NewTransferInBooking',
            exclude: ['id'],
            optional: ['bookingId']
          }),
        },
      },
    }) transfer: Omit<Transfer, 'id'>,
  ): Promise<Transfer> {
    return this.bookingRepository.transfers(id).create(transfer);
  }

  @patch('/bookings/{id}/transfers', {
    responses: {
      '200': {
        description: 'Booking.Transfer PATCH success count',
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
    return this.bookingRepository.transfers(id).patch(transfer, where);
  }

  @del('/bookings/{id}/transfers', {
    responses: {
      '200': {
        description: 'Booking.Transfer DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Transfer)) where?: Where<Transfer>,
  ): Promise<Count> {
    return this.bookingRepository.transfers(id).delete(where);
  }
}
