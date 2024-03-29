import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class AmenitiesList extends Entity {
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
  apartment_id: number;

  @property({
    type: 'number',
    required: true,
  })
  amenity_id: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AmenitiesList>) {
    super(data);
  }
}

export interface AmenitiesListRelations {
  // describe navigational properties here
}

export type AmenitiesListWithRelations = AmenitiesList & AmenitiesListRelations;
