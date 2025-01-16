const db = require('../database/db');

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM advertisements', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM advertisements WHERE id = ?', [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};
