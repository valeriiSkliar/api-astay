import {
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver,
  service
} from '@loopback/core';
import {repository} from '@loopback/repository';
import {ApplicationsRepository} from '../repositories';
import {ServiceTasksService} from '../services';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('service')
export class ApplicationObserver implements LifeCycleObserver {

  constructor(
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
    // this.serviceTasksService.start();
    this.applicationRepository.modelClass.observe('after save', async (ctx, next) => {
      // console.log('persist', ctx.instance);
      this.serviceTasksService.sendNoficationAboutNewApplicationToManager(ctx.instance);
      // next()
      // const result = await next();
      // return result;
    })
  }

  /**
   * This method will be invoked when the application stops.
   */
  async stop(): Promise<void> {
    this.serviceTasksService.stop();
  }
}
