var canvas = document.getElementById('clock');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var r = width/2;
var rem = width/200;


function drawCircle(){
	ctx.save();
	ctx.translate(r,r);	//转移绘制原点
	ctx.beginPath();	//绘制路径
	ctx.lineWidth = 10*rem;
	ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI);	//设置画圆
	ctx.stroke();	//绘制
	var hourNum = [3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font = 18 * rem + "px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	hourNum.forEach(function(item,index){
		var rad = 2* Math.PI /12 * index;
		var x = Math.cos(rad) * (r - 30*rem);
		var y = Math.sin(rad) * (r - 30*rem);
		ctx.fillText(item,x,y);
	});

	for(var i=0; i<60; i++){
		var rad = 2* Math.PI /60 * i;
		var x = Math.cos(rad) * (r - 18*rem);
		var y = Math.sin(rad) * (r - 18*rem);
		ctx.beginPath();
		if(i%5===0){
			ctx.fillStyle = "#000";
			ctx.arc(x,y,2*rem,0,2*Math.PI);
		}else{
			ctx.fillStyle = "#ccc";
			ctx.arc(x,y,2*rem,0,2*Math.PI);
		}		
		ctx.fill();
	}
}

function drawHour(hour,minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * Math.PI / 12 * hour;
	var mrad = 2 * Math.PI /12 / 60 * minute;
	ctx.rotate(rad + mrad);
	ctx.lineWidth = 6*rem;
	ctx.lineCap = "round";
	ctx.moveTo(0,10*rem);
	ctx.lineTo(0,-r/2);
	ctx.stroke();
	ctx.restore();
}

function drawMinute(minute,second){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * Math.PI / 60 * minute;
	var srad = 2 * Math.PI / 60 / 60 * second;
	ctx.rotate(rad+srad);
	ctx.lineWidth = 3*rem;
	ctx.lineCap = "round";
	ctx.moveTo(0,10*rem);
	ctx.lineTo(0,-r+30*rem);
	ctx.stroke();
	ctx.restore();
}

function drawSecond(second){
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = '#f00';
	var rad = 2 * Math.PI / 60 * second;
	ctx.rotate(rad);
	ctx.moveTo(-2*rem,20*rem);
	ctx.lineTo(2*rem,20*rem);
	ctx.lineTo(1,-r+18*rem);
	ctx.lineTo(-1,-r+18*rem);
	ctx.fill();
	ctx.restore();
}

function drawDot(){
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(0,0,3,0,2*Math.PI);
	ctx.fill();
}

function draw(){
	ctx.clearRect(0,0,width,height);
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	drawCircle();
	drawHour(hour,minute);
	drawMinute(minute,second);
	drawSecond(second);
	drawDot();
	ctx.restore();
}

draw();
setInterval(draw, 1000);