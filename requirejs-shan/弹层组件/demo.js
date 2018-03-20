requirejs.config({
    paths:{
        jquery:'../js/jquery-3.3.1'
    }
});
require(['jquery','dialog'],function ($,dialog) {
//不需要重用所以使用require
    $("#btn").click(function () {
        dialog.open({
            title:'我是对话框',
            url:'login.html',
            width:500
        });
    })
    $('#btn-close').on('click',function(){//重点突出了return返回的close方法的重要性
        dialog.close();
    });
});