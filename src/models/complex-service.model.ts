import {Entity, model, property} from '@loopback/repository';
import {Complex} from './complex.model';

@model({settings: {strict: false}})
export class ComplexService extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    default: null,
  })
  description?: string | null;

  @property({
    type: 'number',
    default: null,
  })
  price: number | null;

  @property({
    type: 'string',
    required: true,
  })
  complexId: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ComplexService>) {
    super(data);
  }
}

export interface ComplexServiceRelations {
  complex?: Complex;
}

export type ComplexServiceWithRelations = ComplexService & ComplexServiceRelations;
