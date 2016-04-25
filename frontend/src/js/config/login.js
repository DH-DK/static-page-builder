define('module_config', [], function () {
    return {
        site: {
            'login-sign_in': {
                verify_code: {field: "account", url: "/app/site/login/site_verify_code", isEmpty: "请填写商户名！"},
                submit: {url: "/app/site/login/site_login_port", isEmpty: "请填写完整信息！"}
            },

        },
    };
});