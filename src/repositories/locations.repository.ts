import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {LocalMysqlDataSource, MongoDataSource} from '../datasources';
import {Locations, LocationsRelations, Complex} from '../models';
import {ComplexRepository} from './complex.repository';

export class LocationsRepository extends DefaultCrudRepository<
  Locations,
  typeof Locations.prototype.id,
  LocationsRelations
> {
  public readonly complexes: HasManyRepositoryFactory<
    Complex,
    typeof Locations.prototype.id
  >;

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
    @repository.getter('ComplexRepository')
    protected complexRepositoryGetter: Getter<ComplexRepository>,
  ) {
    super(Locations, dataSource);
    this.complexes = this.createHasManyRepositoryFactoryFor(
      'complexes',
      complexRepositoryGetter,
    );
    this.registerInclusionResolver(
      'complexes',
      this.complexes.inclusionResolver,
    );
  }
}
