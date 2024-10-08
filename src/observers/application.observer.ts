import {
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver,
  service
} from '@loopback/core';
import {repository} from '@loopback/repository';
import {ApplicationsRepository, TransferRepository} from '../repositories';
import {ServiceTasksService} from '../services';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('service')
export class ApplicationObserver implements LifeCycleObserver {

  constructor(
    @repository(TransferRepository) private transferRepository: TransferRepository,
    @repository(ApplicationsRepository) private applicationRepository: ApplicationsRepository,
    @service(ServiceTasksService) private serviceTasksService: ServiceTasksService,
  ) { }

  /**
   * This method will be invoked when the application initializes. It will be
   * called at most once for a given application instance.
   */
  async init(): Promise<void> {
    // Add your logic for init
  }

  // value() {
  //   // return this.applicationRepository.observe('persist')
  // }

  /**
   * This method will be invoked when the application starts.
   */
  async start(): Promise<void> {
    this.applicationRepository.modelClass.observe('after save', async (ctx, next) => {
      this.serviceTasksService.sendNoficationAboutNewApplicationToManager(ctx.instance);
    })
  }

  /**
   * This method will be invoked when the application stops.
   */
  async stop(): Promise<void> {
    this.serviceTasksService.stop();
  }
}
