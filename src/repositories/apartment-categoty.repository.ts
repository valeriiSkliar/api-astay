import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {ApartmentCategoty, ApartmentCategotyRelations} from '../models';

export class ApartmentCategotyRepository extends DefaultCrudRepository<
  ApartmentCategoty,
  typeof ApartmentCategoty.prototype.id,
  ApartmentCategotyRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ApartmentCategoty, dataSource);
  }
}
