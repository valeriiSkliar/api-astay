import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Transfer, TransferRelations, Customer} from '../models';
import {CustomerRepository} from './customer.repository';

export class TransferRepository extends DefaultCrudRepository<
  Transfer,
  typeof Transfer.prototype.id,
  TransferRelations
> {

  public readonly customer: BelongsToAccessor<Customer, typeof Transfer.prototype.id>;

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource, @repository.getter('CustomerRepository') protected customerRepositoryGetter: Getter<CustomerRepository>,
  ) {
    super(Transfer, dataSource);
    this.customer = this.createBelongsToAccessorFor('customer', customerRepositoryGetter,);
    this.registerInclusionResolver('customer', this.customer.inclusionResolver);
  }
}
