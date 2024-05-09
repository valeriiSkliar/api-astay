import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
} from '@loopback/repository';
import {Apartment} from './apartment.model';
import {Transfer} from './transfer.model';
import {Customer} from './customer.model';

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
    required: false,
    default: '',
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
    type: 'boolean',
    required: false,
    default: false,
  })
  isPaid?: boolean;

  @property({
    type: 'string',
    required: false,
  })
  paymentUrl?: string;

  @property({
    type: 'string',
    required: false,
  })
  reviewUrl?: string;

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

  @belongsTo(() => Apartment)
  apartmentId: number;

  @belongsTo(() => Customer)
  customerId?: number;

  @property({
    type: 'string',
    required: false,
  })
  token?: string;

  @property({
    type: 'date',
    required: false,
    mysql: {dataType: 'date', nullable: 'Y'},
  })
  extactedAt?: Date | null;

  @property({
    type: 'string',
    required: false,
    mysql: {dataType: 'text', nullable: 'Y'},
  })
  tokenReview?: string | null;

  @property({
    type: 'date',
    required: false,
    mysql: {dataType: 'date', nullable: 'Y'},
  })
  reviewToken_expiredAt?: Date | null;

  @property({
    type: 'date',
    required: false,
    mysql: {dataType: 'date', nullable: 'Y'},
    default: () => new Date(),
  })
  tokenReview_createdAt: Date | null;

  @property({
    type: 'boolean',
    default: false,
  })
  isArchived?: boolean;

  @property({
    type: 'boolean',
    required: false,
  })
  isReviewed: boolean;

  @property({
    type: 'string',
    enum: ['pending', 'archived', 'confirmed'],
    default: 'pending',
    required: false,
  })
  status?: string;

  @property({
    type: 'number',
    default: 0,
    required: false,
  })
  discount?: number;

  @property({
    type: 'string',
    required: false,
  })
  notes?: string;

  @property({
    type: 'string',
    required: false,
  })
  paymentMethod?: string;

  @property({
    type: 'number',
    required: false,
    default: 0,
  })
  actuallyPaid: number;

  @property.array(Date)
  bookingDates?: Date[];

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  @hasMany(() => Transfer)
  transfers?: Transfer[];

  @property({
    type: 'number',
    required: false,
  })
  originalApartmentPrice?: number;

  @property({
    type: 'number',
    required: false,
  })
  priceOfBooking?: number;

  @property({
    type: 'number',
    required: false,
  })
  discountFromApartment?: number;

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
