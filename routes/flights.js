var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controller/flights');
/* GET users listing. */
router.get('/',flightsCtrl.index);
router.post('/',flightsCtrl.create);
router.get('/new',flightsCtrl.new);
routter.get('/:id', flightsCtrl.show)

module.exports = router;
