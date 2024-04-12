const {log} = require('console');
var {parsedReviewsArray} = require('../mock/mockReviews.js');
var {getConnection} = require('./functions/dataBaseConnection.js');
var {convertToReview} = require('./functions/converParsedReviews.js');

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
      return `('${apartmentToReview.listing_id}', '${apartmentToReview.complex_id}', '${review.avatar}', '${review.roomType}', '${review.reviewDate}', '${review.review}', '${review.name}', ${review.reiting_score}, '${review.createdAt}})`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (apartment_id, complex_id, avatar, roomType,reviewDate,review, name, reiting_score, createdAt) VALUES\n${convertedReviews}`;

  return sqlContent;
}

exports.generateContent = generateContent;
