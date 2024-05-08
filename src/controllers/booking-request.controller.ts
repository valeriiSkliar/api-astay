// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {BookingRepository} from '../repositories';

import {inject, service} from '@loopback/core';
import {BookingService, MailService} from '../services';
import {
  Request,
  RestBindings,
  getModelSchemaRef,
  post,
  requestBody,
  response,
} from '@loopback/rest';
import {Booking} from '../models';

export class BookingRequestController {
  constructor(
    @repository(BookingRepository)
    public bookingRepository: BookingRepository,
    @service(BookingService) private bookingService: BookingService,
    @inject(RestBindings.Http.REQUEST)
    private req: Request,
    @service(MailService) private mailService: MailService,
  ) {}

  @post('/api/booking-requests')
  @response(200, {
    description: 'Get booking request from client',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {type: 'string'},
            code: {type: 'number'},
            booking: getModelSchemaRef(Booking),
          },
        },
      },
    },
    headers: {
      'Access-Control-Allow-Origin': {
        schema: {type: 'string'},
        description: 'Allowed Origin',
        example: '*',
      },
    },
  })
  @response(400, {
    description: 'Could not create booking',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {type: 'string'},
            code: {type: 'number'},
          },
        },
      },
    },
  })
  async handleBookingRequest(
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
  ) {
    try {
      const bookingResponse =
        await this.bookingService.handleBookingRequest(booking);
      try {
        await this.mailService.sendBookingRequestEmail(bookingResponse);
      } catch (error) {
        console.log(error);
      }

      return {
        message: 'Booking request received. Thank you!',
        code: 200,
        booking: bookingResponse,
      };
    } catch (error) {
      return {
        message: 'Booking request failed',
        code: 400,
      };
    }
  }

  @post('/api/confirm-booking-payment')
  @response(200, {
    description: 'Confirm booking payment',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {type: 'string'},
            code: {type: 'number'},
          },
        },
      },
    },
  })
  async confirmBookingPayment(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              token: {type: 'string'},
            },
          },
        },
      },
    })
    body: {
      token: string;
    },
  ) {
    const token = body.token;
    try {
      const booking = await this.bookingRepository.findOne({
        where: {
          token: token,
          isPaid: false,
          status: 'pending',
        },
        include: [
          {
            relation: 'apartment',
            scope: {
              include: [
                {relation: 'roomCategory'},
                {relation: 'images'},
                {relation: 'locationDetails'},
                {relation: 'in_complex'}
              ],
            },
          },
          {relation: 'customer'},
          {relation: 'transfers'},
        ],
      });
      if (!booking) {
        return {
          message: 'Invalid token. Could not confirm booking payment.',
          code: 400,
        };
      }
      await this.bookingRepository.updateById(booking.id, {
        isPaid: true,
        status: 'confirmed',
      });

      try {
        await this.mailService.sendConfirmedPayEmail(booking);
      } catch (error) {
        throw new Error(
          'Could not send confirmed pay email. Error: ' + error.message,
        );
      }

      return {
        message: 'Booking payment confirmed',
        code: 200,
      };
    } catch (error) {
      return {
        message:
          'Booking payment could not be confirmed. Error: ' + error.message,
        code: 400,
      };
    }
  }
}
