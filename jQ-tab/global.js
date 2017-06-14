$(document).ready(function(){
	$('nav a').bind('click',function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $('nav a').index(this);
		$('section').eq(index).addClass("show").siblings().removeClass('show');
	});
});