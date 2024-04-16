import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import dotenv from 'dotenv';
dotenv.config();

const {LB4_DATA_RESOURCE_NAME, DATA_BASE_HOST, DATA_BASE_PORT, PASSWORD, DATABASE_CONNECTOR, DATABASE_USER, DATABASE_NAME} = process.env;
console.log({LB4_DATA_RESOURCE_NAME, DATA_BASE_HOST, DATA_BASE_PORT, PASSWORD, DATABASE_CONNECTOR, DATABASE_USER, DATABASE_NAME});
const config = {
  name: LB4_DATA_RESOURCE_NAME,
  connector: DATABASE_CONNECTOR,
  url: '',
  host: DATA_BASE_HOST,
  port: DATA_BASE_PORT,
  user: DATABASE_USER,
  password: PASSWORD,
  database: DATABASE_NAME,
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
