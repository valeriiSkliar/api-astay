import {
  Count,
  CountSchema,
  EntityNotFoundError,
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
  Request,
  RestBindings,
  HttpErrors,
} from '@loopback/rest';
import {Booking, Customer, Transfer} from '../models';
import {BookingRepository, CustomerRepository, TransferRepository} from '../repositories';
import {inject} from '@loopback/core';
import bcrypt from "bcrypt";

export class BookingController {
  constructor(
    @repository(BookingRepository)
    public bookingRepository: BookingRepository,
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
    @repository(TransferRepository)
    public transferRepository: TransferRepository,
    @inject(RestBindings.Http.REQUEST)
    private req: Request & { locale: string }

  ) {}

  @post('/api/bookings')
  @response(200, {
    description: 'Booking model instance',
    content: {'application/json': {schema: {message: 'string', code: 'number'}}},
  })
  @response(400, {
    description: 'Could not create booking',
    content: {'application/json': {schema: {message: 'string', code: 'number'}}},
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
  ): Promise<{message: string, code: number}> {
    if (!booking.name || !booking.email) {
      throw new Error('Name and email are required');
    }
    let customer: Customer | null = null;
    try {
      customer = await this.customerRepository.findOne({
        where: {
          email: booking.email,
        },
      });
    } catch (error) {
      throw new Error('Error finding customer: ' + error.message);
    }
    if (!customer) {
      try {
        customer = await this.customerRepository.create(
          {
            name: booking.name,
            email: booking.email,
            phone: booking.phoneNumber ? booking.phoneNumber : null,
          }
        );
      } catch (error) {
        throw new Error('Error creating customer: ' + error.message);
      }
    }

    try {
      const saltRounds = 10; // TODO: make this configurable
      const token = await bcrypt.hash(`${booking.apartmentId}-${Date.now()}`, saltRounds);
      booking.token = token;
      const locale = this.req?.locale;
      const paymentUrl = `${process.env.FRONTEND_URL}/${locale || 'en'}/apartment/payment/${booking.apartmentId}/${token}`;
      booking.paymentUrl = paymentUrl;

      booking.customerId = customer.id;


      if (booking?.transfer) {
        const transferData = Object.assign({}, booking.transfer);
        // delete booking.transfer;
        const [from, to] = await Promise.all(
          ['from', 'to'].map(async field => {
            if (transferData[field]) {
              const transfer = Object.assign(
                {
                  type: field === 'from' ? 'arrival' : 'departure',
                  customerId: customer?.id,
                },
                transferData[field],
              );
              const newTransfer = await this.transferRepository.create(transfer);
              booking.transfer[field] = newTransfer;
            }
          }),
        );
      }

      const {transfer, ...bookingValues} = booking;
      let newBooking: Booking;
      try {
        newBooking = await this.bookingRepository.create(bookingValues);
      } catch (error) {
        throw new Error('Error creating booking: ' + error.message);
      }
      if (transfer?.from || transfer?.to ) {
        const transfers = Object.values(transfer) as Transfer[];
        await Promise.all(
          transfers.map(async (transfer: Transfer) => {
            if (transfer) {
              try {
                await this.transferRepository.updateById(transfer.id, {bookingId: newBooking.id});
              } catch (error) {
                throw new Error('Error updating transfer: ' + error.message);
              }
            }
          })
        )

      }
      return {message: 'Booking created', code: 200};
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new HttpErrors.NotFound(error.message);
      } else if (error.name === 'ValidationError') {
        throw new HttpErrors.BadRequest(error.message);
      } else {
        throw error;
      }
    }
  }



  @get('/api/bookings/count')
  @response(200, {
    description: 'Booking model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Booking) where?: Where<Booking>): Promise<Count> {
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
    @param.filter(Booking, {exclude: 'where'})
    filter?: FilterExcludingWhere<Booking>,
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
