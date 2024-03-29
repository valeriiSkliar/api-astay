import {inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Apartment, ApartmentRelations} from '../models';

export class ApartmentRepository extends DefaultCrudRepository<
  Apartment,
  typeof Apartment.prototype.id,
  ApartmentRelations
> {
  // public apartmentAmenities: HasManyRepositoryFactory<ApartmentAmenity, typeof Apartment.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    // @repository(ApartmentAmenityRepository) protected apartmentAmenityRepository: ApartmentAmenityRepository,
  ) {
    super(Apartment, dataSource);
    // this.apartmentAmenities = this.createHasManyRepositoryFactoryFor('amenities', () => Promise.resolve(apartmentAmenityRepository));
  }
}
