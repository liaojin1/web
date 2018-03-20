// require(["dialog","jquery-3.3.1.js"],function (dialog) {
//     // var oBtn = $("#btn");
//     // oBtn.onclick = function () {
//     //     dialog.open();
//     // }
//     $("#btn").click(function () {
//         console.log("1");
//         dialog.open();
//     })
//     //AMD
//     //CMD
// })

requirejs.config({
    paths:{
        jquery:'jquery-3.3.1'
    }
});
require(["dialog","jquery"],function (dialog,$) {
    $("#btn").click (function () {
        console.log("1");
        dialog.open();
    })
});