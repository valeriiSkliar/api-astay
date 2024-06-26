import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
  referencesMany,
} from '@loopback/repository';
import {Complex} from './complex.model';
import {Locations} from './locations.model';
import {Photo} from './photo.model';
import {Amenity} from './amenity.model';
import {RoomType} from './room-type.model';
import {Review} from './review.model';
import {RoomCategory} from './room-category.model';
import {Booking} from './booking.model';

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
    default: 'AstayHome',
  })
  host_name?: string;

  @property({
    type: 'string',
    required: false,
  })
  wifiPassword?: string;

  @property({
    type: 'string',
    required: false,
  })
  apartmentPassword?: string;

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
  neighborhood?: string[] = [];

  @property.array(Date)
  hostDisabledDates?: Date[];

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
    default: true,
  })
  isAvailable?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  isPromotion?: boolean;

  @belongsTo(() => Complex, {name: 'in_complex'})
  complex_id: number;

  @belongsTo(() => Locations, {name: 'locationDetails'})
  location_id: number;

  @property({
    type: 'boolean',
    default: false,
  })
  isVisible?: boolean;

  @property({
    type: 'number',
    default: 0,
  })
  number_of_reviews?: number;

  @property({
    type: 'number',
    default: 365,
  })
  availability_365?: number;

  @property({
    type: 'number',
    default: 5,
  })
  review_scores_rating?: number;

  @hasMany(() => Photo, {keyTo: 'apartment_id'})
  images: Photo[];

  @belongsTo(() => RoomType, {name: 'room_type'})
  room_type_id: number;

  @hasMany(() => Review, {keyTo: 'listing_id'})
  reviews: Review[];

  @referencesMany(() => Amenity, {name: 'amenities'})
  amenityIds: number[];

  @belongsTo(() => RoomCategory, {name: 'roomCategory'})
  roomCategoryId: number;

  @hasMany(() => Booking)
  bookings: Booking[];

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  @property({
    type: 'object',
    default: {
      en: {
        name: 'Add new apartment name',
        description: 'Add short description',
      },
      ru: {
        name: 'Добавьте название квартиры',
        description: 'Добавьте краткое описание',
      },
    },
    mysql: {
      columnName: 'translations',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'Y',
    },
  })
  translations?: object;

  [prop: string]: any;

  constructor(data?: Partial<Apartment>) {
    super(data);
  }
}

export interface ApartmentRelations {}

export type ApartmentWithRelations = Apartment & ApartmentRelations;
