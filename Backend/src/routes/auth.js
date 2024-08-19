const express = require('express');
const auth = require('../controller/auth.js');
const router = express.Router();

router.post('/login', auth.login);
router.post('/user/login', auth.userLogin);
router.get('/decode-token/:token', auth.decodeToken);

module.exports = router;
