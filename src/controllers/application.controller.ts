import {
  Count,
  CountSchema,
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
  HttpErrors,
  RestBindings,
  sanitizeJsonParse,
} from '@loopback/rest';
import {Applications} from '../models';
import {ApplicationsRepository} from '../repositories';
import {
  SubmissionTrackingServiceService,
  SUBMIT_TRACKING_SERVICE,
} from '../services/index';
import {inject} from '@loopback/context';
import {Request, request, Response} from 'express';
import axios from 'axios';
// import   MailService from '../services/mail.service';
import {ConfirmedTransferEmail, RequestEmail} from '../emailTemplates/locales/en';
import {render} from '@react-email/components';
export class ApplicationController {
  constructor(
    @repository(ApplicationsRepository)
    public applicationsRepository: ApplicationsRepository,
    @inject(SUBMIT_TRACKING_SERVICE)
    private submissionTrackingService: SubmissionTrackingServiceService,
    @inject(RestBindings.Http.REQUEST)
    private request: Request,
  ) {}

  @post('/api/contact-us-submit')
  // @response(200, {
  //   description: 'Applications model instance',
  //   content: {'application/json': {schema: getModelSchemaRef(Applications)}},
  // })
  async submitContactForm(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Applications, {
            exclude: [
              'id',
              'createdAt',
              'isProcessed',
              'isArchived',
              'isOpened',
            ],
          }),
        },
      },
    })
    contactData: Partial<Applications>,
  ): Promise<{status: string; message: string}> {
    // TODO: turn on this code when ready

    // const clientIp = this.request.ip;
    // if(clientIp) {
    //   this.submissionTrackingService.incrementSubmissionCount(clientIp);
    // }

    // if(clientIp && this.submissionTrackingService.hasExceededLimit(clientIp, 5)) {
    //   throw new HttpErrors.BadRequest('Too many requests. Please try again later.');
    // }

    // if(clientIp) {
    //   console.log('incrementSubmissionCount', clientIp);
    //   this.submissionTrackingService.incrementSubmissionCount(clientIp);
    // };
    console.log('contactData', contactData);

    try {
      const {type, pageLink, name, email, phone} = contactData;

      // Validation logic based on form type
      if (
        type !== 'forOwners-short' &&
        (!type || !pageLink || !email || !phone || !name)
      ) {
        console.log('type !== `forOwners-short`', 'Missing required fields');
        throw new HttpErrors.BadRequest('Missing required fields');
      } else if (
        type === 'forOwners-short' &&
        (!type || !pageLink || !phone || !name)
      ) {
        console.log('type === `forOwners-short`', 'Missing required fields');
        // Only email is optional for 'forOwners-short'
        throw new HttpErrors.BadRequest('Missing required fields');
      }

      const newApplication = new Applications({
        ...contactData,
        email: type === 'forOwners-short' ? email || '' : email,
      });

      await this.applicationsRepository.create(newApplication);
      // Send request to admin panel app
      // const adminPanelUrl = 'https://adminpanelapp.com/api/notifications';
      // const notificationData = {
      //   message: 'New application submitted',
      //   application: newApplication, // Assuming newApplication is the newly created application object
      // };

      // try {
      //   const response = await axios.put(
      //     'http://localhost:3000/api/applications',
      //     notificationData,
      //   );
      // } catch (error) {
      //   console.error('Error making external request:', error);
      //   throw new Error('Failed to fetch data from external API');
      // }
// MOCKED DATA
      // const requestData: RequestEmailData = {
      //   customerName: 'Nik',
      //   hostContacts: {
      //     name: "AstayHome",
      //     email: 'support@astayhome.com',
      //     phone: "+777712222111",
      //     telegram: "tg://t.me/@{USERNAME}",
      //     whatsapp: "https://wa.me/+971542502604",
      //     instagram: "instagram://user?username={USERNAME}",
      //     youtube: "https://www.youtube.com/",
      //   },
      // }

      const confirmedTransfer: ConfirmedTransferEmailData = {
        customerName: 'Nik',
        hostContacts: {
          name: "AstayHome",
          email: 'support@astayhome.com',
          phone: "+777712222111",
          telegram: "tg://t.me/@{USERNAME}",
          whatsapp: "https://wa.me/+971542502604",
          instagram: "instagram://user?username={USERNAME}",
          youtube: "https://www.youtube.com/",
        },
        transfer: {
          from: {
            title: 'From Airport',
            text: '฿1400'
          },
          to: {
            title: 'To Airport',
            text: '฿1400'
          }
        },
        totalPrice: { title: 'Total', text: '฿2800' },
      }


      // Send email
      // MailService.sendEmail({
      //   to: 'valeriisklyarov@gmail.com',
      //   from: '"AstayHome" support@astayhome.com',
      //   subject: 'New application submitted',
      //   html: render(RequestEmail({data: requestData})),
      // })
      // MailService.sendEmail({
      //   to: 'valeriisklyarov@gmail.com',
      //   from: '"AstayHome" support@astayhome.com',
      //   subject: 'New transfer booking',
      //   html: render(ConfirmedTransferEmail({data: confirmedTransfer})),
      // })
      return {status: 'success', message: 'Form submitted successfully!'};
    } catch (err) {
      if (err.name === 'ValidationError') {
        const fields: string[] = Object.keys(err.details.constraints);
        const errorMessages = fields.map(
          field => err.details.constraints[field],
        );
        return {status: 'error', message: errorMessages.join(', ')};
      }
      if (err.message) {
        return {status: 'error', message: err.message};
      } else {
        return {status: 'error', message: 'Error processing form data'};
      }
    }
  }

  @post('/api/applications')
  @response(200, {
    description: 'Applications model instance',
    content: {'application/json': {schema: getModelSchemaRef(Applications)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Applications, {
            title: 'NewApplications',
            exclude: ['id'],
          }),
        },
      },
    })
    applications: Omit<Applications, 'id'>,
  ): Promise<Applications> {
    return this.applicationsRepository.create(applications);
  }

  @get('/api/applications/count')
  @response(200, {
    description: 'Applications model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Applications) where?: Where<Applications>,
  ): Promise<Count> {
    return this.applicationsRepository.count(where);
  }

  @get('/api/applications')
  @response(200, {
    description: 'Array of Applications model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Applications, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Applications) filter?: Filter<Applications>,
  ): Promise<Applications[]> {
    return this.applicationsRepository.find(filter);
  }

  @patch('/api/applications')
  @response(200, {
    description: 'Applications PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Applications, {partial: true}),
        },
      },
    })
    applications: Applications,
    @param.where(Applications) where?: Where<Applications>,
  ): Promise<Count> {
    return this.applicationsRepository.updateAll(applications, where);
  }

  @get('/api/applications/{id}')
  @response(200, {
    description: 'Applications model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Applications, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Applications, {exclude: 'where'})
    filter?: FilterExcludingWhere<Applications>,
  ): Promise<Applications> {
    return this.applicationsRepository.findById(id, filter);
  }

  @patch('/api/applications/{id}')
  @response(204, {
    description: 'Applications PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Applications, {partial: true}),
        },
      },
    })
    applications: Applications,
  ): Promise<Applications[]> {
    await this.applicationsRepository.updateById(id, applications);
    return this.applicationsRepository.find({where: {isArchived: false}});
  }

  @put('/api/applications/{id}')
  @response(204, {
    description: 'Applications PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() applications: Applications,
  ): Promise<void> {
    await this.applicationsRepository.replaceById(id, applications);
  }

  @del('/api/applications/{id}')
  @response(204, {
    description: 'Applications DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.applicationsRepository.deleteById(id);
  }
}
