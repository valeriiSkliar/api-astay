import {injectable, BindingScope, service} from '@loopback/core';
import nodemailer from 'nodemailer';
import {MailInterface} from '../interfaces/mailInterface';
import {emailConfig} from '../datasources/nodemailer.config';
import {RenderMailTemplateService} from './render-mail-template.service';
import {HostContactsService} from './host-contacts.service';
import {Html, render} from '@react-email/components';
import {ConfirmedBookingEmail} from '../emailTemplates/locales/en';
import { ConfirmedBookingEmailProps } from '../emailTemplates/locales/en/ConfirmedBookingEmail/ConfirmedBookingEmail';
import {repository} from '@loopback/repository';
import {ApartmentRepository, PhotoRepository, RoomCategoryRepository} from '../repositories';
import {RoomCategory} from '../models';
import {title} from 'process';
import {text} from 'stream/consumers';
import {TransferService} from './transfer.service';
@injectable({scope: BindingScope.SINGLETON})
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(
    @service(RenderMailTemplateService) private renderMailTemplateService: RenderMailTemplateService,
    @service(HostContactsService) private hostContactsService: HostContactsService,
    @repository(PhotoRepository) private photoRepository: PhotoRepository,
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
    console.log('transferData', transferData);

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
            text: transferData.from.flightNumber
          },
          to: {
            title: 'To',
            text:transferData.to.city
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
          // @ts-ignore
          ConfirmedBookingEmail({data: dataForEmail})
        )
      });    }
  }
    // const image = await this.photoRepository.findOne({
    //   where: {
    //     apartment_id: apartment.id
    //   }
    // })
    // const roomCategory = await this.roomCategoryRepository.findOne({
    //   where: {
    //     id: apartment.roomCategoryId
    //   }
    // }).then((roomCategory: (RoomCategory | null)) => {
    //   if (!roomCategory) return null;
    //   // @ts-ignore
    //   return roomCategory?.translations?.en?.name
    // })

    // const option: MailInterface = {
    //   from: customer.email,
    //   to: `"AstayHome" ${hostData.email}`,
    //   subject: 'Booking Request',
    //   html: render(
    //     ConfirmedBookingEmail( )),
    // }



    // const template = (data: any) => `<html><body><h1>Booking Request</h1><p>${data.message}</p></body></html>`;
    // return this.sendEmailWithTemplate(option, template, data);


}

// export const mailServiceInstance = new MailService();
