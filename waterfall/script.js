window.onload = function(){
	waterfall('main','box');
	// alert('hello');
	window.onScroll=function(){
		if(checkScrollSlide){
			
		}
		// console.log(checkScrollSlide());
	}
}

function waterfall(parent,box){
	//将main下所有的box元素拿出来
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent,box);
	// console.log(oBoxs.length);
	var oBoxW = oBoxs[0].offsetWidth;
	// console.log(oBoxW);
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
	// console.log(cols);
	//设置main的宽度
	oParent.style.cssText = 'width:'+oBoxW*cols+'px; margin:0 auto';
	var hArr = [];
	for(var i = 0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH = Math.min.apply(null,hArr);
			// console.log(minH);
			var index = getMinIndex(hArr,minH);
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.top = minH + 'px';
			oBoxs[i].style.left = oBoxs[index].offsetLeft+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
	// console.log(hArr);
}

function getByClass(parent,clsName){
	var boxArr = new Array();
	oElements = parent.getElementsByTagName('*');
	for (var i = 0; i < oElements.length; i++) {
		if(oElements[i].className===clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

function getMinIndex(arr,val){
	for(var i in arr){
		if(arr[i]===val){
			return i;
		}
	}
}

function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParant,'box');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH < scrollTop+height)?true:false;
}