import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LocalMysqlDataSource} from '../datasources';
import {Customer, CustomerRelations, Booking, Review} from '../models';
import {BookingRepository} from './booking.repository';
import {ReviewRepository} from './review.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {

  public readonly bookings: HasManyRepositoryFactory<Booking, typeof Customer.prototype.id>;

  public readonly reviews: HasManyRepositoryFactory<Review, typeof Customer.prototype.id>;

  constructor(@inject('datasources.local_mysql') dataSource: LocalMysqlDataSource, @repository.getter('BookingRepository') protected bookingRepositoryGetter: Getter<BookingRepository>, @repository.getter('ReviewRepository') protected reviewRepositoryGetter: Getter<ReviewRepository>,) {
    super(Customer, dataSource);
    this.reviews = this.createHasManyRepositoryFactoryFor('reviews', reviewRepositoryGetter,);
    this.registerInclusionResolver('reviews', this.reviews.inclusionResolver);
    this.bookings = this.createHasManyRepositoryFactoryFor('bookings', bookingRepositoryGetter,);
    this.registerInclusionResolver('bookings', this.bookings.inclusionResolver);
  }
}
