var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'web')));

//route 暂时的 这个路由有点太2了 早晚得改
var url = require('url');
var viewsMap = require('./routes/viewsMap.json');
app.get('/', function(req, res, next) {
    res.render('site/business/product.html');
});
app.get('/app/:base/:module/:view', function(req, res, next) {
    var _path = url.parse(req.url).pathname.split('/');
    //_path.splice(0,2),_path.splice(_path.length - 1,1,viewsMap[req.params.base][req.params.module][req.params.view]);
    res.render([req.params.base,req.params.module,req.params.view].join('/') + '.html');
});

app.post('/app/:base/:module/:port', function(req, res, next) {
    var _params = req.params;
    var DataFabrication = require('./routes/DataFabrication.json');
    var _data = DataFabrication[_params.port];
    res.send(JSON.stringify(_data));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
