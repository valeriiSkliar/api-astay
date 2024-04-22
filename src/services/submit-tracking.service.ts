import {
  injectable,
  /* inject, */ BindingScope,
  BindingKey,
} from '@loopback/core';

@injectable({scope: BindingScope.SINGLETON})
export class SubmitTrackingService {
  private static statucIpCache = new Map<string, number>();

  private ipCache = new Map<string, number>();
  public incrementSubmissionCount(clientIp: string): void {
    if (!clientIp) {
      console.error('clientIp is null');
      return;
    }

    const cachedSubmissionCount =
      SubmitTrackingService.statucIpCache.get(clientIp);
    if (cachedSubmissionCount === undefined) {
      SubmitTrackingService.statucIpCache.set(clientIp, 1);
    } else {
      SubmitTrackingService.statucIpCache.set(
        clientIp,
        cachedSubmissionCount + 1,
      );
    }
    console.log('this.ipCache', SubmitTrackingService.statucIpCache);
  }

  public getSubmissionCount(clientIp: string): number {
    return SubmitTrackingService.statucIpCache?.get(clientIp) || 0;
  }

  public hasExceededLimit(clientIp: string, limit: number): boolean {
    const submissionCount = this.getSubmissionCount(clientIp);
    console.log('submissionCount', submissionCount);
    console.log('this.ipCache', SubmitTrackingService.statucIpCache);
    return submissionCount >= limit;
  }
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
}
export const SUBMIT_TRACKING_SERVICE = BindingKey.create<SubmitTrackingService>(
  'services.submit-tracking',
);
