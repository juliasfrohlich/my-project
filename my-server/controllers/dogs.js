import Dogs from '../models/Dogs';

export async function getDogs (req, res) {
  try {
    const dogs = await Dogs.findMany()
    res.json({dogs})
    console.log('dogs: ', dogs)
  } catch (err) {
    return err
  }
}

export async function insertDog (req, res) {
  try {
    console.log('req: ', req.body)
    const status = await Dogs.insertOne(req.body)
    console.log('status: ', status)
  } catch (err) {
    return err
  }
}

