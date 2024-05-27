document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const taskItem = createTaskItem(taskText);
        pendingTasks.appendChild(taskItem);
        taskInput.value = '';
    }

    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const taskDate = document.createElement('span');
        taskDate.className = 'task-date';
        taskDate.textContent = ` (Created: ${new Date().toLocaleString()})`;

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => completeTask(li));

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(li, taskContent));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(li));

        taskActions.appendChild(completeButton);
        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);

        li.appendChild(taskContent);
        li.appendChild(taskDate);
        li.appendChild(taskActions);

        return li;
    }

    function completeTask(taskItem) {
        const taskDate = taskItem.querySelector('.task-date');
        taskDate.textContent += ` (Completed: ${new Date().toLocaleString()})`;
        taskItem.classList.add('completed');
        completedTasks.appendChild(taskItem);
    }

    function editTask(taskItem, taskContent) {
        const newTaskText = prompt('Edit your task:', taskContent.textContent);
        if (newTaskText !== null) {
            taskContent.textContent = newTaskText;
        }
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
