var express = require('express');
var router = express.Router();
const Cat = require('../database/test')
/* GET users listing. */
router.all('/cat*', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.header("Access-Control-Allow-Origin",'http://localhost:3001' || 'http://localhost:3000' || 'http://localhost:3002');
  //允许的header类型
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true)
  console.log('111')
  res.send({
    code: 200,
    data: '你好,请求成功'
  })
  next()
});
router.post('/cat', async function(req, res, next) {
  const body = req.body
  try {
    await Cat.create(body)
    res.json({
      code: 200,
      msg: '添加成功'
    });
  } catch (error) {
    res.status(500).json({
      error
    })
  }
});

module.exports = router;
