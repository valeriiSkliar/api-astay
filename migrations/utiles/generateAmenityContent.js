const {amenities} = require('../mock/mockApartmentAmenities.js');

const generateContent = (tableName) => {


  const amenitiesDataInstansesArray = amenities
    .map(({icon, title, description}) => {

      return `('${icon}', '${title}', '${description}')`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (description, title, icon) VALUES\n${amenitiesDataInstansesArray}`;
  return sqlContent;
};

exports.generateContent = generateContent;
