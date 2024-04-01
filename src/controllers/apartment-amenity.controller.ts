// import {
//   Count,
//   CountSchema,
//   Filter,
//   repository,
//   Where,
// } from '@loopback/repository';
// import {
//   del,
//   get,
//   getModelSchemaRef,
//   getWhereSchemaFor,
//   param,
//   patch,
//   post,
//   requestBody,
// } from '@loopback/rest';
// import {Apartment, AmenitiesList, Amenity} from '../models';
// import {ApartmentRepository} from '../repositories';

// export class ApartmentAmenityController {
//   constructor(
//     @repository(ApartmentRepository)
//     protected apartmentRepository: ApartmentRepository,
//   ) {}

//   @get('/api/apartments/{id}/amenities', {
//     responses: {
//       '200': {
//         description:
//           'Array of Apartment has many Amenity through AmenitiesList',
//         content: {
//           'application/json': {
//             schema: {type: 'array', items: getModelSchemaRef(Amenity)},
//           },
//         },
//       },
//     },
//   })
//   async find(
//     @param.path.number('id') id: number,
//     @param.query.object('filter') filter?: Filter<Amenity>,
//   ): Promise<Amenity[]> {
//     return this.apartmentRepository.amenities(id).find(filter);
//   }

//   @post('/api/apartments/{id}/amenities', {
//     responses: {
//       '200': {
//         description: 'create a Amenity model instance',
//         content: {'application/json': {schema: getModelSchemaRef(Amenity)}},
//       },
//     },
//   })
//   async create(
//     @param.path.number('id') id: typeof Apartment.prototype.id,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Amenity, {
//             title: 'NewAmenityInApartment',
//             exclude: ['id'],
//           }),
//         },
//       },
//     })
//     amenity: Omit<Amenity, 'id'>,
//   ): Promise<Amenity> {
//     return this.apartmentRepository.amenities(id).create(amenity);
//   }

//   @patch('/api/apartments/{id}/amenities', {
//     responses: {
//       '200': {
//         description: 'Apartment.Amenity PATCH success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async patch(
//     @param.path.number('id') id: number,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Amenity, {partial: true}),
//         },
//       },
//     })
//     amenity: Partial<Amenity>,
//     @param.query.object('where', getWhereSchemaFor(Amenity))
//     where?: Where<Amenity>,
//   ): Promise<Count> {
//     return this.apartmentRepository.amenities(id).patch(amenity, where);
//   }

//   @del('/api/apartments/{id}/amenities', {
//     responses: {
//       '200': {
//         description: 'Apartment.Amenity DELETE success count',
//         content: {'application/json': {schema: CountSchema}},
//       },
//     },
//   })
//   async delete(
//     @param.path.number('id') id: number,
//     @param.query.object('where', getWhereSchemaFor(Amenity))
//     where?: Where<Amenity>,
//   ): Promise<Count> {
//     return this.apartmentRepository.amenities(id).delete(where);
//   }
// }
