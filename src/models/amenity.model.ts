import {Entity, hasMany, model, property} from '@loopback/repository';
import {Apartment} from './apartment.model';

@model({settings: {strict: true}})
export class Amenity extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    default: null,
  })
  description?: string;

  @property({
    type: 'string',
    default: null,
  })
  image?: string;

  @property({
    type: 'string',
    default: null,
  })
  title?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Amenity>) {
    super(data);
  }
}

export interface AmenityRelations {
  // describe navigational properties here
}

export type AmenityWithRelations = Amenity & AmenityRelations;
