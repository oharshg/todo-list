if(!localStorage.getItem('mydata')){
    const todoList = [];
}

const todoList = JSON.parse(localStorage.getItem('mydata'));
renderTodoList();

function addTodo() {
    const todoInput = document.querySelector('.js-todo-input');
    const todoDate = document.querySelector('.js-todo-date');
    if(todoInput.value != ''){
        todoList.push({ task: todoInput.value, date: todoDate.value });
        todoInput.value = '';
        localStorage.setItem('mydata', JSON.stringify(todoList));
        renderTodoList();
    }
}

function renderTodoList() {
    const todoOutput = document.querySelector('.js-todo-output');
    let renderBuffer = '';
    for (let i = 0; i < todoList.length; i++) {
        renderBuffer +=
            `<p class="todo-task-output">${todoList[i].task}</p><p>${todoList[i].date}</p class="todo-date-output"><button class="js-todo-delete todo-delete" onclick="
            todoList.splice(${i},1)
            renderTodoList();">Delete</button>
        `
    }
    localStorage.setItem('mydata', JSON.stringify(todoList));
    todoOutput.innerHTML = renderBuffer;
}