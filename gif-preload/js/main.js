$(function () {
    var $btn = $('#face-btn'),
        $panel = $('.panel');

    var imgs = [];
    var len = 14;
    for (var i = 0; i < len; i++) {
        if (i < 10) {
            imgs[i] = 'img/qq/0' + i + '.gif';

        } else {
            imgs[i] = 'img/qq/' + i + '.gif';
        }

    }

    $btn.on('click', function (e) {
        e.stopPropagation();
        $panel.show();
        $.preload(imgs, {
            all: function () {
                var html = '';
                html += '<ul class="list">';
                for (var i = 0; i < len; i++) {
                    html += '<li><img src="' + imgs[i] + '" alt="gif face"></li>'
                }
                html += '</ul>';
                setTimeout(function () {
                    $panel.html(html);
                }, 1000);
            }
        })
    });

    $(document).on('click',function () {
        $panel.hide();
    })
});


