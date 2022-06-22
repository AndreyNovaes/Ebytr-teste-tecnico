const { StatusCodes: { OK } } = require('http-status-codes');
const tasksService = require('./Tasks.service');

const getAll = async (req, res) => {
  console.log('chegou aqui');
  const tasks = await tasksService.getAll();
  res.status(OK).json(tasks);
};

module.exports = {
  getAll,
};
