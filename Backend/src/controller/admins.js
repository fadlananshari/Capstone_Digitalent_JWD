const AdminsModel = require('../models/admins');
const jwtToken = require('../controller/jwtToken');

const getAllAdmins = async (req, res) => {
  try {
    const [data] = await AdminsModel.getAllAdmins();

    res.json({
      message: 'GET all admins success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getAdminById = async (req, res) => {
  const { idAdmin } = req.params;
  try {
    const [data] = await AdminsModel.getAdminById(idAdmin);

    res.json({
      message: 'GET admin by id success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewAdmin = async (req, res) => {
  const { body } = req;

  // if (!body.email || !body.name || !body.addres) {
  //   return res.status(400).json({
  //     message: 'Anda mengirimkan data yang salah',
  //     data: null,
  //   });
  // }

  try {
    await AdminsModel.createNewAdmin(body);
    res.status(201).json({
      message: 'CREATE new admin success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateAdmin = async (req, res) => {
  const { idAdmin } = req.params;
  const { body } = req;
  try {
    await AdminsModel.updateAdmin(body, idAdmin);
    res.json({
      message: 'UPDATE admin success',
      data: {
        id: idAdmin,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteAdmin = async (req, res) => {
  const { idAdmin } = req.params;
  try {
    await AdminsModel.deleteAdmin(idAdmin);
    res.json({
      message: 'DELETE admin success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const tokenCheck = async (req, res) => {
  const token = req.body.token;

  try {
    const decodedToken = jwtToken.decodeJwtToken(token);
    console.log(decodedToken);
    if (decodedToken) {
      const [data] = await AdminsModel.tokenCheck(decodedToken.userId);
      console.log('data: ', data);

      if (data < 1) {
        res.json({
          message: 'Token invalid',
          data: false,
        });
      } else {
        res.json({
          message: 'Token valid',
          data: true,
        });
      }
    } else {
      res.json({
        message: 'Token invalid',
        data: false,
      });
    }
  } catch (error) {}
};

module.exports = {
  getAllAdmins,
  getAdminById,
  createNewAdmin,
  updateAdmin,
  deleteAdmin,
  tokenCheck,
};
