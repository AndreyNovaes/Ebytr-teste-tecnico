const { StatusCodes: { OK } } = require('http-status-codes');
const tasksService = require('./Task.service');

const getAll = async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(OK).json(tasks);
};

module.exports = {
  getAll,
};
