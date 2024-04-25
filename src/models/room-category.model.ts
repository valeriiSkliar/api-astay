import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RoomCategory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // @property({
  //   type: 'string',
  //   required: true,
  // })
  // category: string;

  // @property({
  //   type: 'string',
  // })
  // description?: string;

  @property({
    type: 'string',
    default: 'red',
  })
  color?: string;

  @property({
    type: 'object',
    default: {
      en: {category: 'new Category', description: 'new Category'},
      ru: {category: 'новая категория', description: 'новая категория'},
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

  constructor(data?: Partial<RoomCategory>) {
    super(data);
  }
}

export interface RoomCategoryRelations {
  // describe navigational properties here
}

export type RoomCategoryWithRelations = RoomCategory & RoomCategoryRelations;
