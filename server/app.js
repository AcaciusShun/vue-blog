var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// 视图引擎设定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 将中间件库添加进请求处理链
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 将项目根目录下所有静态文件托管至 /public 目录
app.use(express.static(path.join(__dirname, 'public')));

// 把（之前导入的）路由处理器添加到请求处理链中
// 为网站的不同部分定义具体的路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 最后一个中间件为错误和 HTTP 404 响应添加处理方法。 ↓

// catch 404 and forward to error handler
// 捕获 404 并抛给错误处理器
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// 错误处理器
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // 设置 locals，只在开发环境提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // 渲染出错页面
  res.status(err.status || 500);
  res.render('error');
});

// 将其添加到 exports 模块（使它可以通过 /bin/www 导入）
module.exports = app;
