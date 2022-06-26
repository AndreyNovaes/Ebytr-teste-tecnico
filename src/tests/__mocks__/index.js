const tasks = require('./tasks.json');

const taskMocks = {
  findAll: async () => tasks,
  findByPk: async (id) => tasks.find((task) => task.id === id),
  create: async (body) => { return { id: '1', ...body }; }
};

module.exports = {
  taskMocks,
};
