import {Entity, model, property} from '@loopback/repository';
import {Complex} from './complex.model';
import {Apartment} from './apartment.model';
import {ComplexService} from './complex-service.model';

@model()
export class Photo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  @property({
    type: 'number',
    default: null,
  })
  apartment_id?: number;

  @property({
    type: 'number',
  })
  complex_id?: number;



  @property({
    type: 'string',
    default: null,
  })
  service_id?: string;

  [prop: string]: any;

  constructor(data?: Partial<Photo>) {
    super(data);
  }
}

export interface PhotoRelations {

}

export type PhotoWithRelations = Photo & PhotoRelations;
