const mockTasks = require('./mockTasks.json');

const mocks = {
  findAll: async () => mockTasks,
  findByPk: async (id) => mockTasks.find((task) => task.id === id),
  create: async (name, description) => {
    const insertedId = mockTasks.length + 1;
    const status = 'pending';
    const createdAt = new Date();
    const updatedAt = new Date();
    const dataValues = {
      id: insertedId, name, description, status, createdAt, updatedAt,
    };
    const response = { insertId: insertedId, dataValues };
    return response;
  },
  destroy: async (id) => { mockTasks.splice(mockTasks.findIndex((task) => task.id === id), 1); },
  // update: async (id, body) => {
  //   mockTasks[mockTasks.findIndex((task) => task.id === id)] = body;
  //   return mockTasks;
  // },
  // updateStatusById: async (id, status) => {
  //   mockTasks[mockTasks.findIndex((task) => task.id === id)].status = status;
  //   return mockTasks;
  // },
};

module.exports = mocks;
