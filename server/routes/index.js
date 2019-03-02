var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res,next) {
  console.log(req)
  var result = {
      code : 1,
      messages : "登录成功"
  };
    res.json(result);
})
router.post('/admin', function(req, res,next) {
  console.log(req)

  var result = {
      code : 1,
      messages : "登录成功"
  };
    res.json(result);
})

// 导出 router（就可以导入 app.js 了）
module.exports = router;