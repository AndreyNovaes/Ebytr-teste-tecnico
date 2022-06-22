const { StatusCodes: { OK } } = require('http-status-codes');
const tasksService = require('./Tasks.service');

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
  res.status(OK).json(newTaskCreated);
};

module.exports = {
  getAll,
  getById,
  createOne,
};
