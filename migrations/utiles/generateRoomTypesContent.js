const {roomTypes} = require('../mock/mockRoomTypes.js');

const generateContent = (tableName) => {


  const typesDataInstansesArray = roomTypes
    .map(({type, description, color}) => {

      return `('${type}', '${description}', '${color}')`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (type, description, color) VALUES\n${typesDataInstansesArray}`;
  return sqlContent;
};

exports.generateContent = generateContent;
