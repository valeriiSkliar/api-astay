import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Complex, ComplexRelations, Photo} from '../models';
import {PhotoRepository} from './photo.repository';

export class ComplexRepository extends DefaultCrudRepository<
  Complex,
  typeof Complex.prototype.id,
  ComplexRelations
> {

  public readonly photos: HasManyRepositoryFactory<Photo, typeof Complex.prototype.id>;

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource, @repository.getter('PhotoRepository') protected photoRepositoryGetter: Getter<PhotoRepository>,
  ) {
    super(Complex, dataSource);
    this.photos = this.createHasManyRepositoryFactoryFor('photos', photoRepositoryGetter,);
    this.registerInclusionResolver('photos', this.photos.inclusionResolver);
  }
}
