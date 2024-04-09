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
import{FILE_UPLOAD_SERVICE,STORAGE_DIRECTORY} from './keys';
import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent,
  SECURITY_SCHEME_SPEC,
  UserServiceBindings,
} from '@loopback/authentication-jwt';
import {MongoDataSource} from './datasources';
import {LocalMysqlDataSource} from './datasources/local-mysql.datasource';
import {CrudRestComponent} from '@loopback/rest-crud';
import {SubmissionTrackingServiceService} from './services';

export {ApplicationConfig};

export class ApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    this.component(AuthenticationComponent);
    this.component(JWTAuthenticationComponent);
    this.dataSource(LocalMysqlDataSource, UserServiceBindings.DATASOURCE_NAME);
    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/api', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/api/explorer',
    });
    this.component(RestExplorerComponent);
    this.configureFileUpload(options.fileStorageDirectory);
    this.bind('services.SubmissionTrackingServiceService').toClass(SubmissionTrackingServiceService);


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
        destination = destination ?? path.join(__dirname, '../.sandbox');
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
