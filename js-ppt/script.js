var img = document.getElementsByTagName('img');
var btn = document.getElementsByTagName('span');
function myFunction(obj){
	var index = parseInt(obj.textContent)-1;	//获取元素的索引
	for (var i = 0; i < img.length; i++) {
		img[i].style.display="none";
		btn[i].style.backgroundColor = '#00ff00';
	}
	img[index].style.display = "block";			// 将激活的按钮所对应的图片显示
	obj.style.backgroundColor = '#ffff00';		// 将激活的按钮背景设置为黄色
}