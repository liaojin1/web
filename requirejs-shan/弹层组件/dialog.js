requirejs.config({
    paths:{
        jquery:'../js/jquery-3.3.1'
    }
});
define(['jquery'],function ($) {
//必须有返回，返回值为require函数的第二个变量
// 变量有两种类型，一种是基本类型，一种是引用类型
// 考虑弹出窗口需要有打开和关闭的功能等，所以需要引用类型，返回对象

    //定义为全局变量
    var $container = $('<div class="dialog-container"></div>'),
        $mask = $('<div class="dialog-mask"></div>'),
        $dialogBox = $('<div class="dialog-box"></div>'),
        $titleBox = $('<div class="dialog-title-box"></div>'),
        $title = $('<span class="dialog-title"></span>'),
        $btnClose = $('<span class="dialog-close-btn">[X]</span>'),
        $content = $('<div class="dialog-content"></div>');

    return {
        // open:function (title,width,height,content) {//如果不确定
            // 用户传的参数个数，就不要使用参数，而是用传对象
        open:function (options){
            var self = this;
                //如果用户不传参数需要设置默认值
                var settings = {
                    width:400,
                    height:300
                };
                $.extend(settings,options);//jquery中的对象合并函数
                // 把第二个对象参数，合并到第一个中

                // var html = '<div class="dialog-container">'+
            // '<div class="dialog-mask"></div>'+
            //     '<div class="dialog-box">'+
            //     '<div class="dialog-title-box">'+
            //         '<span class="dialog-title">'+
            //         settings.title+'</span>'+
            //         '<span class="dialog-close-btn">[X]</span>'+
            //     '</div>'+
            //     '<div class="dialog-content"></div>'+
            //     '</div>'+'</div>';
            // $(document.body).append(html);

                //每次弹出一个窗口就会open一次
                // 每次open调用都会产生一个新的var，独立内存，不会相互干扰
                // var $container = $('<div class="dialog-container"></div>'),
                // //jquery中使用一个$符号套一个dom字符串，立刻成为一个jquery对象
                // //存储在内存中，只要不append()就不会显示在网页中
                //     $mask = $('<div class="dialog-mask"></div>'),
                //     $dialogBox = $('<div class="dialog-box"></div>'),
                //     $titleBox = $('<div class="dialog-title-box"></div>'),
                //     $title = $('<span class="dialog-title"></span>'),
                //     $btnClose = $('<span class="dialog-close-btn">[X]</span>'),
                //     $content = $('<div class="dialog-content"></div>');
                //因为上述对象没有逻辑关系，相互之间都是并列的因此需要进行逻辑组合
                $container.append($mask);//mask插入到container
                $dialogBox.css({//解决了之前产生的先插入html标签
                    // 后改动属性导致看到变化的问题
                    width:settings.width,
                    height:settings.height,
                    marginLeft:-settings.width/2,
                    marginTop:-settings.height/2
                }).appendTo($container);
                $title.html(settings.title).appendTo($titleBox);
                $btnClose.on('click',function () {
                    // $container.remove(); //想通过调用close实现关闭效果
                    // 需要把$container.remove()移入到close中
                    self.close();
                }).appendTo($titleBox);
                $titleBox.appendTo($dialogBox);
                $content.load(settings.url).appendTo($dialogBox);
                //load()函数作用是将括号内的文件读入，然后插在$content中
            $mask.on('click',function () {
                self.close();
            });
                $(document.body).append($container);


            // $('.dialog-box').css({//1.如果电脑速度慢则可能开始显示默认值
            //     //后来变成设置的值
            //     // 2.这段代码找所有的dialog-box
            //     //如果一个页面中设置多个弹出框
            //     // 应该各自有各自的样式，下面代码会影响其它弹出框
            //     width:settings.width,
            //     height:settings.height,
            //     marginLeft:-settings.width/2,
            //     marginTop:-settings.height/2
            // });

        },
        close:function () {
            $container.remove();//$container定义为了open的局部属性，
            // 需要把$container声明为全局属性
        }
    };
});