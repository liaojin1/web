// require(['a'],function (add2) {
//     //require含有两个参数，第一个是数组，第二个是函数
//     //数组中的每一个元素是他依赖的模块中的文件的名字
//     //在模块中使用define定义，参数为一个函数此函数为公用函数
//     //但是一定要用return返回函数名否则其他不能调用该模块的函数
//    //require['a'],调用模块a.js，require将会把define函数
//     // 返回的add赋值给require的第二个函数参数的行参（add2）
//     //
//     alert(add2(4,5));
// });

//2
require(['a'],function (sortArray) {
    var arr = [3,5,2,7,1,11];
    alert(sortArray(arr));
});