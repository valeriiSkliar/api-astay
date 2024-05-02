var fs = require('fs');
var {getConnection} = require('./functions/dataBaseConnection.js');

async function generateComplexesContent(tableName) {
  try {
    // Fetch all locations from the database
    var allLocations = await getConnection('SELECT * FROM Locations;').then(
      data => {
        return data.map(location => {
          return {
            ...location,
            translations: location.translations,
          };
        });
      },
    );
    console.log(allLocations);

    // Define an array to store SQL statements for each complex
    let sqlStatements = [];
    let sqlStatement = `INSERT INTO ${tableName} (translations, geo_data, location_id) VALUES `;

    // Iterate over each location
    for (let location of allLocations) {
      // Generate two complexes for each location
      for (let i = 1; i <= 5; i++) {
        let translations = {
          en: {
            name: `${location.translations.en.name} Complex ${i}`,
            description: `Modern complex located in ${location.translations.en.name}. lorem ipsum dolor sit amet, consectetur adipiscing elit. It offers stunning views of the surrounding area and is close to all the best attractions.`,
            address: `${i}23 ${location.translations.en.name} Street, ${location.translations.en.city}, ${location.translations.en.country}`,
          },
          ru: {
            name: `${location.translations.ru.name} Комплекс ${i}`,
            description: `Современный комплекс, расположенный в ${location.translations.ru.name}. lorem ipsum dolor sit amet, consectetur adipiscing elit. Он предлагает потрясающие виды на окружающую местность и находится недалеко от всех лучших достопримечательностей.`,
            address: `${i}23 улица ${location.translations.ru.name}, ${location.translations.ru.city}, ${location.translations.ru.country}`,
          },
        };

        let geoData = `[{"lat":${12.34},"lng":${100.12}}]`;
        let location_id = location.id;

        // Construct the SQL INSERT statement
        sqlValue = `('${JSON.stringify(translations)}', '${geoData}', '${location_id}')`;

        sqlStatements.push(sqlValue);
        // console.log(sqlStatements);
      }
    }
    const values = sqlStatements.join(',\n');

    // Join all SQL statements into a single string
    const sqlContent = `${sqlStatement}
    ${values};`;
    // Log success message
    console.log('SQL file generated successfully!');

    // Return the SQL content
    return sqlContent;
  } catch (error) {
    console.error('Error generating SQL content:', error);
    return ''; // Return empty string in case of error
  }
}

exports.generateComplexesContent = generateComplexesContent;
