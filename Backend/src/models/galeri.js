const dbPool = require('../config/database');

const getAllFotoGallery = () => {
  const SQLQuery = `SELECT * FROM galeri`;
  return dbPool.execute(SQLQuery);
};

const getFotoByIdPaket = (id_paket) => {
  const SQLQuery = 'SELECT * FROM galeri WHERE id_paket=?';
  return dbPool.execute(SQLQuery, [id_paket]);
};

const createNewFoto = (id, fotoData) => {
  // console.log(id, fotoData.filename, fotoData.path);
  const SQLQuery = `
      INSERT INTO galeri (id_paket, gambar, lokasi, created_at, updated_at) 
      VALUES (?, ?, ?, ?, ?)
    `;

  const values = [id, fotoData.filename, fotoData.path, fotoData.created_at, fotoData.updated_at];

  return dbPool.execute(SQLQuery, values);
};

const deleteFotoById = (id) => {
  const SQLQuery = `DELETE FROM galeri WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id]);
}

module.exports = {
  getAllFotoGallery,
  getFotoByIdPaket,
  createNewFoto,
  deleteFotoById
};
