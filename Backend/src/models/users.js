const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
};

const getUserById = (idUser) => {
  const SQLQuery = `SELECT * FROM users WHERE id=${idUser}`;
  return dbPool.execute(SQLQuery);
};

const login = (email) => {
  const SQLQuery = `SELECT * FROM users WHERE email="${email}"`;

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `
    INSERT INTO users (nama, email, id, profile_pic, verified_at, created_at, updated_at) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [body.name, body.email, body.id, body.profile_pic, new Date(), new Date(), new Date()];

  return dbPool.execute(SQLQuery, values);
};

// const updateUser = (body, idUser) => {
//   const SQLQuery = `  UPDATE users
//                         SET nama='${body.name}', email='${body.email}', address='${body.address}'
//                         WHERE id=${idUser}`;

//   return dbPool.execute(SQLQuery);
// };

// const deleteUser = (idUser) => {
//   const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

//   return dbPool.execute(SQLQuery);
// };

const tokenCheck = (token) => {
  const SQLQuery = `SELECT * FROM users WHERE id='${token}'`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  getUserById,
  login,
  createNewUser,
  //   updateUser,
  //   deleteUser,
  tokenCheck,
};
