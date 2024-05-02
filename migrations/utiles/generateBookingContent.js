var {faker} = require('@faker-js/faker');
var {getConnection} = require('../utiles/functions/dataBaseConnection.js');

async function generateBookings(tableName, count) {
  try {
    const apartment = await getConnection('SELECT * FROM Apartment;');
    const sqlStatements = [];
    const sqlStatement = `INSERT INTO ${tableName} (name, email, checkIn, checkOut, paymentUrl, bookingAmount, price, oldPrice, customerId, apartmentId, createdAt, phoneNumber, guests, maxGuests, maxRooms, location, isAvailableApart, paymentStatus, token, isArchived, status, paymentMethod, actuallyPaid, discount, notes, bookingDates) VALUES `;

    for (let i = 0; i < count; i++) {
      const booking = {
        // id: i + 1,
        name: faker.lorem.words(2),
        email: faker.internet.email(),
        checkIn: new Date(faker.date.future()).toISOString().split('.')[0],
        checkOut: new Date(faker.date.future()).toISOString().split('.')[0],
        paymentUrl: faker.internet.url(),
        bookingAmount: faker.number.int(0, 20),
        price: faker.number.int(0, 20),
        oldPrice: faker.number.int(0, 20),
        customerId: faker.number.int(0, 20),
        apartmentId: apartment[Math.floor(Math.random() * apartment.length)].id,
        createdAt: new Date(faker.date.past()).toISOString().split('.')[0],
        phoneNumber: faker.string.numeric(),
        guests: faker.number.int(0, 20),
        maxGuests: faker.number.int(0, 20),
        maxRooms: faker.number.int(0, 20),
        location: faker.location.city(),
        isAvailableApart: faker.datatype.boolean(),
        paymentStatus: faker.datatype.boolean(),
        token: faker.lorem.words(10),
        isArchived: faker.datatype.boolean(),
        status: 'confirmed',
        paymentMethod: 'credit card',
        actuallyPaid: faker.number.int({min: 100, max: 1000}),
        discount: faker.number.int(0, 20),
        notes: faker.lorem.sentence(2),
        bookingDates: JSON.stringify([
          new Date(faker.date.future()).toISOString().split('.')[0],
        ]),
      };

      const values = Object.values(booking)
        .map(value =>
          typeof value === 'string' ? `'${value.replace(/'/g, "''")}'` : value,
        )
        .join(', ');

      const sqlValue = `(${values})`;
      sqlStatements.push(sqlValue);
    }

    const values = sqlStatements.join(',\n');
    const sqlContent = `${sqlStatement}\n${values};`;

    console.log(`SQL file generated successfully with ${count} bookings!`);
    return sqlContent;
  } catch (error) {
    console.error('Error generating SQL file:', error);
  }
}

exports.generateBookings = generateBookings;
