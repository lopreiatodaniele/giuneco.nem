const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const path = require('path');
const port = 3000;

const pets = require('./routes/pet.route');

mongoose
  .connect('mongodb://root:example@localhost:27017')
  .then(() => {
    console.log('| Connesso a MongoDB | HOST: localhost:27017');
  })
  .catch((error) => {
    console.log(
      '| Si è verificato un errore durante la connessione a MongoDB: ',
      error
    );
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/pets', pets);

app.use('/', (req, res, next) => {
  return res.render('index', {});
});

app.listen(3000, () => {
  console.log(`| SERVER ATTIVO | URL: http://localhost:${port}`);
});
