const { StatusCodes: { OK, CREATED } } = require('http-status-codes');
const {
  getAllService,
  getByIdService,
  createOneService,
  deleteByIdService,
  updateStatusByIdService,
  updateByIdService,
} = require('./Tasks.service');

const getAll = async (req, res) => {
  const tasks = await getAllService();
  res.status(OK).json(tasks);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const task = await getByIdService(id);
  res.status(OK).json(task);
};

const createOne = async (req, res) => {
  const { name, description } = req.body;
  const newTaskCreated = await createOneService(name, description);
  res.status(CREATED).json(newTaskCreated);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await deleteByIdService(id);
  res.status(200).json({ message: `task ${id} deleted` });
};

const updateStatusById = async (req, res) => {
  const status = req.url.split('/').pop();
  const { id } = req.params;
  await updateStatusByIdService(id, status);
  res.status(OK).json({ message: `task ${id} updated to ${status}` });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await updateByIdService(id, name, description);
  res.status(OK).json({ message: `task ${id} updated` });
};

module.exports = {
  getAll,
  getById,
  createOne,
  deleteById,
  updateStatusById,
  updateById,
};
