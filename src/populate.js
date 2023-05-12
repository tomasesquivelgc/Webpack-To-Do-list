import drag_icon from './images/drag_icon.svg';
import deleteIcon from './images/delete.svg';
const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
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
      const description = document.createTextNode(this[i].description);
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
        console.log('removed');
      });
    }
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  removeTask(index) {
    this.splice(index, 1);
    this.render();
  }
}

export default TaskList;