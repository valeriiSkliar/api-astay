import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Locations, LocationsRelations} from '../models';

export class LocationsRepository extends DefaultCrudRepository<
  Locations,
  typeof Locations.prototype.id,
  LocationsRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Locations, dataSource);
  }
}
