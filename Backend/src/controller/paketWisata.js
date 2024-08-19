const PaketWisataModel = require('../models/paketWisata.js');

const getAllPaketWisata = async (req, res) => {
  try {
    const [data] = await PaketWisataModel.getAllPaketWisata();

    res.json({
      message: 'GET all paket wisata success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getPaketWisataById = async (req, res) => {
  const { id } = req.params;
  try {
    const [data] = await PaketWisataModel.getPaketWisataById(id);
    res.json({
      message: 'GET paket wisata by id success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewPaketWisata = async (req, res) => {
  const { body } = req;

  //   if (!body.nama || !body.lokasi || !body.deskripsi || body.foto || body.created_at) {
  //     console.log(body)
  //     return res.status(400).json({
  //       message: 'Anda mengirimkan data yang salah',
  //       data: null,
  //     });
  //   }

  try {
    await PaketWisataModel.createNewPaketWisata(body);
    res.status(201).json({
      message: 'CREATE new paket wisata success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updatePaketWisata = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    await PaketWisataModel.updatePaketWisata(body, id);
    res.json({
      message: 'UPDATE paket wisata success',
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    console.error('Error updating paket wisata:', error); // Logging error for debugging
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message, // Include only the error message
    });
  }
};

const deletePaketWisata = async (req, res) => {
  const { id } = req.params; // Correctly extracting id from URL params

  try {
    await PaketWisataModel.deletePaketWisata(id);
    res.json({
      message: 'DELETE paket wisata success',
      data: null,
    });
  } catch (error) {
    console.error('Error deleting paket wisata:', error); // Logging error for debugging
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
    id_paket: id,
    filename: file.filename,
    path: file.path,
    created_at: new Date(),
    updated_at: new Date(),
  };

  try {
    await PaketWisataModel.uploadFoto(id, fotoData);
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
}

const deleteFoto = async (id, req, res) => {
  try {
    await PaketWisataModel.deleteFoto(id);
    res.json({
      message: 'DELETE foto success',
      data: null,
    });
  } catch (error) {
    console.error('Error deleting foto:', error); // Logging error for debugging
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message, // Include only the error message
    });
  }
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
