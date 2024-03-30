import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
  HasManyRepositoryFactory,
  HasManyThroughRepositoryFactory,
} from '@loopback/repository';
import {LocalMysqlDataSource, MongoDataSource} from '../datasources';
import {
  Apartment,
  ApartmentRelations,
  Complex,
  Locations,
  Photo,
  Amenity,
  AmenitiesList,
  RoomType, Review} from '../models';
import {PhotoRepository} from './photo.repository';
import {ComplexRepository} from './complex.repository';
import {LocationsRepository} from './locations.repository';
import {AmenityRepository} from './amenity.repository';
import {AmenitiesListRepository} from './amenities-list.repository';
import {RoomTypeRepository} from './room-type.repository';
import {ReviewRepository} from './review.repository';

export class ApartmentRepository extends DefaultCrudRepository<
  Apartment,
  typeof Apartment.prototype.id,
  ApartmentRelations
> {
  public readonly in_complex: BelongsToAccessor<
    Complex,
    typeof Apartment.prototype.id
  >;

  public readonly locationDetails: BelongsToAccessor<
    Locations,
    typeof Apartment.prototype.id
  >;

  public readonly images: HasManyRepositoryFactory<
    Photo,
    typeof Apartment.prototype.id
  >;

  public readonly amenities: HasManyThroughRepositoryFactory<
    Amenity,
    typeof Amenity.prototype.id,
    AmenitiesList,
    typeof Apartment.prototype.id
  >;

  public readonly room_type: BelongsToAccessor<
    RoomType,
    typeof Apartment.prototype.id
  >;

  public readonly reviews: HasManyRepositoryFactory<Review, typeof Apartment.prototype.id>;

  constructor(
    // @inject('datasources.mongo') dataSource: MongoDataSource,
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
    @repository.getter('ComplexRepository')
    protected complexRepositoryGetter: Getter<ComplexRepository>,
    @repository.getter('LocationsRepository')
    protected locationsRepositoryGetter: Getter<LocationsRepository>,
    @repository.getter('PhotoRepository')
    protected photoRepositoryGetter: Getter<PhotoRepository>,
    @repository.getter('AmenityRepository')
    protected amenityRepositoryGetter: Getter<AmenityRepository>,
    @repository.getter('AmenitiesListRepository')
    protected amenitiesListRepositoryGetter: Getter<AmenitiesListRepository>,
    @repository.getter('RoomTypeRepository')
    protected roomTypeRepositoryGetter: Getter<RoomTypeRepository>, @repository.getter('ReviewRepository') protected reviewRepositoryGetter: Getter<ReviewRepository>,
  ) {
    super(Apartment, dataSource);
    this.reviews = this.createHasManyRepositoryFactoryFor('reviews', reviewRepositoryGetter,);
    this.registerInclusionResolver('reviews', this.reviews.inclusionResolver);
    this.room_type = this.createBelongsToAccessorFor(
      'room_type',
      roomTypeRepositoryGetter,
    );
    this.registerInclusionResolver(
      'room_type',
      this.room_type.inclusionResolver,
    );
    this.amenities = this.createHasManyThroughRepositoryFactoryFor(
      'amenities',
      amenityRepositoryGetter,
      amenitiesListRepositoryGetter,
    );
    this.registerInclusionResolver(
      'amenities',
      this.amenities.inclusionResolver,
    );
    this.images = this.createHasManyRepositoryFactoryFor(
      'images',
      photoRepositoryGetter,
    );
    this.registerInclusionResolver('images', this.images.inclusionResolver);
    this.locationDetails = this.createBelongsToAccessorFor(
      'locationDetails',
      locationsRepositoryGetter,
    );
    this.registerInclusionResolver(
      'locationDetails',
      this.locationDetails.inclusionResolver,
    );
    this.in_complex = this.createBelongsToAccessorFor(
      'in_complex',
      complexRepositoryGetter,
    );
    this.registerInclusionResolver(
      'in_complex',
      this.in_complex.inclusionResolver,
    );
  }
}
