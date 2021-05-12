const {Router} = require('express');
const julia = require('../controllers');

const router = Router()

// Router.método('/rota a ser executada', [middleware], (req, res) => {const a = Controller.function(req)} )
router.get('/', (req, res) => {
    const response = julia()
    res.json({response})
})
    

module.exports = router