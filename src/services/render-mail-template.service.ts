import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {Request} from 'express';

@injectable({scope: BindingScope.TRANSIENT})
export class RenderMailTemplateService {
  constructor() {}

  public renderTemplate(request: Request, data: any) {
    console.log('RenderMailTemplateService');
  }
}
