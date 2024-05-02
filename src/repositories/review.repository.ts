import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Review, ReviewRelations, Apartment, Complex, Customer} from '../models';
import {ApartmentRepository} from './apartment.repository';
import {ComplexRepository} from './complex.repository';
import {CustomerRepository} from './customer.repository';

export class ReviewRepository extends DefaultCrudRepository<
  Review,
  typeof Review.prototype.id,
  ReviewRelations
> {
  public readonly apartment: BelongsToAccessor<
    Apartment,
    typeof Review.prototype.id
  >;

  public readonly complex: BelongsToAccessor<
    Complex,
    typeof Review.prototype.id
  >;

  public readonly customer: BelongsToAccessor<
    Customer,
    typeof Review.prototype.id
  >;

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
    @repository.getter('ApartmentRepository')
    protected apartmentRepositoryGetter: Getter<ApartmentRepository>,
    @repository.getter('ComplexRepository')
    protected complexRepositoryGetter: Getter<ComplexRepository>,
    @repository.getter('CustomerRepository')
    protected customerRepositoryGetter: Getter<CustomerRepository>,
  ) {
    super(Review, dataSource);
    this.customer = this.createBelongsToAccessorFor(
      'customer',
      customerRepositoryGetter,
    );
    this.registerInclusionResolver('customer', this.customer.inclusionResolver);
    this.complex = this.createBelongsToAccessorFor(
      'complex',
      complexRepositoryGetter,
    );
    this.registerInclusionResolver('complex', this.complex.inclusionResolver);
    this.apartment = this.createBelongsToAccessorFor(
      'apartment',
      apartmentRepositoryGetter,
    );
    this.registerInclusionResolver(
      'apartment',
      this.apartment.inclusionResolver,
    );
  }
}
