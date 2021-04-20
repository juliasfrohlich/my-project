import {Router} from 'express';
import julia from '../controllers';

const router = Router()

// Router.método('/rota a ser executada', [middleware], (req, res) => {const a = Controller.function(req)} )
router.get('/', (req, res) => {
    const response = julia()
    res.json({response})
})
    

export default router