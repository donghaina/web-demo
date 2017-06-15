/**
 * Created by taosang1992 on 2017/6/13.
 */
// var btn_add = document.getElementById('btn-add');
// var task_list = document.getElementById('task_list');
// btn_add.addEventListener('click', addTask);
// var list_item = task_list.getElementsByTagName('li');
// var get_done_list = document.getElementById('get_done_list');


/*function addTask() {
 var new_task = document.getElementById('new-task').value;
 // console.log(new_task);
 if (new_task) {
 addTaskItem(new_task);
 }
 }*/
/*function addTaskItem(text) {
 var list = document.createElement('li');
 list.innerHTML = text;
 list.classList.add('task-item');
 task_list.insertBefore(list, task_list.childNodes[0]);
 // console.log(text);
 for (var i = 0; i < list_item.length; i++) {
 list_item[i].addEventListener('click', function (e) {

 get_done_list.appendChild(this);

 this.classList.add('get-done');
 })
 }
 }*/

window.onload = function () {
    function submitFun(obj) {
        if (obj.category.value == '') {
            alert("请输入");
            return false;
        } else {
            console.log(obj.category.value);
        }
    }
}



