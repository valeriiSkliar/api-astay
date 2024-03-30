const { log } = require('console');
var {mockReviews} = require('../mock/mockReviews.js');
var { getConnection } = require('./functions/dataBaseConnection.js');

async function generateContent(tableName) {
  const allApartments = await getConnection('SELECT * FROM astay_test.Apartment;')
    .then((result) => {
      return result.map((apartment) => {
        return {
          listing_id: apartment.id,
          complex_id: apartment.complex_id,
        };
      });
    });
  const reviewsDataInstansesArray = mockReviews.map((review, index) => {
    const randomApartmentIndex = Math.floor(Math.random() * allApartments.length);
    const apartmentToReview = allApartments[randomApartmentIndex];
    return `('${apartmentToReview.listing_id}', '${apartmentToReview.complex_id}', '${review.avatar}', '${review.roomName}', '${review.reviewDate}', '${review.review}', '${review.name}')`;
  }).join(',\n');


  const sqlContent = `INSERT INTO ${tableName} (listing_id, complex_id, avatar, roomName,reviewDate,review, name) VALUES\n${reviewsDataInstansesArray}`;
  // log(sqlContent);
  return sqlContent;
}

exports.generateContent = generateContent;
