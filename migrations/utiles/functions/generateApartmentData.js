var {faker} = require('@faker-js/faker');
var {getConnection} = require('../functions/dataBaseConnection.js');

var generateApartmentData = async function () {
  var allAmenities = await getConnection('SELECT * FROM Amenity;');
  var allRoomTypes = await getConnection('SELECT * FROM RoomType;');
  var allRoomCategories = await getConnection('SELECT * FROM RoomType;');
  var allComplexes = await getConnection('SELECT * FROM Complex;');
  var allRoomCategories = await getConnection('SELECT * FROM RoomCategory;');

  var amenitiesIds = allAmenities.map(({id}) => id);
  var complex =
    allComplexes[Math.floor(Math.random() * allComplexes.length)] ||
    allComplexes[0];
  console.log(complex);
  var count = Math.floor(Math.random() * (amenitiesIds.length - 10 + 1)) + 10;
  var roomType =
    allRoomTypes[Math.floor(Math.random() * allRoomTypes.length)] ||
    allRoomTypes[0];
  var roomCategory =
    allRoomCategories[Math.floor(Math.random() * allRoomCategories.length)] ||
    allRoomCategories[0];
  amenitiesIds = shuffleArray(amenitiesIds);

  var randomAmenityIds = amenitiesIds.slice(0, count);

  return {
    id: Math.floor(Math.random() * (40 - 10 + 1)) + 10,
    host_name: `Astay-Home`,
    guests: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
    bathrooms: Math.floor(Math.random() * (2 - 1 + 1)) + 1,
    bedrooms: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    beds: Math.floor(Math.random() * (4 - 1 + 1)) + 1,
    neighborhood: JSON.stringify([faker.location.direction()]),
    price: faker.finance.amount(),
    price_low_season: faker.finance.amount(),
    price_high_season: faker.finance.amount(),
    discount: faker.number.int(0, 20),
    isAvailable: true,
    isVisible: true,
    isPromotion: faker.datatype.boolean(),
    complex_id: complex.id,
    number_of_reviews: 20,
    availability_365: 365,
    review_scores_rating: 6,
    location_id: complex.location_id,
    amenityIds: JSON.stringify(randomAmenityIds),
    room_type_id: roomType.id,
    roomCategoryId: roomCategory.id,
    hostDisabledDates: JSON.stringify([faker.date.future()]),
    translations: JSON.stringify({
      en: {
        name: faker.lorem.words(10),
        description: faker.lorem.sentence(40),
      },
      ru: {
        name: faker.lorem.words(10),
        description: faker.lorem.sentence(40),
      },
    }),
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
