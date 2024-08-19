const AdminsModel = require('../models/admins');
const UsersModel = require('../models/users');
const jwtToken = require('./jwtToken.js');

const login = async (req, res) => {
  const { body } = req;
  console.log(body);

  if (!body.id || !body.email || !body.name) {
    return res.status(400).json({
      message: 'Anda mengirimkan data yang salah',
      data: null,
    });
  }

  try {
    const [data] = await AdminsModel.login(body.email);
    // console.log(data);

    if (data.length > 0) {
      const token = jwtToken.generateJwtToken(data[0].id);
      res.status(201).json({
        message: 'Login Success',
        data: token,
      });
    } else {
      // await AdminsModel.createNewAdmin(body);
      // const token = jwtToken.generateJwtToken(body.id);
      res.status(403).json({
        message: 'Access Denied',
        data: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const userLogin = async (req, res) => {
  const { body } = req;
  // console.log(body);

  if (!body.id || !body.email || !body.name) {
    return res.status(400).json({
      message: 'Anda mengirimkan data yang salah',
      data: null,
    });
  }

  try {
    const [data] = await UsersModel.login(body.email);
    // console.log(data);
    if (data.length > 0) {
      const token = jwtToken.generateJwtToken(data[0].id);
      res.status(201).json({
        message: 'Login Success',
        data: token,
      });
    } else {
      // console.log(body)
      const data = await UsersModel.createNewUser(body);
      // console.log(data)
      const token = jwtToken.generateJwtToken(body.id);
      // console.log(token)
      res.status(201).json({
        message: 'Login Success',
        data: token,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const decodeToken = async (req, res) => {
  const { token } = req.params;
  try {
    const decodedToken = jwtToken.decodeJwtToken(token);
    res.json({
      message: 'DECODE TOKEN success',
      data: decodedToken,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  login,
  userLogin,
  decodeToken,
};
