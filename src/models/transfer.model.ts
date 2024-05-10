import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Customer} from './customer.model';

@model({settings: {strict: false}})
export class Transfer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    enum: ['arrival', 'departure'],
  })
  type: string;

  @property({
    type: 'date',
    required: false,
    mysql: {
      columnName: 'date',
      dataType: 'date',
      nullable: 'Y',
    },
  })
  date: string;

  @property({
    type: 'string',
    required: false,
    default: '',
    mysql: {
      columnName: 'flightNumber',
      dataType: 'varchar',
      dataLength: 255,
      nullable: 'Y',
    },
  })
  flightNumber?: string | null;

  @property({
    type: 'string',
    required: false,
  })
  nameOfSignage?: string;

  @property({
    type: 'number',
    required: false,
    default: 1,
  })
  guests?: number;

  @property({
    type: 'number',
    required: false,
    default: 1,
  })
  amountBags?: number;

  @property({
    type: 'string',
    required: false,
  })
  phone?: string;

  @property({
    type: 'string',
    required: false,
    default: '',
  })
  city?: string;

  @property({
    type: 'string',
    required: false,
  })
  time?: string;

  @property({
    type: 'string',
    required: false,
    default: '',
  })
  notes?: string;

  @property({
    type: 'string',
    required: false,
  })
  comments?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  status?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  isArchived?: boolean;

  @property({
    type: 'number',
    required: false,
    default: 0,
  })
  price?: number;

  @property({
    type: 'number',
    required: false,
    default: 0,
  })
  discount?: number;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: string;

  @property({
    type: 'number',
  })
  bookingId?: number;

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

  @belongsTo(() => Customer)
  customerId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transfer>) {
    super(data);
  }
}

export interface TransferRelations {
  // describe navigational properties here
}

export type TransferWithRelations = Transfer & TransferRelations;
