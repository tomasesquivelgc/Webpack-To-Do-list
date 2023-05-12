import icon from './drag_icon.svg';

class TaskList extends Array {
  constructor() {
    super();
    this.push(
      {
        description: 'Do the dishes',
        completed: false,
        index: 0,
      },
      {
        description: 'Do the laundry',
        completed: false,
        index: 1,
      },
      {
        description: 'Walk the dog',
        completed: false,
        index: 2,
      }
    );
  }

  render() {
    this.sort((a, b) => a.index - b.index);
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