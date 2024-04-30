const {roomCategories} = require('../mock/roomCategories.js');

const generateContent = tableName => {
  const roomCategoriesDataInstansesArray = roomCategories
    .map(({translations, color}) => {
      return `('${JSON.stringify(translations)}', '${color}')`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (translations, color) VALUES\n${roomCategoriesDataInstansesArray}`;
  return sqlContent;
};

exports.generateContent = generateContent;
