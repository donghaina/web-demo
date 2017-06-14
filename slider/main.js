/**
 * Created by taosang1992 on 2017/6/10.
 */
//获取容器对象
var box = document.getElementById('container');
// 获取图片对象集合
var imgs = box.getElementsByTagName('img');
// 获取图片宽度
var imgW = imgs[0].offsetWidth;
// 设置掩藏门体的宽度值
var exposeW = 160;
// 设置容器的总宽度
var boxW = imgW + (imgs.length - 1) * exposeW;
box.style.width = boxW + 'px';
var i, len = imgs.length;
// 设置每道门的初始位置
function setImgsPos() {
    for (i = 1; i < len; i++) {
        imgs[i].style.left = imgW + exposeW * (i - 1) + 'px';
    }
}
setImgsPos();
// 计算每道门打开时应移动的距离
var translate = imgW - exposeW;

// 为每道门绑定事件
for (i = 0; i < len; i++) {
    (function (i) {
        imgs[i].onmouseover = function () {
            setImgsPos();
            for(var j=1;j<=i;j++){
                 imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate +'px';
            }
        }
    })(i)
}


