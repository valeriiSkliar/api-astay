import {Review, ReviewRelations} from '../../models/review.model';

export function calculateAverageRating(
  reviews: (Review & ReviewRelations)[],
): number {
  const totalRating = reviews.reduce((sum, review) => {
    if (!review.reiting_score) return sum;
    return sum + review.reiting_score;
  }, 0);
  return Math.round((totalRating / reviews.length) * 100) / 100;
}
