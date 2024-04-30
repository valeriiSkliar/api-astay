const {amenities} = require('../mock/mockApartmentAmenities.js');

const generateContent = tableName => {
  const amenitiesDataInstansesArray = amenities
    .map(({icon, translations}) => {
      return `('${JSON.stringify(translations)}', '${icon}')`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (translations, icon) VALUES\n${amenitiesDataInstansesArray}`;
  return sqlContent;
};

exports.generateContent = generateContent;
