import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Booking, Apartment} from '../models';
import {BookingRepository} from '../repositories';

export class BookingApartmentController {
  constructor(
    @repository(BookingRepository)
    public bookingRepository: BookingRepository,
  ) {}

  @get('/bookings/{id}/apartment', {
    responses: {
      '200': {
        description: 'Apartment belonging to Booking',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Apartment),
          },
        },
      },
    },
  })
  async getApartment(
    @param.path.number('id') id: typeof Booking.prototype.id,
  ): Promise<Apartment> {
    return this.bookingRepository.apartment(id);
  }
}
