var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express for DevOps', appVersion: "0.0.4" });
});

module.exports = router;
