/**
 * Created by taosang1992 on 2017/6/7.
 */
$(function () {
    var imgs = [
        'http://image5.tuku.cn/wallpaper/Landscape%20Wallpapers/8294_2560x1600.jpg',
        'http://www.deskcar.com/desktop/fengjing/2011722123730/1.jpg',
        'http://www.33lc.com/article/UploadPic/2012-8/20128181071010672.jpg',
        'http://www.bbra.cn/Uploadfiles/imgs/2016/11/02/tu2/001.jpg',
        'http://www.ctskyril.com/Public/article/2015-05-29/556812ea53938_thumb.jpg',
        'http://www.doudouxitong.net/uploads/allimg/151221/1-15122114433V39.jpg',
        'http://d.5857.com/zirfengg_141208/001.jpg',
        'http://pic1.win4000.com/wallpaper/4/53fee27a01094.jpg',
        'http://pic1.win4000.com/wallpaper/1/56821f8bb1e23.jpg'
    ];

    var index = 0,
        len = imgs.length,
        count = 0,
        $progress = $('.progress');

    $.each(imgs,function (i,src) {
        var imgObj = new Image();
        $(imgObj).on('load error',function () {
            $progress.html(Math.round((count+1)/len *100)+'%');
            if(count >= len-1){
                $('.loading').hide();
                document.title = '1/'+len;
            }
            count++;
        });
        imgObj.src = src;
    });

    $('.btn').on('click', function () {
        if ($(this).data('control') === 'prev') {
            //     上一张
            index = Math.max(0,--index);
        } else {
            //    下一张
            index = Math.min(len-1,++index);
        }
        document.title = (index + 1)+'/'+ len;
        $('#img').attr('src',imgs[index]);
    });
})

