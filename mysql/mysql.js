const pool=require('../pool.js');
const Promise=require('bluebird');

let query=()=>{
     return new Promise(()=>{
      pool.getConnection(()=>{




      })
     })
}
