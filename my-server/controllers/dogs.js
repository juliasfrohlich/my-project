const Dogs = require('../models/Dogs');

module.exports = { getDogs: async function getDogs ( ) {
  try {

    const dogs = await Dogs.find()
    return dogs

  } catch (err) {
    return err
  }
}}

module.exports = { insertDog: async function insertDog (req, res) {
  try {
    
    const createDog = await Dogs.create(req.body)
    return createDog;

  } catch (err) {
    return err
  }
}}

module.exports = { deleteDogByName: async function deleteDogByName (name) {
  try {
    const deleteDog = await Dogs.deleteOne({name: name})
    return deleteDog
  } catch (err) {

  }
}}
