const db = require('../database/db');

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM news', (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM news WHERE id = ?', [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};
