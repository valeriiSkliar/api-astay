import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Complex, ComplexRelations, Photo, Apartment} from '../models';
import {PhotoRepository} from './photo.repository';
import {ApartmentRepository} from './apartment.repository';

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

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
    @repository.getter('PhotoRepository')
    protected photoRepositoryGetter: Getter<PhotoRepository>,
    @repository.getter('ApartmentRepository')
    protected apartmentRepositoryGetter: Getter<ApartmentRepository>,
  ) {
    super(Complex, dataSource);
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
