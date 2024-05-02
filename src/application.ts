import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';

import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import {MySequence} from './sequence';
import multer from 'multer';
import path from 'path';
import {FILE_UPLOAD_SERVICE, STORAGE_DIRECTORY} from './keys';
import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent,
  SECURITY_SCHEME_SPEC,
  TokenServiceBindings,
  UserServiceBindings,
} from '@loopback/authentication-jwt';
import {LocalMysqlDataSource} from './datasources/local-mysql.datasource';
import {CrudRestComponent} from '@loopback/rest-crud';
import {SubmitTrackingService} from './services';
// import {CronComponent} from '@loopback/cron';

export {ApplicationConfig};

export class ApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    this.dataSource(LocalMysqlDataSource, UserServiceBindings.DATASOURCE_NAME);
    this.component(AuthenticationComponent);
    this.component(JWTAuthenticationComponent);
    // Set up the custom sequence
    this.sequence(MySequence);
    this.bind('services.submit-tracking').toClass(SubmitTrackingService);
    // for jwt access token
    this.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to('2592000');

    // for cron jobs
    // this.component(CronComponent);
    // Set up default home page
    this.static('/api', path.join(__dirname, '../public'));
    this.static(
      '/api/public/uploads/',
      path.join(__dirname, '../public/uploads'),
    );

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/api/explorer',
    });
    this.component(RestExplorerComponent);
    this.configureFileUpload(options.fileStorageDirectory);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
    this.component(CrudRestComponent);
  }
  protected configureFileUpload(destination?: string) {
    // Upload files to `dist/.sandbox` by default
    destination = destination ?? path.join(__dirname, '../public/uploads');
    this.bind(STORAGE_DIRECTORY).to(destination);
    const multerOptions: multer.Options = {
      storage: multer.diskStorage({
        destination,
        // Use the original file name as is
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    };
    // Configure the file upload service with multer options
    this.configure(FILE_UPLOAD_SERVICE).to(multerOptions);
  }
}
