import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {ComplexService, ComplexServiceRelations} from '../models';

export class ComplexServiceRepository extends DefaultCrudRepository<
  ComplexService,
  typeof ComplexService.prototype.id,
  ComplexServiceRelations
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(ComplexService, dataSource);
  }
}
