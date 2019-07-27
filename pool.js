const mysql=require('mysql');
var pool=mysql.createPool({
    host:'47.95.225.57',
    prot:'3306',
    user:'root',
    password:'zhang19960920...',
    database:'xz',
    connectionLimit:20
})
module.exports=pool;



