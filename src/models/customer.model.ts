import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone?: string;

  @property({
    type: 'date',
    default: '',
  })
  birthDate?: string;

  @property({
    type: 'string',
    default: '',
  })
  address?: string;

  @property({
    type: 'string',
    default: '',
  })
  country?: string;

  @property({
    type: 'string',
    enum: ['Male', 'Female', 'Other'],
  })
  gender?: string;

  @property({
    type: 'string',
    default: '',
  })
  additionalContactInfo?: string;

  @property({
    type: 'string',
    default: '',
  })
  additionalNotes?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  firstRequest: string;

  @property({
    type: 'string',
    enum: ['Active', 'Blocked', 'Pending'],
    default: 'Pending',
  })
  accountStatus: string;

  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
