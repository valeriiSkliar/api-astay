import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Complex,
  Locations,
} from '../models';
import {ComplexRepository} from '../repositories';

export class ComplexLocationsController {
  constructor(
    @repository(ComplexRepository)
    public complexRepository: ComplexRepository,
  ) { }

  @get('/complexes/{id}/locations', {
    responses: {
      '200': {
        description: 'Locations belonging to Complex',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Locations),
          },
        },
      },
    },
  })
  async getLocations(
    @param.path.number('id') id: typeof Complex.prototype.id,
  ): Promise<Locations> {
    return this.complexRepository.locationDetails(id);
  }
}
