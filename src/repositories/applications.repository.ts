import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Applications, ApplicationsRelations} from '../models';

export class ApplicationsRepository extends DefaultCrudRepository<
  Applications,
  typeof Applications.prototype.id,
  ApplicationsRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(Applications, dataSource);
  }
}
