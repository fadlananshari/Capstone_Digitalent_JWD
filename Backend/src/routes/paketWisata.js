const express = require('express');
const PaketWisataController = require('../controller/paketWisata.js');
const upload = require('../middleware/multer.js');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/paket-wisata', PaketWisataController.getAllPaketWisata);
router.get('/paket-wisata/:id', PaketWisataController.getPaketWisataById);

router.post('/Paket-wisata', PaketWisataController.createNewPaketWisata);
router.patch('/Paket-wisata/tambah-foto/:id', upload.single('photo'), (req, res) => {
  PaketWisataController.uploadFoto(req.params.id, req, res);
  //   res.json(req.file);
});

router.patch('/paket-wisata/:id', PaketWisataController.updatePaketWisata);

router.delete('/paket-wisata/:id', PaketWisataController.deletePaketWisata);

router.delete('/paket-wisata/:id/file/:filename', (req, res) => {
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
    PaketWisataController.deleteFoto(id, req, res);
  });
});

module.exports = router;
