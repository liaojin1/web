// define(function(){
//     function add(a,b) {//add函数为define的局部函数
//         //在index.js虽然引入了此文件但是内部的add函数
//         //不能被引用
//         return a+b;
//     }
//     return add;//需要把add这个内部函数暴露出来，注
//     // 意不是函数的调用
// });

//2
define(['b'],function(isArray){
    function sortArray(arr) {
        if(!isArray(arr)){
            return "error";
        }
        //sort();sort不传函数参数按照字母顺序排,则会显示，1,11......
        return (arr.sort(function (a,b) {
            return a-b;//升序
        }));
    }
    return sortArray;
});