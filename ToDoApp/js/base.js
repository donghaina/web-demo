;//结束之前引入的库
(function () {
    'use strict';

    //变量定义
    var $form_add_task = $('.add-task'),
        new_task = {},
        task_list = [];

    //表单提交事件
    $form_add_task.on('submit', function (e) {
        // 禁用默认行为
        e.preventDefault();
        // 获取新Task的值
        new_task.content = $(this).find('.input-task').val();
        // 如果用户什么都没填写就提交，不执行后面的程序
        if (!new_task.content) {
            return;
        } else {
            // 存入新的Task
            add_task(new_task);
            if(add_task(new_task)){
                render_task_list();
            }
        }

        function add_task(new_task) {
            //将新的task存入task-list数组中
            task_list.push(new_task);
            //更新localstorage
            store.set(task_list);
            return true;
        }

        function init() {
            task_list = store.get('task_list') || [];
        }

        function render_task_list(){
            // console.log('success');
            var $task_list = $('.task-list');
            for(var i=0; i<task_list.length;i++){
                var $task = render_task_item(task_list[i]);
            }
            $task_list.append($task);
        }
        
        function render_task_item(data) {
            var $task_item_tpl = '<div class="task-item clearF">' +
                '<div class="fL">' +
                '<span><input type="checkbox" class="check-box"></span>' +
                '<span class="task-content">'+data.content+'</span>' +
                '</div>' +
                '<div class="fR">' +
                '<span class=" btn btn-delete">删除</span>' +
                '<span class="btn btn-detail">详情</span>' +
                '</div>' +
                '</div>';
            return $($task_item_tpl);
        }
    });
})();