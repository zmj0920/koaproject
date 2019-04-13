const mysql=require('mysql'); //引入mysql模块
var pool=mysql.createPool({
host:'47.95.225.57',//数据库地址
prot:'3306',        //端口号
user:'xz',           //账号
password:'root',    //密码
database:'xz',      //数据库
connectionLimit:20 //连接池可创建的最大连接数
});

module.exports=pool;   //导出