/**
 * Created by taosang1992 on 2017/6/5.
 */
$(function(){
   $(window).scroll(function () {
       var top = $(document).scrollTop();
       // console.log(top);
       var $menu = $('#menu');
       var items = $('#content').find('.item');
       var currentId = "";// 当前所在的楼层ID
       items.each(function () {
           var m = $(this);
           var itemTop = m.offset().top;
           if(top>itemTop){
               currentId = "#"+m.attr('id');
           }else{
               return false;
           }
       });

       //给对应的a设置current，取消其他链接的current
       var currentLink = $menu.find('.current');
       if(currentId && currentLink.attr('href')!==currentId){
           currentLink.removeClass('current');
           $menu.find("[href=" + currentId +"]").addClass('current');
       }
   })
});