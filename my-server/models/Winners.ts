import mongoose from 'mongoose';
const WinnersEntity = require('../entities/Winners')
const Schema = mongoose.Schema;

const Winners = new Schema (WinnersEntity)

export default mongoose.model('Winners', Winners)