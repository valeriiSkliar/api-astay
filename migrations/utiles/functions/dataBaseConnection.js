const mysql = require('mysql2/promise');

async function getConnection(query) {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  const [results] = await connection.query(query);

  console.log('Retrieved data in getConnection Function:', results);

  connection.end();

  return results;
}

exports.getConnection = getConnection;
