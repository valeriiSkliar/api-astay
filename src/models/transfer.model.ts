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
  date?: string;

  @property({
    type: 'string',
  })
  flightNumber?: string;

  @property({
    type: 'string',
  })
  nameOfSignage?: string;

  @property({
    type: 'number',
  })
  guests?: number;

  @property({
    type: 'number',
  })
  amountBags?: number;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  time?: string;

  @property({
    type: 'string',
  })
  notes?: string;

  @property({
    type: 'string',
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
  })
  price?: number;

  @property({
    type: 'number',
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
