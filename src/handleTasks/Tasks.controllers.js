const { StatusCodes: { OK, CREATED } } = require('http-status-codes');
const tasksService = require('./Tasks.service');

const getAll = async (req, res) => {
  try {
    const tasks = await tasksService.getAll();
    res.status(OK).json(tasks);
  } catch (error) {
    console.warn(error);
    res.status(500).json({ controllerGetAll: error });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await tasksService.getById(id);
    res.status(OK).json(task);
  } catch (error) {
    console.warn(error);
    res.status(500).json({ controllerGetById: error });
  }
};

const createOne = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newTaskCreated = await tasksService.createOne(name, description);
    res.status(CREATED).json(newTaskCreated);
  } catch (error) {
    console.warn(error);
    res.status(500).json({ controllerCreateOne: error });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await tasksService.deleteById(id);
    res.status(OK).json({ message: `task ${id} deleted` });
  } catch (error) {
    console.warn(error);
    res.status(500).json({ controllerDeleteById: error });
  }
};

const updateStatusById = async (req, res) => {
  try {
    const status = req.url.split('/').pop();
    const { id } = req.params;
    await tasksService.updateStatusById(id, status);
    res.status(OK).json({ message: `task ${id} updated to ${status}` });
  } catch (error) {
    console.warn(error);
    res.status(500).json({ controllerUpdateStatusById: error });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    await tasksService.updateById(id, name, description);
    res.status(OK).json({ message: `task ${id} updated` });
  } catch (error) {
    console.warn(error);
    res.status(500).json({ controllerUpdateById: error });
  }
};

module.exports = {
  getAll,
  getById,
  createOne,
  deleteById,
  updateStatusById,
  updateById,
};
