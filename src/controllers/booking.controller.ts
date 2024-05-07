import {
  Count,
  CountSchema,
  EntityNotFoundError,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
  Transaction,
  DefaultTransactionalRepository,
  IsolationLevel,
  DataObject,
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
import {
  BookingRepository,
  CustomerRepository,
  HostContactsRepository,
  TransferRepository,
} from '../repositories';
import {inject, service} from '@loopback/core';
import bcrypt from 'bcrypt';
import {BookingService, ReviewService, TransferService} from '../services';
import {BookingResponse} from '../types';
import {authenticate} from '@loopback/authentication';

export class BookingController {
  constructor(
    @repository(BookingRepository)
    public bookingRepository: BookingRepository,
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
    @repository(TransferRepository)
    public transferRepository: TransferRepository,
    @inject(RestBindings.Http.REQUEST)
    private req: Request & {locale: string},
    @service(BookingService) private bookingService: BookingService,
    @service(TransferService) private transferService: TransferService,
    @repository(HostContactsRepository)
    public hostContactsRepository: HostContactsRepository,
    @service(ReviewService) private reviewService: ReviewService,
  ) {}

  @post('/api/bookings')
  @response(200, {
    description: 'Booking model instance',
    content: {
      'application/json': { schema: getModelSchemaRef(Booking) },
    }
  })
  @authenticate('jwt')
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
  ): Promise<Booking>{
   
    return this.bookingRepository.create(booking);
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
  @response(200, {
    description: 'Booking PATCH success',
    content: {
      'application/json': {
        schema: {
          status: 'string',
          data: getModelSchemaRef(Booking, {partial: true}),
        },
      },
    },
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
  ): Promise<{status: string; data: Booking[]}> {
    if (!booking.status) {
      return {status: 'error', data: []};
    }

    try {
      const isApartmentExist = await this.bookingService.isApartmentExist(
        booking.apartmentId,
      );
      if (!isApartmentExist) {
        throw new HttpErrors.NotFound('Apartment not exist');
      }
      const updatedBooking =
        await this.bookingService.handleBookingStatus(booking);

      const updatedBookingData: DataObject<Booking> = {
        ...updatedBooking,
      };

      await this.bookingRepository.updateById(id, updatedBookingData);

      const updatedBookings = await this.bookingRepository.find({
        include: [
          {relation: 'customer'},
          {
            relation: 'transfers',
            scope: {
              where: {isArchived: false},
            },
          },
          {relation: 'apartment'},
        ],
      });
      if (!updatedBookings) {
        throw new HttpErrors.NotFound('Booking not found');
      }
      return {status: 'success', data: updatedBookings};
    } catch (error) {
      return {status: 'error', data: []};
    }
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

  @post('/api/bookings/validate-token')
  @response(200, {
    description: 'Validate booking token',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Booking, {includeRelations: true}),
      },
    },
  })
  async validateBookingToken(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {partial: true}),
        },
      },
    })
    body: Partial<Booking>,
  ): Promise<{
    status: string;
    data: Booking | null | BookingResponse;
    message: string;
  }> {
    const token = body.token;
    if (!token) {
      return {
        status: 'error',
        message: 'No any token in request. Token is required to proceed.',
        data: null,
      };
    }
    try {
      const booking = await this.bookingService.validateBookingToken(token);
      const hostContactData = await this.hostContactsRepository.find();
      const convertedTransferObject =
        this.transferService.convertTransferArrayToObject(booking.transfers);
      const bookingsWithTransformedTransfers = {
        ...booking,
        transfers: convertedTransferObject,
        hostContacts: hostContactData[0],
      };

      return {
        message: 'Booking token is valid',
        status: 'success',
        data: bookingsWithTransformedTransfers,
      };
    } catch (error) {
      return {message: error.message, status: 'error', data: null};
    }
  }


  private async validateBookingData(booking: Omit<Booking, 'id'>) {
    const isApartmentExist = await this.bookingService.isApartmentExist(
      booking.apartmentId,
    );
    if (!isApartmentExist) {
      return false;
    }
    if (!booking.name || !booking.email) {
      throw new Error('Name and email are required');
    }
  }

  private async ensureCustomer(
    booking: Omit<Booking, 'id'>,
  ): Promise<Customer> {
    let customer = await this.findCustomerByEmail(booking.email);
    if (!customer) {
      customer = await this.createCustomer(booking);
    }
    return customer;
  }

  private async findCustomerByEmail(email: string): Promise<Customer | null> {
    try {
      return await this.customerRepository.findOne({where: {email}});
    } catch (error) {
      throw new Error('Error finding customer: ' + error.message);
    }
  }

  private async createCustomer(
    booking: Omit<Booking, 'id'>,
  ): Promise<Customer> {
    try {
      return await this.customerRepository.create({
        name: booking.name,
        email: booking.email,
        phone: booking?.phoneNumber || '',
      });
    } catch (error) {
      throw new Error('Error creating customer: ' + error.message);
    }
  }

  private async handleTokensAndPaymentUrl(booking: Omit<Booking, 'id'>) {
    const saltRounds = 10;
    const tokenPayment = await bcrypt.hash(
      `${booking.apartmentId}-${Date.now()}`,
      saltRounds,
    );
    const tokenReview = 'await this.bookingService.generateReviewToken(booking)';
    const paymentUrl = `${process.env.FRONTEND_URL}/apartment/payment?token=${tokenPayment}`;


    return {
      ...booking,
      tokenReview: tokenReview,
      paymentUrl: paymentUrl,
      token: tokenPayment,
    } as Booking;
  }

  private async handleBookingAndTransfers(
    booking: Omit<Booking, 'id'>,
  ): Promise<{message: string; code: number}> {
    const {transfer, ...bookingValues} = booking;
    let newBooking = await this.createBooking(bookingValues);
    await this.updateTransfers(transfer, newBooking);
    return {message: 'Booking created', code: 200};
  }

  private async createBooking(
    booking: any,
    transaction?: Transaction,
  ): Promise<Booking> {
    const {transfer, locale, ...bookingValues} = booking;
    try {
      return await this.bookingRepository.create(bookingValues, {
        transaction,
      });
    } catch (error) {
      throw new Error('Error creating booking: ' + error.message);
    }
  }

  private async updateTransfers(transfer: any, newBooking: Booking) {
    if (transfer?.from || transfer?.to) {
      const transfers = Object.values(transfer) as Transfer[];
      await Promise.all(
        transfers.map(async (transfer: Transfer) => {
          if (transfer) {
            try {
              await this.transferRepository.updateById(transfer.id, {
                bookingId: newBooking.id,
              });
            } catch (error) {
              throw new Error('Error updating transfer: ' + error.message);
            }
          }
        }),
      );
    }
  }
  private async createTransfers(
    transferData: any,
    customer: Customer,
    transaction: Transaction,
  ): Promise<Transfer[]> {
    if (!transferData) {
      return [];
    }

    const transferPromises = ['from', 'to'].map(async field => {
      if (transferData[field]) {
        const transferDetails = {
          type: field === 'from' ? 'arrival' : 'departure',
          customerId: customer.id,
          ...transferData[field],
        };
        return await this.transferRepository.create(transferDetails, {
          transaction,
        });
      }
      return null;
    });

    const transfers = await Promise.all(transferPromises);
    return transfers.filter(t => t !== null) as Transfer[];
  }

  private async linkTransfersWithBooking(
    transfers: Transfer[],
    booking: Booking,
    transaction: Transaction,
  ) {
    const updatePromises = transfers.map(transfer => {
      if (transfer) {
        return this.transferRepository.updateById(
          transfer.id,
          {
            bookingId: booking.id,
          },
          {
            transaction,
          },
        );
      }
    });
    await Promise.all(updatePromises);
  }

  @post('/api/generate-review-url', {
    responses: {
      '200': {
        description: 'Booking model instance',
        content: {'application/json': {schema: getModelSchemaRef(Booking)}},
      },
    },
  })
  public async generateReviewUrl(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booking, {
            title: 'NewBooking',
            exclude: ['name', 'email', 'isArchived'],
          }),
        },
      },
    })
    booking
    : Partial<Booking>,
  ): Promise<{message: string; code: number; data: Partial<Booking> | null}> {
    try {
      const currentBooking = await this.bookingRepository.findOne({
        where: {
          id: booking.id,
          token: booking.reviewToken,
          isArchived: false,
        },

      });
      if (!currentBooking) {
        throw new Error('Invalid booking id or token');
      } else {
        const generatedReviewURL =
          await this.bookingService.getReviewUrl(booking);
        if (!generatedReviewURL) {
          throw new Error('Error generating review URL');
        }
        const {reviewUrl, reviewTokenExpiry, tokenReviewGenerated, ...rest} =
          currentBooking;

        const bookingWithReviewURL = {
          ...rest,
          reviewUrl: generatedReviewURL,
        };

        return {
          message: 'Review URL generated',
          code: 200,
          data: bookingWithReviewURL,
        };
      }
    } catch (error) {
      return {message: error.message, code: 400, data: null};
    }
  }
}
