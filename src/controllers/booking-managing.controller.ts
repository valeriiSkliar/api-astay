// Uncomment these imports to begin using these cool features!

import {inject, service} from '@loopback/core';
import {CustomerRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {BookingService, ReviewService, TransferService} from '../services';
import {ApartmentService, Booking, BookingRelations} from '../models';
import {authenticate} from '@loopback/authentication';
import {getModelSchemaRef, param, patch, post, requestBody, response} from '@loopback/rest';


export class BookingManagingController {
  constructor(
    @service(BookingService) private bookingService: BookingService,
    @service(TransferService) private transferService: TransferService,
    @repository(CustomerRepository) private customerRepository: CustomerRepository
  ) {}


  @authenticate('jwt')
  @patch('/api/edit-booking/{id}')
  async editBooking(
    @param.path.number('id') id: number,
    @requestBody() booking: Partial<Booking & BookingRelations>
  ) {
      try {
    return await this.bookingService.editBooking(id, booking);
      } catch (error) {
        return {
          status: 'error',
          message: error.message,
        }
      }
  }

  @authenticate('jwt')
  @post('/api/confirm-booking')
  @response(200, {
    description: 'Confirm booking',
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
  async confirmBooking(
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
    booking: Partial<Booking & BookingRelations>,
  ){

    // return this.bookingService.confirmBooking(booking);
  }



}
