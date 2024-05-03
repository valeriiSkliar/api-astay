import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import nodemailer from 'nodemailer';
import {MailInterface} from '../interfaces/mailInterface';
import {emailConfig} from '../datasources/nodemailer.config';
@injectable({scope: BindingScope.TRANSIENT})
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(/* Add @inject to inject parameters */) {
    this.transporter = nodemailer.createTransport(emailConfig);
  }

  async sendEmail(option: MailInterface) {
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
