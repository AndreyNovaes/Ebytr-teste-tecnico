const tasksModel = require('./Tasks.model');

const getAll = async () => {
  const tasks = await tasksModel.getAll();
  return tasks;
};

module.exports = {
  getAll,
};
