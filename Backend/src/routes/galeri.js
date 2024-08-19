const express = require('express');
const upload = require('../middleware/multer');
const galeriController = require('../controller/galeri.js');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/galeri', galeriController.getAllFotoGallery);
router.get('/galeri/:id_paket/id-paket', galeriController.getFotoByIdPaket);
router.post('/galeri/:id', upload.single('photo'), (req, res) => {
  galeriController.createNewFoto(req.params.id, req, res);
  //   res.json(req.file);
});
router.delete('/galeri/:id/file/:filename', (req, res) => {
  const { id, filename } = req.params;
  const filePath = path.join(__dirname, '..', '..', 'public', 'images', filename);

  // Pastikan filename tidak mengandung karakter berbahaya
  if (!filename || filename.includes('..')) {
    return res.status(400).send('Invalid filename');
  }

  fs.unlink(filePath, (err) => {
    console.log(filePath); // Debug path
    if (err) {
      console.error('Error deleting file:', err);
      return res.status(500).send('Error deleting file');
    }

    // Memanggil controller untuk logika penghapusan lebih lanjut, seperti database
    galeriController.deleteFotoById(id, req, res);
  });
});

module.exports = router;
