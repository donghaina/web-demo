window.onload = function () {
    var imgObj = document.getElementsByTagName('img');
    var wrapObj = document.getElementById('wrap');
    var len = imgObj.length;
    var deg = 360 / len;
    var nav_icon = document.querySelector('.nav-icon');
    var nav_item = document.querySelector('.nav-item');
    var btn_start = document.querySelector('.btn-start');
    var btn_stop = document.querySelector('.btn-stop');
    var array = [];
    var mask = document.querySelector('.mask');

    // 循坏20次生成20个随机数
    for (var i = 0; ; i++) {
        // 只生成10个随机数
        if (array.length < 20) {
            generateRandom(50);
        } else {
            break;
        }
    }
    console.log(array);

    //生成一个随机数
    function generateRandom(count) {
        var rand = parseInt(Math.random() * count);
        for (var i = 0; i < array.length; i++) {
            if (array[i] == rand) {
                return false;
            }
        }
        array.push(rand);
    }

//布局，将20张图片围成一个圈
    for (var i = 0; i < len; i++) {
        //随机图片
        imgObj[i].src = "imgs/pic" + array[i] + ".jpg";
        //让每个图片角度变化
        imgObj[i].style.transform = 'rotateY(' + deg * i + 'deg) translateZ(300px)';
        imgObj[i].onclick = function (e) {
            // console.log(e.target.src);
            //将点击的图片放到遮罩层里边
            mask.style.display = 'block';
            var img = document.createElement('img');
            img.src = e.target.src;
            mask.appendChild(img);
            //点击图片遮罩层消失
            img.onclick = function () {
                mask.style.display = 'none';
            }
        }
    }

//让旋转生效动画
    wrapObj.style.animation = 'spin 30s linear infinite';

//菜单点击事件
    nav_icon.onclick = function (e) {
        //阻止事件冒泡
        // e.stopPropagation();
        window.event.cancelBubble = true;
        if (nav_item.style.display === 'none') {
            nav_item.style.display = 'block';
            e.target.innerHTML = 'X';
            e.target.style.fontSize = '30px';
        } else {
            nav_item.style.display = 'none';
            e.target.innerHTML = '菜单';
            e.target.style.fontSize = '16px';
        }
    };

// 恢复旋转按钮点击事件
    btn_start.onclick = function () {
        wrapObj.style.animation = 'spin 30s linear infinite';//恢复旋转
    };

// 停止旋转按钮点击事件
    btn_stop.onclick = function () {
        wrapObj.style.animation = '';
    };


//拖拽处理过程
    document.onmousedown = function (e) {
        var x, y, nowX, nowY, lastX, lastY, dX, dY, roX = 0, roY = 0;
        wrapObj.style.animation = '';
        var e = e || window.event;//兼容IE
        lastX = e.clientX;
        lastY = e.clientY;
        this.onmousemove = function (e) {
            nowX = e.clientX;
            nowY = e.clientY;
            dX = nowX - lastX;
            dY = nowY - lastY;
            roX += dX * 0.5;//  让旋转度数幅度不要太大
            roY -= dY * 0.5;
            wrapObj.style.transform = "rotateX(" + roY + "deg) rotateY(" + roX + "deg)";
            lastX = nowX;
            lastY = nowY;
            console.log(roX, roY);
        };

        this.onmouseup = function () {
            this.onmousemove = null;
            this.onmouseup = null;
        }
    };
}
