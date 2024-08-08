import {BindingScope, injectable, service} from '@loopback/core';
import {repository} from '@loopback/repository';
import {render} from '@react-email/components';
import nodemailer from 'nodemailer';
import {emailConfig} from '../datasources/nodemailer.config';
import * as defaultTemplates from '../emailTemplates/locales/en';
import * as ruTemplates from '../emailTemplates/locales/ru';
import {MailInterface} from '../interfaces/mailInterface';
import {Booking, BookingRelations, Transfer as TransferModel} from '../models';
import {
  ApartmentRepository,
  BookingRepository,
  PhotoRepository,
  RoomCategoryRepository,
} from '../repositories';
import getFormattedPrice from '../utils/beautyfyPrice';
import {HostContactsService} from './host-contacts.service';
import {RenderMailTemplateService} from './render-mail-template.service';
import {TransferService} from './transfer.service';
@injectable({scope: BindingScope.SINGLETON})
export class MailService {
  private transporter: nodemailer.Transporter;
  private templates: {[key: string]: any};

  constructor(
    @service(RenderMailTemplateService)
    private renderMailTemplateService: RenderMailTemplateService,
    @service(HostContactsService)
    private hostContactsService: HostContactsService,
    @repository(PhotoRepository) private photoRepository: PhotoRepository,
    @repository(BookingRepository) private bookingRepository: BookingRepository,
    @service(RoomCategoryRepository)
    private roomCategoryRepository: RoomCategoryRepository,
    @repository(ApartmentRepository)
    private apartmentRepository: ApartmentRepository,
    @service(TransferService) private transferService: TransferService,
  ) {
    this.transporter = nodemailer.createTransport(emailConfig);
    this.templates = {
      en: defaultTemplates,
      ru: ruTemplates,
    };
  }

  /**
   * Send a generic email
   * @param option MailInterface containing email options
   */
  async sendEmail(option: MailInterface) {
    try {
      const info = await this.transporter.sendMail(option);
      console.info(
        `[MailResponse]=${info.response} [MessageID]=${info.messageId}`,
      );
      return info;
    } catch (error) {
      console.error(`[Error]=${error.message}`);
      return error;
    }
  }

  private getTemplate(locale: string, templateType: string) {
    return this.templates[locale][templateType];
  }
  /**
   * Send an email when a booking request is received
   * @param option MailInterface containing email options
   * @param data Additional data required for the booking email template
   */
  async sendBookingRequestEmail({customer, newBooking, transferData}: any) {
    const hostData = await this.hostContactsService.getHostContacts();
    if (transferData) {
      transferData =
        this.transferService.convertTransferArrayToObject(transferData);
    }
    const apartmentData = await this.apartmentRepository.findOne({
      where: {
        id: newBooking.apartmentId,
      },
      include: ['room_type', 'roomCategory', 'images', 'locationDetails'],
    });
    if (apartmentData) {
      const {images, translations} = apartmentData;
      const {locale} = newBooking;
      const emailSubject =
        (locale || 'en') === 'en'
          ? 'We have received your reservation request. We will contact you soon. AstayHome'
          : 'Мы получили ваш запрос на бронирование. Мы свяжемся с вами в ближайшее время. AstayHome';
      const EmailTemplate = this.getTemplate(locale, 'ConfirmedBookingEmail');

      const {en} = translations as {en: any};
      const dataForEmail: ConfirmedBookingEmailData = {
        apartmentName: en?.name || 'Apartment',
        customerName: customer.name,
        img: encodeURI(
          images[0]?.url || 'https://astayhome.com/foto-not-found',
        ), // add  default image,
        guests: newBooking.guests.guests,
        rooms: newBooking.guests.rooms,
        checkIn: newBooking.checkIn,
        checkOut: newBooking.checkOut,

        hostContacts: hostData,
      };

      this.sendEmail({
        to: customer.email,
        from: `"AstayHome" support@astayhome.com`,
        subject: emailSubject,
        html: render(EmailTemplate({data: dataForEmail})),
      });
    }
  }

