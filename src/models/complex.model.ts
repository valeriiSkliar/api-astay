import {
  Entity,
  hasMany,
  model,
  property,
  referencesMany,
  belongsTo,
} from '@loopback/repository';
import {Photo} from './photo.model';
import {Apartment} from './apartment.model';
import {Review} from './review.model';
import {ComplexServices} from './complex-services.model';
import {Locations} from './locations.model';

// TODO : add isVisible property

@model()
export class Complex extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // @property({
  //   type: 'string',
  //   required: false,
  //   default: 'Add complex name',
  // })
  // name?: string;

  // @property({
  //   type: 'string',
  //   required: false,
  //   default: 'Add complex description',
  // })
  // description?: string;

  // @property({
  //   type: 'string',
  //   required: true,
  // })
  // address: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  geo_data?: Array<{lat: number; lng: number}>;

  @hasMany(() => Apartment, {keyTo: 'complex_id'})
  apartments: Apartment[];

  @hasMany(() => Review, {keyTo: 'complex_id'})
  reviews: Review[];

  @hasMany(() => Photo, {keyTo: 'complex_id'})
  images: Photo[];

  @referencesMany(() => ComplexServices)
  complexServicesIds: number[];

  @belongsTo(() => Locations, {name: 'locationDetails'})
  location_id: number;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  @property({
    type: 'object',
    default: {
      en: {
        name: 'new complex',
        description: 'Add new complex description',
        address: 'Add address',
      },
      ru: {
        name: 'новый комплекс',
        description: 'Добавьте описание комплекса',
        address: 'Добавьте адрес',
      },
    },
    mysql: {
      columnName: 'translations',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y',
    },
  })
  translations?: object;

  constructor(data?: Partial<Complex>) {
    super(data);
  }
}

export interface ComplexRelations {}

export type ComplexWithRelations = Complex & ComplexRelations;
