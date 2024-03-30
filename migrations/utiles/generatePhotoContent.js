var { generateImageUrl } = require('./functions/generateImageUrl.js');
var { getConnection } = require('./functions/dataBaseConnection.js');
async function generateContent(tableName) {
  const allApartments = await getConnection('SELECT * FROM astay_test.Apartment;');
  const photoDataInstansesArray = allApartments.map((apartment, index) => {

    const photosData = [];
    for (let i = 0; i < 10; i++) {
      photosData.push({
        url: generateImageUrl(i),
        apartment_id: apartment.id,
        complex_id: null,
        service_id: null
      });
    }
    return photosData.map(photo => {
      return `('${photo.url}', ${photo?.apartment_id}, ${photo?.complex_id ? `'${photo.complex_id}'` : 'NULL'}, ${photo?.service_id ? `'${photo.service_id}'` : 'NULL'})`;
    }).join(',\n');
  })
  .join(',\n');

  // console.log(photoDataInstansesArray);

  // const allApartments = [];

  // get apart IDs
  // map over allApartments and generate random HEX colors (background, fontcolor) for each apartment image link
  // generate image url for each apartment
  // set the apartment_id for each photo
  // Photo table sttucture: url	apartment_id	complex_id	service_id



  const sqlContent = `INSERT INTO ${tableName} (url, apartment_id, complex_id, service_id) VALUES\n${photoDataInstansesArray}`;
  return sqlContent;
}

exports.generateContent = generateContent;
