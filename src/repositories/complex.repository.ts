import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Complex, ComplexRelations} from '../models';

export class ComplexRepository extends DefaultCrudRepository<
  Complex,
  typeof Complex.prototype.id,
  ComplexRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Complex, dataSource);
  }
}
