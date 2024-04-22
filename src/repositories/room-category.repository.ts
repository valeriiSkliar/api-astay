import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {RoomCategory, RoomCategoryRelations} from '../models';

export class RoomCategoryRepository extends DefaultCrudRepository<
  RoomCategory,
  typeof RoomCategory.prototype.id,
  RoomCategoryRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(RoomCategory, dataSource);
  }
}
