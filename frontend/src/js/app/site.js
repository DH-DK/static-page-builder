var AppSet = {
    dialog: {},
    info: (function () {
        var _Body = document.getElementsByTagName('body')[0],
            _Content = document.getElementById('page-content');
        var _info = {
            main: _Body.id,
            view: _Content.dataset.qhView,
            role: _Content.dataset.qhRole,
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
    modules: ['module_compiles','module_tool', 'module_config', 'module_init', 'module_list', 'module_form'],
    viewTypeMap: {
        'table': ['table-common','table-row_add'],
        'form': ['form','add','edit'],
    },
    tableTypeMap: {
        'table-common': 'Table_Common',
        'table-row_add': 'Table_RowAdd',
    }
};
require(AppSet.modules, function () {
    var module_config = require('module_config');
    AppSet.CONFIG = module_config[AppSet.info.view];
    AppSet.info.url = $.myToolSet.parseUrl();
    AppSet.info.model = AppSet.info.view.split('-')[0];
    var _pageType = AppSet.info.role || AppSet.CONFIG.pageType;
    var _pageConfig =  (AppSet.info.role) ?  AppSet.CONFIG['page-' + AppSet.info.role] : AppSet.CONFIG;
    switch (true) {
        case  AppSet.viewTypeMap.table.indexOf(_pageType) !== -1 :
            var module_table = require('module_list');
            AppSet.table = new module_table[AppSet.tableTypeMap[_pageType]]({$dom: $('#main-table'), config: _pageConfig});
            break;
        case  AppSet.viewTypeMap.form.indexOf(_pageType) !== -1:
            var module_form = require('module_form');
            if(AppSet.info.role){
                _pageConfig.formType = _pageType;
                _pageConfig.getDetail = AppSet.CONFIG.getDetail;
            };
            !_pageConfig.hasOwnProperty('isInit') && (_pageConfig.isInit = true);
            AppSet.form = new module_form.Form_Common({$dom: $('.content-body.form'), config: _pageConfig});
            break;
        case  _pageType === 'detail':
            (function(){
                var GetDetail = AppSet.CONFIG.getDetail;
                var ajaxObj = {
                    url: GetDetail.url,
                    data: AppSet.info.url.params,
                };
                var compiled = dust.compile($('.qh-preload.detail-content').html());
                var tmpl = dust.loadSource(compiled);

                $.myToolSet.ajax(ajaxObj, function (msg) {
                    msg.ok && dust.render(tmpl, msg.data.data, function(err, out) {
                        $('.qh-preload.detail-content').html(out);
                        $('.qh-preload.detail-content').removeClass('qh-preload');
                    });

                });
            }());
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
