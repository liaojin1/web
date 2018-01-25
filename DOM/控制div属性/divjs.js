var aBtn = document.getElementsByTagName("button");
var oDiv = document.getElementById("d-div");
var arr1 = ["width","height","background-color","display"];
var arr2 = ["300px","300px","red","none"];

for(var i = 0;i<aBtn.length;i++){

    aBtn[i].index=i;//获取索引
    aBtn[i].onclick = function () {
        var styleName = arr1[this.index];
        // console.log(styleName);
        var styleVal = arr2[this.index];
        this.index==4?oDiv.style.cssText="":oDiv.style[styleName]=styleVal;
    }
}