import {BindingKey} from '@loopback/core';
import {FileUploadHandler} from './types'; // Binding key for the file upload service
export const FILE_UPLOAD_SERVICE = BindingKey.create<FileUploadHandler>(
  'services.FileUpload',
); // Binding key for the storage directory
export const STORAGE_DIRECTORY = BindingKey.create<string>('storage.directory');
// export const TASKS_SERVICE = BindingKey.create<ServiceTasksService>(
//   'services.ServiceTasksService',
// );
// Copyright IBM Corp. and LoopBack contributors 2019. All Rights Reserved.
// Node module: @loopback/example-greeting-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
