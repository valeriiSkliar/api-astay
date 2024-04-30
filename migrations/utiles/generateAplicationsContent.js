var fs = require('fs');
var {faker} = require('@faker-js/faker');

async function generateAplicationsContent(
  tableName,
  numberOfApplications = 10,
) {
  const pages = ['main', 'abousUs', 'complexes', 'transfers', 'forOwners'];
  try {
    const sqlStatements = [];
    let sqlStatement = `INSERT INTO ${tableName} (email, phone, name, message, isProcessed, isOpened, isArchived, pageLink, type) VALUES `;

    for (let i = 1; i <= numberOfApplications; i++) {
      const email = faker.internet.email();
      const phone = faker.string.numeric();
      const message = faker.lorem.sentence(9);
      const isProcessed = faker.datatype.boolean();
      const isOpened = faker.datatype.boolean();
      const isArchived = faker.datatype.boolean();
      const pageLink = faker.internet.url();
      const type = faker.lorem.word();


      const name = faker.person.firstName() + ' ' + faker.person.lastName();
      const pageName = pages[Math.floor(Math.random() * pages.length)];

      sqlValue = `('${email}', '${phone}', '${name}', '${message}', '${Number(isProcessed)}', '${Number(isOpened)}', '${Number(isArchived)}', '${pageLink}', '${type}')`;

      sqlStatements.push(sqlValue);
    }
    const values = sqlStatements.join(',\n');

    const sqlContent = `${sqlStatement}
    ${values};`;
    console.log(sqlContent);
    console.log('SQL file generated successfully!');

    return sqlContent;
  } catch (error) {
    console.error('Error generating SQL content:', error);
    return '';
  }
}

exports.generateAplicationsContent = generateAplicationsContent;
