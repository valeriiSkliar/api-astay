import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {RoomType} from '../models';
import {RoomTypeRepository} from '../repositories';

export class RoomTypeController {
  constructor(
    @repository(RoomTypeRepository)
    public roomTypeRepository : RoomTypeRepository,
  ) {}

  @post('/api/room-types')
  @response(200, {
    description: 'RoomType model instance',
    content: {'application/json': {schema: getModelSchemaRef(RoomType)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoomType, {
            title: 'NewRoomType',
            exclude: ['id'],
          }),
        },
      },
    })
    roomType: Omit<RoomType, 'id'>,
  ): Promise<RoomType> {
    return this.roomTypeRepository.create(roomType);
  }

  @get('/api/room-types/count')
  @response(200, {
    description: 'RoomType model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RoomType) where?: Where<RoomType>,
  ): Promise<Count> {
    return this.roomTypeRepository.count(where);
  }

  @get('/api/room-types')
  @response(200, {
    description: 'Array of RoomType model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RoomType, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RoomType) filter?: Filter<RoomType>,
  ): Promise<RoomType[]> {
    return this.roomTypeRepository.find(filter);
  }

  @patch('/api/room-types')
  @response(200, {
    description: 'RoomType PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoomType, {partial: true}),
        },
      },
    })
    roomType: RoomType,
    @param.where(RoomType) where?: Where<RoomType>,
  ): Promise<Count> {
    return this.roomTypeRepository.updateAll(roomType, where);
  }

  @get('/api/room-types/{id}')
  @response(200, {
    description: 'RoomType model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RoomType, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RoomType, {exclude: 'where'}) filter?: FilterExcludingWhere<RoomType>
  ): Promise<RoomType> {
    return this.roomTypeRepository.findById(id, filter);
  }

  @patch('/api/room-types/{id}')
  @response(204, {
    description: 'RoomType PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoomType, {partial: true}),
        },
      },
    })
    roomType: RoomType,
  ): Promise<void> {
    await this.roomTypeRepository.updateById(id, roomType);
  }

  @put('/api/room-types/{id}')
  @response(204, {
    description: 'RoomType PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() roomType: RoomType,
  ): Promise<void> {
    await this.roomTypeRepository.replaceById(id, roomType);
  }

  @del('/api/room-types/{id}')
  @response(204, {
    description: 'RoomType DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.roomTypeRepository.deleteById(id);
  }
}
