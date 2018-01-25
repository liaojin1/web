var aLi = document.getElementsByTagName("li");

for(var i = 0;i<aLi.length;i++){
    console.log(i);
    aLi[i].onclick = function () {
        console.log(i);//4
        for(var j = 0;j<aLi.length;j++){
            console.log(j);
            aLi[j].classList.remove("active");
        }
        this.classList.add("active");
    }
}