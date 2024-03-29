import {
  Entity,
  model,
  property, belongsTo, hasMany} from '@loopback/repository';
import {Complex} from './complex.model';
import {Locations} from './locations.model';
import {Photo} from './photo.model';
import {Amenity} from './amenity.model';
import {AmenitiesList} from './amenities-list.model';
import {RoomType} from './room-type.model';

@model()
export class Apartment extends Entity {
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
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  host_name?: string;

  @property({
    type: 'number',
  })
  guests?: number;

  @property({
    type: 'number',
  })
  bathrooms?: number;

  @property({
    type: 'number',
  })
  bedrooms?: number;

  @property({
    type: 'number',
  })
  beds?: number;

  @property.array(String)
  neighbourhood?: string[];

  @property.array(Date)
  disabledDates?: Date[];

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  price_low_season?: number;

  @property({
    type: 'number',
  })
  price_high_season?: number;

  @property({
    type: 'number',
  })
  discount?: number;

  @property({
    type: 'boolean',
  })
  isAvailable?: boolean;

  @belongsTo(() => Complex, {name: 'in_complex'})
  complex_id: number;

  @belongsTo(() => Locations, {name: 'locationDetails'})
  location_id: number;

  @property({
    type: 'boolean',
  })
  isVisible?: boolean;

  @property({
    type: 'string',
  })
  oldPrice?: string;

  @property({
    type: 'number',
  })
  number_of_reviews?: number;

  @property({
    type: 'number',
  })
  availability_365?: number;

  @property({
    type: 'number',
  })
  review_scores_rating?: number;

  @hasMany(() => Photo, {keyTo: 'apartment_id'})
  images: Photo[];

  @hasMany(() => Amenity, {through: {model: () => AmenitiesList, keyFrom: 'apartment_id', keyTo: 'amenity_id'}})
  amenities: Amenity[];

  @belongsTo(() => RoomType, {name: 'room_type'})
  room_type_id: number;
  [prop: string]: any;

  constructor(data?: Partial<Apartment>) {
    super(data);
  }
}

export interface ApartmentRelations {
}

export type ApartmentWithRelations = Apartment & ApartmentRelations;
