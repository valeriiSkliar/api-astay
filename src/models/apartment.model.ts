import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Complex} from './complex.model';
import {ApartmentCategoty} from './apartment-categoty.model';
import {Amenity} from './amenity.model';

// TODO add price_high_season
// TODO add price_low_season

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
    type: 'string',
    default: null,
  })
  host_id: string | null;

  @property({
    type: 'string',
    default: null,
  })
  host_name: string | null;

  @property({
    type: 'string',
    default: null,
  })
  neighbourhood: string | null;

  @property({
    type: 'string',
    default: null,
  })
  latitude: string |null;

  @property({
    type: 'string',
    default: null,
  })
  longitude: string | null;

  @property({
    type: 'string',
    default: null,
  })
  room_type: string |null;

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
    default: null,
  })
  oldPrice: string | null;

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
    default: null,
  })
  last_review: string | null;

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

  @property({
    type: 'array',
    itemType: 'object',
    default: [],
  })
  amenities?: object[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Apartment>) {
    super(data);
  }
}

export interface ApartmentRelations {
  // amenities?: ApartmentAmenity[];
}

export type ApartmentWithRelations = Apartment & ApartmentRelations;
