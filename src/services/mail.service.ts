import {injectable, BindingScope, service} from '@loopback/core';
import nodemailer from 'nodemailer';
import {MailInterface} from '../interfaces/mailInterface';
import {emailConfig} from '../datasources/nodemailer.config';
import {RenderMailTemplateService} from './render-mail-template.service';
import {HostContactsService} from './host-contacts.service';
import {Html, render} from '@react-email/components';
import {ConfirmedBookingEmail, LeaveReviewEmail, RequestEmail} from '../emailTemplates/locales/en';
import { ConfirmedBookingEmailProps } from '../emailTemplates/locales/en/ConfirmedBookingEmail/ConfirmedBookingEmail';
import {repository} from '@loopback/repository';
import {ApartmentRepository, BookingRepository, PhotoRepository, RoomCategoryRepository} from '../repositories';
import {Booking, BookingRelations, RoomCategory} from '../models';
import {title} from 'process';
import {text} from 'stream/consumers';
import {TransferService} from './transfer.service';
import {formatDate} from '../emailTemplates/helpers/formatDate';
@injectable({scope: BindingScope.SINGLETON})
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(
    @service(RenderMailTemplateService) private renderMailTemplateService: RenderMailTemplateService,
    @service(HostContactsService) private hostContactsService: HostContactsService,
    @repository(PhotoRepository) private photoRepository: PhotoRepository,
    @repository(BookingRepository) private bookingRepository: BookingRepository,
    @service(RoomCategoryRepository) private roomCategoryRepository: RoomCategoryRepository,
    @repository(ApartmentRepository) private apartmentRepository: ApartmentRepository,
    @service( TransferService) private transferService: TransferService
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
      console.info(`[MailResponse]=${info.response} [MessageID]=${info.messageId}`);
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
    // console.log('bookingData', customer, newBooking, apartment, transfer);
    const hostData = await this.hostContactsService.getHostContacts();
    if (transferData) {
      transferData = this.transferService.convertTransferArrayToObject(transferData);
    }
    const apartmentData = await this.apartmentRepository.findOne({
      where: {
        id: newBooking.apartmentId
      },
      include: [
        'room_type',
        'roomCategory',
        'images',
        'locationDetails',
      ]
    });
    if (apartmentData) {
      const {roomCategory, images, locationDetails} = apartmentData;

      const dataForEmail: ConfirmedBookingEmailData = {
        customerName: customer.name,
        img: images[0]?.url,
        roomCategory: roomCategory.translations.en.category,
        location: {
          city: locationDetails.translations.en.city,
          country: locationDetails.translations.en.country
        },
        guests: {
          title: 'Guests',
          text: newBooking.guests.guests
        },
        rooms: {
          title: 'Rooms',
          text: newBooking.guests.rooms
        },
        checkIn: newBooking.checkIn,
        checkOut: newBooking.checkOut,
        transfer: {
          from: {
            title: 'From',
            text: formatDate(new Date(transferData.from.date).toISOString(), 'en', true)
          },
          to: {
            title: 'To',
            text:formatDate(new Date(transferData.to.date).toISOString(), 'en', true)
          }
        },
        hostContacts: hostData
      }

// TODO: FIX NULL POINTER FOR TRANSFERS

      this.sendEmail({
        to: customer.email,
        from: `"AstayHome" support@astayhome.com`,
        subject: 'Booking Request',
        html: render(
          ConfirmedBookingEmail({data: dataForEmail})
        )
      });
     }
  }

  async sendSubmitedFormEmail({email, name}: {email: string, name: string}) {
    const hostContacts = await this.hostContactsService.getHostContacts();
    const dataForEmail: RequestEmailData = {
      customerName: name,
      hostContacts: hostContacts
    }

    this.sendEmail({
      to: email,
      from: `"AstayHome" support@astayhome.com`,
      subject: 'AstayHome Form Request',
      html: render(
        RequestEmail({data: dataForEmail})
      )
    })
  }

  async sendLeaveReviewEmail( tokenReview: string ) {
    const hostContacts = await this.hostContactsService.getHostContacts();
    const booking: (Booking & BookingRelations | null) = await this.bookingRepository.findOne({
      where: {
        tokenReview: tokenReview,
      },
      include: [
        {relation: 'apartment', scope: {include: [{relation: 'roomCategory'}, {relation: 'images'}, {relation: 'locationDetails'}]}},
        {relation: 'customer'},
      ],
    });
    if (!booking || !booking.reviewUrl ) {
      throw new Error('Invalid review token. No any related booking found or reviewUrl not generated yet');
    }
    const {apartment, customer} = booking;
    console.log('apartment', apartment);
    if (!apartment || !customer  ) {
      throw new Error('Invalid review token. No any related apartment or customer found');
    }
    const dataForEmail: LeaveReviewEmailData = {
      customerName: customer.name,
      reviewLink: booking?.reviewUrl || '',
      img: apartment.images[0]?.url,
      roomCategory: apartment.roomCategory.translations.en.category,
      location: {
        city: apartment.locationDetails.translations.en.city,
        country: apartment.locationDetails.translations.en.country
      },
      hostContacts: hostContacts
    }
    this.sendEmail({
      to: customer.email,
      from: `"AstayHome" support@astayhome.com`,
      subject: 'Leave a Review - AstayHome',
      html: render(
        LeaveReviewEmail({data: dataForEmail})
      )
    });
  }

}

