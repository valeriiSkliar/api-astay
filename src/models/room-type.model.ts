import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RoomType extends Entity {
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
  color?: string;

  @property({
    type: 'object',
    default: {
      en: {type: 'new Type', description: 'new Type'},
      ru: {type: 'новый тип', description: 'новый тип'},
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RoomType>) {
    super(data);
  }
}

export interface RoomTypeRelations {
  // describe navigational properties here
}

export type RoomTypeWithRelations = RoomType & RoomTypeRelations;
