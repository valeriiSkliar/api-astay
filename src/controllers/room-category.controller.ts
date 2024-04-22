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
import {RoomCategory} from '../models';
import {RoomCategoryRepository} from '../repositories';

export class RoomCategoryController {
  constructor(
    @repository(RoomCategoryRepository)
    public roomCategoryRepository: RoomCategoryRepository,
  ) {}

  @post('/api/room-categories')
  @response(200, {
    description: 'RoomCategory model instance',
    content: {'application/json': {schema: getModelSchemaRef(RoomCategory)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoomCategory, {
            title: 'NewRoomCategory',
            exclude: ['id'],
          }),
        },
      },
    })
    roomCategory: Omit<RoomCategory, 'id'>,
  ): Promise<RoomCategory> {
    return this.roomCategoryRepository.create(roomCategory);
  }

  @get('/api/room-categories/count')
  @response(200, {
    description: 'RoomCategory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RoomCategory) where?: Where<RoomCategory>,
  ): Promise<Count> {
    return this.roomCategoryRepository.count(where);
  }

  @get('/api/room-categories')
  @response(200, {
    description: 'Array of RoomCategory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RoomCategory, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RoomCategory) filter?: Filter<RoomCategory>,
  ): Promise<RoomCategory[]> {
    return this.roomCategoryRepository.find(filter);
  }

  @patch('/api/room-categories')
  @response(200, {
    description: 'RoomCategory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoomCategory, {partial: true}),
        },
      },
    })
    roomCategory: RoomCategory,
    @param.where(RoomCategory) where?: Where<RoomCategory>,
  ): Promise<Count> {
    return this.roomCategoryRepository.updateAll(roomCategory, where);
  }

  @get('/api/room-categories/{id}')
  @response(200, {
    description: 'RoomCategory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RoomCategory, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RoomCategory, {exclude: 'where'})
    filter?: FilterExcludingWhere<RoomCategory>,
  ): Promise<RoomCategory> {
    return this.roomCategoryRepository.findById(id, filter);
  }

  @patch('/api/room-categories/{id}')
  @response(204, {
    description: 'RoomCategory PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RoomCategory, {partial: true}),
        },
      },
    })
    roomCategory: RoomCategory,
  ): Promise<void> {
    await this.roomCategoryRepository.updateById(id, roomCategory);
  }

  @put('/api/room-categories/{id}')
  @response(204, {
    description: 'RoomCategory PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() roomCategory: RoomCategory,
  ): Promise<void> {
    await this.roomCategoryRepository.replaceById(id, roomCategory);
  }

  @del('/api/room-categories/{id}')
  @response(204, {
    description: 'RoomCategory DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.roomCategoryRepository.deleteById(id);
  }
}
