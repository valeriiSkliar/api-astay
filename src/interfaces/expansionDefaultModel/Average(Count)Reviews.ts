import {Count} from '@loopback/repository';

export interface AverageCountReviews extends Count {
  average?: number;
}
