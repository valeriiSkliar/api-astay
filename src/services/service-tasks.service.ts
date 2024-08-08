import { /* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class ServiceTasksService {
  constructor(/* Add @inject to inject parameters */) { }

  async stop(): Promise<void> {
    console.log('Stopping servise tasks');
  }

  async restart(): Promise<void> {
    await this.stop();
    await this.start();
  }
  async start(): Promise<void> {
    console.log('Starting servise tasks');
  }
}
