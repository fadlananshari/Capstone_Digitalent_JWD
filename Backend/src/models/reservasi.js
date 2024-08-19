const dbPool = require('../config/database');

const getAllReservasi = () => {
  const SQLQuery = 'SELECT * FROM reservasi';
  return dbPool.execute(SQLQuery);
};

const getReservasiById = (id) => {
  const SQLQuery = 'SELECT * FROM reservasi WHERE id = ?';
  return dbPool.execute(SQLQuery, [id]);
};

const getReservasiByIdUser = (id_user) => {
  const SQLQuery = 'SELECT * FROM reservasi WHERE id_user = ?';
  return dbPool.execute(SQLQuery, [id_user]);
};

const createNewReservasiByIdPaket = (id_user, id_paket, body) => {
  const SQLQuery = `
    INSERT INTO reservasi (id_user, id_paket, tujuan, sudah_bayar, penginapan, transportasi, makanan, nama, no_telp, jml_peserta, waktu_perjalanan, harga, jml_tagihan, created_at, updated_at) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [id_user, id_paket, body.tujuan, 0, body.penginapan, body.transportasi, body.makanan, body.nama, body.no_telp, body.jml_peserta, body.waktu_perjalanan, body.harga, body.jml_tagihan, new Date(), new Date()];

  return dbPool.execute(SQLQuery, values);
};

const updateReservasi = (body, id) => {
  const SQLQuery = `
    UPDATE reservasi
    SET tujuan = ?, sudah_bayar = ?, penginapan = ?, transportasi = ?, makanan = ?, nama = ?, no_telp = ?, jml_peserta = ?, waktu_perjalanan = ?, harga = ?, jml_tagihan = ?, updated_at = ?
    WHERE id = ?
  `;

  const values = [body.tujuan, 0, body.penginapan, body.transportasi, body.makanan, body.nama, body.no_telp, body.jml_peserta, body.waktu_perjalanan, body.harga, body.jml_tagihan, new Date(), id];

  return dbPool.execute(SQLQuery, values);
};

const updateStatus = (id) => {
  const SQLQuery = `
    UPDATE reservasi
    SET sudah_bayar = ?
    WHERE id = ?
  `;

  const values = [1, id];

  return dbPool.execute(SQLQuery, values);
};

const deleteReservasi = (id) => {
  const SQLQuery = 'DELETE FROM reservasi WHERE id = ?';
  return dbPool.execute(SQLQuery, [id]);
};

const uploadFoto = (id, fotoData) => {
  // console.log(id, fotoData.filename, fotoData.path);
  const SQLQuery = `
      UPDATE reservasi SET bukti_bayar='${fotoData.filename}' WHERE id='${id}'
    `;

  // const values = [id, fotoData.filename, fotoData.path, fotoData.created_at, fotoData.updated_at];

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllReservasi,
  getReservasiById,
  getReservasiByIdUser,
  createNewReservasiByIdPaket,
  updateReservasi,
  updateStatus,
  deleteReservasi,
  uploadFoto,
};
