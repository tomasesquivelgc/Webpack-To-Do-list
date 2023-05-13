import dragIcon from './images/drag_icon.svg';
import deleteIcon from './images/delete.svg';
import toggleCompleted from './complete-task.js';
import deleteCompletedTasks from './delete-completed-tasks.js'

const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
    this.loadTasksFromLocalStorage();
  }

  render() {
    list.innerHTML = '';
    this.sort((a, b) => a.index - b.index);
    for (let i = 0; i < this.length; i += 1) {
      // create li element
      const newLi = document.createElement('li');
      // create neccesary items
        //checkbox
      const checkboxDescriptionDiv = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('change');
      if(this[i].completed === true){
        checkbox.checked = true;
      };
        //task description
      const description = document.createElement('input');
      description.type = 'text';
      description.value = this[i].description;
      description.classList.add('taskDescription');
        //images
      const dragIconImg = new Image();
      dragIconImg.src = dragIcon;
      const deleteIconImg = new Image();
      deleteIconImg.src = deleteIcon;
      deleteIconImg.classList.add('deleteBtnn');
      deleteIconImg.setAttribute('data-id', i);
        //checkboxDescription attach
      checkboxDescriptionDiv.appendChild(checkbox);
      checkboxDescriptionDiv.appendChild(description);
      checkboxDescriptionDiv.classList.add('checkboxDescription')
      // append the items to the li and provide functionality
      newLi.appendChild(checkboxDescriptionDiv);
      newLi.appendChild(deleteIconImg);
      newLi.appendChild(dragIconImg);
      list.appendChild(newLi);

      deleteIconImg.addEventListener('click', () => {
        this.removeTask(i);
      });

      description.addEventListener('change', (event) => {
        const newDescription = event.target.value;
        this[i].description = newDescription;
        this.saveTasksToLocalStorage();
      });

      checkbox.addEventListener('change', () => { 
        this.toggleCompleted(i);
        this.saveTasksToLocalStorage();
      });
    }
    this.saveTasksToLocalStorage();
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  removeTask(position) {
    this.splice(position, 1);
    for (let i = 0; i < this.length; i += 1) {
      this[i].index = i + 1;
    }
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
    deleteCompletedTasks(this);
    this.saveTasksToLocalStorage();
    this.render();
  }
}

export default TaskList;