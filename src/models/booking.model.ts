import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Apartment} from './apartment.model';

@model({settings: {strict: false}})
export class Booking extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone?: string;


  @property({
    type: 'date',
    required: false,
  })
  checkIn?: string;

  @property({
    type: 'date',
    required: false,
  })
  checkOut?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  paymmentStatus?: boolean;

  @property({
    type: 'string',
  })
  paymentUrl?: string;



  @property({
    type: 'number',
    required: false,
  })
  bookingAmount?: number;

  @property({
    type: 'number',
    required: false,
  })
  price?: number;

  @property({
    type: 'number',
    required: false,
  })
  oldPrice?: number;

  @property({
    type: 'number',
  })
  customerId?: number;

  @belongsTo(() => Apartment)
  apartmentId: number;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;
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
