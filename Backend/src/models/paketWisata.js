const dbPool = require('../config/database');

const getAllPaketWisata = () => {
  const SQLQuery = 'SELECT * FROM paket_wisata';
  return dbPool.execute(SQLQuery);
};

const getPaketWisataById = (id) => {
  const SQLQuery = 'SELECT * FROM paket_wisata WHERE id = ?';
  return dbPool.execute(SQLQuery, [id]);
};

const createNewPaketWisata = (body) => {
  const SQLQuery = `
    INSERT INTO paket_wisata (nama, lokasi, deskripsi, foto, created_at, updated_at) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [body.nama, body.lokasi, body.deskripsi, body.foto, new Date(), new Date()];

  return dbPool.execute(SQLQuery, values);
};

const updatePaketWisata = (body, id) => {
  const SQLQuery = `
    UPDATE paket_wisata
    SET nama = ?, lokasi = ?, deskripsi = ?, updated_at = ?
    WHERE id = ?
  `;

  const values = [body.nama, body.lokasi, body.deskripsi, new Date(), id];

  return dbPool.execute(SQLQuery, values);
};

const deletePaketWisata = (id) => {
  const SQLQuery = 'DELETE FROM paket_wisata WHERE id = ?';
  return dbPool.execute(SQLQuery, [id]);
};

const uploadFoto = (id, fotoData) => {
  // console.log(id, fotoData.filename, fotoData.path);
  const SQLQuery = `
      UPDATE paket_wisata SET foto='${fotoData.filename}' WHERE id='${id}'
    `;

  // const values = [id, fotoData.filename, fotoData.path, fotoData.created_at, fotoData.updated_at];

  return dbPool.execute(SQLQuery);
};

const deleteFoto = (id) => {
  const SQLQuery = `UPDATE paket_wisata SET foto = NULL WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id]);
}

module.exports = {
  getAllPaketWisata,
  getPaketWisataById,
  createNewPaketWisata,
  updatePaketWisata,
  deletePaketWisata,
  uploadFoto,
  deleteFoto
};
