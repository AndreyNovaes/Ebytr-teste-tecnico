const { Tasks } = require('../database/models');

const getAll = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
};

const getById = async (id) => {
  const task = await Tasks.findByPk(id);
  return task;
};

const createOne = async (name, description) => {
  const newTaskCreated = await Tasks.create({ name, description, status: 'pending' });
  return {
    id: newTaskCreated.insertId,
    ...newTaskCreated.dataValues,
  };
};

const deleteById = async (id) => {
  const task = await Tasks.destroy({ where: { id } });
  return task;
};

module.exports = {
  getAll,
  getById,
  createOne,
  deleteById,
};
