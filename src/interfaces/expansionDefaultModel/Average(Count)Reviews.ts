import {Count} from '@loopback/repository';

export interface AverageCountScoresReviews extends Count {
  average?: number;
}
