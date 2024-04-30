var {faker} = require('@faker-js/faker');
var {getConnection} = require('../utiles/functions/dataBaseConnection.js');

async function generateTransfersContent(tableName, count) {
  try {
    var bookings = await getConnection('SELECT * FROM Booking;');

    // Define an array to store SQL statements for each transfer
    const sqlStatements = [];
    const sqlStatement = `INSERT INTO ${tableName} (type, flightNumber, nameOfSignage, guests, amountBags, phone, city,  time, comments, status, isArchived, notes,date, price, discount, bookingId, customerId) VALUES `;

    // Iterate over each transfer
    for (let i = 0; i < count; i++) {
      const transfer = {
        type: Math.random() > 0.5 ? 'departure' : 'arrival',
        flightNumber: faker.person.middleName(),
        nameOfSignage: faker.person.lastName() + ' ' + faker.person.firstName(),
        guests: faker.number.int(1, 10),
        amountBags: faker.number.int(1, 5),
        phone: faker.string.numeric(),
        city: faker.location.city(),
        time: faker.date.future().toISOString().split('T')[0],
        comments: faker.lorem.sentence(4),
        status: Number(false),
        isArchived: Number(false),
        notes: faker.lorem.sentence(20),
        date: faker.date.future().toISOString().split('T')[0],
        price: faker.number.int(1, 100),
        discount: faker.number.int(1, 20),
        bookingId: bookings[Math.floor(Math.random() * bookings.length)].id,
        customerId: faker.number.int(1, 20),
      };

      // TODO: implement Customer and Booking seeders

      const values = Object.values(transfer)
        .map(value => (typeof value === 'string' ? `'${value}'` : value))
        .join(', ');

      // Construct the SQL INSERT statement
      const sqlValue = `(${values})`;
      sqlStatements.push(sqlValue);
    }

    // Join all SQL statements into a single string
    const values = sqlStatements.join(',\n');
    const sqlContent = `${sqlStatement}\n${values};`;

    // Log success message
    console.log(`SQL file generated successfully with ${count} transfers!`);

    // Return the SQL content
    return sqlContent;
  } catch (error) {
    // Log error message
    console.error('Error generating SQL file:', error);
  }
}

exports.generateTransfersContent = generateTransfersContent;

