const {getConnection} = require('../utiles/functions/dataBaseConnection.js');

const generateContent = async tableName => {
  const allAmenities = await getConnection('SELECT * FROM Amenity;');
  const allApartments = await getConnection('SELECT * FROM Apartment;');

  const dataInstansesArray = allApartments
    .map(({icon, title, description}) => {
      return `('${description}', '${title}', '${icon}')`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (description, title, icon) VALUES\n${amenitiesDataInstansesArray}`;
  return sqlContent;
};

exports.generateContent = generateContent;
