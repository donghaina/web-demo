var imgObj = document.getElementsByTagName('img');
var wrapObj = document.getElementById('wrap');
var len = imgObj.length;
var deg = 360 / len;
for (var i = 0; i < len; i++) {
    imgObj[i].style.transform = 'rotateY(' + deg * i + 'deg)translateZ(300px)';
}
var x, y, nowX, nowY, lastX, lastY, dX, dY,roX=0,roY=0;
document.onmousedown = function (e) {
    var e = e || window.event;//兼容IE
    lastX = e.clientX;
    lastY = e.clientY;
    this.onmousemove = function (e) {
        nowX = e.clientX;
        nowY = e.clientY;
        dX = nowX - lastX;
        dY = nowY - lastY;
        roX += dX*0.5;
        roY -= dY*0.5;
        wrapObj.style.transform = "rotateX("+roX+"deg) rotateY("+roY+"deg)";
        lastX = nowX;
        lastY = nowY;
        console.log(roX, roY);
    }
    this.onmouseup = function () {


        // console.log(3);
        this.onmousemove = null;
        this.onmouseup = null;
    }
}
console.log(deg);