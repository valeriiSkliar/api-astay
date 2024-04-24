import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {
  Booking,
  BookingRelations,
  Apartment,
  Transfer,
  Customer,
} from '../models';
import {ApartmentRepository} from './apartment.repository';
import {TransferRepository} from './transfer.repository';
import {CustomerRepository} from './customer.repository';

export class BookingRepository extends DefaultCrudRepository<
  Booking,
  typeof Booking.prototype.id,
  BookingRelations
> {
  public readonly apartment: BelongsToAccessor<
    Apartment,
    typeof Booking.prototype.id
  >;

  public readonly transfers: HasManyRepositoryFactory<
    Transfer,
    typeof Booking.prototype.id
  >;

  public readonly customer: BelongsToAccessor<
    Customer,
    typeof Booking.prototype.id
  >;

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
    @repository.getter('BookingRepository')
    protected bookingRepositoryGetter: Getter<BookingRepository>,
    @repository.getter('ApartmentRepository')
    protected apartmentRepositoryGetter: Getter<ApartmentRepository>,
    @repository.getter('TransferRepository')
    protected transferRepositoryGetter: Getter<TransferRepository>,
    @repository.getter('CustomerRepository')
    protected customerRepositoryGetter: Getter<CustomerRepository>,
  ) {
    super(Booking, dataSource);
    this.customer = this.createBelongsToAccessorFor(
      'customer',
      customerRepositoryGetter,
    );
    this.registerInclusionResolver('customer', this.customer.inclusionResolver);
    this.transfers = this.createHasManyRepositoryFactoryFor(
      'transfers',
      transferRepositoryGetter,
    );
    this.registerInclusionResolver(
      'transfers',
      this.transfers.inclusionResolver,
    );
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
