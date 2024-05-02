import {RequestHandler} from 'express-serve-static-core';
import { Booking, HostContacts, Transfer} from './models';
export type FileUploadHandler = RequestHandler;

export interface TransferRequest {
  from: Partial<Transfer> | null;
  to: Partial<Transfer> | null;
}
// export interface BookingResponse extends Partial<Booking> {
//   transfers: TransferRequest | undefined;
// }

export type BookingResponse = Omit<Booking, 'transfers'> & {transfers: TransferRequest | undefined, hostContacts: HostContacts}
