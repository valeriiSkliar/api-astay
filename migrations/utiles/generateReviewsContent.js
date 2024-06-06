const { log } = require('console');
var { parsedReviewsArray } = require('../mock/mockReviews.js');
var { getConnection } = require('./functions/dataBaseConnection.js');
var { convertToReview } = require('./functions/converParsedReviews.js');

// TODO: fix seeder for reviews

async function generateContent(tableName) {
  const allApartments = await getConnection('SELECT * FROM Apartment;').then(
    result => {
      return result.map(apartment => {
        return {
          listing_id: apartment.id,
          complex_id: apartment.complex_id,
        };
      });
    },
  );

  const convertedReviews = convertToReview(parsedReviewsArray)
    .map((review, index) => {
      const randomApartmentIndex = Math.floor(
        Math.random() * allApartments.length,
      );
      const apartmentToReview = allApartments[randomApartmentIndex];

      // Conditionally include positive_review and negative_review
      const positiveReview = review.positive_review
        ? `"${review.positive_review}",`
        : '';
      const negativeReview = review.negative_review
        ? `"${review.negative_review}",`
        : '';
      const avatarReview = review.avatar ? `"${'https://astayhome.com' + review.avatar}",` : '';

      const positive = review.positive_review ? 'positive_review,' : '';
      const negative = review.negative_review ? 'negative_review,' : '';
      const avatar = review.avatar ? 'avatar,' : '';

      return `INSERT INTO ${tableName} (listing_id, complex_id,${avatar}reviewDate,review,${positive}${negative}name,reiting_score,createdAt,isArchived,status) VALUES ("${apartmentToReview.listing_id}", "${apartmentToReview.complex_id}", ${avatarReview} "${review.reviewDate}", "${review.review || 'No text review'}", ${positiveReview} ${negativeReview} "${review.name}", "${review.reiting_score}", "${review.createdAt}", "${review.isArchived ? 1 : 0}", "${review.status ? 1 : 0}");`;
    })
    .join('\n');

  // const sqlContent = `INSERT INTO ${tableName} (listing_id, complex_id, avatar, roomType, reviewDate, review, positive_review, negative_review, name, reiting_score, createdAt) VALUES\n${convertedReviews}`;

  return convertedReviews;
}

exports.generateContent = generateContent;
