// define(function () {//最终页面使用define
//     function sortArr(arr) {
//         return arr.sort(function (a,b) {
//             return b-a;
//         });
//     }
//     return sortArr;//返回函数的声明使该函数暴露出来从而给index提供引用
// })


define(function (require) {
    var arr = [5,8,6,1,3];
    var sortArr = require("requirejs/requirejs-test/sort");
    console.log(sortArr(arr));
})