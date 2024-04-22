import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Review, Complex} from '../models';
import {ReviewRepository} from '../repositories';

export class ReviewComplexController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
  ) {}

  @get('/reviews/{id}/complex', {
    responses: {
      '200': {
        description: 'Complex belonging to Review',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Complex),
          },
        },
      },
    },
  })
  async getComplex(
    @param.path.number('id') id: typeof Review.prototype.id,
  ): Promise<Complex> {
    return this.reviewRepository.complex(id);
  }
}
