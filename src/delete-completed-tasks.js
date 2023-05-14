const deleteAllCompleted = (task) => {
  const filteredArray = task.filter((element) => element.completed !== true);
  task.splice(0, task.length, ...filteredArray);
};

export default deleteAllCompleted;