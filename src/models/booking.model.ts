import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
} from '@loopback/repository';
import {Apartment} from './apartment.model';
import {Transfer} from './transfer.model';

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
    required: false,
  })
  location?: string;
  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    mysql: {dataType: 'text', nullable: 'Y'},
  })
  phoneNumber?: string;

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
  paymentStatus?: boolean;

  @property({
    type: 'boolean',
    required: false,
  })
  isAvailableApart?: boolean;

  @property({
    type: 'string',
  })
  paymentUrl?: string;

  @property({
    type: 'object',
    required: false,
  })
  guests?: object;

  @property({
    type: 'number',
    required: false,
  })
  maxGuests?: number;

  @property({
    type: 'number',
    required: false,
  })
  maxRooms?: number;

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
    type: 'string',
    required: false,
  })
  token?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  @hasMany(() => Transfer)
  transfers?: Transfer[];
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
