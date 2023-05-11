// import _ from 'lodash';
import './style.css';
import populate from './populate';
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


document.body.appendChild(populate());