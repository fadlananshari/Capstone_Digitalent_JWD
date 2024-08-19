const express = require('express');
const adminRoutes = require('./admins.js');
const userRoutes = require('./users.js');
const auth = require('./auth.js');
const paketWisata = require('./paketWisata.js');
const galeri = require('./galeri.js');
const reservasi = require('./reservasi.js');

const app = express();

const apiUrl = '/api/v1';

app.use(apiUrl, userRoutes);
app.use(apiUrl, adminRoutes);
app.use(apiUrl, auth);
app.use(apiUrl, paketWisata);
app.use(apiUrl, galeri);
app.use(apiUrl, reservasi);

module.exports = app;