  async sendSubmitedFormEmail({
    email,
    name,
    locale = 'en',
  }: {
    email: string;
    name: string;
    locale: string;
  }) {
    const hostContacts = await this.hostContactsService.getHostContacts();
    const dataForEmail: RequestEmailData = {
      customerName: name,
      hostContacts: hostContacts,
    };
    const emailSubject =
      locale === 'en'
        ? 'We have received your application, thank you! AstayHome Team'
        : 'Мы получили вашу заявку, спасибо! AstayHome Team';
    const EmailTemplate = this.getTemplate(locale || 'en', 'RequestEmail');

    // this.sendEmail({
    //   to: email,
    //   from: `"AstayHome" support@astayhome.com`,
    //   subject: 'AstayHome Form Request',
    //   html: render(EmailTemplate({data: dataForEmail})),
    // });
  }

  async sendLeaveReviewEmail(tokenReview: string) {
    const hostContacts = await this.hostContactsService.getHostContacts();
    const booking: (Booking & BookingRelations) | null =
      await this.bookingRepository.findOne({
        where: {
          tokenReview: tokenReview,
        },
        include: [
          {
            relation: 'apartment',
            scope: {
              include: [{relation: 'images'}],
            },
          },
          {relation: 'customer'},
        ],
      });
    if (!booking || !booking.reviewUrl) {
      throw new Error(
        'Invalid review token. No any related booking found or reviewUrl not generated yet',
      );
    }
    const {apartment, customer} = booking;
    if (!apartment || !customer) {
      throw new Error(
        'Invalid review token. No any related apartment or customer found',
      );
    }
    const locale = customer.locale;
    const bookingLocale = booking.locale;

    const EmailTemplate = this.getTemplate(
      bookingLocale || locale || 'en',
      'LeaveReviewEmail',
    );
    const emailSubject =
      (locale || bookingLocale || 'en') === 'en'
        ? 'Leave a review about your stay in AstayHome!'
        : 'Оставьте отзыв о вашем проживании в AstayHome!';
    const dataForEmail: LeaveReviewEmailData = {
      customerName: customer.name,
      reviewLink: booking?.reviewUrl || '',
      img: encodeURI(
        apartment.images[0]?.url || 'https://astayhome.com/foto-not-found',
      ), // add default image
      apartmentName:
        apartment.translations?.[locale || 'en' || bookingLocale]?.name ||
        'Apartment',
      hostContacts: hostContacts,
    };
    this.sendEmail({
      to: customer.email,
      from: `"AstayHome" support@astayhome.com`,
      subject: emailSubject,
      html: render(EmailTemplate({data: dataForEmail})),
    });
  }

  async sendTransferRequestEmail({
    email,
    customerName,
    locale,
  }: {
    email: string;
    customerName: string;
    locale: string;
  }): Promise<void> {
    if (!email) {
      throw new Error('Request email address not found! Can not send email');
    }
    const EmailTemplate = this.getTemplate(locale, 'RequestEmail');
    const emailSubject =
      locale === 'en'
        ? 'Confirmation of receipt of the transfer application. AstayHome!'
        : 'Подтверждение приема заявки на трансфер. AstayHome!';

    const hostContacts = await this.hostContactsService.getHostContacts();
    const dataForEmail: RequestEmailData = {
      customerName: customerName ?? 'New Client',
      hostContacts: hostContacts,
    };

    this.sendEmail({
      to: email,
      from: `"AstayHome" support@astayhome.com`,
      subject: emailSubject,
      html: render(EmailTemplate({data: dataForEmail})),
    });
  }

