import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Apartment, RoomCategory} from '../models';
import {ApartmentRepository} from '../repositories';

export class ApartmentRoomCategoryController {
  constructor(
    @repository(ApartmentRepository)
    public apartmentRepository: ApartmentRepository,
  ) {}

  @get('/apartments/{id}/room-category', {
    responses: {
      '200': {
        description: 'RoomCategory belonging to Apartment',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RoomCategory),
          },
        },
      },
    },
  })
  async getRoomCategory(
    @param.path.number('id') id: typeof Apartment.prototype.id,
  ): Promise<RoomCategory> {
    return this.apartmentRepository.roomCategory(id);
  }
}
