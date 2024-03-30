import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Apartment, Complex} from '../models';
import {ApartmentRepository} from '../repositories';

export class ApartmentComplexController {
  constructor(
    @repository(ApartmentRepository)
    public apartmentRepository: ApartmentRepository,
  ) {}

  @get('/api/apartments/{id}/complex', {
    responses: {
      '200': {
        description: 'Complex belonging to Apartment',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Complex),
          },
        },
      },
    },
  })
  async getComplex(
    @param.path.number('id') id: typeof Apartment.prototype.id,
  ): Promise<Complex> {
    return this.apartmentRepository.in_complex(id);
  }
}
