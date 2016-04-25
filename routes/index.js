var express = require('express');
var url = require('url');
var router = express.Router();
var viewsMap = require('./viewsMap');

/* GET target page. */
//router.get('/app/site/user/:view', function(req, res, next) {console.log('/app/*');
//    var _path = url.parse(req.url).pathname.split('/');
//    _path.shift() && _path.pop();
//    console.log(viewsMap[_path[0]] + ':' + req.params.view);
//    res.render(_path.join('/') + viewsMap[_path[0]][req.params.view]);
//});

router.get('/app/:base/:module/:view', function(req, res, next) {
    var _path = url.parse(req.url).pathname.split('/');
    _path.shift() && _path.pop() && _path.push(viewsMap[req.params.base][req.params.module][req.params.view]);
    console.log();console.log(req.params)
    res.render(_path.join('/'));
});

module.exports = router;
