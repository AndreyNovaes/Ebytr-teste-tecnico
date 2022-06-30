const mockTasks = require('./mockTasks.json');

const mocks = {
  findAll: async () => mockTasks,
  findByPk: async (id) => mockTasks.find((task) => task.id === id),
  create: async (body) => {
    const newTask = {
      id: 4, name: body.name, description: body.description, status: 'pending', created_at: new Date(), updated_at: new Date(),
    };
    mockTasks.push(newTask);
    return mockTasks;
  },
  destroy: async (id) => { mockTasks.splice(mockTasks.findIndex((task) => task.id === id), 1); },
  update: async (id, body) => {
    mockTasks[mockTasks.findIndex((task) => task.id === id)] = body;
    return mockTasks;
  },
  updateStatusById: async (id, status) => {
    mockTasks[mockTasks.findIndex((task) => task.id === id)].status = status;
    return mockTasks;
  },
};

console.log(this.updateStatusById(1, 'finished'));

module.exports = mocks;
