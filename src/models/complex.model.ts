import {
  Entity,
  hasMany,
  model,
  property, referencesMany, belongsTo} from '@loopback/repository';
import {Photo} from './photo.model';
import {Apartment} from './apartment.model';
import {Review} from './review.model';
import {ComplexServices} from './complex-services.model';
import {Locations} from './locations.model';

// TODO : Add location relationship location_id

@model()
export class Complex extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'array',
    itemType: 'object',
    default: [],
  })
  images?: object[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  geo_data?: Array<{lat: number; lng: number}>;

  @hasMany(() => Photo, {keyTo: 'complex_id'})
  photos: Photo[];

  @hasMany(() => Apartment, {keyTo: 'complex_id'})
  apartments: Apartment[];

  @hasMany(() => Review, {keyTo: 'complex_id'})
  reviews: Review[];

  @referencesMany(() => ComplexServices)
  complexServicesIds: number[];

  @belongsTo(() => Locations, {name: 'locationDetails'})
  location_id: number;

  constructor(data?: Partial<Complex>) {
    super(data);
  }
}

export interface ComplexRelations {}

export type ComplexWithRelations = Complex & ComplexRelations;
