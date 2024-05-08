import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {HostContactsRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class HostContactsService {
  constructor(
    @repository(HostContactsRepository)
    private hostContactsRepository: HostContactsRepository,
  ) {}

  public async getHostContacts() {
    const hostContacts = await this.hostContactsRepository.find();
    return hostContacts[0];
  }
}
