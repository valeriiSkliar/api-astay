import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: process.env.LB4_DATA_RESOURCE_NAME,
  connector: process.env.DATABASE_CONNECTOR,
  url: '',
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.DATABASE_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LocalMysqlDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'local_mysql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.local_mysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
