import {
  Entity,
  belongsTo,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Locations} from './locations.model';
import {ComplexService} from './complex-service.model';
import {Photo} from './photo.model';
import {Apartment} from './apartment.model';
import {Review} from './review.model';

@model({
  // settings: {
  //   fk_photo_complex_id: {
  //     name: 'fk_photo_complex_id',
  //     entity: 'Complex',
  //     entityKey: 'id',
  //     foreignKey: 'complex_id',
  //   },
  // },
})
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

  constructor(data?: Partial<Complex>) {
    super(data);
  }
}

export interface ComplexRelations {}

export type ComplexWithRelations = Complex & ComplexRelations;
