const tasksModel = require('./Tasks.model');

const getAll = async () => {
  const tasks = await tasksModel.getAll();
  return tasks;
};

const getById = async (id) => {
  const task = await tasksModel.getById(id);
  return task;
};

const createOne = async (name, description) => {
  const newTaskCreated = await tasksModel.createOne(name, description);
  return newTaskCreated;
};

module.exports = {
  getAll,
  getById,
  createOne,
};
