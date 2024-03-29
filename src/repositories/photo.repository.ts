import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Photo, PhotoRelations} from '../models';

export class PhotoRepository extends DefaultCrudRepository<
  Photo,
  typeof Photo.prototype.id,
  PhotoRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(Photo, dataSource);
  }
}
