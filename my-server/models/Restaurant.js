const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantEntity = require('../entities/Restaraunt')

const Restaurant = new Schema (RestaurantEntity)

module.exports = mongoose.model('Restaurant', Restaurant)