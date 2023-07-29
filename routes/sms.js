var express = require('express');
var router = express.Router();
var sms = require('../Controllers/smsController');

/* POST users listing. */
router.post('/register', sms.register);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is the SMS handling endpoint' });
});

module.exports = router;
