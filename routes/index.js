var express = require('express');
var router = express.Router();
const request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({})
});

module.exports = router;