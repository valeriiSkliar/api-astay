var fs = require('fs');
var { generateImageUrl } = require('./functions/generateImageUrl.js');
var { generateRandomHexColor } = require('./functions/generateRandomHexColor.js');
var { generateApartmentData } = require('./functions/generateApartmentData.js');
const { isBooleanObject } = require('util/types');

function generateApartmentsContent(tableName) {
  const randomCount = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
  let apartments = [];
  for (let i = 0; i < randomCount; i++) {
    var apartmentsRow = generateApartmentData();
    apartments.push(Object.values(apartmentsRow));
  }

  // console.log('apartments ' + apartments);
  // const sqlContent = apartments
  //   .map(
  //     apartment =>
  //       `INSERT INTO astay_test.Apartment (name, description, host_name, guests, bathrooms, bedrooms, beds, neighbourhood, disabledDates, price, price_low_season, price_high_season, discount, isAvailable, complex_id, isVisible, oldPrice, number_of_reviews, availability_365, review_scores_rating, location_id, room_type_id) VALUES ('${apartment[1]}', '${apartment[2]}', '${apartment[3]}', ${apartment[4]}, ${apartment[5]}, ${apartment[6]}, ${apartment[7]}, '${apartment[8]}', '${apartment[9]}', ${apartment[10]}, ${apartment[11]}, ${apartment[12]}, ${apartment[13]}, ${apartment[14]}, ${apartment[15]}, ${apartment[16]}, ${apartment[17]}, ${apartment[18]}, ${apartment[19]}, ${apartment[20]}, ${apartment[21]}, ${apartment[22]});`,
  //   )
  //   .join('\n');
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
  //   const values = apartments.map(apartment => {
  //     // Convert boolean values to integer representation
  //     const isAvailable = apartment[14] ? 1 : 0;
  //     const isVisible = apartment[16] ? 1 : 0;
  //     // Ensure numeric values are not enclosed in quotation marks
  //     const numericValues = apartment.slice(4, 15).join(", ");
  //     // Enclose string values in single quotes
  //     const stringValues = apartment.slice(1, 4).concat(apartment.slice(8, 17)).map(value => `'${value}'`).join(", ");

  //     return `(${stringValues}, ${numericValues}, ${isAvailable}, ${apartment[15]}, ${isVisible}, ${apartment[17]}, ${apartment[18]}, ${apartment[19]}, ${apartment[20]}, ${apartment[21]}, ${apartment[22]})`;
  // }).join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (name, description, host_name, guests, bathrooms, bedrooms, beds, neighbourhood, disabledDates, price, price_low_season, price_high_season, discount, isAvailable, complex_id, isVisible, oldPrice, number_of_reviews, availability_365, review_scores_rating, location_id, room_type_id) VALUES\n${values};`;

  // console.log('SQL file generated successfully!');

  // console.log('sqlContent ' + sqlContent);
  return sqlContent;
}

exports.generateApartmentsContent = generateApartmentsContent;
