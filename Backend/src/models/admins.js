const dbPool = require('../config/database');

const getAllAdmins = () => {
  const SQLQuery = 'SELECT * FROM admins';

  return dbPool.execute(SQLQuery);
};

const getAdminById = (idAdmin) => {
  const SQLQuery = `SELECT * FROM admins WHERE id=${idAdmin}`;
  return dbPool.execute(SQLQuery);
};

const login = (email) => {
  const SQLQuery = `SELECT * FROM admins WHERE email="${email}"`;

  return dbPool.execute(SQLQuery);
};

const createNewAdmin = (body) => {
  const SQLQuery = `INSERT INTO admins (nama, email, id, profile_pic, verified_at, created_at, updated_at) 
                        VALUES ('${body.name}', '${body.email}', '${body.id}', '${body.profile_pic}', '${body.verified_at}','${body.created_at}','${body.updated_at}')`;

  return dbPool.execute(SQLQuery);
};

const updateAdmin = (body, idAdmin) => {
  const SQLQuery = `  UPDATE admins 
                        SET nama='${body.name}', email='${body.email}', address='${body.address}' 
                        WHERE id=${idAdmin}`;

  return dbPool.execute(SQLQuery);
};

const deleteAdmin = (idAdmin) => {
  const SQLQuery = `DELETE FROM admins WHERE id=${idAdmin}`;

  return dbPool.execute(SQLQuery);
};

const tokenCheck = (token) => {
  const SQLQuery = `SELECT * FROM admins WHERE id='${token}'`
  return dbPool.execute(SQLQuery)
}

module.exports = {
  getAllAdmins,
  getAdminById,
  login,
  createNewAdmin,
  updateAdmin,
  deleteAdmin,
  tokenCheck
};
