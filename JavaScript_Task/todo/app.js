// // Get references to elements
const todoInput = document.getElementById('todoInput');
const addTaskButton = document.getElementById('addTaskButton');
const todoList = document.getElementById('todoList');

// Function to create a new to-do item
function createTodoItem(taskContent) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const span = document.createElement('span');
    span.textContent = taskContent;
    li.appendChild(span);

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    li.appendChild(editBtn);

    // Add event listener to delete button
    deleteBtn.addEventListener('click', function () {
        li.remove(); // Remove the task from the list
    });

    // Add event listener to edit button
    editBtn.addEventListener('click', function () {
        event.stopPropagation();
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    });

    // Add event listener to mark task as completed
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Append the new list item to the list
    todoList.appendChild(li);
}

// Add task to list when button is clicked
addTaskButton.addEventListener('click', function () {
    const taskContent = todoInput.value.trim();

    if (taskContent !== '') {
        createTodoItem(taskContent);
        todoInput.value = '';  // Clear the input field
    }
});

// Optional: Allow Enter key to add task
todoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});


