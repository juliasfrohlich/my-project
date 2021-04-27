const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Dogs = new Schema(
  {
    name: {type: String, required: true},
    age: {type: Number, required: true},
    owner: String,
    breed: String,
    
  }
);

module.exports = mongoose.model('Dogs', Dogs);
