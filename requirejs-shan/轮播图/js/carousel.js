define(['jquery'],function ($) {


    function Carousel(options) {
        var self = this;
        this.index=0;
        this.timer = null;

        var settings = {
            arrowPos:'bottom',
            buttonType:'squire'
        };
        $.extend(settings,options);

        var $container = $('<div class="carousel-container"></div>').hover(function () {
                self._pause();//hover第一个参数是划入
            },function () {//第二个参数滑出
                self._start();
            }),
            $tab = $('<ul class="carousel-tab"></ul>'),
            $content = $('<div class="carousel-content"></div>'),
            $arrow = $('<div class="carousel-arrow '+settings.arrowPos+'"></div>'),
            $prev = $('<span class="carousel-prev">&lt;</span>').on('click',function () {
                 self.index--;
                 if(self.index==-1){
                     self.index=imgData.length-1;
                 }
                 changeImg(self.index);
                });
            this.$next = $('<span class="carousel-next">&gt;</span>').on('click',function () {
                self.index++;
                if(self.index==imgData.length){
                    self.index=0;
                }
                changeImg(self.index);
                });

            var imgData = settings.imgData;
            for(var i=0;i<imgData.length;i++){
                var sLi = '<li class="'+(settings.buttonType)+(i==0?' selected':'')+'">'+(settings.buttonType=='squire'?i+1:'')+'</li>';
                $tab.append(sLi);
                $content.append('<img src="'+imgData[i]+'" class="'+(i==0?'selected':'')+'"/>');
            }

            $arrow.appendTo($container);
            $($arrow).append($prev).append(this.$next);
            $($container).append($content);
            $($container).append($tab);

            $('li',$tab).on('click',function () {
                var index = $(this).index();
                changeImg(index);
                });

            $(settings.selector).append($container);

            this._start();

            var changeImg = function(idx){
                $('li',$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
                $('img',$content).eq(idx).addClass('selected').siblings().removeClass('selected');

            }
    }

    Carousel.prototype._init=function () {

    }
    
    Carousel.prototype._pause=function () {//一般前面加了下划线提示你是私有函数
        clearInterval(this.timer);

    };
    Carousel.prototype._start=function () {//一般前面加了下划线提示你是私有函数
        var selft = this;
        this.timer = setInterval(function () {
            this.$next.trigger('click');
        },1000);

    };
    return Carousel;
});