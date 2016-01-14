var mysql = require('mysql');
var con = require('../sql');
var GROUPSQL = 'select groupName from groups';//首页 第二列 展示当前
var UPDATESQL = 'UPDATE groups SET groupName=? WHERE groupId=?';
var DELETESQL = 'delete from groups where groupId=?';
var INSERTSQL = 'insert into groups set ?';
var READSQL = 'select * from groups WHERE groupId=?';
var sql = "SELECT * FROM ?? WHERE ?? = ?";
var Hashids = require("hashids"),
    hashids = new Hashids("this is my groupName", 8);





exports.groupNameList = function(req,res){
    con.connection.query(GROUPSQL,function(err,rows){
        var data = Object.create(null);
        if (err) {
            data.success = false;
            console.log(err);
        } else {
            data.success = true;
            data.groupList = rows;
            //console.log(rows)
        }
        //data.status  = res.status();
        res.json(data);
    });
}

exports.update = function(req,res){
    var groupId = req.param('groupId');
    var groupName = req.param('groupName');
    
    con.connection.query(UPDATESQL,[groupName,groupId],function(err,rows){
        var data = Object.create(null);
        if (err) {
            data.success = false;
            console.log(err);
        } else {
            data.success = true;
        }
        res.json(data);
        
    });
}

exports.delete = function(req,res){
    var groupId = req.param('groupId');
    console.log(groupId);
    con.connection.query(DELETESQL,groupId,function(err,rows){
        var data = Object.create(null);
        if (err) {
            data.success = false;
            console.log(err);
        } else {
            data.success = true;
        }
        res.json(data);
       
    });
}

exports.add = function(req,res){
    var now = Date.now();
    var id = hashids.encode(now);
    var groupName = req.param('groupName');
    var post = {
        groupName:groupName,
        groupId:id
    }
    con.connection.query(INSERTSQL,post,function(err,rows){
        var data = Object.create(null);
        if (err) {
            data.success = false;
            console.log(err);
        } else {
            data.success = true;
        }
        res.json(data);
       
    });
}

exports.read = function(req,res){
    var groupId = req.param('groupId');
    console.log('read');
    con.connection.query(READSQL,groupId,function(err,rows){
        var data = Object.create(null);
        if (err) {
            data.success = false;
            console.log(err);
        } else {
            data.success = true;
            //console.log(rows);
        }
        res.json(data);
       
    });
}