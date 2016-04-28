define('module_compiles', [], function () {
    (function (dust) {
        dust.register("dropdown_item", body_0);
        function body_0(chk, ctx) {
            return chk.s(ctx.get(["data"], false), ctx, {"block": body_1}, {});
        }

        body_0.__dustBody = !0;
        function body_1(chk, ctx) {
            return chk.w("<div class=\"item\" data-value=\"").f(ctx.get(["id"], false), ctx, "h").w("\">").f(ctx.get(["name"], false), ctx, "h").w("</div>");
        }

        body_1.__dustBody = !0;
        return body_0
    }(dust));
    (function (dust) {
        dust.register("userName", body_0);
        function body_0(chk, ctx) {
            return chk.w("<i class=\"user icon\"></i>").f(ctx.getPath(true, ["name"]), ctx, "h");
        }

        body_0.__dustBody = !0;
        return body_0
    }(dust));
});