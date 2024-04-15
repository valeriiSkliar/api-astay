import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Review,
  Apartment,
} from '../models';
import {ReviewRepository} from '../repositories';

export class ReviewApartmentController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
  ) { }

  @get('/reviews/{id}/apartment', {
    responses: {
      '200': {
        description: 'Apartment belonging to Review',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Apartment),
          },
        },
      },
    },
  })
  async getApartment(
    @param.path.number('id') id: typeof Review.prototype.id,
  ): Promise<Apartment> {
    return this.reviewRepository.apartment(id);
  }
}
