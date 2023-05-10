//import _ from 'lodash';
import './style.css';

const array = [
  {
    description: 'hello',
    completed: false,
    index: 0,
  },
  {
    description: 'world',
    completed: false,
    index: 1,
  },
  {
    description: 'lorem',
    completed: false,
    index: 2,
  },
];

function populate() {
  const list = document.getElementById('list');
  const listTitle = document.createElement('h2');
  listTitle.innerHTML = "Today's To-Do";
  const addChore = document.createElement('form');
  addChore.innerHTML = "<input type='text' placeholder='Add to your list'></input>";
  list.appendChild(listTitle);
  list.appendChild(addChore);
  array.sort((a, b) => a.index - b.index);
  for (let i = 0; i < array.length; i += 1) {
    const newLi = document.createElement('li');
    newLi.innerHTML = array[i].description;
    list.appendChild(newLi);
  }
}

document.body.appendChild(populate());