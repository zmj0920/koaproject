const mysql=require('mysql');
var pool=mysql.createPool({
host:'47.95.225.57',
prot:'3306',
user:'xz',
password:'root',
database:'xz',
connectionLimit:20
});
module.exprots.pool;