import {Router} from 'express';
import Controller from '../controllers/index';

const router = Router()

// Router.método('/rota a ser executada', [middleware], (req, res) => {const a = Controller.function(req)} )
router.get('/', (req, res) => {
    const julia = Controller.julia(req)
    res.json({julia})
})


export default router