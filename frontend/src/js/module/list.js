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
            // TODO: Structure and method need to be optimized, it's so stupid,i don't need so many sames
            'typeList': ['edit', 'confirm', 'post', 'detail'],
            'edit': {
                '_self': function (event) {
                    var btnName = this.className.match(/qh-\w*/)[0].slice(3);
                    var tr = this.parentNode.parentNode, $table = $(this).parents('table.dataTable');
                    var trData = $table.DataTable().row(tr).data();
                    var config = AppSet.CONFIG.operation[btnName];
                    var newPage = config.url + '?';
                    config.fields && config.fields.forEach(function (value) {
                        newPage += value + '=' + trData[value] + '&';
                    });
                    window.location.href = newPage;
                },
                '_blank': function () {
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
                '_self': function (event) {
                    window.location.href = event.data.config.url;
                },
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
            'detail': {
                '_blank': function () {
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
                default:
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
                'td .qh-' + optName,
                TableSet.MainListOperationsInit(opt)
            );
            if(optName === 'checkbox'){
                options.$dom.on('click',
                    'td .toggle.checkbox:nth-child(1)',
                    {options: opt},
                    function(event){
                        var _OPTIONS = event.data.options;
                        var _postObj = {url: _OPTIONS.url,data:{}};
                        _postObj.data[_OPTIONS.data.name] = ($(this).checkbox('is checked')) ? _OPTIONS.data.value[0] : _OPTIONS.data.value[1];
                        var tr = this.parentNode.parentNode, $table = $(this).parents('table.dataTable');
                        var trData = $table.DataTable().row(tr).data();
                        _OPTIONS.fields && _OPTIONS.fields.forEach(function (value) {
                            _postObj.data[value] = trData[value];
                        });
                        $.myToolSet.ajax(_postObj, function (msg) {
                            $.myToolSet.dimmerMsg('modal message', msg);
                            if (msg.ok) {

                            }
                            ;

                        });
                    }
                );
            };
        }
        ;
        // check add need to be initialized
        if ($('.content-header .button.qh-add').length) {
            var addOpt = options.config.operation.add;
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
        // TODO: Structure and method need to be optimized, temporal handle
        operationsSet: _DATA.MainListOperations
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
