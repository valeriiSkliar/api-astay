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

  // @property({
  //   type: 'string',
  //   default: null,
  // })
  // description?: string;

  @property({
    type: 'string',
    default: null,
  })
  icon?: string;

  // @property({
  //   type: 'string',
  //   default: null,
  // })
  // title?: string;

  @property({
    type: 'object',
    default: {en: {title: 'new Amenity', description: 'new Amenity'}, ru: {title: 'новое удобство', description: 'новое удобство'}},
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
