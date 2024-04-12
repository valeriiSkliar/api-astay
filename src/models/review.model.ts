import {Entity, model, property} from '@loopback/repository';
// TODO: SCORE - property

@model({settings: {strict: false}})
export class Review extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  listing_id: number;

  @property({
    type: 'number',
    required: true,
  })
  complex_id: number;

  @property({
    type: 'string',
    required: true,
  })
  avatar: string;

  @property({
    type: 'string',
    required: true,
  })
  roomType: string;

  @property({
    type: 'date',
    required: true,
  })
  reviewDate: string;

  @property({
    type: 'string',
    required: true,
  })
  review: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  reiting_score: number;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: string;

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
