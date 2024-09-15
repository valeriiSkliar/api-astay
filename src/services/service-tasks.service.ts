import { /* inject, */ BindingScope, injectable, service} from '@loopback/core';
import {Applications, Booking} from '../models';
import {MailService} from './mail.service';

@injectable({scope: BindingScope.TRANSIENT})
export class ServiceTasksService {
  constructor(
    @service(MailService) private mailService: MailService,
  ) { }

  async stop(): Promise<void> {
    console.log('Stopping servise tasks');
  }

  async sendNoficationAboutNewApplicationToManager(instance: Applications): Promise<void> {
    await this.mailService.sendNoficationAboutNewApplicationToManager(instance)
  }

  async sendNoficationAboutNewBookingToManager(instance: Booking): Promise<void> {
  await this.mailService.sendNoficationAboutNewBookingToManager(instance)
  }
  async sendNoficationAboutNewTransferToManager(instance: Transfer): Promise<void> {
    await this.mailService.sendNoficationAboutNewTransferToManager(instance)
  }

  async restart(): Promise<void> {
    await this.stop();
    await this.start();
  }
  async start(): Promise<void> {
    console.log('Starting servise tasks');
  }
}
