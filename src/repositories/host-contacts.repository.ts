import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {HostContacts, HostContactsRelations} from '../models';

export class HostContactsRepository extends DefaultCrudRepository<
  HostContacts,
  typeof HostContacts.prototype.id,
  HostContactsRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(HostContacts, dataSource);
  }
}
