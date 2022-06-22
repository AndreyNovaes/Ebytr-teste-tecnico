const tasksModel = require('./Tasks.model');

const getAll = async () => {
  const tasks = await tasksModel.getAll();
  return tasks;
};

const getById = async (id) => {
  const task = await tasksModel.getById(id);
  return task;
};

module.exports = {
  getAll,
  getById,
};
