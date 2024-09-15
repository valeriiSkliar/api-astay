import {
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver,
  service, // The interface
} from '@loopback/core';
import {repository} from '@loopback/repository';
import {TransferRepository} from '../repositories';
import {ServiceTasksService} from '../services';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('service')
export class TransferObserver implements LifeCycleObserver {

  constructor(
    @repository(TransferRepository) private transferRepository: TransferRepository,
    @service(ServiceTasksService) private serviceTasksService: ServiceTasksService,

  ) {}


  /**
   * This method will be invoked when the application initializes. It will be
   * called at most once for a given application instance.
   */
  async init(): Promise<void> {
    // Add your logic for init
  }

  /**
   * This method will be invoked when the application starts.
   */
  async start(): Promise<void> {
    this.transferRepository.modelClass.observe('after save', async (ctx, next) => {
      await this.serviceTasksService.sendNoficationAboutNewTransferToManager(ctx.instance);
    })
  }

  /**
   * This method will be invoked when the application stops.
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
