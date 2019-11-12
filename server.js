const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

requireDir('./src/models');
const Pastel = mongoose.model('Pastel');
const Cliente = mongoose.model('Cliente');

// added we routes
app.use('/api', require('./src/routes'));

app.listen(port, (error) => {
  if(error) {
    console.log(`Server down is error, because ${error}`);
  } else {
    console.log(`Server up is http://localhost:${port}`);
  }
});