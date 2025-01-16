const db = require('../database/db');

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};
