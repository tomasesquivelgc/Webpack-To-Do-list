import _ from 'lodash';
import './style.css';

let array = [
  {
    description: "hello",
    completed: false,
    index: 0
  },
  {
    description: "world",
    completed: false,
    index: 1
  },
  {
    description: "lorem",
    completed: false,
    index: 2
  },
];

function populate() {
  const list = document.getElementById('list');
  array.sort((a, b) => a.index - b.index);
  const listTitle = document.createElement('h2');
  listTitle.innerHTML = "Today's To-Do";
  list.appendChild(listTitle);
  for (let i=0; i<array.length; i+=1){
    const newLi = document.createElement('li');
    newLi.innerHTML = array[i].description;
    list.appendChild(newLi);
  }
}

document.body.appendChild(populate());