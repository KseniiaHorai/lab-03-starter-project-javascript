const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка читання файлу index.html:', err);
      res.status(500).send('Помилка сервера');
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});