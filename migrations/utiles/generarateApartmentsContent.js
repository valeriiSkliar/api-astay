var fs = require('fs');
var {generateApartmentData} = require('./functions/generateApartmentData.js');

async function generateApartmentsContent(tableName) {
  const randomCount = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
  let apartments = [];
  for (let i = 0; i < randomCount; i++) {
    var apartmentsRow = await generateApartmentData();
    apartments.push(Object.values(apartmentsRow));
  }

  const values = apartments
    .map(apartment => {
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

  const sqlContent = `INSERT INTO ${tableName} ( host_name, guests, bathrooms, bedrooms, beds, neighborhood, price, price_low_season, price_high_season, discount, isAvailable,  isVisible, isPromotion,  complex_id,number_of_reviews, availability_365, review_scores_rating, location_id, amenityIds, room_type_id, roomCategoryId, hostDisabledDates, translations	) VALUES\n${values};`;

  console.log('SQL file generated successfully!');

  return sqlContent;
}

exports.generateApartmentsContent = generateApartmentsContent;
