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
  pageLink?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: [
        'apartment',
        'complex',
        'transfer',
        'aboutUs',
        'forOwners',
        'main',
        'forOwners-short',
      ],
    },
  })
  type: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      // minLength: 5,
      maxLength: 50,
      // pattern: '/^[ёЁъЪа-яА-Я-\'"?!,:;@№#$%&*()=\\+\\.\\s\\w]+$/gi'
    },
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      format: 'email',
      maxLength: 50,
    },
  })
  email?: string;

  @property({
    type: 'string',
    jsonSchema: {
      minLength: 10,
      maxLength: 20,
      pattern: '^[+]?[0-9]{6,20}$',
    },
  })
  phone?: string;

  @property({
    type: 'string',
    jsonSchema: {
      // minLength: 10,
      maxLength: 2000,
      // pattern: '/^[ёЁъЪа-яА-Я-\'"?!,:;@№#$%&*()=\\+\\.\\s\\w]+$/gi'
    },
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
  isArchived?: boolean;

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
