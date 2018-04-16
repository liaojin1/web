var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var rubberbandDiv = document.getElementById('rubberbandDiv');
var resetButton = document.getElementById('resetButton');

var image = new Image();
//obj
var rubberbandRectangle = {};
var mousedownA = {};

//function--------------------------
function rubberbandStart(x,y){
    mousedownA.x = x;
    mousedownA.y = y;

    rubberbandRectangle.left = mousedownA.x;
    rubberbandRectangle.top = mousedownA.y;

    moveRubberbandDiv();
    showRubberbandDiv();


}

function rubberbandStretch(x,y){
    rubberbandRectangle.left = x<mousedownA.x?x:mousedownA.x;//确定所截区域距离左边的距离
    rubberbandRectangle.top = y<mousedownA.y?y:mousedownA.y;//
    rubberbandRectangle.width = Math.abs(x-mousedownA.x);
    rubberbandRectangle.height = Math.abs(y-mousedownA.y);
    moveRubberbandDiv();
    ResizeRubberbandDiv();
}

function rubberbandEnd(){
    var bbox = canvas.getBoundingClientRect();
/*ClientRect {top: 63.333335876464844, right: 829.3333740234375, bottom: 584.6666870117188, left: 28, width: 801.3333740234375…}
bottom:584.6666870117188
height:521.3333740234375
left:28
right:829.3333740234375
top:63.333335876464844
width:801.3333740234375
__proto__:ClientRect*/

    try{
        context.drawImage(canvas,rubberbandRectangle.left-bbox.left,
        rubberbandRectangle.top-bbox.top,
        rubberbandRectangle.width,
        rubberbandRectangle.height,
        0,0,canvas.width,canvas.height);
    }catch(e){

    }

    restRubberbandRectangle();

    rubberbandDiv.style.width = 0;
    rubberbandDiv.style.height = 0;

    hideRubberbandDiv();

}

function moveRubberbandDiv(){
    rubberbandDiv.style.left = rubberbandRectangle.left + 'px';
    rubberbandDiv.style.top = rubberbandRectangle.top + 'px';
}
//调整大小
function ResizeRubberbandDiv(){
    rubberbandDiv.style.width = rubberbandRectangle.width + 'px';
    rubberbandDiv.style.height = rubberbandRectangle.height + 'px';
}

function showRubberbandDiv(){
    rubberbandDiv.style.dispaly = 'block';
}

function hideRubberbandDiv(){
    rubberbandDiv.style.dispaly = 'none';
}

function restRubberbandRectangle(){
    rubberbandRectangle = {
        top:0,
        left:0,
        width:0,
        height:0
    }
}

//event handlers
//canvas绑定开始事件
canvas.onmousedown = (e) => {
    var x = e.clientX;
    var y = e.clientY;

    e.preventDefault();//取消默认事件
    rubberbandStart(x,y);
};
//给window绑定移动事件
window.onmousemove = (e) => {
    var x = e.clientX;
    var y = e.clientY;
e.preventDefault();
rubberbandStretch(x,y);        
};
//
window.onmouseup = (e) => {
    e.preventDefault();
    rubberbandEnd();
}

image.onload = ()=>{
    context.drawImage(image,0,0,canvas.width,canvas.height);
};

resetButton.onclick = (e) =>{
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
    context.drawImage(image,0,0,canvas.width,canvas.height);
}
image.src = 'dog.jpg';
