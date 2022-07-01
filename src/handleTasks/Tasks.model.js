const { Tasks } = require('../database/models');

const getAllModel = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
};

const getByIdModel = async (id) => {
  const task = await Tasks.findByPk(id);
  return task;
};

const createOneModel = async (name, description) => {
  const newTaskCreated = await Tasks.create({ name, description, status: 'pending' });
  return {
    id: newTaskCreated.insertId,
    ...newTaskCreated.dataValues,
  };
};

const deleteByIdModel = async (id) => {
  const task = await Tasks.destroy({ where: { id } });
  return task;
};

const updateStatusByIdModel = async (id, status) => {
  const task = await Tasks.update({ status }, { where: { id } });
  return task;
};

const updateByIdModel = async (id, name, description) => {
  const task = await Tasks.update({ name, description }, { where: { id } });
  return task;
};

module.exports = {
  getAllModel,
  getByIdModel,
  createOneModel,
  deleteByIdModel,
  updateStatusByIdModel,
  updateByIdModel,
};
