var express = require('express')
var router = express.Router();

var destinationsCtrl = require('../controller/destinations')
router.post('/flights/:id/destinations',destinationsCtrl.create )//maps route to function
module.exports = router;