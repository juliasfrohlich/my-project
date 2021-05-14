const {Router} = require('express');
const {root} = require('../controllers/root');

const router = Router()

router.get('/', (req, res) => {
  const rootResponse = root(req)
  res.status(200).json(rootResponse)
})

module.exports = router