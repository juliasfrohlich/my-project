import { Router } from 'express';

const router = Router()

// Router.método('/rota a ser executada', [middleware], (req, res) => {const a = Controller.function(req)} )
router.get('/', (req, res) => {
    const response = 'oi'
    res.json({response})
})
    

export default {router}