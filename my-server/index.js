const express = require('express');
const app = express();
const routers = require('./routers/index');

app.use('/julia', routers); 

app.listen(3001, function (error) {
  console.log('Example app listening on port 3001!');
});