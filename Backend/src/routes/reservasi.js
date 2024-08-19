const express = require('express');
const ReservasiController = require('../controller/reservasi.js');
const upload = require('../middleware/multer.js');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/reservasi', ReservasiController.getAllReservasi);
router.get('/reservasi/:id', ReservasiController.getReservasiById);

router.get('/reservasi/user/:id_user', ReservasiController.getReservasiByIdUser);

router.post('/reservasi/:id_user/:id_paket', ReservasiController.createNewReservasiByIdPaket);

router.patch('/reservasi/bukti/:id', upload.single('photo'), (req, res) => {
  ReservasiController.uploadFoto(req.params.id, req, res);
  //   res.json(req.file);
});

router.patch('/reservasi/:id', ReservasiController.updateReservasi)

router.patch('/reservasi/ubah-status/:id', ReservasiController.updateStatus)

router.delete('/reservasi/:id', ReservasiController.deleteReservasi);

module.exports = router;
