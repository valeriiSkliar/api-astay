import {Entity, model, property, hasMany} from '@loopback/repository';
import {Booking} from './booking.model';
import {Review} from './review.model';

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
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

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
    default: '',
  })
  birthDate?: string;

  @property({
    type: 'string',
    default: '',
  })
  address?: string;

  @property({
    type: 'string',
    default: '',
  })
  country?: string;

  @property({
    type: 'string',
    enum: ['Male', 'Female', 'Other'],
  })
  gender?: string;

  @property({
    type: 'string',
    default: '',
  })
  additionalContactInfo?: string;

  @property({
    type: 'string',
    default: '',
  })
  additionalNotes?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  firstRequest: string;

  @property({
    type: 'string',
    enum: ['Active', 'Blocked', 'Pending'],
    default: 'Pending',
  })
  accountStatus: string;

  @hasMany(() => Booking)
  bookings: Booking[];

  @hasMany(() => Review)
  reviews: Review[];
  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
