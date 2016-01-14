var mysql = require('mysql');
//var cf = require('../Config');
//console.log(cf);
dbOptions = {
   
    host: 'localhost',
    //数据库IP地址
    port: 3306,
    //数据库端口
    user: 'nodejs',
    //用户名
    password: 'nodejs',
    //密码
    database: 'nodejs' //数据库名
};

console.log(5);

var connection = mysql.createConnection(dbOptions);
connection.connect();

exports.connection = connection;