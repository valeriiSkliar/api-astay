import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Transfer, TransferRelations} from '../models';

export class TransferRepository extends DefaultCrudRepository<
  Transfer,
  typeof Transfer.prototype.id,
  TransferRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(Transfer, dataSource);
  }
}
