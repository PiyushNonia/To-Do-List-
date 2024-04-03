const input = document.querySelector('#task-input');
const button = document.querySelector('#add-task');
const list = document.querySelector('#task-list');

button.addEventListener('click', () => {
    const task = input.value;
    const listItem = document.createElement('li');
    listItem.textContent = task;
    list.appendChild(listItem);
    input.value = '';
});