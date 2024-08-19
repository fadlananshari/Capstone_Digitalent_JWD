const GaleriModel = require('../models/galeri.js');


const getAllFotoGallery = async (req, res) => {
  try {
    const [data] = await GaleriModel.getAllFotoGallery();
    res.json({
      message: 'GET all gallery success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
}

const getFotoByIdPaket = async (req, res) => {
  const { id_paket } = req.params;
  try {
    const [data] = await GaleriModel.getFotoByIdPaket(id_paket);
    res.json({
      message: 'GET foto by id_paket success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewFoto = async (id, req, res) => {
  const { file } = req; // Mengambil file dari req.file

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
    await GaleriModel.createNewFoto(id, fotoData);
    res.status(201).json({
      message: 'CREATE new foto success',
      data: fotoData,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
};

const deleteFotoById = async (id, req, res) => {
  try {
    await GaleriModel.deleteFotoById(id);
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
  getAllFotoGallery,
  getFotoByIdPaket,
  createNewFoto,
  deleteFotoById,
};
