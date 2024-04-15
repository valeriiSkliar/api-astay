var {generateImageUrl} = require('./functions/generateImageUrl.js');
var {getConnection} = require('./functions/dataBaseConnection.js');
async function generateContent(tableName) {
  const allApartments = await getConnection('SELECT * FROM Apartment;');
  const allComplexes = await getConnection('SELECT * FROM Complex;');

  let imageCounter = 1;
  const apartmentPhotoDataArray = allApartments
    .map((apartment) => {
      const photosData = [];
      for (let i = 0; i < 10; i++) {
        photosData.push({
          url: generateImageUrl(imageCounter),
          apartment_id: apartment.id,
          complex_id: null,
          service_id: null,
          order: i + 1
        });
        imageCounter += 1;
      }
      return photosData
        .map(photo => {
          return `('${photo.url}', ${photo?.apartment_id}, ${photo?.complex_id ? `'${photo.complex_id}'` : 'NULL'}, ${photo?.service_id ? `'${photo.service_id}'` : 'NULL'}, ${photo.order})`;
        })
        .join(',\n');
    })

    const complexPhotoDataArray = allComplexes
    .map((complex) => {
      const photosData = [];
      for (let i = 0; i < 10; i++) {
        photosData.push({
          url: generateImageUrl(imageCounter),
          apartment_id: null,
          complex_id: complex.id,
          service_id: null,
          order: i + 1
        });
        imageCounter += 1;
      }
      return photosData
        .map(photo => {
          return `('${photo.url}', ${photo?.apartment_id ? `'${photo.apartment_id}'` : 'NULL'}, ${photo?.complex_id ? `'${photo.complex_id}'` : 'NULL'}, ${photo?.service_id ? `'${photo.service_id}'` : 'NULL'}, ${photo.order})`;
        })
        .join(',\n');
    })

    const photoDataInstansesArray = apartmentPhotoDataArray.concat(complexPhotoDataArray).join(',\n');
    console.log(photoDataInstansesArray);
  const sqlContent = `INSERT INTO ${tableName} (url, apartment_id, complex_id, service_id, order_number) VALUES\n${photoDataInstansesArray};`;
  return sqlContent;
}

exports.generateContent = generateContent;
