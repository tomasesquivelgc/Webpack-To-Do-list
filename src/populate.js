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

function populate() {
  const list = document.getElementById('list');
  const listTitle = document.createElement('li');
  listTitle.innerHTML = "Today's To Do";
  const addChore = document.createElement('li');
  addChore.innerHTML = "<input type='text' placeholder='Add to your list...'></input>";
  addChore.classList.add('addChore');
  list.appendChild(listTitle);
  list.appendChild(addChore);

  array.sort((a, b) => a.index - b.index);
  for (let i = 0; i < array.length; i += 1) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.appendChild(checkbox);
    newLi.innerHTML += array[i].description;
    list.appendChild(newLi);
  }
}

export default populate;