const tasks = require('./tasks.json');

const mockCreate = (Instance, data) => {
  if (!data) {
    return;
  }

  const newData = data;
  if (!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const User = {
  create: async (data) => mockCreate(tasks, data),
  findAll: async () => tasks,
  findOne: async (id) => tasks.find((task) => task.id === id)
};

module.exports = {
  User,
};
