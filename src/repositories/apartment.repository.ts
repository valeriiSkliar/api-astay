import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
  HasManyRepositoryFactory,
  HasManyThroughRepositoryFactory,
  ReferencesManyAccessor,
} from '@loopback/repository';
import {LocalMysqlDataSource, MongoDataSource} from '../datasources';
import {
  Apartment,
  ApartmentRelations,
  Complex,
  Locations,
  Photo,
  Amenity,
  RoomType,
  Review,
  RoomCategory,
} from '../models';
import {PhotoRepository} from './photo.repository';
import {ComplexRepository} from './complex.repository';
import {LocationsRepository} from './locations.repository';
import {AmenityRepository} from './amenity.repository';
// import {AmenitiesListRepository} from './amenities-list.repository';
import {RoomTypeRepository} from './room-type.repository';
import {ReviewRepository} from './review.repository';
import {RoomCategoryRepository} from './room-category.repository';

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

  public readonly room_type: BelongsToAccessor<
    RoomType,
    typeof Apartment.prototype.id
  >;

  public readonly reviews: HasManyRepositoryFactory<
    Review,
    typeof Apartment.prototype.id
  >;

  public readonly amenities: ReferencesManyAccessor<
    Amenity,
    typeof Apartment.prototype.id
  >;

  public readonly roomCategory: BelongsToAccessor<
    RoomCategory,
    typeof Apartment.prototype.id
  >;
  // TODO: Configuring a referencesMany relation
  // TODO: Need format for sql query string
  // TODO: Add indexex to DB tables

  constructor(
    // @inject('datasources.mongo') dataSource: MongoDataSource,
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
    @repository.getter('ComplexRepository')
    protected complexRepositoryGetter: Getter<ComplexRepository>,
    @repository.getter('LocationsRepository')
    protected locationsRepositoryGetter: Getter<LocationsRepository>,
    @repository.getter('PhotoRepository')
    protected photoRepositoryGetter: Getter<PhotoRepository>,
    @repository.getter('RoomTypeRepository')
    protected roomTypeRepositoryGetter: Getter<RoomTypeRepository>,
    @repository.getter('ReviewRepository')
    protected reviewRepositoryGetter: Getter<ReviewRepository>,
    @repository.getter('AmenityRepository')
    protected amenityRepositoryGetter: Getter<AmenityRepository>,
    @repository.getter('RoomCategoryRepository')
    protected roomCategoryRepositoryGetter: Getter<RoomCategoryRepository>,
  ) {
    super(Apartment, dataSource);
    this.roomCategory = this.createBelongsToAccessorFor(
      'roomCategory',
      roomCategoryRepositoryGetter,
    );
    this.registerInclusionResolver(
      'roomCategory',
      this.roomCategory.inclusionResolver,
    );
    this.amenities = this.createReferencesManyAccessorFor(
      'amenities',
      amenityRepositoryGetter,
    );
    this.registerInclusionResolver(
      'amenities',
      this.amenities.inclusionResolver,
    );

    this.reviews = this.createHasManyRepositoryFactoryFor(
      'reviews',
      reviewRepositoryGetter,
    );
    this.registerInclusionResolver('reviews', this.reviews.inclusionResolver);
    this.room_type = this.createBelongsToAccessorFor(
      'room_type',
      roomTypeRepositoryGetter,
    );
    this.registerInclusionResolver(
      'room_type',
      this.room_type.inclusionResolver,
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
