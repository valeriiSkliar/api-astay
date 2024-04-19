import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ComplexEn extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ComplexEn>) {
    super(data);
  }
}

export interface ComplexEnRelations {
  // describe navigational properties here
}

export type ComplexEnWithRelations = ComplexEn & ComplexEnRelations;
