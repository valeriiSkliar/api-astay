var {generateImageUrl} = require('./functions/generateImageUrl.js');
var {getConnection} = require('./functions/dataBaseConnection.js');
async function generateContent(tableName) {
  const allApartments = await getConnection('SELECT * FROM Apartment;');
  let imageCounter = 1;
  const photoDataInstansesArray = allApartments
    .map((apartment) => {
      const photosData = [];
      for (let i = 0; i < 10; i++) {
        photosData.push({
          url: generateImageUrl(imageCounter),
          apartment_id: apartment.id,
          complex_id: null,
          service_id: null,
        });
        imageCounter += 1;
      }
      return photosData
        .map(photo => {
          return `('${photo.url}', ${photo?.apartment_id}, ${photo?.complex_id ? `'${photo.complex_id}'` : 'NULL'}, ${photo?.service_id ? `'${photo.service_id}'` : 'NULL'})`;
        })
        .join(',\n');
    })
    .join(',\n');

  const sqlContent = `INSERT INTO ${tableName} (url, apartment_id, complex_id, service_id) VALUES\n${photoDataInstansesArray}`;
  return sqlContent;
}

exports.generateContent = generateContent;
