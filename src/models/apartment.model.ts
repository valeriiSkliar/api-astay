import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Complex} from './complex.model';
import {ApartmentCategoty} from './apartment-categoty.model';

@model({settings: {strict: false}})
export class Apartment extends Entity {
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

  @belongsTo(() => Complex, {name: 'complex'})
  complex_id: string;

  @belongsTo(() => ApartmentCategoty, {name: 'category'})
  category_id: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'array',
    itemType: 'object',
    default: [],
  })
  images?: object[];

  @property({
    type: 'number',
    default: null,
  })
  host_id: number | null;

  @property({
    type: 'string',
    default: '',
  })
  host_name: string;

  @property({
    type: 'string',
    default: '',
  })
  neighbourhood: string;

  @property({
    type: 'string',
    default: '',
  })
  latitude: string;

  @property({
    type: 'string',
    default: '',
  })
  longitude: string;

  @property({
    type: 'string',
    default: '',
  })
  room_type: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    default: null,
  })
  discount: number | null;

  @property({
    type: 'boolean',
    default: true,
  })
  isAvailable: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  isVisible: boolean;

  @property({
    type: 'string',
    default: '',
  })
  oldPrice: string;

  @property({
    type: 'number',
    default: 1,
  })
  minimum_nights: number;

  @property({
    type: 'number',
    default: 0,
  })
  number_of_reviews: number;

  @property({
    type: 'string',
    default: '',
  })
  last_review: string;

  @property({
    type: 'number',
    default: 0,
  })
  reviews_per_month: number;

  @property({
    type: 'number',
    default: 365,
  })
  availability_365: number;

  @property({
    type: 'number',
    default: 0,
  })
  number_of_reviews_ltm: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Apartment>) {
    super(data);
  }
}

export interface ApartmentRelations {
  // describe navigational properties here
}

export type ApartmentWithRelations = Apartment & ApartmentRelations;
