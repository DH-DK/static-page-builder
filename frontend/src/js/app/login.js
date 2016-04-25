var AppSet = {
    info: (function () {
        var _Body = document.getElementsByTagName('body')[0],
            _Content = document.getElementById('page-content');
        var _info = {
            main: _Body.id,
            view: _Content.dataset.qhView,
        };
        return _info;
    }()),
    modules: ['module_tool', 'module_config']
};
require(AppSet.modules, function () {

    var module_config = require('module_config');
    AppSet.CONFIG = module_config[AppSet.info.main][AppSet.info.view], AppSet.info.url = $.myToolSet.parseUrl();
    var _V_CODE = AppSet.CONFIG.verify_code,_SUBMIT = AppSet.CONFIG.submit;

    var PostObj = {
        verify_code: {
            url: _V_CODE.url,
            data: {}
        },
        submit: {
            url: _SUBMIT.url,
            data: {}
        }
    };
    var showMessage = function(msg) {
        var $msg = $('.ui.message');
        if(typeof msg === 'string'){
            $msg.removeClass('success warning').addClass('warning').html(msg);
        }else{
            $msg.removeClass('success warning').addClass(msg.ok ? 'success': 'warning').html(msg.message);
        };
        setTimeout(function(){
            $msg.html('');
        },1000);
    };
    $('#get_code').click(function () {
        if(!$('input[name="account"]').val()){
            showMessage('请填写账号');
            return ;
        };
        PostObj.verify_code.data = $('.ui.form').form('get values');
        $.myToolSet.ajax(PostObj.verify_code,function(msg){
            showMessage(msg);
        });
    });
    $('.submit.button').click(function () {
        if(!$('input[name="account"]').val() || !$('input[name="verify_code"]').val()){
            showMessage('信息不全');
            return ;
        };
        PostObj.submit.data = $('.ui.form').form('get values');console.log(PostObj.submit)
        $.myToolSet.ajax(PostObj.submit,function(msg){
            showMessage(msg);
            msg.ok && (window.location.href = msg.data.data.url);
        });
    });
});
