import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Apartment,
  RoomType,
} from '../models';
import {ApartmentRepository} from '../repositories';

export class ApartmentRoomTypeController {
  constructor(
    @repository(ApartmentRepository)
    public apartmentRepository: ApartmentRepository,
  ) { }

  @get('/apartments/{id}/room-type', {
    responses: {
      '200': {
        description: 'RoomType belonging to Apartment',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RoomType),
          },
        },
      },
    },
  })
  async getRoomType(
    @param.path.number('id') id: typeof Apartment.prototype.id,
  ): Promise<RoomType> {
    return this.apartmentRepository.room_type(id);
  }
}
