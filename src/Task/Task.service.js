const tasksModel = require('./Task.Model');

const getAll = async () => {
  const tasks = await tasksModel.findAll();
  return tasks;
};

module.export = {
  getAll,
};
