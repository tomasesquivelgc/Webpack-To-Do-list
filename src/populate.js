import { toggleCompleted, deleteAllComplete } from './task-helpers.js';
import createListItem from './create-list-item.js';

const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
    this.loadTasksFromLocalStorage();
  }

  render() {
    list.innerHTML = '';
    this.sort((a, b) => a.index - b.index);

    this.forEach((task, i) => {
      const newLi = createListItem(task, i);
      list.appendChild(newLi);
    });

    this.saveTasksToLocalStorage();
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  removeTask(position) {
    this.splice(position, 1);
    this.forEach((task, i) => {
      task.index = i + 1;
    });
    this.render();
  }

  loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach((task) => {
        this.push(task);
      });
      this.render();
    }
  }

  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this));
  }

  toggleCompleted(index) {
    const task = this[index];
    toggleCompleted(task);
    this.saveTasksToLocalStorage();
  }

  deleteCompletedTasks() {
    deleteAllComplete(this);
    this.render();
  }
}

export default TaskList;