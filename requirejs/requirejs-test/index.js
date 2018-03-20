require(["requirejs/requirejs-test/sort"],function (sortArr) {//中转页面需要使用require
    var arr = [5,8,6,1,3];
    var arr1 = sortArr(arr);//需要sortArr有个返回值才能把arr1赋值
    console.log(arr1);
})