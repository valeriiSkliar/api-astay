import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {Booking, Customer, Transfer} from '../models';
import {TransferRequest} from '../types';
import {DataObject, Transaction, repository} from '@loopback/repository';
import {TransferRepository} from '../repositories';
import {Mode} from 'fs';

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



  public async createTransfersModelEntitys(
    transferData: {from: Partial<TransferRequest>; to: Partial<TransferRequest>},
    customer: Customer,
    booking: Booking,
    transaction: Transaction,
  ) {
    if (!transferData) {
      return [];
    }
    if (!customer.id) {
      throw new Error('Customer not found');
    }

    const transfers = ['from', 'to'].map(field => {
      if (transferData[field as keyof typeof transferData]) {
        const transferDetails = {
          type: field === 'from' ? 'arrival' : 'departure',
          customerId: customer.id,
          bookingId: booking.id,
          ...transferData[field as keyof typeof transferData],
        };
        return  new Transfer( transferDetails );
      }
      return null;
    });
    const savedTransfers = await Promise.all(
      transfers.filter(t => t !== null).map(
        async (transfer: Transfer | null) => {
          if (transfer) {
            return await this.transferRepository.create(transfer, {
              transaction,
            });
          }
          return null;
        }),
    )
    return transfers.filter(t => t !== null) as Transfer[];
  }

  public async createTransfer(
    transfersEntity: Partial<Transfer[]> = [],
    bookingId: number,
    transaction: Transaction,

  ): Promise<Transfer> {
    if (!transfersEntity) {
      throw new Error('Transfer not found');
    }
    return await this.transferRepository.create({
      ...transfersEntity,
      bookingId,
    }, { transaction });
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
