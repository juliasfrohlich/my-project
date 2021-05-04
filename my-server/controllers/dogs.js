import Dogs from '../models/Dogs';

export async function getDogs (req, res) {
  try {
    const dogs = await Dogs.findMany()
    res.json({dogs})
  } catch (err) {
    return err
  }
}

export async function insertDog (req, res) {
  try {
    const status = await Dogs.create(req.body)
  } catch (err) {
    return err
  }
}

