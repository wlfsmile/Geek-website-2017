var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var index = require('./server/routes/index');
var users = require('./server/routes/users');

var app = express();


// 设置views路径和模板
app.set('views', './client/static/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 静态文件配置
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));


// 对所有(/)URL或路由返回index.html
// app.get('/', function (req, res) {
//     res.render('index.html');
// });

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 


module.exports = app;
