import {injectable, BindingScope, service} from '@loopback/core';
import nodemailer from 'nodemailer';
import {MailInterface} from '../interfaces/mailInterface';
import {emailConfig} from '../datasources/nodemailer.config';
import {RenderMailTemplateService} from './render-mail-template.service';
import {HostContactsService} from './host-contacts.service';
import {Html, render} from '@react-email/components';
import {
  ConfirmedBookingEmail,
  ConfirmedPayEmail,
  ConfirmedTransferEmail,
  LeaveReviewEmail,
  RequestEmail,
} from '../emailTemplates/locales/en';
import {ConfirmedBookingEmailProps} from '../emailTemplates/locales/en/ConfirmedBookingEmail/ConfirmedBookingEmail';
import {repository} from '@loopback/repository';
import {
  ApartmentRepository,
  BookingRepository,
  PhotoRepository,
  RoomCategoryRepository,
} from '../repositories';
import {Booking, BookingRelations, Customer, RoomCategory} from '../models';
import {title} from 'process';
import {text} from 'stream/consumers';
import {TransferService} from './transfer.service';
import {formatDate} from '../emailTemplates/helpers/formatDate';
import getFormattedPrice from '../utils/beautyfyPrice';
@injectable({scope: BindingScope.SINGLETON})
export class MailService {
  private transporter: nodemailer.Transporter;

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
      const {roomCategory, images, locationDetails} = apartmentData;

      const dataForEmail: ConfirmedBookingEmailData = {
        customerName: customer.name,
        img: images[0]?.url,
        roomCategory: roomCategory.translations.en.category,
        location: {
          city: locationDetails.translations.en.city,
          country: locationDetails.translations.en.country,
        },
        guests: {
          title: 'Guests',
          text: newBooking.guests.guests,
        },
        rooms: {
          title: 'Rooms',
          text: newBooking.guests.rooms,
        },
        checkIn: newBooking.checkIn,
        checkOut: newBooking.checkOut,
        transfer: {
          from: {
            title: 'From',
            text: formatDate(
              new Date(transferData.from.date).toISOString(),
              'en',
              true,
            ),
          },
          to: {
            title: 'To',
            text: formatDate(
              new Date(transferData.to.date).toISOString(),
              'en',
              true,
            ),
          },
        },
        hostContacts: hostData,
      };

      // TODO: FIX NULL POINTER FOR TRANSFERS

      this.sendEmail({
        to: customer.email,
        from: `"AstayHome" support@astayhome.com`,
        subject: 'Booking Request',
        html: render(ConfirmedBookingEmail({data: dataForEmail})),
      });
    }
  }

  async sendSubmitedFormEmail({email, name}: {email: string; name: string}) {
    const hostContacts = await this.hostContactsService.getHostContacts();
    const dataForEmail: RequestEmailData = {
      customerName: name,
      hostContacts: hostContacts,
    };

    this.sendEmail({
      to: email,
      from: `"AstayHome" support@astayhome.com`,
      subject: 'AstayHome Form Request',
      html: render(RequestEmail({data: dataForEmail})),
    });
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
              include: [
                {relation: 'roomCategory'},
                {relation: 'images'},
                {relation: 'locationDetails'},
              ],
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
    const dataForEmail: LeaveReviewEmailData = {
      customerName: customer.name,
      reviewLink: booking?.reviewUrl || '',
      img: apartment.images[0]?.url,
      roomCategory: apartment.roomCategory.translations.en.category,
      location: {
        city: apartment.locationDetails.translations.en.city,
        country: apartment.locationDetails.translations.en.country,
      },
      hostContacts: hostContacts,
    };
    this.sendEmail({
      to: customer.email,
      from: `"AstayHome" support@astayhome.com`,
      subject: 'Leave a Review - AstayHome',
      html: render(LeaveReviewEmail({data: dataForEmail})),
    });
  }

  async sendTransferRequestEmail({
    email,
    customerName,
  }: {
    email: string;
    customerName: string;
  }): Promise<void> {
    if (!email) {
      throw new Error('Request email address not found! Can not send email');
    }

    const hostContacts = await this.hostContactsService.getHostContacts();
    const dataForEmail: RequestEmailData = {
      customerName: customerName ?? 'New Client',
      hostContacts: hostContacts,
    };

    this.sendEmail({
      to: email,
      from: `"AstayHome" support@astayhome.com`,
      subject: 'AstayHome Transfer Request',
      html: render(RequestEmail({data: dataForEmail})),
    });
  }

  async sendConfirmedPayEmail(booking: Booking) {
    if (!booking) {
      throw new Error(
        'No booking provided for confirmed pay email. Can not send email',
      );
    }
    const {token} = booking;
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
    const {
      roomCategory,
      images,
      locationDetails,
      in_complex,
      wifiPassword,
      apartmentPassword,
    } = apartment;

    const guests: {guests: number; rooms: number} = booking?.guests as {
      guests: number;
      rooms: number;
    };
    const hostContacts = await this.hostContactsService.getHostContacts();
    const dataForEmail: ConfirmedPayEmailData = {
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      roomCategory: roomCategory.translations.en.category,
      img: images[0]?.url, // TODO: add default image
      location: {
        city: locationDetails.translations.en.city,
        country: locationDetails.translations.en.country,
      },
      wifiPassword: wifiPassword || '',
      apartmentPassword: apartmentPassword || '',
      hostContacts: hostContacts,
      infoBox: {
        guests: {
          title: 'Guests',
          text: `${guests.guests}`,
        },
        address: {
          title: 'Address',
          text: `${in_complex?.translations?.en?.address}`,
        },
        totalPrice: {
          title: 'Total Price',
          text: `${getFormattedPrice(booking.price)}`,
        },
        // add transfer
      },
    };
    this.sendEmail({
      to: customer.email,
      from: `"AstayHome" support@astayhome.com`,
      subject: `Confirm Pay for booking #${booking.id} - AstayHome`,
      html: render(ConfirmedPayEmail({data: dataForEmail})),
    });
  }
}
