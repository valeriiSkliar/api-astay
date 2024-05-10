import {
  Count,
  CountSchema,
  EntityNotFoundError,
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
import {Apartment} from '../models';
import {ApartmentRepository} from '../repositories';
import {inject, service} from '@loopback/core';
import {ApartmentService, MailService} from '../services';
import {authenticate} from '@loopback/authentication';
import {Request, RestBindings} from '@loopback/rest';
import {format, isAfter, isBefore} from 'date-fns';
// import mailService from '../services/mail.service';

export class ApartmentController {
  constructor(
    @repository(ApartmentRepository)
    public apartmentRepository: ApartmentRepository,
    @service(ApartmentService) private apartmentService: ApartmentService,
    @inject(RestBindings.Http.REQUEST)
    private req: Request,
  ) {}

  @authenticate('jwt')
  @post('/api/apartments')
  @response(200, {
    description: 'Apartment model instance',
    content: {'application/json': {schema: getModelSchemaRef(Apartment)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          data: {
            schema: getModelSchemaRef(Apartment, {
              title: 'NewApartment',
              exclude: ['id'],
            }),
          },
        },
      },
    })
    {data}: Omit<Apartment, 'id'>,
  ): Promise<Apartment> {
    // console.log(data);
    return this.apartmentRepository.create(data);
  }

  @get('/api/apartments/count')
  @response(200, {
    description: 'Apartment model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Apartment) where?: Where<Apartment>,
  ): Promise<Count> {
    const url = this.req.url;
    const headers = {...this.req.headers};

    return this.apartmentRepository.count(where);
  }

  @get('/api/apartments')
  @response(200, {
    description: 'Array of Apartment model instances',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            count: {
              type: 'number',
              description: 'Count of Apartment model instances',
            },
            apartments: {
              type: 'array',
              items: getModelSchemaRef(Apartment, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  // @authenticate('jwt')
  async find(
    @param.filter(Apartment) filter?: Filter<Apartment>,
  ): Promise<{count: number; apartments: Apartment[]}> {
    let apartmentsImagesScope: Filter<Apartment> = {
      order: ['order_number ASC'],
    };
    let reviewsScope: Filter<Apartment> = {
      order: ['reviewDate DESC'],
    };
    if (!filter) {
      filter = {};
    }
    if (!filter.include) {
      filter.include = [];
    }
    if (!Array.isArray(filter.include)) {
      throw new Error('filter.include should be an Array');
    }
    apartmentsImagesScope = {
      order: ['order_number ASC'],
    };
    reviewsScope = {
      order: ['reviewDate DESC'],
    };
    filter.include.push({
      relation: 'images',
      scope: apartmentsImagesScope,
    });
    filter.include.push({
      relation: 'reviews',
      scope: reviewsScope,
    });
    const apartments = await this.apartmentService.find(filter);
    if (!apartments) {
      throw new Error('apartments is null');
    }
    if (!Array.isArray(apartments)) {
      throw new Error('apartments is not an Array');
    }
    return {count: apartments.length, apartments};
  }
  @authenticate('jwt')
  @patch('/api/apartments')
  @response(200, {
    description: 'Apartment PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartment, {partial: true}),
        },
      },
    })
    apartment: Apartment,
    @param.where(Apartment) where?: Where<Apartment>,
  ): Promise<Count> {
    return this.apartmentRepository.updateAll(apartment, where);
  }

  @get('/api/apartments/{id}')
  @response(200, {
    description: 'Apartment model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Apartment, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Apartment, {exclude: 'where'})
    filter?: FilterExcludingWhere<Apartment>,
  ): Promise<Apartment> {
    if (!id) {
      throw new EntityNotFoundError('Apartment', id);
    }
    const reviewsScope = {
      order: ['reviewDate DESC'],
    };

    let include = filter?.include ?? [];
    include = [
      ...include,
      {relation: 'images', scope: {order: ['order_number ASC']}},
    ];

    if (include.includes('reviews')) {
      include = include.map(i =>
        i === 'reviews' ? {relation: 'reviews', scope: reviewsScope} : i,
      );
    } else {
      include.push({relation: 'reviews', scope: reviewsScope});
    }

    filter = {...filter, include};
    console.log(await this.apartmentService.findById(id, filter));
    try {
      return await this.apartmentService.findById(id, filter);
    } catch (err) {
      if (err instanceof EntityNotFoundError) {
        throw err;
      }
      throw new Error(`Failed to find apartment by id ${id}\n${err.stack}`);
    }
  }

  @authenticate('jwt')
  @patch('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartment, {partial: true}),
        },
      },
    })
    apartment: Partial<Apartment>,
  ): Promise<void> {


    await this.apartmentRepository.updateById(id, apartment);
  }

  @authenticate('jwt')
  @put('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() apartment: Apartment,
  ): Promise<void> {
    await this.apartmentRepository.replaceById(id, apartment);
  }

  @authenticate('jwt')
  @del('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.apartmentRepository.deleteById(id);
  }

  @authenticate('jwt')
  @patch('/api/apartments/{id}/update-disabled-dates')
  @response(200, {
    description: 'Apartment PATCH success',
    content: {'application/json': {schema: getModelSchemaRef(Apartment)}},
  })
  @response(204, {
    description: 'Apartment PATCH success',
  })
  async updateDisabledDatesById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              propertyName: {
                type: 'string',
              },
              disabledDates: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
            required: ['hostDisabledDates'],
          },
        },
      },
    })
    data: {hostDisabledDates: string[]},
  ): Promise<Partial<Apartment>> {
    const apartment = await this.apartmentRepository.findById(id);
    if (!apartment) {
      throw new EntityNotFoundError(Apartment, id);
    }

    if (!data.hostDisabledDates) {
      throw new Error('Need to pass disabled dates. Dates are required');
    }
    const {hostDisabledDates} = data;
    if (!Array.isArray(hostDisabledDates)) {
      throw new Error('Invalid dates format');
    }
    const uniqueSet = new Set(hostDisabledDates);
    const uniqueArray = Array.from(uniqueSet);

    const filterAndNormalize = uniqueArray
      .filter(date => isAfter(date, Date.now()))
      .map(date => {
        return new Date(format(String(date), 'yyyy-MM-dd'));
      })
      .sort((a, b) => a.getTime() - b.getTime());

    apartment.hostDisabledDates = filterAndNormalize;

    await this.apartmentRepository.updateById(id, apartment);
    return await this.apartmentRepository.findById(id, {
      fields: ['id', 'hostDisabledDates', 'disabledDates'],
    });
  }
}
