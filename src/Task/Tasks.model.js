const { Tasks } = require('../database/models');

const getAll = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
};

const getById = async (id) => {
  const task = await Tasks.findByPk(id);
  return task;
};

module.exports = {
  getAll,
  getById,
};
