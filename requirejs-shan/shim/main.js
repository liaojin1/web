require.config({
    shim:({
        aa:{
            deps:['bb'],//依赖bb
            exports:'aa'
        }
    })
});
require(['aa'],function (aa) {
   aa.con1();
});