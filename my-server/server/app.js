const express = require('express');
const routers = require('../routers/index');
const mongoose = require('mongoose');
const root = require('../routers/root');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/Dogs', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!");
});

const app = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});
app.use('/', root); 

module.exports = app
