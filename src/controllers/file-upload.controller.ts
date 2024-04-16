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
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const {BASE_URL} = process.env;

export class FileUploadController {
  /**
   * Constructor
   * @param handler - Inject an express request handler to deal with the request
   * @param photoRepo - Inject the photo repository to perform DB operations
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
          this.createPhotosEnteties(files, fields)
            .then(resolve)
            .catch(reject);
        }
      });
    });
  }

  private async createPhotosEnteties(
    files: Array<any>,
    fields: object
  ): Promise<object> {
    const photos = files.map(async (f: any, i: number) => {
      const targetPath = path.join(path.dirname(f.path), `${f.filename}.webp`);
      await sharp(f.path)
        .resize(200, 200)
        .webp({quality: 80})
        .toFile(targetPath);

        fs.unlink(f.path, (err) => {
          if (err) {
            console.error(`Failed to delete the original image: ${f.path}`, err);
          } else {
            console.log(`Successfully deleted the original image: ${f.path}`);
          }
        });

      return await this.photoRepository.create({
        fileName: f.fieldname.replace(/\.[^/.]+$/, "") + ".webp",
        order_number: i,
        url: `${BASE_URL}${path.relative(path.dirname(__dirname), targetPath).replace(/\\/g, "/").slice(2)}`,
        ...fields,
      })
    });
    return Promise.all(photos).then((photos) => photos as object);
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
      filename: `${f.originalname}_${Date.now().toLocaleString()}`,
      encoding: f.encoding,
      mimetype: f.mimetype,
      size: f.size,
      path: f.path,
      destination: f.destination,
    });
    let files: object[] = [];
    if (Array.isArray(uploadedFiles)) {
      files = uploadedFiles.map(mapper);
    } else {
      for (const filename in uploadedFiles) {
        files.push(...uploadedFiles[filename].map(mapper));
      }
    }
    return {files, fields: JSON.parse(request.body.body)};
  }
}



