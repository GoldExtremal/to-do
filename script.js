const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addTask');
const tasks = document.querySelector('#tasks');

taskInput.addEventListener('keydown', (event) => {
    if ((event.key === "Enter") && ((taskInput.value) && (taskInput.value !== ' '))) {
        tasks.append(createTask(taskInput.value));
        taskInput.value = '';
    }
});

addBtn.addEventListener('click', () => {
    if ((taskInput.value) && (taskInput.value !== ' ')) {
        tasks.append(createTask(taskInput.value));
        taskInput.value = '';
    }
});

tasks.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
})

tasks.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentNode.remove();
    }
})

function createTask(text) {
    const task = document.createElement('div');
    const taskName = document.createElement('li');
    const delBtn = document.createElement('button');

    task.className = 'task';
    taskName.className = 'taskName';
    delBtn.className = 'delBtn';

    taskName.textContent = `${text}`;
    delBtn.textContent = 'Удалить'

    task.append(taskName);
    task.append(delBtn);

    return task;
}