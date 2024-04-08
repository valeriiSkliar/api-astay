import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory, ReferencesManyAccessor, BelongsToAccessor} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Complex, ComplexRelations, Photo, Apartment, Review, ComplexServices, Locations} from '../models';
import {PhotoRepository} from './photo.repository';
import {ApartmentRepository} from './apartment.repository';
import {ReviewRepository} from './review.repository';
import {ComplexServicesRepository} from './complex-services.repository';
import {LocationsRepository} from './locations.repository';

export class ComplexRepository extends DefaultCrudRepository<
  Complex,
  typeof Complex.prototype.id,
  ComplexRelations
> {
  public readonly photos: HasManyRepositoryFactory<
    Photo,
    typeof Complex.prototype.id
  >;

  public readonly apartments: HasManyRepositoryFactory<
    Apartment,
    typeof Complex.prototype.id
  >;

  public readonly reviews: HasManyRepositoryFactory<
    Review,
    typeof Complex.prototype.id
  >;

  public readonly complexServicess: ReferencesManyAccessor<ComplexServices, typeof Complex.prototype.id>;

  public readonly locationDetails: BelongsToAccessor<Locations, typeof Complex.prototype.id>;

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
    @repository.getter('PhotoRepository')
    protected photoRepositoryGetter: Getter<PhotoRepository>,
    @repository.getter('ApartmentRepository')
    protected apartmentRepositoryGetter: Getter<ApartmentRepository>,
    @repository.getter('ReviewRepository')
    protected reviewRepositoryGetter: Getter<ReviewRepository>, @repository.getter('ComplexServicesRepository') protected complexServicesRepositoryGetter: Getter<ComplexServicesRepository>, @repository.getter('LocationsRepository') protected locationsRepositoryGetter: Getter<LocationsRepository>,
  ) {
    super(Complex, dataSource);
    this.locationDetails = this.createBelongsToAccessorFor('locationDetails', locationsRepositoryGetter,);
    this.registerInclusionResolver('locationDetails', this.locationDetails.inclusionResolver);
    this.complexServicess = this.createReferencesManyAccessorFor('complexServicess', complexServicesRepositoryGetter,);
    this.registerInclusionResolver('complexServicess', this.complexServicess.inclusionResolver);
    this.reviews = this.createHasManyRepositoryFactoryFor(
      'reviews',
      reviewRepositoryGetter,
    );
    this.registerInclusionResolver('reviews', this.reviews.inclusionResolver);
    this.apartments = this.createHasManyRepositoryFactoryFor(
      'apartments',
      apartmentRepositoryGetter,
    );
    this.registerInclusionResolver(
      'apartments',
      this.apartments.inclusionResolver,
    );
    this.photos = this.createHasManyRepositoryFactoryFor(
      'photos',
      photoRepositoryGetter,
    );
    this.registerInclusionResolver('photos', this.photos.inclusionResolver);
  }
}
