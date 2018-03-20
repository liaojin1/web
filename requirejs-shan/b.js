define(function () {
    // function isArray(args) {
    //     return (args instanceof Array)&&(args.constructor==Array);
    // }
    // return isArray;
    //优化后
    return function (args) {
            return (args instanceof Array)&&(args.constructor==Array);
        }
});
// args.isArray();//判断传入的是否为一个数组
// 但是有兼容性问题，因此需要自己封装

//怎样判断变量的数据类型typeof
// typeof []返回为object，因为数组是通过new Array（）
// 来创建的，所以数组即是数组又是对象
//var arr = [];
//arr instanceof Array返回true
//arr instanceof Object返回true

//constructor返回对象的构造函数
//var arr = new Array();
//arr.constructor==Array
//var obj = new Object();
//arr.constructor==Object
//function Person(){}
//var p1 = new Person();
//p1.constructor==Person;