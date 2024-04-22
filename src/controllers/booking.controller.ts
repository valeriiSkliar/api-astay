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
import {Booking} from '../models';
import {BookingRepository} from '../repositories';

export class BookingController {
  constructor(
    @repository(BookingRepository)
    public bookingRepository : BookingRepository,
  ) {}

  @post('/api/bookings')
  @response(200, {
    description: 'Booking model instance',
    content: {'application/json': {schema: getModelSchemaRef(Booking)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {
            title: 'NewBooking',
            exclude: ['id'],
          }),
        },
      },
    })
    booking: Omit<Booking, 'id'>,
  ): Promise<Booking> {
    return this.bookingRepository.create(booking);
  }

  @get('/api/bookings/count')
  @response(200, {
    description: 'Booking model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Booking) where?: Where<Booking>,
  ): Promise<Count> {
    return this.bookingRepository.count(where);
  }

  @get('/api/bookings')
  @response(200, {
    description: 'Array of Booking model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Booking, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Booking) filter?: Filter<Booking>,
  ): Promise<Booking[]> {
    return this.bookingRepository.find(filter);
  }

  @patch('/api/bookings')
  @response(200, {
    description: 'Booking PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {partial: true}),
        },
      },
    })
    booking: Booking,
    @param.where(Booking) where?: Where<Booking>,
  ): Promise<Count> {
    return this.bookingRepository.updateAll(booking, where);
  }

  @get('/api/bookings/{id}')
  @response(200, {
    description: 'Booking model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Booking, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Booking, {exclude: 'where'}) filter?: FilterExcludingWhere<Booking>
  ): Promise<Booking> {
    return this.bookingRepository.findById(id, filter);
  }

  @patch('/api/bookings/{id}')
  @response(204, {
    description: 'Booking PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {partial: true}),
        },
      },
    })
    booking: Booking,
  ): Promise<void> {
    await this.bookingRepository.updateById(id, booking);
  }

  @put('/api/bookings/{id}')
  @response(204, {
    description: 'Booking PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() booking: Booking,
  ): Promise<void> {
    await this.bookingRepository.replaceById(id, booking);
  }

  @del('/api/bookings/{id}')
  @response(204, {
    description: 'Booking DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bookingRepository.deleteById(id);
  }
}
