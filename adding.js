let addBtn = document.getElementById("addBtn");
let reEditBtn = document.getElementById("reEditBtn");
let deleteAllBtn = document.getElementById("deleteAllBtn");

deleteAllBtn.addEventListener('click',function(){
    alert('Function yet to be added')
})


reEditBtn.classList.add('hideBtn');

let listItems = [
    // {
    //     taskNo: 1,
    //     taskName: 'Dummy Task'
    // },

];


// For Displaying the task
showTask = (item) => {
    // let taskNo = item.taskNo;
    let taskNo = listItems.length + 1;
    let taskName = item.taskName;

    let trId = 'tr' + taskNo;
    //Removes Empty input and alert;
    if (taskName.trim() == "") {
        alert("please enter task")
        listItems.pop();
        return;
    }
    let taskBox = document.getElementById("taskBox");
    let taskRow = document.createElement("tr");
    taskRow.id = trId;

    taskRow.style.height = '100px';
    let taskData1 = document.createElement("td");
    let taskData2 = document.createElement("td");
    let taskData3 = document.createElement("td");

    function editTask() {
        let taskItem = document.getElementById("taskItem");
        taskItem.style.color = 'red';
        taskItem.value = taskName;
        addBtn.classList.add('hideBtn');
        reEditBtn.classList.toggle('hideBtn');


        reEditBtn.onclick = function () {
            taskName = taskItem.value;
            taskData2.textContent = taskName;
            taskItem.style.color = 'black';
            taskItem.value = "";
            addBtn.classList.toggle('hideBtn');
            reEditBtn.classList.toggle('hideBtn');
        }
    }

    function removeTask() {
        // listItems.forEach(el => itemInfo(el));
        // function itemInfo(el){
        //     if(el.taskNo == taskNo){
        //         //Got Index of listItems;
        //         var index = listItems.indexOf(el);
        //         listItems.splice(index,1);
        //         // let newList = [...listItems];
        //         // newList.forEach(task => showTask(task));
        //     }
        // }
        taskNo = listItems.length + 1;
        taskBox.removeChild(taskRow);
        // console.log('hellow');
    }

    taskData1.textContent = taskNo;
    taskData2.textContent = taskName;
    let button1 = document.createElement('button');
    button1.classList.add('btnstyle1');
    button1.textContent = 'Edit';
    button1.addEventListener('click', editTask);

    let button2 = document.createElement('button');
    button2.classList.add('btnstyle2');
    button2.textContent = 'Delete';
    button2.addEventListener('click', removeTask);


    taskData3.appendChild(button1);
    taskData3.appendChild(button2);


    taskRow.appendChild(taskData1);
    taskRow.appendChild(taskData2);
    taskRow.appendChild(taskData3);
    taskBox.appendChild(taskRow);
}




listItems.forEach(item => showTask(item));


// For adding the task
function addTask() {
    let taskItem = document.getElementById("taskItem");
    let taskNumber = listItems.length + 1;
    let newItem = {
        taskNo: taskNumber,
        taskName: taskItem.value
    };
    showTask(newItem);
    listItems.push(newItem);
    taskItem.value = "";
}



addBtn.addEventListener('click', addTask)