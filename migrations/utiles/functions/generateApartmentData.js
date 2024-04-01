var {faker} = require('@faker-js/faker');
var { amenities } = require('../../mock/mockApartmentAmenities.js');
var { getConnection } = require('../functions/dataBaseConnection.js');

var generateApartmentData = async function () {
  var allAmenities = await getConnection('SELECT * FROM Amenity;')
  // console.log(allAmenities);

  var amenitiesIds = allAmenities.map(({id}) => id);

  // Generate a random count between 10 and the length of the amenitiesIds array
  var count = Math.floor(Math.random() * (amenitiesIds.length - 10 + 1)) + 10;

  // Shuffle the amenitiesIds array to randomize selection
  amenitiesIds = shuffleArray(amenitiesIds);

  // Select the first 'count' elements as random amenity IDs
  var randomAmenityIds = amenitiesIds.slice(0, count);
  console.log(JSON.stringify(randomAmenityIds));
  // return null;
  return {
    id: Math.floor(Math.random() * (40 - 10 + 1)) + 10,
    name: faker.lorem.words(10),
    description: faker.lorem.sentence(40),
    host_name: `${faker.person.firstName()}`,
    guests: Math.floor(Math.random() * (4 - 1 + 1)) + 10,
    bathrooms: Math.floor(Math.random() * (2 - 1 + 1)) + 10,
    bedrooms: Math.floor(Math.random() * (3 - 1 + 1)) + 10,
    beds: Math.floor(Math.random() * (4 - 1 + 1)) + 10,
    neighborhood: JSON.stringify([faker.location.direction()]),
    disabledDates: JSON.stringify([faker.date.future()]),
    price: faker.finance.amount(),
    price_low_season: faker.finance.amount(),
    price_high_season: faker.finance.amount(),
    discount: faker.number.int(0, 20),
    isAvailable: true,
    complex_id: 1,
    isVisible: true,
    oldPrice: faker.finance.amount(),
    number_of_reviews: 20,
    availability_365: 365,
    review_scores_rating: 6,
    location_id: 1,
    room_type_id: 1,
    amenityIds: JSON.stringify(randomAmenityIds),
  };
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
exports.generateApartmentData = generateApartmentData;
