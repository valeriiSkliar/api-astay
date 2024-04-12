import {Entity, model, property} from '@loopback/repository';

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
  })
  type: string;

  @property({
    type: 'date',
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
    type: 'string',
  })
  guests?: string;

  @property({
    type: 'string',
  })
  amountBags?: string;

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
  departure?: string;

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
