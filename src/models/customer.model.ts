import {Entity, model, property, hasMany} from '@loopback/repository';
import {Booking} from './booking.model';
import {Review} from './review.model';
import {Transfer} from './transfer.model';

@model({settings: {strict: false}})
export class Customer extends Entity {
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
    required: false,
    default: '',
  })
  phone?: string;

  @property({
    type: 'date',
    required: false,
  })
  birthDate?: Date;

  @property({
    type: 'string',
    default: '',
    required: false,
  })
  address?: string;

  @property({
    type: 'string',
    default: '',
    required: false,
  })
  country?: string;

  @property({
    type: 'string',
    enum: ['Male', 'Female', 'Other'],
    required: false,
  })
  gender?: string;

  @property({
    type: 'string',
    default: '',
    required: false,
  })
  additionalContactInfo?: string;

  @property({
    type: 'string',
    default: '',
    required: false,
  })
  additionalNotes?: string;

  @property({
    type: 'date',
    default: () => new Date(),
    required: false,
  })
  firstRequest?: string;

  @property({
    type: 'string',
    enum: ['Active', 'Blocked', 'Pending'],
    default: 'Pending',
    required: false,
  })
  accountStatus?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  @property({
    type: 'string',
    required: false,
    default: 'en',
  })
  locale: string;

  @property({
    type: 'string',
    required: false,
    default: '-0',
  })
  tzOffset: string;

  @property({
    type: 'string',
    required: false,
    default: '',
  })
  timeZone: string;

  @hasMany(() => Booking)
  bookings: Booking[];

  @hasMany(() => Review)
  reviews: Review[];

  @hasMany(() => Transfer)
  transfers: Transfer[];
  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
