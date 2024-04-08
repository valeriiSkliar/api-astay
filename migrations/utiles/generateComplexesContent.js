var fs = require('fs');
var { getConnection } = require('./functions/dataBaseConnection.js');

async function generateComplexesContent(tableName) {
  try {
    // Fetch all locations from the database
    var allLocations = await getConnection('SELECT * FROM Locations;');

    // Define an array to store SQL statements for each complex
    let sqlStatements = [];
    let sqlStatement = `INSERT INTO ${tableName} (name, description, images, address, geo_data, location_id) VALUES `;

    // Iterate over each location
    for (let location of allLocations) {
      // Generate two complexes for each location
      for (let i = 1; i <= 2; i++) {
        let complexName = `${location.name} Complex ${i}`;
        let description = `<pModern complex located in ${location.name}. It offers stunning views of the surrounding area and is close to all the best attractions.</p>`;
        let images = '["https://images.unsplash.com/photo-1612838320304-4"]';
        let address = `${i}23 ${location.name} Street, ${location.city}, ${location.country}`;
        let geoData = `[{"lat":${location.latitude},"lng":${location.longitude}}]`;
        let location_id = location.id;

        // Construct the SQL INSERT statement
        sqlValue= `('${complexName}', '${description}', '${images}', '${address}', '${geoData}', '${location_id}')`;

        sqlStatements.push(sqlValue);
        // console.log(sqlStatements);
      }
    }
    const values = sqlStatements.join(',\n');

    // Join all SQL statements into a single string
    const sqlContent = `${sqlStatement}
    ${values};`;
    console.log(sqlContent);
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
