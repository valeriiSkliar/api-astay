const {roomCategories} = require('../mock/roomCategories.js');

const generateContent = (tableName) => {


  const roomCategoriesDataInstansesArray = roomCategories
    .map(({category, description, color}) => {

      return `('${category}', '${description}', '${color}')`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (category, description, color) VALUES\n${roomCategoriesDataInstansesArray}`;
  return sqlContent;
};

exports.generateContent = generateContent;
