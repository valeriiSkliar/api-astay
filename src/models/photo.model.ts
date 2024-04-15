import {Entity, model, property, repository} from '@loopback/repository';
import {Complex} from './complex.model';
import {Apartment} from './apartment.model';
import {PhotoRepository} from '../repositories';

@model()
export class Photo extends Entity {
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
  fileName: string; // Имя файла

  @property({
    type: 'number',
    required: true,
  })
  order_number: number;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  // @property({
  //   type: 'string',
  //   required: false,
  //   default: 'pending',
  // })
  // status?: 'uploading' | 'done' | 'error';

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

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  [prop: string]: any;

  constructor(
    data?: Partial<Photo>) {
        super(data);
  }

}

export interface PhotoRelations {}

export type PhotoWithRelations = Photo & PhotoRelations;
