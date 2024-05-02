import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class MailService {
  constructor(/* Add @inject to inject parameters */) {}

  sendEmail() {}

  sendEmailWithAttachment() {}

  sendEmailWithTemplate() {}
  
}
