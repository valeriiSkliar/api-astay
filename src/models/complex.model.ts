import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Locations} from './locations.model';
import {ComplexService} from './complex-service.model';

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

  @hasMany(() => ComplexService, { keyTo: 'complexId' })
  services?: ComplexService[];

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
  services?: ComplexService[];
}

export type ComplexWithRelations = Complex & ComplexRelations;
