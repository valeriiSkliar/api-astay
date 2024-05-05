// Uncomment these imports to begin using these cool features!

import {FilterExcludingWhere, repository} from '@loopback/repository';
import {
  AmenityRepository,
  ApartmentRepository,
  BookingRepository,
  ComplexRepository,
  LocationsRepository,
  RoomCategoryRepository,
  RoomTypeRepository,
} from '../repositories';
import {get, param, post} from '@loopback/rest';
import {
  Amenity,
  Apartment,
  Complex,
  Locations,
  RoomCategory,
  RoomType,
} from '../models';

// import {inject} from '@loopback/core';
export interface IApartmentFormData {
  complexes?: Complex[];
  roomTypes?: RoomType[];
  roomCategories?: RoomCategory[];
  locations?: Locations[];
  amenities?: Amenity[];
  apartment?: Apartment;
  status?: number;
}

export class AdminServiceController {
  constructor(
    @repository('ComplexRepository')
    private complexRepository: ComplexRepository,
    @repository('RoomTypeRepository')
    private roomTypeRepository: RoomTypeRepository,
    @repository('RoomCategoryRepository')
    private roomCategoryRepository: RoomCategoryRepository,
    @repository('LocationsRepository')
    private locationsRepository: LocationsRepository,
    @repository('AmenityRepository')
    private amenityRepository: AmenityRepository,
    @repository('ApartmentRepository')
    private apartmentRepository: ApartmentRepository,
  ) {}

  @get('/api/admin-service/apartment/{id}', {
    responses: {
      '200': {
        description: 'Apartment model instance',
        content: {
          'application/json': {
            schema: {
              complexes: {},
            },
          },
        },
      },
    },

  })
  async getDataForApartmentCreateForm(
    @param.path.number('id') id: number,
  ): Promise<IApartmentFormData> {
    const complexes = await this.complexRepository.find();
    const roomTypes = await this.roomTypeRepository.find();
    const roomCategories = await this.roomCategoryRepository.find();
    const locations = await this.locationsRepository.find();
    const amenities = await this.amenityRepository.find();
    const apartment = await this.apartmentRepository.findById(id);
    return {
      complexes,
      roomTypes,
      roomCategories,
      locations,
      amenities,
      apartment,
      status: 200,
    };
  }
}
