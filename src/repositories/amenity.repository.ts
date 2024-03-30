import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Amenity, AmenityRelations} from '../models';

export class AmenityRepository extends DefaultCrudRepository<
  Amenity,
  typeof Amenity.prototype.id,
  AmenityRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(Amenity, dataSource);
  }
}
