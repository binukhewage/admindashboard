const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Binuk200231301728',
  database: 'dashboard'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = db;
