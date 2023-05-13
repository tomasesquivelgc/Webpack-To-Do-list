import './style.css';
import TaskList from './populate.js';
import Task from './Task.js';

const newChore = document.querySelector('.addChore');
const newList = new TaskList();
const deleteButonn = document.querySelector('.clearBtnn');
newList.render();

newChore.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const description = newChore.value.trim();
    //check if the description isn't an empty string
    if (description !== '') {
      const task = new Task(description, false, newList.length + 1);
      newList.addTask(task);
      newChore.value = '';
    }
  }
});

deleteButonn.addEventListener('click', () => {
  newList.deleteCompletedTasks();
});