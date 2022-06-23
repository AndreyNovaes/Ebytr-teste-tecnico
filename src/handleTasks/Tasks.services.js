const tasksModel = require('./Tasks.models');

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

const deleteById = async (id) => {
  const task = await tasksModel.deleteById(id);
  return task;
};

const updateStatusById = async (id, status) => {
  const task = await tasksModel.updateStatusById(id, status);
  return task;
};

const updateById = async (id, name, description) => {
  const task = await tasksModel.updateById(id, name, description);
  return task;
};

module.exports = {
  getAll,
  getById,
  createOne,
  deleteById,
  updateStatusById,
  updateById,
};
