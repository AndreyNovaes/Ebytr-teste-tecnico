const mockTasks = require('./mockTasks.json');

const mocks = {
  findAll: async () => mockTasks,
  findByPk: async (id) => mockTasks.find((task) => task.id === id),
  create: async (name, description) => {
    const insertedId = String(mockTasks.length + 1);
    const status = 'pending';
    const createdAt = new Date();
    const updatedAt = new Date();
    const dataValues = {
      id: insertedId, name, description, status, createdAt, updatedAt,
    };
    const response = { insertId: insertedId, dataValues };
    mockTasks.push(dataValues);
    return response;
  },
  destroy: async (id) => {
    mockTasks.splice(mockTasks.findIndex((task) => task.id === id), 1);
    return { message: `task ${id} deleted` };
  },
  update: async (id, name, description) => {
    const taskSelected = mockTasks.find((task) => task.id === id);
    taskSelected.name = name;
    taskSelected.description = description;
    taskSelected.updatedAt = new Date();
    return { message: `task ${id} updated` };
  },
  updateStatusById: async (id, status) => {
    const taskSelected = mockTasks.findIndex((task) => task.id === id);
    mockTasks[taskSelected].status = status;
    return { message: `task ${id} updated to ${status}` };
  },
};

module.exports = mocks;
