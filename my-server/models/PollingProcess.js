const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PollingProcessEntity = require('../entities/PollingProcess')

const PollingProcess = new Schema (PollingProcessEntity)

module.exports = mongoose.model('PollingProcess', PollingProcess)