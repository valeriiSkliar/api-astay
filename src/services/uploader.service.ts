import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {ApartmentRepository, ComplexRepository, PhotoRepository} from '../repositories';
import {Complex} from '../models';

@injectable({scope: BindingScope.TRANSIENT})
export class UploaderService {
  constructor(
    @repository(ApartmentRepository) private apartmentRepository: ApartmentRepository,
    @repository(ComplexRepository) private complexRepository: ComplexRepository,
    @repository(PhotoRepository) private photoRepository: PhotoRepository
  ) {}


  public async repositoryFabric(values: {apartment_id?: number, complex_id?: number}) {
    if (values.apartment_id) {
      return this.getLastApartmentImageIndex(values.apartment_id);
    } else if (values.complex_id) {
      return this.getLastComplexImageIndex(values.complex_id);
    }
  }

  private async getLastApartmentImageIndex(id: number) {
    const images = await this.photoRepository.find(
      {
        where: { apartment_id: id },
      fields: ['order_number'],
      },
    );
    const sortedImages = images.sort((a, b) => a.order_number - b.order_number);
    const lastImageOrderNumber = sortedImages[sortedImages.length - 1]?.order_number || 1;
    console.log('lastImageOrderNumber', lastImageOrderNumber);
    return lastImageOrderNumber === 1 && images.length === 0
      ? lastImageOrderNumber : lastImageOrderNumber + 1;
  }

  private async getLastComplexImageIndex(id: number) {
    const images = await this.photoRepository.find(
      {
        where: { complex_id: id },
      fields: ['order_number'],
      },
    );
    const sortedImages = images.sort((a, b) => a.order_number - b.order_number);
    const lastImageOrderNumber = sortedImages[sortedImages.length - 1]?.order_number || 1;
    console.log('lastImageOrderNumber', lastImageOrderNumber);
    return lastImageOrderNumber === 1 && images.length === 0
      ? lastImageOrderNumber : lastImageOrderNumber + 1;
  }

}
