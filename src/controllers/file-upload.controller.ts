import {inject} from '@loopback/core';
import {
  post,
  Request,
  RequestBody,
  requestBody,
  Response,
  RestBindings,
} from '@loopback/rest';
import {FILE_UPLOAD_SERVICE} from '../keys';
import {FileUploadHandler} from '../types';
import {repository} from '@loopback/repository';
import {PhotoRepository} from '../repositories';

export class FileUploadController {
  /**
   * Constructor
   * @param handler - Inject an express request handler to deal with the request
+   * @param photoRepo - Inject the photo repository to perform DB operations
   */
  constructor(
    @repository(PhotoRepository)
    public photoRepository: PhotoRepository,
    @inject(FILE_UPLOAD_SERVICE) private handler: FileUploadHandler,
  ) {}
  @post('/api/files', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Files and fields',
      },
      request: {
        description: 'Request object',
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                files: {
                  type: 'array',
                  items: {
                    type: 'string',
                    format: 'binary',
                  },
                },
                body: {
                  type: 'object',
                  properties: {
                    apartment_id: {
                      type: 'integer',
                      nullable: true,
                    },
                    complex_id: {
                      type: 'integer',
                      nullable: true,
                    },
                  },
                },
              },
            },
          },
        }
      }
    },

  })
  async fileUpload(
    @requestBody.file()
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      this.handler(request, response, (err: unknown) => {
        if (err) reject(err);
        else {
          const {files, fields} = FileUploadController.getFilesAndFields(request);
          const photosEnteties = new Promise((resolveInner, rejectInner) => {

            const {apartment_id, complex_id} = fields;

            const photos = files.map(async (f: any, i: number) => {
              return await this.photoRepository.create({
                fileName: f.originalname,
                // order_number: i,
                url: f.path,
                ...fields,
                // apartment_id: apartment_id,
                // complex_id: complex_id,
              })
            });
            Promise.all(photos).then(resolveInner).catch(rejectInner);
            return photos;
            // resolve(photos);
          })
            .then((photos) => resolve(photos as object))
        }
      });
    });
  }

  /**
   * Get files and fields for the request
   * @param request - Http request
   */
  private static getFilesAndFields(request: Request) {
    const uploadedFiles = request.files;
    const mapper = (f: globalThis.Express.Multer.File) => ({
      fieldname: f.fieldname,
      originalname: f.originalname,
      encoding: f.encoding,
      mimetype: f.mimetype,
      size: f.size,
      path: f.path,
    });
    let files: object[] = [];
    if (Array.isArray(uploadedFiles)) {
      files = uploadedFiles.map(mapper);
    } else {
      for (const filename in uploadedFiles) {
        files.push(...uploadedFiles[filename].map(mapper));
      }
    }
    return {files, fields: request.body};
  }
}

