const { StatusCodes: { NOT_FOUND, BAD_REQUEST } } = require('http-status-codes');
const { Tasks } = require('../database/models');

const getByIdValidation = async (req, res, next) => {
  const { id } = req.params;
  const task = await Tasks.findByPk(id);
  if (!task) {
    res.status(NOT_FOUND).json({ message: `task with id:${id} not found` });
  } else {
    next();
  }
};

const updateStatusValidation = async (req, res, next) => {
  const status = req.url.split('/').pop();
  const { id } = req.params;
  const task = await Tasks.findByPk(id);
  if (!task) {
    return res.status(NOT_FOUND).json({ message: 'task not found' });
  } if (!['pending', 'ongoing', 'finished'].includes(status)) {
    return res.status(BAD_REQUEST).json({ message: 'invalid status' });
  }
  return next();
};

const updateValidation = async (req, res, next) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const task = await Tasks.findByPk(id);
  if (!task) {
    return res.status(NOT_FOUND).json({ message: 'task not found' });
  } if (!name && !description) {
    return res.status(BAD_REQUEST).json({ message: 'name and description are required' });
  } if (!name) {
    return res.status(BAD_REQUEST).json({ message: 'name is required' });
  } if (!description) {
    return res.status(BAD_REQUEST).json({ message: 'description is required' });
  }
  return next();
};

const createOneValidation = async (req, res, next) => {
  const { name, description } = req.body;
  if (!name && !description) {
    return res.status(BAD_REQUEST).json({ message: 'name and description are required' });
  } if (!name) {
    return res.status(BAD_REQUEST).json({ message: 'name is required' });
  } if (!description) {
    return res.status(BAD_REQUEST).json({ message: 'description is required' });
  }
  return next();
};

// const errorMiddleware = (err, _req, res, next) => {
//   if (err instanceof Error) {
//     const { httpStatus, message } = err;

//     return res.status(httpStatus).json({ message });
//   }
//   return res.status(500).json({ error: { message: err.message } });
// };

module.exports = {
  updateValidation,
  updateStatusValidation,
  createOneValidation,
  getByIdValidation,
  // errorMiddleware,
};
