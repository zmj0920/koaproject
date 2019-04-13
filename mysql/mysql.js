const pool=require('../pool.js');
const Promise=require('bluebird'); //引入bluebird模块为了使用Promise回调函数

let query = ( sql, values ) => {
     return new Promise(( resolve, reject ) => {
         // 在数据池中进行会话操作
         pool.getConnection( (err, connection) => {
             //报错提示
             if (err) {
                 reject( err )
             } else {
                 //执行增删改查
                 connection.query(sql, values, ( err, rows) => {
                     if ( err ) {
                         reject(err)
                     } else {
                         resolve(rows)
                     }
                     // 结束会话
                     connection.release()
                 })
             }
         })
     })
 }
//查询用户信息
 exports.user=async ()=>{
     let _sql="select * from xz_user";
     return query(_sql);
 }
