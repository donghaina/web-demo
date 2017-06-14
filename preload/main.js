/**
 * Created by taosang1992 on 2017/6/7.
 */

var imgs = [
    'images/pic01.jpg',
    'images/pic02.jpg',
    'images/pic03.jpg',
    'images/pic04.jpg',
    'images/pic05.jpg',
    'images/pic06.jpg',
    'images/pic07.jpg',
    'images/pic08.jpg',
    'images/pic09.jpg'
    ];
var index = 0,len = imgs.length;
var prev = document.getElementById('prev');
var next = document.getElementById('next');

prev.addEventListener ('click',function () {
    index = Math.max(0,--index);
    console.log(index);

});
next.addEventListener ('click',function () {
    index = Math.max(len-1,++index);
    console.log(index);
});
