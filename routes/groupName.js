/*
*（包括create、read、update和delete，它们对应的Request Method分别为POST、GET、PUT和DELETE）
 */

var express = require('express');
var router = express.Router();
var groupName = require('../model/contact/groupName');
/* GET users listing. */


router.get('/', function(req, res) {
	groupName.groupNameList(req,res);
});

router.get('/:groupId', function(req, res) {
	groupName.read(req,res);
});

router.post('/', function(req, res) {
	console.log('a');
	groupName.add(req,res);
    //res.send('blog update');
});

router.put('/:groupId', function(req, res) {
	console.log('hai');
	groupName.update(req,res);
	//res.send('blog create');
});

router.delete('/:groupId', function(req, res) {
	groupName.delete(req,res);
});


module.exports = router;
