require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');

const Routes = require('./routes/index');

const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'));

app.use(Routes);
app.post('/api/upload', upload.single('photo'), (req, res) => {
  res.json(req.file);
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running di http://127.0.0.1:${PORT}`);
});
