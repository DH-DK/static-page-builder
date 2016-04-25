define('module_tool',[],function () {

    var _DATA = {};

    $.extend({
        myToolSet: {
            ajax: function (options, func) {
                var _url = options.url,
                    _data = options.data,
                    _async = options.async || true,
                    _type = options.type || 'message',
                    _callback = func || false;
                $.ajax({
                    type: "post",
                    async: _async,
                    url: _url,
                    data: _data,
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert(errorThrown);
                    },
                    success: function (arr) {
                        try {
                            var msg = JSON.parse(arr);
                        } catch (e) {
                            alert('系统异常，数据解析失败，请检查返回数据结构！');
                        };
                        _callback && _callback(msg);
                    },
                });
            },
            verify: {
                reg: function (options) {
                    var regObj = {
                        mobile: /^1[3,4]{1}[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0,2,3,5,6,7,8,9]{1}[0-9]{8}$|17[0,7]{1}[0-9]{8}$/,
                    };
                    var reg = regObj[options.type];
                    return reg.test(options.data);
                }
                ,
                checkEmpty: function (obj) {
                    var _result = true;
                    for (var _field in obj) {
                        if (!obj[_field]) {
                            _result = false;
                            break;
                        }
                        ;
                    }
                    ;
                    return _result;
                }
                ,
            }
            ,
            dimmerMsg: function(cmdStr,options){
                var _classList = ' ui small second coupled modal ';
                var _class = '';
                var $message = $('#page_tips');
                var $text = $message.find('.center');
                var _message = (typeof options === 'string') ? options : options.message;
                var _seconds = options.seconds || 1200;
                $text.html('<p>'+ _message +'</p>');
                switch (cmdStr){
                    case 'modal message':
                        _class = 'qh-mod ';
                        _class += (options.ok) ? 'true' : 'false';
                        _seconds = (options.ok) ? 1000 : 1500;
                        break;
                    case 'tips message':
                        _class = 'qh-mod warn';
                        break;
                    case '':
                        break;
                    case '':
                        break;
                };
                options.before && ptions.before();
                $text.addClass(_class);
                $message.addClass(' active');
                options.after && ptions.before();

                setTimeout(function(){
                    $text.removeClass(_class);
                    $message.removeClass('active');
                },_seconds);
            }
            ,
            getData: function (data, fields) {
                var _result;
                if(Array.isArray(data)){
                    _result = [];
                    fields.forEach(function(val){
                        _result.push(data[val]);
                    });
                }else{
                    _result = {};
                    fields.forEach(function(val){
                        _result[val] = data[val];
                    });
                };
                return _result;
            }
            ,
            parseUrl: function(url){
                var a =  document.createElement('a');
                a.href = url || window.location.href;
                return {
                    source: url,
                    protocol: a.protocol.replace(':',''),
                    host: a.hostname,
                    port: a.port,
                    query: a.search,
                    params: (function(){
                        var ret = {},
                            seg = a.search.replace(/^\?/,'').split('&'),
                            len = seg.length, i = 0, s;
                        for (;i<len;i++) {
                            if (!seg[i]) { continue; }
                            s = seg[i].split('=');
                            ret[s[0]] = s[1];
                        }
                        return ret;
                    })(),
                    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
                    hash: a.hash.replace('#',''),
                    path: a.pathname.replace(/^([^\/])/,'/$1'),
                    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
                    segments: a.pathname.replace(/^\//,'').split('/')
                };
            },
        }


    })

    return {

    };

})
;