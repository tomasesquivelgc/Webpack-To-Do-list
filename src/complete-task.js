let toggleCompleted = (index)  => {
  const taskToComplete = this[index];
  task.completed = !taskToComplete.completed;
  console.log(index);
}

export default toggleCompleted;