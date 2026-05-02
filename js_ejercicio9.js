const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const clearCompletedButton = document.getElementById('clear-completed-button');
const taskList = document.getElementById('task-list');

function getTasks() {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const tasks = getTasks();

    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const text = document.createElement('span');

        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        text.textContent = task.text;

        if (task.completed) {
            listItem.classList.add('task-completed');
        }

        checkbox.addEventListener('change', () => {
            const updatedTasks = getTasks();
            updatedTasks[index].completed = checkbox.checked;
            saveTasks(updatedTasks);
            renderTasks();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(text);
        taskList.appendChild(listItem);
    });
}

addTaskButton.addEventListener('click', () => {
    const text = taskInput.value.trim();

    if (text === '') {
        return;
    }

    const tasks = getTasks();
    tasks.push({ text, completed: false });
    saveTasks(tasks);
    taskInput.value = '';
    renderTasks();
});

clearCompletedButton.addEventListener('click', () => {
    const tasks = getTasks().filter((task) => !task.completed);
    saveTasks(tasks);
    renderTasks();
});

renderTasks();