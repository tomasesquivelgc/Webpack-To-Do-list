import icon from './drag_icon.svg';
import refresh from './refresh_icon.svg';
function populate() {
  const array = [
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
    },
  ];

  const list = document.getElementById('list');
  const listTitle = document.createElement('li');
  const refreshIcon = new Image();
  refreshIcon.src = refresh;
  listTitle.innerHTML = "Today's To Do";
  listTitle.appendChild(refreshIcon);
  const addChore = document.createElement('li');
  addChore.innerHTML = "<input type='text' placeholder='Add to your list...'></input>";
  addChore.classList.add('addChore');
  list.appendChild(listTitle);
  list.appendChild(addChore);

  array.sort((a, b) => a.index - b.index);
  for (let i = 0; i < array.length; i += 1) {
    const newLi = document.createElement('li');
    const checkboxDescriptionDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const description = document.createTextNode(array[i].description);
    const iconImg = new Image();
    iconImg.src = icon;
    checkboxDescriptionDiv.appendChild(checkbox);
    checkboxDescriptionDiv.appendChild(description);
    newLi.appendChild(checkboxDescriptionDiv);
    newLi.appendChild(iconImg);
    list.appendChild(newLi);
  }

  const clearBtnn = document.createElement('li');
  clearBtnn.innerHTML = '<a href="#">Clear all completed tasks</a>';
  clearBtnn.classList.add("clearBtnn");
  list.appendChild(clearBtnn);
}

export default populate;