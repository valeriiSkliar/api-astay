// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {
  AmenityRepository,
  ApartmentRepository,
  BookingRepository,
  ComplexRepository,
  LocationsRepository,
  RoomCategoryRepository,
  RoomTypeRepository,
} from '../repositories';
import {get, post} from '@loopback/rest';
import {
  Amenity,
  Apartment,
  Complex,
  Locations,
  RoomCategory,
  RoomType,
} from '../models';

// import {inject} from '@loopback/core';
interface IApartmentFormData {
  complexes?: Complex[];
  roomTypes?: RoomType[];
  roomCategories?: RoomCategory[];
  locations?: Locations[];
  amenities?: Amenity[];
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
  ) {}

  @get('/api/admin-service/apartment', {
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
  async getDataForApartmentCreateForm(): Promise<IApartmentFormData> {
    const complexes = await this.complexRepository.find();
    const roomTypes = await this.roomTypeRepository.find();
    const roomCategories = await this.roomCategoryRepository.find();
    const locations = await this.locationsRepository.find();
    const amenities = await this.amenityRepository.find();
    return {
      complexes,
      roomTypes,
      roomCategories,
      locations,
      amenities,
      status: 200,
    };
  }
}
