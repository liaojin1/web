var aLi = document.getElementsByTagName("li");

for(var i = 0;i<aLi.length;i++){
    aLi[i].onclick = function () {
        // for(var j = 0;j<aLi.length;j++){
        //     aLi[j].className = "";
        // }
        // this.className = "active";

        //保留原本自己的class名字
        for(var j = 0;j<aLi.length;j++){
                aLi[j].classList.remove("active");
            }
        this.classList.add("active");
    }
}
// aLi.onmousedown = function () {
//     aLi.className = "active";
// }错

