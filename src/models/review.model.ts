import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Apartment} from './apartment.model';
import {Complex} from './complex.model';
import {Customer} from './customer.model';

@model({settings: {strict: false}})
export class Review extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    mysql: {
      columnName: 'avatar',
      dataType: 'text',
      nullable: 'Y',
    },
  })
  avatar?: string;

  @property({
    type: 'object',
    required: false,
    mysql: {
      columnName: 'RoomType',
      dataType: 'json',
      nullable: 'Y',
    },
    default: {},
    jsonSchema: {
      type: 'object',
      properties: {
        en: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
          },
          required: ['type', 'description'],
        },
      },
    },
  })
  roomType?: string;

  @property({
    type: 'date',
    required: false,
    default: () => new Date().toISOString().split('T')[0],
  })
  reviewDate?: string;

  @property({
    type: 'string',
    default: 'No text review',
    mysql: {
      columnName: 'review',
      dataType: 'text',
      nullable: 'Y',
    },
  })
  review: string;

  @property({
    type: 'string',
    default: 'No text review',
    required: false,
    mysql: {
      columnName: 'positive_review',
      dataType: 'text',
      nullable: 'Y',
    },
  })
  positive_review?: string;

  @property({
    type: 'string',
    default: 'No text review',
    required: false,
    mysql: {
      columnName: 'negative_review',
      dataType: 'text',
      nullable: 'Y',
    },
  })
  negative_review?: string;

  @property({
    type: 'string',
    required: false,
  })
  name?: string;

  @property({
    type: 'number',
    required: false,
  })
  reiting_score?: number;

  @property({
    type: 'boolean',
    default: false,
  })
  isArchived?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  status?: boolean;

  @property({
    type: 'string',
    required: false,
    mysql: {
      columnName: 'tokenReview',
      dataType: 'text',
      nullable: 'Y',
    },
  })
  tokenReview?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: string;

  @belongsTo(() => Apartment, {name: 'apartment'})
  listing_id?: number;

  @belongsTo(() => Complex, {name: 'complex'})
  complex_id?: number;

  @belongsTo(() => Customer)
  customerId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}

export interface ReviewRelations {
  // describe navigational properties here
}

export type ReviewWithRelations = Review & ReviewRelations;
