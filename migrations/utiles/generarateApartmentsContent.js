var fs = require('fs');
var { generateApartmentData } = require('./functions/generateApartmentData.js');

function generateApartmentsContent(tableName) {
  const randomCount = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
  let apartments = [];
  for (let i = 0; i < randomCount; i++) {
    var apartmentsRow = generateApartmentData();
    apartments.push(Object.values(apartmentsRow));
  }


  const values = apartments.map(apartment => {
    if (!apartment) {
      throw new Error('apartment is null or undefined');
    }
    const valuesCopy = [...apartment];
    for (let i = 0; i < valuesCopy.length; i++) {
      const value = valuesCopy[i];
      if (value === true || value === false) {
        valuesCopy[i] = Number(value ? 1 : 0);
      } else if (value === null || value === undefined) {
        throw new Error(`apartment[${i}] is null or undefined`);
      }
    }
    return `('${valuesCopy.slice(1).join("', '")}')`;
  })
  .join(',\n');

// FIXME: change the neighbourhood => neighborhood
  const sqlContent = `INSERT INTO ${tableName} (name, description, host_name, guests, bathrooms, bedrooms, beds, neighbourhood, disabledDates, price, price_low_season, price_high_season, discount, isAvailable, complex_id, isVisible, oldPrice, number_of_reviews, availability_365, review_scores_rating, location_id, room_type_id) VALUES\n${values};`;

  console.log('SQL file generated successfully!');

  return sqlContent;
}

exports.generateApartmentsContent = generateApartmentsContent;
