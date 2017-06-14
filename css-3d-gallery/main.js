var imgObj = document.getElementsByTagName('img');
var len = imgObj.length;
var deg = 360/len;
for(var i=0;i<len;i++){
    imgObj[i].style.transform = 'rotateY('+deg*i+'deg)translateZ(300px)';
}
document.onmousedown=function(e){
    // console.log(1);
    this.onmousemove = function(e){
        // console.log(2);
    }
    this.onmouseup = function(){
        // console.log(3);
        this.onmousemove=null;
        this.onmouseup=null;
    }
}
console.log(deg);