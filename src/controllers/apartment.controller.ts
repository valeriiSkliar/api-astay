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
// import mailService from '../services/mail.service';

export class ApartmentController {
  constructor(
    @repository(ApartmentRepository)
    public apartmentRepository: ApartmentRepository,
    @service(ApartmentService) private apartmentService: ApartmentService,
    @inject(RestBindings.Http.REQUEST)
    private req: Request,
  ) {}

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
    const html =
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="width=device-width,initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><link rel="stylesheet" href="./style.css"></head><body><div dir="ltr" class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="background-position:center top"><tbody><tr><td class="esd-email-paddings" valign="top"><table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="560" style="border-radius:10px 10px 0 0"><tbody><tr><td class="esd-structure es-p20" align="left"><!--[if mso]><table width="520" cellpadding="0" cellspacing="0"><tr><td width="250" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" align="left" class="es-left"><tbody><tr><td width="250" class="es-m-p0r esd-container-frame es-m-p20b" valign="top" align="center"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="esd-block-image es-m-txt-c" style="font-size:0"><a target="_blank" href="https://viewstripo.email"><img src="https://echcsei.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/1200pxoutline_of_ukrainesvg.png" alt="Logo" style="display:block" title="Logo" width="58"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]><td width="20"></td><td width="250" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody><tr><td width="250" align="left" class="esd-container-frame"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="right" class="esd-block-text es-m-txt-c"><p>This is Auto-Reply</p></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]><![endif]--></td></tr><tr><td class="esd-structure es-p5t es-p5b" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://echcsei.stripocdn.email/content/guids/CABINET_4bcca2afc9156fbbd6e09babbb92c2d0/images/group_37_rH7.png" alt style="display:block" width="560"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="560"><tbody><tr><td class="esd-structure es-p20t es-p30b es-p20l" align="left"><!--[if mso]><table width="540" cellpadding="0" cellspacing="0"><tr><td width="327" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" align="left" class="es-left"><tbody><tr><td width="327" class="es-m-p0r esd-container-frame es-m-p20b" valign="top" align="center"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="esd-block-text es-p20t es-p10b es-m-p20r es-m-txt-l"><h1>Thanks for Your Email.<br></h1></td></tr><tr><td align="left" class="esd-block-text es-p10t es-p10b es-p10r es-m-p20r"><p>I will answer as soon as possible.</p></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]><td width="5"></td><td width="208" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody><tr><td width="208" align="left" class="esd-container-frame"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image" style="font-size:0"><img class="adapt-img" src="./Girl.png" alt style="display:block" width="208"></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]><![endif]--></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="560" bgcolor="rgba(0, 0, 0, 0)" style="border-radius:0 0 10px 10px"><tbody><tr><td class="esd-structure es-p5t es-p5b" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://echcsei.stripocdn.email/content/guids/CABINET_6369f7e833d10e63cc6e7964ca64418d/images/group_37_ikx.png" alt style="display:block" width="560"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p30b es-p20r es-p20l" align="left" esd-custom-block-id="396918"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="520" class="esd-container-frame" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-social es-p10t es-p10b" style="font-size:0"><table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social"><tbody><tr><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://www.instagram.com/roman_klimashenko"><img title="Instagram" src="https://semklim.vercel.app/assets/images/instagram.3a703010.svg" alt="Inst" width="32" height="32"></a></td><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://github.com/semklim"><img title="GitHub" src="https://semklim.vercel.app/assets/images/github.f98e60b8.svg" alt="github" width="32" height="32"></a></td><td align="center" valign="top"><a target="_blank" href="https://www.linkedin.com/in/roman-klymashenko-a2a483238"><img title="LinkedIn" src="https://semklim.vercel.app/assets/images/linkedin.a69bf286.svg" alt="linkedin" width="32" height="32"></a></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-text es-p10t es-p10b" esd-links-color="#ffffff" esd-links-underline="none"><p style="font-size:12px">You received this email because you visited my site or contacted me using the contact form.<br><strong><a href="mailto:romanklimashenko@gmail.com" target="_blank" style="font-size:12px">Unsubscribe</a></strong></p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></body></html>';

    // const res = await mailService.sendEmail({from: '"AstayHome" info@astayhome.com', to: 'valeriisklyarov@gmail.com', subject: 'test', text: '', html: html});
    // console.log('res', res);
    const url = this.req.url;
    const headers = {...this.req.headers};
    console.log('headers', headers, 'url', url);
    console.log('req', this.req);
    console.log('req', this.req.ip);
    // 'x-forwarded-for'
    console.log('req', this.req.headers['x-forwarded-for']);

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

    try {
      return await this.apartmentService.findById(id, filter);
    } catch (err) {
      if (err instanceof EntityNotFoundError) {
        throw err;
      }
      throw new Error(`Failed to find apartment by id ${id}\n${err.stack}`);
    }
  }

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

  @del('/api/apartments/{id}')
  @response(204, {
    description: 'Apartment DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.apartmentRepository.deleteById(id);
  }

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
            required: ['propertyName', 'hostDisabledDates'],
          },
        },
      },
    })
    data: {propertyName: string; hostDisabledDates: string[]},
  ): Promise<void> {
    console.log('data', data);
    console.log('id', id);
    const apartment = await this.apartmentRepository.findById(id);
    if (!apartment) {
      throw new EntityNotFoundError(Apartment, id);
    }

    apartment[data.propertyName] = data.hostDisabledDates;
    console.log('apartment', apartment);

    await this.apartmentRepository.updateById(id, apartment);
  }
}
