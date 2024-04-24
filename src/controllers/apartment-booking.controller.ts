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
import {Apartment, Booking} from '../models';
import {ApartmentRepository} from '../repositories';

export class ApartmentBookingController {
  constructor(
    @repository(ApartmentRepository)
    protected apartmentRepository: ApartmentRepository,
  ) {}

  @get('/apartments/{id}/bookings', {
    responses: {
      '200': {
        description: 'Array of Apartment has many Booking',
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
    return this.apartmentRepository.bookings(id).find(filter);
  }

  @post('/apartments/{id}/bookings', {
    responses: {
      '200': {
        description: 'Apartment model instance',
        content: {'application/json': {schema: getModelSchemaRef(Booking)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Apartment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {
            title: 'NewBookingInApartment',
            exclude: ['id'],
            optional: ['apartmentId'],
          }),
        },
      },
    })
    booking: Omit<Booking, 'id'>,
  ): Promise<Booking> {
    return this.apartmentRepository.bookings(id).create(booking);
  }

  @patch('/apartments/{id}/bookings', {
    responses: {
      '200': {
        description: 'Apartment.Booking PATCH success count',
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
    return this.apartmentRepository.bookings(id).patch(booking, where);
  }

  @del('/apartments/{id}/bookings', {
    responses: {
      '200': {
        description: 'Apartment.Booking DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Booking))
    where?: Where<Booking>,
  ): Promise<Count> {
    return this.apartmentRepository.bookings(id).delete(where);
  }
}
