import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ComplexServices extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  icon: string;

  @property({
    type: 'number',
  })
  price?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ComplexServices>) {
    super(data);
  }
}

export interface ComplexServicesRelations {
  // describe navigational properties here
}

export type ComplexServicesWithRelations = ComplexServices &
  ComplexServicesRelations;
