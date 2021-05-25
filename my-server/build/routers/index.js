var Router = require('express').Router;
var julia = require('../controllers');
var router = Router();
router.get('/', function (req, res) {
    var response = julia();
    res.json({ response: response });
});
module.exports = router;
//# sourceMappingURL=index.js.map