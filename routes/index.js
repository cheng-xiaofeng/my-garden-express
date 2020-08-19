var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.header("Access-Control-Allow-Origin",'http://localhost:3001' || 'http://localhost:3000');
  //允许的header类型
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true)
  console.log(req);
  
  res.send({
    code: 200,
    data: '你好,请求成功'
  })
});

module.exports = router;
