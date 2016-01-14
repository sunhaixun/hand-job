var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
	 res.render('contactList', { title: 'Express5' });
});

module.exports = router;