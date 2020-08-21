var express = require('express');
var router = express.Router();
const Cat = require('../database/test')
/* GET users listing. */

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
