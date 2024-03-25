import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Locations} from './locations.model';

@model({settings: {strict: false}})
export class Complex extends Entity {
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
    required: true,
  })
  description: string;

  @belongsTo(() => Locations, {name: 'location'})
  locationId: string;

  @property({
    type: 'array',
    itemType: 'object',
    default: [],
  })
  images?: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Complex>) {
    super(data);
  }
}

export interface ComplexRelations {
  // describe navigational properties here
}

export type ComplexWithRelations = Complex & ComplexRelations;
