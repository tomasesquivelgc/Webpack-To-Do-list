import icon from './drag_icon.svg';
const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
  }

  render() {
    this.sort((a, b) => a.index - b.index);
    list.innerHTML = '';
    for (let i = 0; i < this.length; i += 1) {
      const newLi = document.createElement('li');
      const checkboxDescriptionDiv = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const description = document.createTextNode(this[i].description);
      const iconImg = new Image();
      iconImg.src = icon;
      checkboxDescriptionDiv.appendChild(checkbox);
      checkboxDescriptionDiv.appendChild(description);
      newLi.appendChild(checkboxDescriptionDiv);
      newLi.appendChild(iconImg);
      list.appendChild(newLi);
    }
  }

  addTask(task) {
    this.push(task);
  }
}

export default TaskList;