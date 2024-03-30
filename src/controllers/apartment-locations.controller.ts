import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Apartment, Locations} from '../models';
import {ApartmentRepository} from '../repositories';

export class ApartmentLocationsController {
  constructor(
    @repository(ApartmentRepository)
    public apartmentRepository: ApartmentRepository,
  ) {}

  @get('/api/apartments/{id}/locations', {
    responses: {
      '200': {
        description: 'Locations belonging to Apartment',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Locations),
          },
        },
      },
    },
  })
  async getLocations(
    @param.path.number('id') id: typeof Apartment.prototype.id,
  ): Promise<Locations> {
    return this.apartmentRepository.locationDetails(id);
  }
}