  async sendConfirmedPayEmail(booking: Booking) {
    if (!booking) {
      throw new Error(
        'No booking provided for confirmed pay email. Can not send email',
      );
    }
    const {token, locale} = booking;
    if (!token) {
      throw new Error(
        'No token provided for confirmed pay email. Can not send email',
      );
    }

    if (!booking.checkIn || !booking.checkOut) {
      throw new Error(
        'Invalid booking data. Check in and check out dates are required for confirmed pay email',
      );
    }
    if (!booking.price) {
      throw new Error(
        'Invalid booking data. Booking price is required for confirmed pay email',
      );
    }
    const {apartment, customer} = booking;
    if (!apartment || !customer) {
      throw new Error(
        'Invalid booking token. No any related apartment or customer found',
      );
    }
    const emailSubject =
      locale === 'en'
        ? 'Booking payment confirmation'
        : 'Подтверждение оплаты бронирования';
    const EmailTemplate = this.getTemplate(locale, 'ConfirmedPayEmail');
    const {images, locationDetails, wifiPassword, apartmentPassword} =
      apartment;

    const guests: {guests: number; rooms: number} = booking?.guests as {
      guests: number;
      rooms: number;
    };
    const transferData = booking?.transfers
      ? (this.transferService.convertTransferArrayToObject(
        booking?.transfers,
      ) as {from: {price: number}; to: To})
      : {
        from: {price: 0},
        to: {price: 0},
      };

    const {from, to} = transferData;
    const {price: fromPrice = 0} = from;
    const {price: toPrice = 0} = to;

    const totalPrice = transferData
      ? booking?.price + fromPrice + toPrice
      : booking?.price;
    const hostContacts = await this.hostContactsService.getHostContacts();
    const dataForEmail: ConfirmedPayEmailData = {
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      img: encodeURI(images[0]?.url || process.env.DEFAULT_APARTMENT_IMAGE),
      wifiPassword: wifiPassword || '',
      apartmentPassword: apartmentPassword || '',
      hostContacts: hostContacts,
      customerName: customer.name,
      apartmentId: apartment.id,
      apartmentName: apartment.translations?.[locale]?.name,
      address: hostContacts.address || '',
      guests: guests.guests,
      rooms: guests.rooms,
      totalPrice: getFormattedPrice(totalPrice),
      transfer: {
        from: {price: transferData.from?.price},
        to: {price: transferData.to?.price},
      },
    };
    this.sendEmail({
      to: customer.email,
      from: `"AstayHome" support@astayhome.com`,
      subject: `${emailSubject} #${booking.id} - AstayHome`,
      html: render(EmailTemplate({data: dataForEmail})),
    });
  }

  async sendTransferConfirmationEmail(transfer: TransferModel) {
    if (!transfer) {
      throw new Error(
        'No transfer provided for transfer confirmation email. Can not send email',
      );
    }
    const hostContacts = await this.hostContactsService.getHostContacts();
    if (!hostContacts) {
      throw new Error(
        'No host contacts provided for transfer confirmation email. Can not send email',
      );
    }
    const {locale, customer, ...transferData} = transfer;
    if (!customer) {
      throw new Error(
        'No customer provided for transfer confirmation email. Can not send email',
      );
    }
    if (!transferData?.price) {
      throw new Error(
        'No transfer data or transfer price provided for transfer confirmation email. Can not send email',
      );
    }

    const formToObject = {
      from:
        transferData.type === 'arrival'
          ? {price: transferData.price}
          : undefined,
      to:
        transferData.type === 'departure'
          ? {price: transferData.price}
          : undefined,
    };
    const emailSubject =
      locale === 'en' ? 'Transfer confirmation' : 'Подтверждение трансфера';
    const EmailTemplate = this.getTemplate(
      locale || 'en',
      'ConfirmedTransferEmail',
    );
    const dataForEmail: ConfirmedTransferEmailData = {
      customerName: customer.name,
      hostContacts: hostContacts,
      transfer: formToObject,
      totalPrice: getFormattedPrice(transferData.price),
    };
    const info = await this.sendEmail({
      to: customer.email,
      from: `"AstayHome" support@astayhome.com`,
      subject: `${emailSubject} #${transfer.id} - AstayHome`,
      html: render(EmailTemplate({data: dataForEmail})),
    });

    // console.log(info);
  }
}
