import { dragIcon, deleteIcon } from './icons.js';
import { toggleCompleted } from './task-helpers.js';

function createListItem(task, i) {
  const newLi = document.createElement('li');
  const dragIconImg = new Image();
  const deleteIconImg = new Image();

  dragIconImg.src = dragIcon;
  deleteIconImg.src = deleteIcon;
  deleteIconImg.classList.add('deleteBtnn');
  deleteIconImg.setAttribute('data-id', i);

  newLi.appendChild(checkboxDescriptionDiv);
  newLi.appendChild(deleteIconImg);
  newLi.appendChild(dragIconImg);

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

  return newLi;
}

export default createListItem;