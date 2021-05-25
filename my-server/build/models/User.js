var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserEntity = require('../entities/User');
var User = new Schema(UserEntity);
module.exports = mongoose.model('User', User);
//# sourceMappingURL=User.js.map