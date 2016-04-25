define('module_form', [], function () {

    var _DATA = {};

    // TODO: Structure needs to be optimized
    var Form_Common = function (options) {
        var _top = this;
        this.$form = options.$dom;
        this.config = options.config;
        this.postObj = {
            url: options.config.submitUrl,
            data: {},
            before: function(){
                _top.postObj.data = _top.$form.form('get values');
            },
            callback: function (msg) {
                $.myToolSet.dimmerMsg('modal message', msg);
                setTimeout(function () {
                    msg.ok && window.close();
                }, 1500)
            },
            after: function(){
            },
        };
        this.detailObj = {
            url: options.config.getDetail.url,
            data: AppSet.info.url.params,
            before: function(){
                _top.detailObj.data = AppSet.info.url.params;
            },
            callback: function(msg){
                msg.ok && _top.$form.form('set values', msg.data.data);
            },
            after: function(){
            },
        };
        if(options.config.formType === 'add'){
            this.addObj = {
                url: options.config.getDetail.url,
                data: {},
                before: function(){
                    _top.config.setValues && _top.$form.form('set values',options.config.setValues);
                },
                callback: function(msg){
                },
                after: function(){
                },
            };
        };
        options.config.isInit && _top.init();

    };
    Form_Common.prototype = {
        init: function () {
            var _this = this;
            _this.$form.find('.green.button').click(function () {
                _this.postObj.before();
                $.myToolSet.ajax({url: _this.postObj.url, data: _this.postObj.data}, _this.postObj.callback);
                _this.postObj.after();
            });
            switch (_this.config.formType){
                case 'edit':
                    _this.detailObj.before();
                    $.myToolSet.ajax({url: _this.detailObj.url, data: _this.detailObj.data}, _this.detailObj.callback);
                    _this.detailObj.after();
                    break;
                case 'add':
                    _this.addObj.before();
                    _this.addObj.after();
                    break;
            };
        },

    }
    ;

    return {
        Form_Common: Form_Common,
    };

})
;