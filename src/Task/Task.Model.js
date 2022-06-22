const { Tasks } = require('../database/models');

const getAll = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
};

module.exports = {
  getAll,
};
