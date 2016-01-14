var express = require('express');
var router = express.Router();
/* GET users listing. */

router.get('/', function(req, res) {
	data.groupName();
    res.send('blog list');
});

router.get('/:id', function(req, res) {
    res.send('blog content');
});

router.post('/:id', function(req, res) {
    res.send('blog update');
});

router.put('/', function(req, res) {
	
    res.send('blog create');
});

router.delete('/:id', function(req, res) {
    res.send('blog delete');
});


module.exports = router;
