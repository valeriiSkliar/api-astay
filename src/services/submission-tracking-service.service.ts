import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class SubmissionTrackingServiceService {
  private ipCache = new Map<string, number>();

  public incrementSubmissionCount(clientIp: string): void {
    if (this.ipCache.has(clientIp)) {
      const submissionCount = this.ipCache.get(clientIp) || 0;
      this.ipCache.set(clientIp, submissionCount + 1);
    } else {

      this.ipCache.set(clientIp, 1);
    }
  }

  public getSubmissionCount(clientIp: string): number {
    return this.ipCache?.get(clientIp) || 0;
  }

  public hasExceededLimit(clientIp: string, limit: number): boolean {
    const submissionCount = this.getSubmissionCount(clientIp);

    return submissionCount >= limit;
  }

  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
}
