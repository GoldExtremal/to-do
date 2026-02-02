const tasks = [];

function addTaskToList(text, done) {
    return {
        text: text,
        done: done,
    };
};

const taskInput = document.querySelector('#taskInput');

function addTask(taskInput, tasks) {
    if ((taskInput.value) && (taskInput.value !== ' ')) {
        tasks.push(addTaskToList(taskInput.value, false));
        render(tasks);
    }
}

taskInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") { 
        addTask(taskInput, tasks);
    }
});

const addBtn = document.querySelector('#addTask');
addBtn.addEventListener('click', () => {
    addTask(taskInput, tasks)
});

function renderTask(task) {
    const discDecorator = document.createElement('div');
    discDecorator.classList.add('discDecorator');

    const taskName = document.createElement('p');
    taskName.textContent = task.text;
    taskName.classList.add('taskName');
    if (task.done) {
        taskName.classList.add('done');
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Удалить'
    delBtn.classList.add('btn');
    delBtn.classList.add('delBtn');

    const taskElement = document.createElement('li');
    taskElement.classList.add('task')
    taskElement.append(discDecorator);
    taskElement.append(taskName);
    taskElement.append(delBtn);

    return taskElement;
}

function render(tasks) {
    taskListDOM.innerHTML = '';

    tasks.forEach( (task, index) => {
        const taskElement = renderTask(task);
        taskElement.index = index;
        taskListDOM.append(taskElement);
    });

    taskInput.value = '';
};

const taskListDOM = document.querySelector('#tasks');
taskListDOM.addEventListener('click', (event) => {
    const taskIndex = event.target.parentElement.index;
    if (event.target.tagName === 'BUTTON') {
        tasks.splice(taskIndex, 1);
        render(tasks);
    };

    if (event.target.tagName === 'P') {
        tasks[taskIndex].done = !(tasks[taskIndex].done);
        render(tasks);
    }
})