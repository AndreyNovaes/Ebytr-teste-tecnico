const {
  getAllModel,
  getByIdModel,
  createOneModel,
  deleteByIdModel,
  updateStatusByIdModel,
  updateByIdModel,
} = require('./Tasks.model');

const getAllService = async () => {
  const tasks = await getAllModel();
  return tasks;
};

const getByIdService = async (id) => {
  const task = await getByIdModel(id);
  return task;
};

const createOneService = async (name, description) => {
  const baseStatus = 'pending';
  const newTaskCreated = await createOneModel({ name, description, baseStatus });
  return {
    id: newTaskCreated.insertId,
    ...newTaskCreated.dataValues,
  };
};

const deleteByIdService = async (id) => {
  const task = await deleteByIdModel(id);
  return task;
};

const updateStatusByIdService = async (id, status) => {
  const task = await updateStatusByIdModel(id, status);
  return task;
};

const updateByIdService = async (id, name, description) => {
  const task = await updateByIdModel(id, name, description);
  return task;
};

module.exports = {
  getAllService,
  getByIdService,
  createOneService,
  deleteByIdService,
  updateStatusByIdService,
  updateByIdService,
};
