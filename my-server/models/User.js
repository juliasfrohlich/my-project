const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserEntity = require('../entities/User')

const User = new Schema (UserEntity)

module.exports = mongoose.model('User', User)