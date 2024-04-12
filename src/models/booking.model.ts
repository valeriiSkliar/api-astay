import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Booking extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  checkInDate: string;

  @property({
    type: 'date',
    required: true,
  })
  checkOutDate: string;

  @property({
    type: 'boolean',
    default: false,
  })
  paymmentStatus: boolean;

  @property({
    type: 'string',
  })
  paymentUrl?: string;

  @property({
    type: 'number',
  })
  bookingAmount?: number;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  oldPrice?: number;

  @property({
    type: 'date',
  })
  startDate?: string;

  @property({
    type: 'date',
  })
  endDate?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Booking>) {
    super(data);
  }
}

export interface BookingRelations {
  // describe navigational properties here
}

export type BookingWithRelations = Booking & BookingRelations;
