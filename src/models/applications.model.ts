import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Applications extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  pageName?: string;

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
  })
  phone?: string;

  @property({
    type: 'string',
  })
  message?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isProcessed?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  isOpened?: boolean;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Applications>) {
    super(data);
  }
}

export interface ApplicationsRelations {
  // describe navigational properties here
}

export type ApplicationsWithRelations = Applications & ApplicationsRelations;
