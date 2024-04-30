const {roomTypes} = require('../mock/mockRoomTypes.js');

const generateContent = tableName => {
  const typesDataInstansesArray = roomTypes
    .map(({translations, color}) => {
      return `('${JSON.stringify(translations)}', '${color}')`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (translations, color) VALUES\n${typesDataInstansesArray}`;
  return sqlContent;
};

exports.generateContent = generateContent;
