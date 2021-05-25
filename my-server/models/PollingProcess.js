const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaFactory = require("./SchemaFactory")
const PollingProcessEntity = require('../entities/PollingProcess')

const PollingProcess = SchemaFactory(PollingProcessEntity, Schema)

module.exports = mongoose.model('PollingProcess', PollingProcess)