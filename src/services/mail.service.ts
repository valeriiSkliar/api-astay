import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import nodemailer from 'nodemailer';
import {MailInterface} from '../interfaces/mailInterface';
import {emailConfig} from '../datasources/nodemailer.config';
import {render} from '@react-email/components';
import {AfterPayEmail} from '../emailTemplates/locales/en/AfterPayEmail/AfterPayEmail';

const data: AfterPayEmailData = {
  checkIn: '2024-05-15',
  checkOut: '2024-05-24',
  img: 'https://astayhome.com/_next/image?url=https%3A%2F%2Fastayhome.com%2Fapi%2Fpublic%2Fuploads%2Fs1920%2FR5_1767_small.jpg_s1920.webp&w=1920&q=100',
  roomCategory: 'Penthouse',
  location: {
    city: 'Pattaya',
    country: 'Thailand',
  },
  wifiPassword: '',
  apartmentPassword: '',
  hostContacts: {
    name: 'AstayHome',
    phone: '+777712222111',
    telegram: 'tg://t.me/@{USERNAME}',
    whatsapp: 'https://wa.me/+971542502604',
    instagram: 'instagram://user?username={USERNAME}',
    youtube: 'https://www.youtube.com/',
  },
  infoBox: {
    guests: {
      title: 'Guests',
      text: '1 guest',
    },
    address: {
      title: 'Address',
      text: '492/2 หมู่ที่ 12 Thappraya Rd, Pattaya City, Bang Lamung District, Chon Buri 20150, Thailand',
    },
    totalPrice: {
      title: 'Total',
      text: '฿18,000',
    },
    transfer: {
      from: {
        title: 'From Airport',
        text: '฿1400',
      },
      to: {
        title: 'To Airport',
        text: '฿1400',
      },
    },
  },
};

@injectable({scope: BindingScope.TRANSIENT})
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(/* Add @inject to inject parameters */) {
    this.transporter = nodemailer.createTransport(emailConfig);
  }

  async sendEmail(option: MailInterface) {
    const emailHtml = render(AfterPayEmail({data}));

    console.log('mail.service.ts ------>', emailHtml);

    return this.transporter.sendMail(option, (error, info) => {
      if (error) {
        console.error(`[MessageID]=${info.messageId}`, error);
        return error;
      } else {
        console.info(
          `[MailResponse]=${info.response} [MessageID]=${info.messageId}`,
        );
        return info;
      }
    });
  }

  sendEmailWithAttachment() {}

  sendEmailWithTemplate() {}
}

export default new MailService();
