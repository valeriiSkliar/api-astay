import {Entity, model, property} from '@loopback/repository';
import {Complex} from './complex.model';
import {Apartment} from './apartment.model';
import {ComplexService} from './complex-service.model';

@model(
  //   {
  //   settings: {
  //     foreignKeys: {
  //       fk_photo_complex_id: {
  //         name: 'fk_photo_complex_id',
  //         entity: 'Complex',
  //         entityKey: 'id',
  //         foreignKey: 'complex_id',
  //       },
  //     },
  //   },
  // }
)
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
    type: 'string',
    default: null,
  })
  apartment_id?: string;


  // @property({
  @property({
    type: 'number',
  })
  complex_id?: number;
  //   type: 'number',
  //   default: null,
  // })
  // complex_id?: string;

  @property({
    type: 'string',
    default: null,
  })
  service_id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Photo>) {
    super(data);
  }
}

export interface PhotoRelations {
  // complex?: Complex;
  // apartment?: Apartment;
  // service?: ComplexService;
}

export type PhotoWithRelations = Photo & PhotoRelations;
