var oUl = document.getElementById("o-ul");
var aLi = document.getElementsByTagName("li");

document.oncontextmenu = function(e){
    oUl.style.display = "block";
    oUl.style.top = e.clientY+"px";
    oUl.style.left = e.clientX+"px";
    // return false;
    e.preventDefault();//去掉鼠标点击右键默认事件
}
//鼠标点击文档内其他位置时ul隐藏
document.onclick = function () {
    oUl.style.display = "none";
}
//li增加事件
for(var i = 0;i<aLi.length;i++){
    aLi[i].index = i;
    aLi[i].onclick = function(){
        this.index<2 ? location.href = this.getAttribute("Links"):alert(this.innerText);
           // if(this.index<2){
           //     location.href=this.getAttribute("Links");
           // }else{
           //      alert(this.innerText);
           // }
    }
}
