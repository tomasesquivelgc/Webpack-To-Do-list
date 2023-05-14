const deleteAllComplete = (task) => {
  const newArray = [];
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].completed === false) {
      newArray.push(task[i]);
    }
  }
  task.length = 0;
  task.push(...newArray);
};

export default deleteAllComplete;