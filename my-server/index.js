import express from 'express';
import routers from './routers/index';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/julia', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!");
});

const app = express();

app.use('/julia', routers); 

app.listen(3001, function (error) {
  console.log('Example app listening on port 3001!');
});

