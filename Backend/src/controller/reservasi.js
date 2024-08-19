const ReservasiModel = require('../models/reservasi.js');

const getAllReservasi = async (req, res) => {
  try {
    const [data] = await ReservasiModel.getAllReservasi();

    res.json({
      message: 'GET all reservasi success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getReservasiById = async (req, res) => {
  const { id } = req.params;
  try {
    const [data] = await ReservasiModel.getReservasiById(id);
    res.json({
      message: 'GET reservasi by id success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getReservasiByIdUser = async (req, res) => {
  const { id_user } = req.params;
  try {
    const [data] = await ReservasiModel.getReservasiByIdUser(id_user);
    res.json({
      message: 'GET reservasi by id user success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewReservasiByIdPaket = async (req, res) => {
  const { body } = req;
  const { id_paket } = req.params;
  const { id_user } = req.params;

  //   if (!body.nama || !body.lokasi || !body.deskripsi || body.foto || body.created_at) {
  //     console.log(body)
  //     return res.status(400).json({
  //       message: 'Anda mengirimkan data yang salah',
  //       data: null,
  //     });
  //   }

  try {
    await ReservasiModel.createNewReservasiByIdPaket(id_user, id_paket, body);
    res.status(201).json({
      message: 'CREATE new reservasi success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateReservasi = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    await ReservasiModel.updateReservasi(body, id);
    res.json({
      message: 'UPDATE reservasi success',
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    console.error('Error updating reservasi:', error); // Logging error for debugging
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message, // Include only the error message
    });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;

  try {
    await ReservasiModel.updateStatus(id);
    res.json({
      message: 'UPDATE status reservasi success',
      data: {
        id: id,
      },
    });
  } catch (error) {
    console.error('Error updating status reservasi:', error); // Logging error for debugging
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message, // Include only the error message
    });
  }
};

const deleteReservasi = async (req, res) => {
  const { id } = req.params; // Correctly extracting id from URL params

  try {
    await ReservasiModel.deleteReservasi(id);
    res.json({
      message: 'DELETE reservasi success',
      data: null,
    });
  } catch (error) {
    console.error('Error deleting reservasi:', error); // Logging error for debugging
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message, // Include only the error message
    });
  }
};

const uploadFoto = async (id, req, res) => {
  const { file } = req;

  if (!file) {
    return res.status(400).json({
      message: 'No file uploaded',
    });
  }

  const fotoData = {
    filename: file.filename,
  };

  try {
    await ReservasiModel.uploadFoto(id, fotoData);
    res.status(201).json({
      message: 'UPLOAD foto success',
      data: fotoData,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
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
