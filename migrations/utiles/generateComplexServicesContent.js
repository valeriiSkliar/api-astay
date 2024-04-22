const {complexServices} = require('../mock/mockComplexServices.js');

const generateContent = tableName => {
  const complexServicesDataInstansesArray = complexServices
    .map(({icon, title, description, price}) => {
      return `("${icon}", "${title}", "${description}", "${price}")`;
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (description, title, icon, price) VALUES\n${complexServicesDataInstansesArray}`;
  return sqlContent;
};

exports.generateContent = generateContent;
