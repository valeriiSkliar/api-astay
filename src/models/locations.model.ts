import {Entity, model, property, hasMany} from '@loopback/repository';
import {Complex} from './complex.model';

@model({settings: {strict: false}})
export class Locations extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'object',
    default: {
      en: {name: 'Thailand', city: 'Pattaya', country: 'Thailand'},
      ru: {name: 'Таиланд', city: 'Паттайя', country: 'Таиланд'},
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

  @hasMany(() => Complex, {keyTo: 'location_id'})
  complexes: Complex[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Locations>) {
    super(data);
  }
}

export interface LocationsRelations {
  // describe navigational properties here
}

export type LocationsWithRelations = Locations & LocationsRelations;
