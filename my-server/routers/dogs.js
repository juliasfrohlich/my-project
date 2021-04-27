import {Router} from 'express';
import {getDogs, insertDog} from '../controllers/dogs';

const router = Router()

// Router.método('/rota a ser executada', [middleware], (req, res) => {const a = Controller.function(req)} )
router.get('/dogs', async (req, res) => {
    const response = await getDogs(req, res)
    res.json({response})
})

router.post('/dog', async (req, res) => {
  const response = await insertDog(req, res)
  res.json({response})
})
    

export default router