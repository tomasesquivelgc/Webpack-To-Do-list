import './style.css';
import TaskList from './populate.js';
import Task from './Task';

const newChore = document.querySelector('.addChore');
const newList = new TaskList();
newList.render();

newChore.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const description = newChore.value.trim();
    if (description !== '') {
      const task = new Task(description, false, newList.length);
      newList.addTask(task);
      newChore.value = '';
    }
  }
});





