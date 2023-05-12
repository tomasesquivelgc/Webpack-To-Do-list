// import _ from 'lodash';
import './style.css';
import TaskList from './populate.js';

const newChore = document.querySelector('addChore');

const newList = new TaskList;
newList.render();

newChore.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const description = newChore.value.trim();
    if (description !== '') {
      const task = {
        description,
        completed: false,
        index: newList.length,
      };
      newList.addTask(task);
      newList.render();
      newChore.value = '';
    }
  }
});