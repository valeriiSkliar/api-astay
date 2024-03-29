import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {AmenitiesList, AmenitiesListRelations} from '../models';

export class AmenitiesListRepository extends DefaultCrudRepository<
  AmenitiesList,
  typeof AmenitiesList.prototype.id,
  AmenitiesListRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(AmenitiesList, dataSource);
  }
}
