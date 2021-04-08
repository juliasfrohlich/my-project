import express from 'express';
import routers from './routers/index';
const app = express();

app.use('/julia', routers); 

app.listen(3001, function (error) {
  console.log('Example app listening on port 3001!');
});

