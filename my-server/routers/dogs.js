import {Router} from 'express';
import {deleteDogByName, getDogs, insertDog} from '../controllers/dogs';

const router = Router()

// Router.método('/rota a ser executada', [middleware], (req, res) => {const a = Controller.function(req)} )
router.get('/dogs', async (req, res) => {
    const response = await getDogs()
    res.json({response})
})

router.post('/dog', async (req, res) => {
  const response = await insertDog(req, res)
  res.json({response})
})

router.delete('/dog', async (req,res) => {
  const name = req.body.name;
  const response = await deleteDogByName(name)
  res.json({response})
})
    

export default router