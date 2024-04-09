import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Complex,
  Photo,
} from '../models';
import {ComplexRepository} from '../repositories';

export class ComplexPhotoController {
  constructor(
    @repository(ComplexRepository) protected complexRepository: ComplexRepository,
  ) { }

  @get('/complexes/{id}/photos', {
    responses: {
      '200': {
        description: 'Array of Complex has many Photo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Photo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Photo>,
  ): Promise<Photo[]> {
    return this.complexRepository.images(id).find(filter);
  }

  @post('/complexes/{id}/photos', {
    responses: {
      '200': {
        description: 'Complex model instance',
        content: {'application/json': {schema: getModelSchemaRef(Photo)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Complex.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Photo, {
            title: 'NewPhotoInComplex',
            exclude: ['id'],
            optional: ['complex_id']
          }),
        },
      },
    }) photo: Omit<Photo, 'id'>,
  ): Promise<Photo> {
    return this.complexRepository.images(id).create(photo);
  }

  @patch('/complexes/{id}/photos', {
    responses: {
      '200': {
        description: 'Complex.Photo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Photo, {partial: true}),
        },
      },
    })
    photo: Partial<Photo>,
    @param.query.object('where', getWhereSchemaFor(Photo)) where?: Where<Photo>,
  ): Promise<Count> {
    return this.complexRepository.images(id).patch(photo, where);
  }

  @del('/complexes/{id}/photos', {
    responses: {
      '200': {
        description: 'Complex.Photo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Photo)) where?: Where<Photo>,
  ): Promise<Count> {
    return this.complexRepository.images(id).delete(where);
  }
}
