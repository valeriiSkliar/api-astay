import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Apartment, ApartmentRelations} from '../models';

export class ApartmentRepository extends DefaultCrudRepository<
  Apartment,
  typeof Apartment.prototype.id,
  ApartmentRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Apartment, dataSource);
  }
}
