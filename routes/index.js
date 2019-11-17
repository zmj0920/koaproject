const router = require('koa-router')()
const jwt = require('jsonwebtoken');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/string', async (ctx, next) => {
  let name = ctx.request.body.name;
  let pwd = ctx.request.body.pwd;
  const secret = 'aaa'; //加密的时候混淆
  //jwt生成token
  if (name == "") {

    return ctx.body = { data: {}, success: 0, msg: "用户名为空" }

  } else if (pwd == "") {

    return ctx.body = { data: {}, success: 0, msg: "密码为空" }

  } else {
    const token = jwt.sign({
      name,
      pwd
    }, secret, {
      expiresIn: 60 * 60 * 1  // 1小时过期
    });
    //解密
    jwt.verify(token, secret, function (err, decoded) {
      if (!err) {
        // console.log(decoded.name);  //会输出123，如果过了60秒，则有错误。
        // console.log(decoded.pwd);
       return ctx.body = {
          data: { name: decoded.name, pwd: decoded.pwd },
          token: token,
          success: 200
        }
      }
    })
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
