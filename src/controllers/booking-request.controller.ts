// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {BookingRepository} from '../repositories';

import {inject, service} from '@loopback/core';
import {BookingService} from '../services';
import {getModelSchemaRef, post, requestBody, response} from '@loopback/rest';
import {Booking} from '../models';


export class BookingRequestController {
  constructor(
    @repository(BookingRepository)
    public bookingRepository: BookingRepository,
    @service(BookingService) private bookingService: BookingService,
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
        schema: { type: 'string' },
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
    }
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

      const bookingResponse = await this.bookingService.handleBookingRequest(booking);

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
}
