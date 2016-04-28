// 导入需要的模块
var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    dust = require('gulp-dust'),
    exec = require('child_process').exec,
    fs = require('fs'),
    del = require('del'),
    path = require('path');
//iconv = require('iconv-lite');


// 编译less，其中plumber是防止出错崩溃的插件
gulp.task('style', function () {
    gulp.src('src/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('../web/css'));
    gulp.src('src/less/site.less')
        .pipe(less())
        .pipe(gulp.dest('../web/css'));
    console.log('style success');
});

// 编译dust
gulp.task('dust', function () {
    gulp.src('src/dust/*.dust')
        .pipe(dust())
        .pipe(gulp.dest('src/js/compiles'));
    gulp.src('dist/compiles/*js')
        .pipe(concat('compiles.js'))
        .pipe(header('define(function(){'))
        .pipe(footer('});'))
        .pipe(gulp.dest('src/js/module'));
    console.log('dust success');
});


gulp.task('jade:site', function () {
    gulp.src('src/jade/site/**/*.jade')
        .pipe(jade({
            data: require('./config/jade/site.json')
        }))
        .pipe(gulp.dest('../templates/site'));
    gulp.src('src/jade/login/login.jade')
        .pipe(jade({
            data: require('./config/jade/site.json')
        }))
        .pipe(gulp.dest('../templates/site'));
    console.log('jade success');
});
gulp.task('jade:admin', function () {
    gulp.src('src/jade/admin/**/*.jade')
        .pipe(jade({
            data: require('./config/jade/admin.json')
        }))
        .pipe(gulp.dest('../templates/admin'));
    gulp.src('src/jade/login/login.jade')
        .pipe(jade({
            data: require('./config/jade/admin.json')
        }))
        .pipe(gulp.dest('../templates/admin'));
    console.log('jade success');
});

// 生成vendor.css vendor.js
gulp.task('vendor', function () {
    gulp.src(['src/lib/plugin/datePicker/**.css', 'src/lib/plugin/dataTables/**.css', 'src/lib/semantic/**.min.css'])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('../web/css'));
    gulp.src(['src/lib/jquery.min.js', 'src/lib/plugin/**/**.js', 'src/lib/semantic/**.min.js', 'src/lib/require.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('../web/js'));

    console.log('vendor success');
});

gulp.task('app:site', function () {
    var _js_url_base = 'src/js/';
    var _site = ['config/site.js', 'model/site/*.js', 'module/*.js', 'app/site.js'].map(function(_js){
        return _js_url_base + _js;
    });
    var _login = ['config/login.js', 'module/tool.js', 'app/login.js'].map(function(_js){
        return _js_url_base + _js;
    });
    //exec('node ./src/js/r.js -o ./src/js/site_build.js', function (err, stdout, stderr) {
    //    if (err) {
    //        console.log('App fail');
    //    } else {
    //        console.log('App success');
    //    }
    //});
    gulp.src(_site)
        .pipe(concat('app_site.js'))
        .pipe(gulp.dest('../web/js'));
    gulp.src(_login)
        .pipe(concat('app_login.js'))
        .pipe(gulp.dest('../web/js'));
});
gulp.task('app:admin', function () {
    var _js_url_base = 'src/js/';
    var _admin = ['config/admin.js', 'model/admin/*.js', 'module/*.js', 'app/admin.js'].map(function(_js){
        return _js_url_base + _js;
    });
    var _login = ['config/login.js', 'module/tool.js', 'app/login.js'].map(function(_js){
        return _js_url_base + _js;
    });
    //exec('node ./src/js/r.js -o ./src/js/admin_build.js', function (err, stdout, stderr) {
    //    if (err) {
    //        console.log('App fail');
    //    } else {
    //        console.log('App success');
    //    }
    //});
    gulp.src(_admin)
        .pipe(concat('app_admin.js'))
        .pipe(gulp.dest('../web/js'));
    gulp.src(_login)
        .pipe(concat('app_login.js'))
        .pipe(gulp.dest('../web/js'));
});


function mkdirsSync(dirname, mode) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname), mode)) {
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
};
/**
 * create templates jade configs model
 */
