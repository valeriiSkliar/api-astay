import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RoomCategory extends Entity {
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
  category: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  color?: string;

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
