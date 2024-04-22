import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Booking, BookingRelations, Apartment, Transfer} from '../models';
import {ApartmentRepository} from './apartment.repository';
import {TransferRepository} from './transfer.repository';

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

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource,
    @repository.getter('BookingRepository')
    protected bookingRepositoryGetter: Getter<BookingRepository>,
    @repository.getter('ApartmentRepository')
    protected apartmentRepositoryGetter: Getter<ApartmentRepository>,
    @repository.getter('TransferRepository')
    protected transferRepositoryGetter: Getter<TransferRepository>,
  ) {
    super(Booking, dataSource);
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
