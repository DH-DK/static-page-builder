define('module_config', [], function () {
    return {
        "work-receive": {
            "pageType": "table-row_add",
            "isInit": true,
            "tableDefault":{
                "ordering": true,
                "order": [[ 0, "desc" ]]
            },
            "hasIndex": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [
                {"title": "姓名", "data": "name"},
                {"title": "手机号", "data": "mobile"},
                {"title": "所属城市", "data": "city_name"},
                {"title": "操作", "data": null}
            ],
            "columnDefs": [
                {
                    "targets": 0,
                    "type": "href"
                },
                {
                    "targets": -1,
                    "type": "button",
                    "members": ["edit"],
                    "disabled": {
                        "state": {
                            "val": [100],
                            "btn": ["edit"]
                        }
                    }
                }
            ],
            "operation": {
                "edit": {
                    "type": "_blank",
                    "fields": ["id"],
                    "url": "/app/site/model/model_edit_view"
                }
            },
            "add": {
                "type": "_blank",
                "url": "/app/site/model/model_add_view"
            }
        },
        "work-replenish": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "work-transfer": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "work-delivery": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "work-monitor": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "work-order_detail": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "stock-stock_out": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "stock-goods": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "stock-check": {
            "pageType": "form",
            "formType": "edit",
            "submitUrl": "/app/site/model/form_submit_port",
            "getData": {"url": "/app/site/model/detail_get_port"},
            "setValues": {"state": 100, "if_external": 100}
        },
        "allocate-allocation_list": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "print-stock_out": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "print-label": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "print-allocation": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "statistics-order_detail": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "statistics-stock_statistic": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "statistics-transfer_order": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "statistics-delivery_order": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "system-user_list": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        },
        "system-microstock_list": {
            "pageType": "table-common",
            "isInit": true,
            "queryUrl": "/app/site/model/model_list_port",
            "columns": [{"title": "姓名", "data": "name"}, {"title": "手机号", "data": "mobile"}, {
                "title": "所属城市",
                "data": "city_name"
            }, {"title": "操作", "data": null}],
            "columnDefs": [{"targets": 0, "type": "href"}, {
                "targets": -1,
                "type": "button",
                "members": ["edit"],
                "disabled": {"state": {"val": [100], "btn": ["edit"]}}
            }],
            "operation": {"edit": {"type": "_blank", "fields": ["id"], "url": "/app/site/model/model_edit_view"}},
            "add": {"type": "_blank", "url": "/app/site/model/model_add_view"}
        }
    };
});
define('model_allocate',[],function(){

});
define('model_print',[],function(){

});
define('model_statistics',[],function(){

});
define('model_stock',[],function(){

});
define('model_system',[],function(){

});
define('model_work',[],function(){
    var count = 1;
    $('.button.qh-add').click(function(){
        AppSet.table.addRow(
            {
                "id": 18,
                "no": "100004",
                "name": "shanghai" + count++,
                "email": "123455@sina.com",
                "work_state_name": "20333-21-123",
                "sex_name": "\u7537",
                "id_card_sn": "111111111111111111",
                "mobile": "17090054750",
                "city_name": "\u5317\u4eac\u5e02",
                "work_state_name": "\u5728\u804c",
                "hired_date": "2016-04-01"
            }
        )
    });


});
define('module_compiles',[],function(){(function(dust){dust.register("dropdown_item",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["data"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"item\" data-value=\"").f(ctx.get(["id"], false),ctx,"h").w("\">").f(ctx.get(["name"], false),ctx,"h").w("</div>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("userName",body_0);function body_0(chk,ctx){return chk.w("<i class=\"user icon\"></i>").f(ctx.getPath(true, ["name"]),ctx,"h");}body_0.__dustBody=!0;return body_0}(dust));});
define('module_form',[],function() {

    var _DATA = {};

    // TODO: Structure needs to be optimized
    var Form = function( options ){
        options.$dom.find('.green.button.submit').click(function(){
            var _data = options.$dom.form('get values');
            $.myToolSet.ajax({
                url: options.config.submitUrl,
                data: _data
            },function(msg){
                $.myToolSet.dimmerMsg('modal message',msg);
                setTimeout(function(){
                    msg.ok && window.close();
                },1500);

            });
        });
        switch (options.config.formType){
            case 'edit':
                $.myToolSet.ajax({
                    url: options.config.getData.url,
                    data: AppSet.info.url.params
                },function(msg){
                    msg.ok && options.$dom.form('set values', msg.data.data);
                });
                break;
            case 'add':
                options.config.setValues && options.$dom.form('set values',options.config.setValues);
                break;
        };

    };

    return {
        Form: Form,
    };

});
define('module_init',[],function () {

    var _DATA = {
        prestrain: {
            'getCity': {
                'url': '/app/site/tools/city_list_port',
                'tmpl': 'dropdown_item',
                'dom': '.menu'
            },
        },
    };
    var data = {name: '这是dust干的'};
    var data2 = {
        data: [{
            name: 'ceshi1',
            value: '1',
        }, {
            name: 'ceshi2',
            value: '2',
        }]
    };
    /*exports*/
    //TODO: it will take the place of dataTable in the near future
    var renderHTML = function (options) {
        if (Array.isArray(options)) {
            options.forEach(function (opt) {
                dust.render(opt.template, opt.data, function (err, out) {
                    opt.dom.html(out);
                });
            });
        } else {
            dust.render(options.template, options.data, function (err, out) {
                options.dom.html(out);
            });
        }
        ;
    };

    //semantic init
    $('.ui.dropdown').dropdown();
    $('.ui.accordion').accordion();
    $('.menu .item').tab();
    $('.ui.checkbox').checkbox();
    $('.ui.progress').progress();

    $('.ui.left.pointing.dropdown').dropdown({on: 'hover'});
    //datePicker init
    $('.qh-datePicker').each(function () {
        var $picker = $(this);
        var _data = $picker.data('qh-value') || {};
        $picker.datepicker($.extend(false, {
            'format': 'yyyy-mm-dd',
            'autoclose': true
        }, _data));
    });
    //prestrain
    $('.qh-prestrain').each(function () {
        var $load = $(this);
        var _cfg = _DATA.prestrain[$load.data('qh-value')];
        $.myToolSet.ajax({
            url: _cfg.url,
            data: {},
        }, function (msg) {
            msg.ok && renderHTML({
                template: _cfg.tmpl,
                data: {data: msg.data.data},
                dom: $load.find(_cfg.dom),
            });
        });


    });
    //renderHTML([{
    //    template: 'userName',
    //    data: data,
    //    dom: $('.navbar .ui.label')
    //}, {
    //    template: 'dropdown_item',
    //    data: data2,
    //    dom: $('.content-header .dropdown .menu')
    //}]);
    //dust.render('dropdown_item', {data:data2}, function (err, out) {
    //    console.log(err)
    //    $('.dropdown .menu').html(out);console.log(data2,out)
    //});
    return {
        renderHTML: renderHTML,
    };
});
define('module_list',[],function () {
    var _DATA = {
        'default': {
            'paging': false,
            'scrollY': true,
            'scrollX': true,
            'scrollCollapse': false,
            'ordering': false,
            'searching': false,
            'serverSide': false,
            'info': false,
            'processing': true,
            'deferRender': true,
            'jQueryUI': false,
            'retrieve': true,
            'destroy': true,
            'language': {
                'emptyTable': '暂无符合要求的数据',
                'processing': '处理中',
            },
            'drawCallback': function (settings) {
                $('table .checkbox').checkbox();
            },
            'rowCallback': function (row, data, index) {

            },
        },
        'cellContent': {
            'href': ['<a href="javascript:void(0)" class="qh-detail">', '</a>'],
            'button': ['<button class="ui qh-', ' button">', '</button>'],
            'checkbox': ['<div class="ui toggle checkbox"><input type="checkbox" name="switching_status" ',
                '/><label> ',
                '</label></div>'],
            'input': [],
        },
        'pagination': {
            'content': '<a class="item">共<span class="qh-allpage">{.total_page}</span>页,' +
            '<span class="qh-allnum">{.total_no}</span>条,每页<span class="qh-pagesize">{.page_size}</span>条,当前第<span class="qh-nowpage">{.page_no}</span>页</a>' +
            '<a class="icon item qh-prev" title="上一页">&lt;</a>' +
            '<a class="icon item qh-next" title="下一页">&gt;</a>',
            'dom': '<div class="ui right floated qh-pagination menu"></div>',
            'defaultData': {
                page_no: 0,
                page_size: 30,
                total_page: 0,
                total_no: 0
            },
        },
        'buttons': {
            'edit': '编辑',
            'delete': '删除',
            'apply_through': '通过',
            'apply_reject': '驳回',
        },
        'MainListOperations': {
            // TODO: Structure needs to be optimized
            'typeList': ['edit', 'confirm', 'post', '_blank'],
            'edit': {
                '_blank': function (event) {
                    var newWindow = window.open("about:blank", "_blank");
                    var nowWindow = window;
                    var btnName = this.className.match(/qh-\w*/)[0].slice(3);
                    var tr = this.parentNode.parentNode, $table = $(this).parents('table.dataTable');
                    var trData = $table.DataTable().row(tr).data();
                    var config = AppSet.CONFIG.operation[btnName];
                    var newPage = config.url + '?';
                    config.fields && config.fields.forEach(function (value) {
                        newPage += value + '=' + trData[value] + '&';
                    });
                    newWindow.location.href = newPage;
                    setTimeout(function () {
                        newWindow.onunload = function () {
                            nowWindow.AppSet.table.instance.ajax.reload();
                        };
                    }, 500);

                },
                'dialog': function () {
                    $('.ui.modal.qh-edit .form').form('clear');
                    var _config = AppSet.CONFIG.operation.edit;
                    var tr = this.parentNode.parentNode, $table = $(this).parents('table.dataTable');
                    var trData = $table.DataTable().row(tr).data();
                    if (_config.getData) {
                        var _getData = _config.getData;
                        var _data = $.myToolSet.getData(trData, _getData.fields);
                        $.myToolSet.ajax({
                            url: _getData.url,
                            data: _data,
                        }, function (msg) {
                            if (msg.ok) {
                                $('.ui.modal.qh-edit .form').form('set values', msg.data.data);
                                $('.ui.modal.qh-edit').modal('show');
                            }
                            ;
                        });
                        return false;
                    }else{

                    }
                    ;
                    $('.ui.modal.qh-edit .form').form('set values', trData);
                    // TODO: 自动判断获取详情
                    $('.ui.modal.qh-edit').modal('show');
                },
            },
            'add': {
                '_blank': function (event) {
                    var _config = event.data.config;
                    var newWindow = window.open("about:blank", "_blank");
                    var nowWindow = window;
                    newWindow.location.href = _config.url;
                    setTimeout(function () {
                        newWindow.onunload = function () {
                            nowWindow.AppSet.table.instance.ajax.reload();
                        };
                    }, 500);
                },
                'dialog': function (event) {
                    $('.ui.modal.qh-edit .form').form('clear');
                    var _data = event.data;
                    $('.ui.modal.qh-add .form').form('set values', _data.setValues);
                    $('.ui.modal.qh-add').modal('show');
                },
            },
        },


    };
    $.extend($.fn.dataTable.defaults, _DATA.default);

    /*baseFunc*/

    var TableSet = {
        CreateOptions: function (config) {

            var _result = {};
            _result.columns =  this.CreateColumnDefs(config.columns, config.columnDefs);

            if(config.pageType === 'table-common') {
                _result.ajax = {
                    "type": "post",
                    'url': config.queryUrl,
                    'data': function (d) {
                        var _data = $('.content-header .ui.form').form('get values');
                        return $.extend({}, d, _data);
                    },
                    "dataSrc": function (json) {
                        return (json.ok) ? json.data.data : [];
                    }
                }
            };

            if(config.pageType === 'table-row_add') {
                $.extend(_result,config.tableDefault);

            };
            return _result;
        },
        CreateColumnDefs: function (columns, defsArr) {
            var _result = columns;
            _result.forEach(function(col){
                !col.orderable && (col.orderable =  false);
            });
            var _this = this;
            defsArr.forEach(function (def, index, array) {
                var _len = columns.length;
                var _num = (def.targets < 0) ? (_len + def.targets) : def.targets;
                _result[_num].render = _this.CreateCellContent(def);

            });

            return _result;
        },
        CreateCellContent: function (columnDef, item) {
            var _dom = _DATA.cellContent[columnDef.type], _result;
            var _this = this;
            /**
             * TODO: 这个类型选择应该可以优化（参考方案function合并）
             */
            switch (columnDef.type) {
                case 'href':
                    _result = function (data, type, row, meta) {
                        return _dom[0] + data + _dom[1];
                    };
                    break;
                case 'button':
                    var text = '';
                    columnDef.members.forEach(function (value) {
                        var _test = _DATA.buttons[value] || columnDef.buttons[value];
                        text += _dom[0] + value + _dom[1] + _test + _dom[2];
                    });
                    _result = function (data, type, row, meta) {
                        return text;
                    };
                    break;
                case 'checkbox':
                    var _label = columnDef.texts || ['禁用', '启用'], _temp = '';
                    _label.forEach(function (value) {
                        var _i = '<i>' + value + '</i>';
                        _temp += _i;
                    });
                    _temp = _dom[1] + _temp + _dom[2];
                    _result = function (data, type, row, meta) {
                        var _state = (data === columnDef.checked) ? 'checked="checked"' : ' ';
                        return _dom[0] + _state + _temp;
                    };
                    break;
                default :
                    break;

            }
            ;
            return _result;
        },
        MainListOperationsInit: function (options) {
            /**
             * TODO: optimize
             * if the table is not main and it has Operation,Aah!
             * i have a idea, just check table id, en
             */
            switch (options.name) {
                case 'edit':
                    if (options.type === 'dialog' && !AppSet.dialog.edit) {
                        $('.ui.modal.qh-edit .header').html(options.title);
                        $('.ui.modal.qh-edit').modal({
                            closable: false,
                            onDeny: function () {
                                return true;
                            },
                            onApprove: function () {
                                var data = $('.ui.modal.qh-edit .form').form('get values');
                                $.myToolSet.ajax({
                                    url: options.submitUrl,
                                    data: data,
                                }, function (msg) {
                                    $.myToolSet.dimmerMsg('modal message', msg);
                                    if (msg.ok) {
                                        AppSet.table.instance.ajax.reload();
                                        $('.ui.modal.qh-edit').modal('hide');
                                    }
                                    ;

                                });
                                return false;
                            }
                        });
                    }
                    ;
                    break;
                /*
                 case 'confirm':
                 //TODO: 缺ajax的callback
                 //TODO: 在这捆绑对应的modal的submit,尝试利用设计模式提供拓展接口，暂时没啥想法，头疼
                 if (!AppSet.dialog.confirm) {
                 AppSet.dialog.confirm = {};
                 $('.ui.modal.qh-confirm').modal({
                 closable: false,
                 onDeny: function () {
                 return true;
                 },
                 onApprove: function () {
                 var options = AppSet.dialog.confirm;
                 var data = $('.ui.modal.qh-confirm .form').form('get values');
                 $.extend(false, data, _data);
                 $.myToolSet.ajax({
                 url: options.config.url,
                 data: data,
                 }, function (msg) {
                 alert(1);
                 });
                 }
                 });
                 }
                 ;
                 return function () {
                 var tr = $(this).parents('tr')[0];

                 $('.ui.modal.qh-confirm').modal('show');
                 };
                 break;
                 case 'post':
                 return function () {
                 var tr = $(this).parents('tr')[0];
                 var trData = AppSet.table.instance.row(tr).data();
                 var config = $.myToolSet.getOperationConfig(this);
                 var data = $.myToolSet.getRowData(trData, config.fields);
                 $.myToolSet.ajax({
                 url: config.url,
                 data: data,
                 }, function (msg) {
                 alert(1);
                 });

                 };
                 break;
                 */
                case '_blank':
                    //TODO: 暂时性完结
                    return function () {
                        var newWindow = window.open("about:blank", "_blank");
                        var nowWindow = window;
                        var btnName = this.className.match(/qh-\w*/)[0];
                        var tr = $(this).parents('tr')[0];
                        var data = AppSet.table.instance.row(tr).data();
                        var config = AppSet.CONFIG.operation[btnName];
                        var newPage = config.url + '?';
                        config.fields.forEach(function (value) {
                            newPage += value + '=' + data[value] + '&';
                        });
                        newWindow.location.href = newPage;
                        setTimeout(function () {
                            newWindow.onunload = function () {
                                nowWindow.AppSet.table.instance.ajax.reload();
                            };
                        }, 500);
                    };
                    break;
                default:
                    return false;
                    break;
            }
            ;
            return _DATA.MainListOperations[options.name][options.type];
        }
    };
    /**
     *
     * @param options => {element,config}
     * @constructor
     * @attention !!! (
     *  if you want to create a dataTableInstance its prototype $dom is not main-table,
     *  you must redefine the param named ajax in options
     * )
     */

    var Table_Common = function (options) {
        this.$dom = options.$dom;
        this.options = TableSet.CreateOptions(options.config, options.$dom);
        //initialize pagination/pageInfo
        $('.content-footer').append(_DATA.pagination.dom);
        var compiled = dust.compile(_DATA.pagination.content, "pagination");
        dust.loadSource(compiled);
        dust.render("pagination", _DATA.pagination.defaultData, function (err, out) {
            if (err) console.error(err);
            $('.qh-pagination').html(out);
        });
        //list reload => query/prev/next

        $('#page-content').on('click', '.qh-query,.qh-pagination .qh-prev,.qh-pagination .qh-next', function () {
            var btnName = this.className.match(/qh-\w*/)[0].slice(3);
            var _num = parseInt($('input[name="page"]').val());
            if(btnName === 'query'){
                _num = 1;
            }else{
                var _json = AppSet.table.tableInstance.ajax.json();
                //stop query if the total_page is zero
                var total = (_json.ok) ? _json.data.page_info.total_page : 0;
                _num += (btnName === 'prev') ? -1 : 1;
                if (_num <= 0 || _num > total) {
                    var _message = (_num <= 0) ? '没有上一页了' : '没有下一页了';
                    $.myToolSet.dimmerMsg('tips message', _message);
                    return;
                }
                ;
            };
            $('input[name="page"]').val(_num);
            AppSet.table.tableInstance.ajax.reload();
        });
        options.config.isInit && this.init(options.$dom);
        // check operation need to be initialized
        if (!options.config.operation) {
            return this;
        }
        ;
        for (var optName in options.config.operation) {
            var opt = options.config.operation[optName];
            opt.name = optName;
            // check operation's name and get func
            _DATA.MainListOperations.typeList.indexOf(optName) !== -1 && options.$dom.on('click',
                '.button.qh-' + optName,
                TableSet.MainListOperationsInit(opt)
            );
        }
        ;
        // check add need to be initialized
        if ($('.content-header .button.qh-add').length) {
            var addOpt = options.config.add;
            if (addOpt.type === 'dialog') {
                $('.ui.modal.qh-add .header').html(addOpt.title);
                $('.ui.modal.qh-add').modal({
                    closable: false,
                    onDeny: function () {
                        return true;
                    },
                    onApprove: function () {
                        var data = $('.ui.modal.qh-add .form').form('get values');
                        $.myToolSet.ajax({
                            url: addOpt.submitUrl,
                            data: data,
                        }, function (msg) {
                            $.myToolSet.dimmerMsg('modal message', msg);
                            if (msg.ok) {
                                AppSet.table.instance.ajax.reload();
                                $('.ui.modal.qh-add').modal('hide');
                            }
                            ;

                        });
                        return false;
                    }
                });
            }
            $('.content-header .button.qh-add').click({config: addOpt}, _DATA.MainListOperations.add[addOpt.type]);
        }
        ;
    };

    Table_Common.prototype = {
        // check list need to be initialized
        init: function ($dom) {
            this.tableInstance = $dom.DataTable(this.options).on('xhr.dt', function (e, settings, json, xhr) {
                var _page_info = (json.ok) ? json.data.page_info : {
                    page_no: 0,
                    page_size: 0,
                    total_no: 0,
                    total_page: 0
                };
                $('input[name="page"]').val(_page_info.page_no);
                dust.render("pagination", _page_info, function (err, out) {
                    if (err) console.error(err);
                    $('.qh-pagination').html(out);
                });
                !json.ok &&  $.myToolSet.dimmerMsg('tips message', json.message);

            }).on('preXhr.dt', function (e, settings, json, xhr) {
                $('.content-header .ui.form .fields').addClass('disabled');
            }).on('draw.dt', function (e, settings, json, xhr) {
                $('.content-header .ui.form .fields').removeClass('disabled');
            });
        },
    };


    var Table_RowAdd = function (options) {
        this.$dom = options.$dom;
        this.options = TableSet.CreateOptions(options.config, options.$dom);
        if(options.config.hasIndex){
            this.options.columns.unshift({
                "title": "序号",
                "data": null,
                "render": function(row, type, set, meta){
                    return meta.row + 1;
                },
            });
        };

        options.config.isInit && this.init(options);

    };

    Table_RowAdd.prototype = {
        // check list need to be initialized
        init: function (options) {

            this.tableInstance = options.$dom.DataTable(this.options).on('draw.dt', function (e, settings, json, xhr) {
                $('.content-header .ui.form .fields').removeClass('disabled');
            });
        },
        addRow:function(data){
            if(Array.isArray(data)){
                this.tableInstance.rows.add(data).draw(false);
            }else{
                this.tableInstance.row.add(data).draw(false);
            };
        },

    };
    return {
        Table_Common: Table_Common,
        Table_RowAdd: Table_RowAdd
    };
});

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
var AppSet = {
    dialog: {},
    info: (function () {
        var _Body = document.getElementsByTagName('body')[0],
            _Content = document.getElementById('page-content');
        var _info = {
            main: _Body.id,
            view: _Content.dataset.qhView,
        };
        ['sidebar-alt', 'sidebar'].forEach(function (element) {
            try{
                var _node = document.querySelector('#' + element + ' .' + _info.view);
                _node.classList.add('active');
                if(element === 'sidebar-alt'){
                    _node.parentNode.parentNode.classList.add('active');
                    return false;
                }
                ;
                _node.parentNode.classList.add('active');
                _node.parentNode.parentNode.querySelector('.title').classList.add('active');
            }catch(e){

            };

        });
        document.getElementById('sidebar').classList.remove('loading');
        return _info;
    }()),
    modules: ['module_compiles','module_tool', 'module_config', 'module_init', 'module_list', 'module_form']
};
require(AppSet.modules, function () {
    var module_config = require('module_config');
    AppSet.CONFIG = module_config[AppSet.info.view];
    AppSet.info.url = $.myToolSet.parseUrl();
    AppSet.info.model = AppSet.info.view.split('-')[0];
    switch (AppSet.CONFIG.pageType) {
        case 'table-common':
            var module_table = require('module_list');
            AppSet.table = new module_table.Table_Common({$dom: $('#main-table'), config: AppSet.CONFIG});
            break;
        case 'table-row_add':
            var module_table = require('module_list');
            AppSet.table = new module_table.Table_RowAdd({$dom: $('#main-table'), config: AppSet.CONFIG});
            break;
        case 'form':
            var module_form = require('module_form');
            module_form.Form({$dom: $('.content-body.form'), config: AppSet.CONFIG});
            break;
        default :

            break;
    }
    ;
    if (AppSet.info.model) {
        require(['model_' + AppSet.info.model]);
    }
    ;
});
