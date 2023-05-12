import drag_icon from './images/drag_icon.svg';
import deleteIcon from './images/delete.svg';
const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
    this.loadTasksFromLocalStorage();
  }

  render() {
    this.sort((a, b) => a.index - b.index);
    list.innerHTML = '';
    for (let i = 0; i < this.length; i += 1) {
      //create li element
      const newLi = document.createElement('li');
      //create neccesary items
      const checkboxDescriptionDiv = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const description = document.createElement('input');
      description.type = 'text';
      description.value = this[i].description;
      description.classList.add('taskDescription');
      const drag_iconImg = new Image();
      drag_iconImg.src = drag_icon;
      const deleteIconImg = new Image();
      deleteIconImg.src = deleteIcon;
      deleteIconImg.classList.add('deleteBtnn');
      deleteIconImg.setAttribute('data-id', i);
      checkboxDescriptionDiv.appendChild(checkbox);
      checkboxDescriptionDiv.appendChild(description);
      //append the items to the li and provide functionality
      newLi.appendChild(checkboxDescriptionDiv);
      newLi.appendChild(deleteIconImg);
      newLi.appendChild(drag_iconImg);
      list.appendChild(newLi);

      deleteIconImg.addEventListener('click', () => {
        this.removeTask(i);
      });

      description.addEventListener('change', (event) => {
        const newDescription = event.target.value;
        this[i].description = newDescription;
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
    const task = this[position]; 
    console.log(task.index);
    this.splice(position, 1);
    for (let i=0; i<this.length; i++){
      this[i].index = i+1;
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
}

export default TaskList;