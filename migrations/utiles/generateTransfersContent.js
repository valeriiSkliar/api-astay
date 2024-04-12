var {generateImageUrl} = require('./functions/generateImageUrl.js');
var {getConnection} = require('./functions/dataBaseConnection.js');
var {faker} = require('@faker-js/faker');

async function generateTransfersContent(tableName) {
  try {
    // Fetch data or create transfer objects programmatically
    const transfers = [
      {
        type: Math.random() > 0.5 ? 'departure' : 'arrival',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.bigInt(100, 1000),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
      {
        type: Math.random() > 0.5 ? 'Arrival' : 'Departure',
        date: faker.date.future().toISOString().split('T')[0],
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.number.int(1000000000, 9999999999),
        city: faker.location.city(),
        departure: 'JFK',
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
      },
    ];


    // Define an array to store SQL statements for each transfer
    const sqlStatements = [];
    const sqlStatement = `INSERT INTO ${tableName} (type, date, flightNumber, nameOfSignage, guests, amountBags, phone, city, departure, time, comments, status, price, discount) VALUES `;

    // Iterate over each transfer
    for (const transfer of transfers) {
      const values = Object.values(transfer)
        .map(value => typeof value === 'string' ? `'${value}'` : value)
        .join(', ');

      // Construct the SQL INSERT statement
      const sqlValue = `(${values})`;
      sqlStatements.push(sqlValue);
    }

    // Join all SQL statements into a single string
    const values = sqlStatements.join(',\n');
    const sqlContent = `${sqlStatement}\n${values};`;

    // Log success message
    console.log('SQL file generated successfully!');

    // Return the SQL content
    return sqlContent;
} catch (error) {
    // Log error message
    console.error('Error generating SQL file:', error);
}
}

exports.generateTransfersContent = generateTransfersContent;
