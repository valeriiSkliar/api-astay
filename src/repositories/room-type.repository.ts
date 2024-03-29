import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {RoomType, RoomTypeRelations} from '../models';

export class RoomTypeRepository extends DefaultCrudRepository<
  RoomType,
  typeof RoomType.prototype.id,
  RoomTypeRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(RoomType, dataSource);
  }
}
