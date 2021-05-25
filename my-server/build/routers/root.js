var Router = require('express').Router;
var root = require('../controllers/root').root;
var router = Router();
router.get('/', function (req, res) {
    var rootResponse = root(req);
    res.status(200).json(rootResponse);
});
module.exports = router;
//# sourceMappingURL=root.js.map