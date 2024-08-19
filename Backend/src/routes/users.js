const express = require('express');
const UserController = require('../controller/users.js');
const router = express.Router();

// CREATE - POST
router.post('/user', UserController.createNewUser);
router.post('/user/token-check', UserController.tokenCheck)

// READ - GET
router.get('/users', UserController.getAllUsers);
router.get('/user/:idUser', UserController.getUserById);

// // UPDATE - PATCH
// router.patch('/user/:idUser', UserController.updateUser);

// // DELETE - DELETE
// router.delete('/user/:idUser', UserController.deleteUser);

module.exports = router;