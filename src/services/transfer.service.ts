import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {Transfer} from '../models';
import {TransferRequest} from '../types';



@injectable({scope: BindingScope.TRANSIENT})
export class TransferService {
  constructor(/* Add @inject to inject parameters */) {}

  public convertTransferArrayToObject(transfers: Partial<Transfer[]> = []):
  TransferRequest {
    if (!transfers) {
      return {from: null, to: null};
    }
    const transferObj = transfers.reduce((acc, transfer) => {
      if (transfer && transfer.type === 'arrival') {
        acc.from = transfer;
      } else if (transfer && transfer.type === 'departure') {
        acc.to = transfer;
      }
      return acc;
    }, {from: null, to: null} as TransferRequest);
    return transferObj;
  }
}
