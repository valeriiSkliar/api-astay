import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'local_mysql',
  connector: 'mysql',
  url: 'mysql://root@localhost/astay_test',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'astay_test',
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
