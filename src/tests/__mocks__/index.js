const mockTasks = require('./mockTasks.json');

const mocks = {
  findAll: async () => mockTasks,
  findByPk: async (id) => mockTasks.find((task) => task.id === id),
};

module.exports = mocks;