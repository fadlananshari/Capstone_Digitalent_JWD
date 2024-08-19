const express = require('express');
const AdminController = require('../controller/admins.js');
const router = express.Router();

// CREATE - POST
router.post('/admin', AdminController.createNewAdmin);
router.post('/admin/token-check', AdminController.tokenCheck)

// READ - GET
router.get('/admins', AdminController.getAllAdmins);
router.get('/admin/:idAdmin', AdminController.getAdminById);

// UPDATE - PATCH
router.patch('/admin/:idAdmin', AdminController.updateAdmin);

// DELETE - DELETE
router.delete('/admin/:idAdmin', AdminController.deleteAdmin);

module.exports = router;