gulp.task('del', function () {
    var DelArr = [
        'config/jade/*.json',
        'src/jade/site/*',
        'src/jade/admin/*',
        'src/js/model/*',
    ];
    del(DelArr);
    console.log('---del---\n----' + DelArr.join('\n----'));
})
gulp.task('generator', function () {

    var _generator = require('./generator/config/generator.json');
    var _path = _generator.path;
    var a_info = require(_path.generator + 'app.json'),
        tmpl = {
            jade: {
                list: fs.readFileSync(_path.tmpl + 'list.jade').toString(),
                form: fs.readFileSync(_path.tmpl + 'form.jade').toString(),
            },
            cfg: {
                list: require(_path.tmpl + 'list.json'),
                form: require(_path.tmpl + 'form.json'),
            },
            mod: fs.readFileSync(_path.tmpl + 'model.js.tmpl').toString(),
            modCfg: fs.readFileSync(_path.tmpl + 'config.js.tmpl').toString(),
        },
        config = {
            site: {
                jade: {},
                modCfg: {}
            },
            admin: {
                jade: {},
                modCfg: {}
            }
        };

    for (var _appName in a_info) {
        var _app = a_info[_appName];

        config[_appName].jade = _app.system;
        config[_appName].jade.navbar = [];

        _app.models.forEach(function (_MODEL) {
            var _model = {
                    title: _MODEL.title,
                    icon: _MODEL.icon,
                    views: [],
                },
                _VIEWS = _MODEL.views,
                _modName = _MODEL.model;
            var _len = _VIEWS.length,
                i = 0,
                j = 0,
                _files = [];


            // gather information,create fileSet
            for (i = 0; i < _len; i++) {
                _files.push({
                    type: _VIEWS[i].type,
                    path: {
                        jade: [_path.jade[_appName], _modName].join('/') + '/',
                    },
                    name: {
                        jade: _VIEWS[i].name + '.jade',
                    },
                    view: [_modName, _VIEWS[i].name].join('-'),
                });
                _model.views.push({
                    "title": _VIEWS[i].title,
                    "view": [_modName, _VIEWS[i].name].join('-'),
                    "url": [_modName, _VIEWS[i].name].join('/')
                });
            }
            ;

            // add jadeNavbarInfo
            config[_appName].jade.navbar.push(_model);

            // create model
            mkdirsSync(_path.mod +  _appName);
            var _mod = tmpl.mod.replace('@modelName', 'model_' + _modName);
            fs.writeFile(_path.mod  + _appName + '/' + _modName + '.js', _mod);

            // create jade & viewConfig
            _files.forEach(function (_FILE) {

                // create view config
                config[_appName].modCfg[_FILE.view] = tmpl.cfg[_FILE.type];

                // create jade template
                mkdirsSync(_FILE.path.jade);
                var _tmpl = tmpl.jade[_FILE.type].replace('@viewName', _FILE.view);
                fs.writeFile(_FILE.path.jade + _FILE.name.jade, _tmpl);

            });

        });
        /**
         * author: lixiang
         * message: 404 !!!   haodeba nishuodedui shikazhule zenmebanne guandiannaoba chongqi heiyo haibuchongqi ganshane zenmehuishi
         */
            // create navbar config
        mkdirsSync(_path.configJade);
        fs.writeFile(_path.configJade + _appName + '.json', JSON.stringify(config[_appName].jade));

        // create model config
        mkdirsSync(_path.modCfg);
        var _modCfg = tmpl.modCfg.replace('@module_config',  JSON.stringify(config[_appName].modCfg));
        fs.writeFile(_path.modCfg + _appName + '.js', _modCfg);
    }
    ;

});


// 默认任务
gulp.task('default', ['watch']);


// 监听任务
gulp.task('watch', function () {
    // 预处理
    gulp.watch('src/jade/**', ['jade']);
    gulp.watch('src/less/**', ['style']);
    //gulp.watch('src/dust/**', ['dust', 'buildApp']);
    gulp.watch('src/js/**/*.js', ['app']);

});

