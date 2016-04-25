define('module_init', [], function () {

    var _DATA = {
        'preload': {
            'getCity': {
                'url': 'app/site/base/get_city_list2',
                'tmpl': 'dropdown_item',
                'dom': '.menu'
            },
        },
    };

    /*exports*/
    //TODO: it will take the place of dataTable in the near future
    var renderHTML = function (options) {
        if (Array.isArray(options)) {
            options.forEach(function (opt) {
                dust.render(opt.template, opt.data, function (err, out) {
                    opt.dom.html(out);
                    opt.dom.removeClass('qh-preload');
                });
            });
        } else {
            dust.render(options.template, options.data, function (err, out) {
                options.dom.html(out);
                opt.dom.removeClass('qh-preload');
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
    $('.qh-preload').each(function () {
        var $load = $(this);
        var _val = $load.data('qh-value');
        if (!_DATA.preload[_val]) {
            return;
        }
        var _cfg = _DATA.preload[_val];

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