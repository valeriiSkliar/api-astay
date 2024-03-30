var {faker, fa} = require('@faker-js/faker');

const randomName = faker.person.fullName();

var generateApartmentData = function () {
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
  }

}

exports.generateApartmentData = generateApartmentData;
