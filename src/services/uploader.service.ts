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

  public async reBuildOrderIndexesWhenDeletingPhoto({apartment_id, complex_id}: {apartment_id?: number, complex_id?: number}) {
    if (apartment_id) {
      const images = await this.reBuildOrderIndexesWhenDeletingPhotoByApartmentId(apartment_id);
      return images;
    } else if (complex_id) {
      const images = await this.reBuildOrderIndexesWhenDeletingPhotoByComplexId(complex_id);
      return images;
    }
  }
  private async reBuildOrderIndexesWhenDeletingPhotoByComplexId(complex_id: number) {
    const complexImages = await this.photoRepository.find(
      {
        where: { complex_id },
        fields: ['id', 'order_number'],
        order: ['order_number ASC'],
      }
    )
  // Rebuild the order indexes starting from 1
  if (complexImages.length > 0) {
    for (let index = 0; index < complexImages.length; index++) {
      const image = complexImages[index];
      const newOrderNumber = index + 1;

      // Only update if the new order number is different
      if (image.order_number !== newOrderNumber) {
        await this.photoRepository.updateById(image.id, { order_number: newOrderNumber });
      }
    }
  }
  return await this.photoRepository.find(
    {
      where: { complex_id },
      order: ['order_number ASC'],
    }
  )
  }
  private async reBuildOrderIndexesWhenDeletingPhotoByApartmentId(apartment_id: number) {
    const apartmentImages = await this.photoRepository.find(
      {
        where: { apartment_id },
        fields: ['id', 'order_number'],
        order: ['order_number ASC'],
      }
    )
  // Rebuild the order indexes starting from 1
  if (apartmentImages.length > 0) {
      for (let index = 0; index < apartmentImages.length; index++) {
    const image = apartmentImages[index];
    const newOrderNumber = index + 1;

    // Only update if the new order number is different
    if (image.order_number !== newOrderNumber) {
      await this.photoRepository.updateById(image.id, { order_number: newOrderNumber });
    }
  }

  }
  return await this.photoRepository.find(
    {
      where: { apartment_id },
      order: ['order_number ASC'],
    }
  )
  }
}
