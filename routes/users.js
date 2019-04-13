const router = require('koa-router')()
const sql=require('../mysql/mysql.js');


router.get('/user',async (ctx,next)=>{
    ctx.body= await  sql.user();
});


module.exports = router
