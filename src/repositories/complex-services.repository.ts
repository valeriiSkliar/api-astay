import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {ComplexServices, ComplexServicesRelations} from '../models';

export class ComplexServicesRepository extends DefaultCrudRepository<
  ComplexServices,
  typeof ComplexServices.prototype.id,
  ComplexServicesRelations
> {
  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
  ) {
    super(ComplexServices, dataSource);
  }
}
