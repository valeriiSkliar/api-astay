import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Amenity, AmenityRelations} from '../models';

export class AmenityRepository extends DefaultCrudRepository<
  Amenity,
  typeof Amenity.prototype.id,
  AmenityRelations
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(Amenity, dataSource);
  }
}
