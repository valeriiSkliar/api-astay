import {authenticate} from '@loopback/authentication';
import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Photo} from '../models';
import {PhotoRepository} from '../repositories';
import {UploaderService} from '../services';

export class PhotoController {
  constructor(
    @repository(PhotoRepository)
    public photoRepository: PhotoRepository,
    @service(UploaderService) private uploaderService: UploaderService,
  ) { }

  @post('/api/photos')
  @response(200, {
    description: 'Photo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Photo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Photo, {
            title: 'NewPhoto',
            exclude: ['id'],
          }),
        },
      },
    })
    photo: Omit<Photo, 'id'>,
  ): Promise<Photo> {
    return this.photoRepository.create(photo);
  }

  @get('/api/photos/count')
  @response(200, {
    description: 'Photo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Photo) where?: Where<Photo>): Promise<Count> {
    return this.photoRepository.count(where);
  }

  @get('/api/photos')
  @response(200, {
    description: 'Array of Photo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Photo, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Photo) filter?: Filter<Photo>): Promise<Photo[]> {


    filter = {
      ...filter,
      order: filter?.order ?? ['order_number ASC'],
    };
    const photos = await this.photoRepository.find(filter);
    return photos;
  }

  @patch('/api/photos')
  @response(200, {
    description: 'Photo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Photo, {partial: true}),
        },
      },
    })
    photo: Photo,
    @param.where(Photo) where?: Where<Photo>,
  ): Promise<Count> {


    return this.photoRepository.updateAll(photo, where);
  }

  @get('/api/photos/{id}')
  @response(200, {
    description: 'Photo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Photo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: number,
    @param.filter(Photo, {exclude: 'where'})
    filter?: FilterExcludingWhere<Photo>,
  ): Promise<Photo> {


    return this.photoRepository.findById(id, filter);
  }

  @patch('/api/photos/{id}')
  @response(204, {
    description: 'Photo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Photo, {partial: true}),
        },
      },
    })
    photo: Photo,
  ): Promise<void> {


    await this.photoRepository.updateById(id, photo);
  }

  @put('/api/photos/{id}')
  @response(204, {
    description: 'Photo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: number,
    @requestBody() photo: Photo,
  ): Promise<void> {


    await this.photoRepository.replaceById(id, photo);
  }
  @authenticate('jwt')
  @del('/api/photos/{id}')
  @response(204, {
    description: 'Photo DELETE success',
  })
  async deleteById(@param.path.string('id') id: number): Promise<Photo[]> {


    const {apartment_id, complex_id} = await this.photoRepository.findById(id);
    await this.photoRepository.deleteById(id);
    if (apartment_id || complex_id) {
      return (
        (await this.uploaderService.reBuildOrderIndexesWhenDeletingPhoto({
          apartment_id,
          complex_id,
        })) || []
      );
    } else {
      return [];
    }
  }

  @put('/api/photos/update-order')
  @response(204, {
    description: 'Bulk update of the order of Photos',
  })
  async updateOrder(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {type: 'number'},
                order_number: {type: 'number'},
              },
              required: ['id', 'order_number'],
            },
          },
        },
      },
    })
    orderUpdates: Array<{id: number; order_number: number}>,
  ): Promise<Photo[]> {


    await Promise.all(
      orderUpdates.map(async orderUpdate =>
        this.photoRepository.updateById(orderUpdate.id, {
          order_number: orderUpdate.order_number,
        }),
      ),
    );
    return Promise.all(
      orderUpdates.map(async orderUpdate =>
        this.photoRepository.findById(orderUpdate.id),
      ),
    );
  }
}
