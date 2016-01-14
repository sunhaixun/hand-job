var mysql = require('mysql');
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

var connection = mysql.createConnection(dbOptions);
connection.connect();
var groupSQL = 'select groupName from groups';//首页 第二列 展示当前
// exports.groupName = function(){
    


    connection.query(groupSQL,function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        //conn.release();
    });
// }