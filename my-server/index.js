import express from 'express';
import routers from './routers/index';
import mongoose from 'mongoose';
import dogs from './routers/dogs';
import bodyParser from 'body-parser';

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
app.use('/', dogs); 


app.listen(3001, function (error) {
  console.log('Example app listening on port 3001!');
});

