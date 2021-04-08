import {Router} from 'express';
import Controller from '../controllers/index';

// Router.método('/rota a ser executada', [middleware], (req, res) => {const a = Controller.function(req)} )
Router.get('/julia', (req, res) => {
    const julia = Controller.julia(req)
    res.json({julia})
})


export default Router