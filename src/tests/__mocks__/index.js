const tasks = require('./tasks.json');

const mockCreate = (tasks, data) => {
  const { name, description } = data;
  const newTask = {
    id: tasks.length + 1,
    name,
    description,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  tasks.push(newTask);
  return newTask;
};

const task = {
  create: async (data) => mockCreate(tasks, data),
  findAll: async () => tasks,
  findByPk: async (id) => tasks.find((task) => task.id === id),
};

module.exports = {
  task,
};
