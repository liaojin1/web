var oUl = document.getElementById("o-ul");
var aLi = document.getElementsByTagName("li");
//ul点击鼠标右键换位置
document.oncontextmenu = function (e) {
    // console.log(oUl);
    oUl.style.display = "block";
    oUl.style.top = e.clientY+"px";
    oUl.style.left = e.clientX+"px";
    return false;
}
//点击文档其他地方使ul隐藏
document.onclick = function () {
    oUl.style.display = "none";
}
//li绑定事件
for(var i = 0;i<aLi.length;i++){
    if(i<2){
        aLi[i].onclick = function () {
            location.href = this.getAttribute("Links");
        }
    }else{
        aLi[i].onclick = function () {
            alert(this.innerHTML);
        }
    }

}