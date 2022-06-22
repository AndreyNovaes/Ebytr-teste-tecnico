const { StatusCodes: { OK, CREATED } } = require('http-status-codes');
const tasksService = require('./Tasks.services');

const getAll = async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(OK).json(tasks);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.getById(id);
  res.status(OK).json(task);
};

const createOne = async (req, res) => {
  const { name, description } = req.body;
  const newTaskCreated = await tasksService.createOne(name, description);
  res.status(CREATED).json(newTaskCreated);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.deleteById(id);
  res.status(OK).json(task);
};

const updateStatusById = async (req, res) => {
  const status = req.url.split('/').pop();
  const { id } = req.params;
  const task = await tasksService.updateStatusById(id, status);
  res.status(OK).json(task);
};

module.exports = {
  getAll,
  getById,
  createOne,
  deleteById,
  updateStatusById,
};
