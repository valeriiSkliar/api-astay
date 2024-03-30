const db = require('db-migrate-mysql');
const mysql = require('mysql2/promise');

async function getConnection(query) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'astay_test'
  });

  const [results] = await connection.query(query);

  console.log('Retrieved data:', results);

  connection.end(); // Close the connection

  return results;
}

exports.getConnection = getConnection;
