import {inject, service} from '@loopback/core';
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
import {DataObject, repository} from '@loopback/repository';
import {PhotoRepository} from '../repositories';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import {Photo} from '../models';
import {UploaderService} from '../services';
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
    @service(UploaderService) private uploaderService: UploaderService,
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
        },
      },
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
          const {files, fields} =
            FileUploadController.getFilesAndFields(request);
          this.createPhotosEnteties(files, fields).then(resolve).catch(reject);
        }
      });
    });
  }

  private async createPhotosEnteties(
    files: Array<any>,
    fields: object,
  ): Promise<object> {
    const orderNumber = await this.uploaderService.repositoryFabric(fields);

    const photos = files.map(async (f: any, index: number) => {
      const sizes = [
        {name: 's650', scales: {width: 650, height: 650}},
        {name: 's720', scales: {width: 720, height: 480}},
        {name: 's1920', scales: {width: 1920, height: 1080}},
        {name: 's1366', scales: {width: 1366, height: 768}},
      ];
      const uploadFolderPath = f.path.split('/').slice(0, -1).join('/');
      const originalPath = path.join(
        uploadFolderPath,
        'original',
        `${f.filename}_${'original'}.webp`,
      );
      const uploadFolder = path.dirname(originalPath);
      if (!fs.existsSync(path.join(uploadFolderPath, 'original'))) {
        fs.mkdirSync(path.join(uploadFolderPath, 'original'), {
          recursive: true,
        });
      }
      await sharp(f.path).webp({quality: 50}).toFile(originalPath);

      const photoSizes: Record<string, string | null> = {};
      const createSizes = async () => {
        await Promise.all(
          sizes.map(async ({name, scales}) => {
            const targetPath = path.join(
              uploadFolderPath,
              name,
              `${f.filename}_${name}.webp`,
            );
            if (!fs.existsSync(path.join(uploadFolderPath, name))) {
              fs.mkdirSync(path.join(uploadFolderPath, name), {
                recursive: true,
              });
            }
            const result = await sharp(originalPath)
              .resize(scales.width, scales.height)
              .webp({quality: 70})
              .toFile(targetPath);
            photoSizes[name] = result
              ? `${BASE_URL}${path.relative(path.dirname(__dirname), targetPath).replace(/\\/g, '/').slice(2)}`
              : null;
          }),
        );
      };
      await createSizes();

      const orderNumber = await this.uploaderService.repositoryFabric(fields);
      return await this.photoRepository.create({
        fileName: f.filename,
        order_number: orderNumber,
        sizes: photoSizes,
        url: `${BASE_URL}${path.relative(path.dirname(__dirname), originalPath).replace(/\\/g, '/').slice(2)}`,
        ...fields,
      } as DataObject<Photo>);
    });
    return Promise.all(photos).then(photos => photos as object);
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
      filename: `${f.originalname}`,
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
