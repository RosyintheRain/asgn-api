let router = require("express").Router();
let controller = require('./asgn-controller');

router.use(function (req, res, next) {
    const goodKey = "randomKey";
    if (!req.query.api_key || req.query.api_key !== goodKey) {
        res.status(401).status.send("Your api_key is missing or invalid");
        return
    }
    next()
})

router.route('/assignments')
    .get(controller.index)
    .post(controller.new);

router.route('/assignments/:assignment_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);

router.get('/', function(req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to asgn-api'
    });
});

module.exports = router;