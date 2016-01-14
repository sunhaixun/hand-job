/* GET home page. */
var home = require('./home');
var groupName = require('./groupName');
var contactList = require('./contactList');
var contact = require('./contact');

//var user = require('./users');

//var mysql = require('mysql');
//var myConnection = require('express-myconnection');
//var cf = require('../model/Config');
var sql = require('../model/sql');

function routers(app){
	//app.use(myConnection(mysql, dbOptions, 'request'));
	app.use('/', home);
	app.use('/contact', contactList);
	app.use('/api/data/groupName', groupName);
	app.use('/api/data/contact', contact);
	//app.use('/api/contact/user', user);
}
module.exports = routers;
