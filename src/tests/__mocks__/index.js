const mockTasks = require('./mockTasks.json');

const mocks = {
  findAll: async () => {
    return {
      success: true,
      code: 200,
      response: mockTasks,
    }
  },
  findByPk: async (id) => {
    const taskNeeded = mockTasks.find((task) => task.id === id)
    const res = {
      response: taskNeeded,
  }
  return res;
  },
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
    return {
      response,
    }
  },
  destroy: async (id) => {
    mockTasks.splice(mockTasks.findIndex((task) => task.id === id), 1);
    return {
      success: true,
      code: 200,
      message: `task ${id} deleted` 
    };
  },
  update: async (id, name, description) => {
    const taskSelected = mockTasks.find((task) => task.id === id);
    taskSelected.name = name;
    taskSelected.description = description;
    taskSelected.updatedAt = new Date();
    return { 
      success: true,
      code: 200,
      message: `task ${id} updated` 
    };
  },
  updateStatusById: async (id, status) => {
    const taskSelected = mockTasks.findIndex((task) => task.id === id);
    mockTasks[taskSelected].status = status;
    return { 
      success: true,
      code: 200,
      message: `task ${id} updated to ${status}` 
    };
  },
};

module.exports = mocks;
