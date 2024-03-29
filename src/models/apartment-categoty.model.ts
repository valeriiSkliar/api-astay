import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ApartmentCategoty extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    default: null,
  })
  description?: string;

  @property({
    type: 'object',
    default: null,
  })
  imageURL?: object;

  @property({
    type: 'string',
    default: null,
  })
  color?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ApartmentCategoty>) {
    super(data);
  }
}

export interface ApartmentCategotyRelations {
  // describe navigational properties here
}

export type ApartmentCategotyWithRelations = ApartmentCategoty &
  ApartmentCategotyRelations;
