import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Error: bad inputDataSource} from '../datasources';
import {RoomCategory, RoomCategoryRelations} from '../models';

export class RoomCategoryRepository extends DefaultCrudRepository<
  RoomCategory,
  typeof RoomCategory.prototype.id,
  RoomCategoryRelations
> {
  constructor(
    @inject('datasources.') dataSource: Error: bad inputDataSource,
  ) {
    super(RoomCategory, dataSource);
  }
}
