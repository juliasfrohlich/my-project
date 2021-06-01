const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WinnersEntity = require('../entities/Winners')

const Winners = new Schema (WinnersEntity)

module.exports = mongoose.model('Winners', Winners)