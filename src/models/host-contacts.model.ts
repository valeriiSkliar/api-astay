import {Entity, model, property} from '@loopback/repository';

@model()
export class HostContacts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  telegram?: string;

  @property({
    type: 'string',
  })
  whatsapp?: string;

  @property({
    type: 'string',
  })
  instagram?: string;

  @property({
    type: 'string',
  })
  youtube?: string;

  @property({
    type: 'string',
  })
  cardOwnerName?: string;

  @property({
    type: 'string',
  })
  firstCardNumber?: string;

  @property({
    type: 'string',
  })
  secondCardNumber?: string;

  @property({
    type: 'string',
  })
  firstCardDescription?: string;

  @property({
    type: 'string',
  })
  firstCardProvider?: string;

  @property({
    type: 'string',
  })
  secondCardProvider?: string;

  @property({
    type: 'string',
  })
  secondCardDescription?: string;

  constructor(data?: Partial<HostContacts>) {
    super(data);
  }
}

export interface HostContactsRelations {
  // describe navigational properties here
}

export type HostContactsWithRelations = HostContacts & HostContactsRelations;
