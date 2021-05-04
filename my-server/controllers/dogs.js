import Dogs from '../models/Dogs';

export async function getDogs ( ) {
  try {

    const dogs = await Dogs.find()
    return dogs

  } catch (err) {
    return err
  }
}

export async function insertDog (req, res) {
  try {
    
    const createDog = await Dogs.create(req.body)
    return createDog;

  } catch (err) {
    return err
  }
}

export async function deleteDogByName (name) {
  try {
    const deleteDog = await Dogs.deleteOne({name: name})
    return deleteDog
  } catch (err) {

  }
}
