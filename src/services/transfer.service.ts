import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {Customer, Transfer} from '../models';
import {TransferRequest} from '../types';
import {Transaction, repository} from '@loopback/repository';
import {TransferRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class TransferService {
  constructor(
    @repository(TransferRepository)
    public transferRepository: TransferRepository,
  ) {}

  public convertTransferArrayToObject(
    transfers: Partial<Transfer[]> = [],
  ): TransferRequest {
    if (!transfers) {
      return {from: null, to: null};
    }
    const transferObj = transfers.reduce(
      (acc, transfer) => {
        if (transfer && transfer.type === 'arrival') {
          acc.from = transfer;
        } else if (transfer && transfer.type === 'departure') {
          acc.to = transfer;
        }
        return acc;
      },
      {from: null, to: null} as TransferRequest,
    );
    return transferObj;
  }

  public async createTransfersFromBookingRequest(
    transferData: any,
    customer: Customer,
    transaction: Transaction,
  ) {
    if (!transferData) {
      return [];
    }

    const transferPromises = ['from', 'to'].map(async field => {
      if (transferData[field]) {
        const transferDetails = {
          type: field === 'from' ? 'arrival' : 'departure',
          customerId: customer.id,
          ...transferData[field],
        };
        return await this.transferRepository.create(transferDetails, {
          transaction,
        });
      }
      return null;
    });

    const transfers = await Promise.all(transferPromises);
    return transfers.filter(t => t !== null) as Transfer[];
  }
}
