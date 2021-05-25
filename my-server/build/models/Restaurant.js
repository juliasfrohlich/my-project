var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RestaurantEntity = require('../entities/Restaraunt');
var Restaurant = new Schema(RestaurantEntity);
module.exports = mongoose.model('Restaurant', Restaurant);
//# sourceMappingURL=Restaurant.js.map