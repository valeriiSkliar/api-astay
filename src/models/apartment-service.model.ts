import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ApartmentService extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  // @property({
  //   type: 'string',
  //   required: true,
  // })
  // name: string;

  // @property({
  //   type: 'string',
  //   required: true,
  // })
  // descroption: string;

  @property({
    type: 'object',
    default: {
      en: {name: 'new Service', description: 'new Service'},
      ru: {name: 'новое удобство', description: 'новое удобство'},
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

  @property({
    type: 'number',
    default: null,
  })
  price?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ApartmentService>) {
    super(data);
  }
}

export interface ApartmentServiceRelations {
  // describe navigational properties here
}

export type ApartmentServiceWithRelations = ApartmentService &
  ApartmentServiceRelations;
