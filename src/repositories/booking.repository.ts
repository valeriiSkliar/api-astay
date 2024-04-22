import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Booking, BookingRelations, Apartment} from '../models';
import {ApartmentRepository} from './apartment.repository';

export class BookingRepository extends DefaultCrudRepository<
  Booking,
  typeof Booking.prototype.id,
  BookingRelations
> {

  public readonly apartment: BelongsToAccessor<Apartment, typeof Booking.prototype.id>;

  constructor(
    @inject('datasources.local_mysql') dataSource: LocalMysqlDataSource, @repository.getter('BookingRepository') protected bookingRepositoryGetter: Getter<BookingRepository>, @repository.getter('ApartmentRepository') protected apartmentRepositoryGetter: Getter<ApartmentRepository>,
  ) {
    super(Booking, dataSource);
    this.apartment = this.createBelongsToAccessorFor('apartment', apartmentRepositoryGetter,);
    this.registerInclusionResolver('apartment', this.apartment.inclusionResolver);
  }
}
