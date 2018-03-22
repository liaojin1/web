require(['jquery','carousel'],function ($,Carousel) {
    new Carousel({
        selector:'#container',//获取要放到的容器位置
        arrowPos:'center',//center
        buttonType:'circle',//squire
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']

    });
});