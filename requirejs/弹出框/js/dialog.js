requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
define(["jquery"],function ($) {
    var dialog ={
        open:function () {
            var dialogHtml =
        '<div class="dialog-box" style="display: block">'+
                '<div class="dialog-mask"></div>'+
                '<div class="dialog-container"><!--不在mask中防止冒泡-->'+
                '<div class="dialog-header">'+
                '<div class="dialog-title">注册</div>'+
                '<div class="dialog-btn" id="close">[X]</div>'+
                '</div>'+
                '<div class="dialog-content"></div>'+
                '</div></div>';
            // document.body.innerHTML+=dialogHtml;
            $("body").append(dialogHtml);
            // var oClose = document.getElementById("close");
            // oClose.onclick=function () {
            //     document.getElementsByClassName("dialog-box")[0].remove();
            // }
            $("#close").click(function () {
                $(".dialog-box").remove();
            })
        }
    }
    return dialog;
})