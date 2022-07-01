const { StatusCodes: { OK, CREATED, NOT_FOUND } } = require('http-status-codes');
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
  return res.status(OK).json({
    success: true,
    code: OK,
    response: tasks,
  });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const task = await getByIdService(id);
  if (!task) {
    return res.status(NOT_FOUND).json({
      success: false,
      code: NOT_FOUND,
      message: `Task with id ${id} not found`,
    });
  }
  return res.status(OK).json({ success: true, code: OK, response: task });
};

const createOne = async (req, res) => {
  const { name, description } = req.body;
  const newTaskCreated = await createOneService(name, description);
  return res.status(CREATED).json({
    success: true,
    code: CREATED,
    response: newTaskCreated,
  });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const isTaskFindAndDeleted = await deleteByIdService(id);
  if (!isTaskFindAndDeleted) {
    return res.status(NOT_FOUND).json({ success: false, code: NOT_FOUND, message: 'task not found' });
  }
  return res.status(OK).json({ success: true, code: OK, message: `task ${id} deleted` });
};

const updateStatusById = async (req, res) => {
  const status = req.url.split('/').pop();
  const { id } = req.params;
  const isUpdateSucessfully = await updateStatusByIdService(id, status);
  if (!isUpdateSucessfully) {
    return res.status(NOT_FOUND).json({
      success: false,
      code: NOT_FOUND,
      message: `Task with id ${id} not found`,
    });
  }
  return res.status(OK).json({ message: `task ${id} updated to status ${status}` });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const isUpdateSucessfully = await updateByIdService(id, name, description);
  if (!isUpdateSucessfully) {
    return res.status(NOT_FOUND).json({
      success: false,
      code: NOT_FOUND,
      message: `Task with id ${id} not found`,
    });
  }
  return res.status(OK).json({ message: `task ${id} updated` });
};

module.exports = {
  getAll,
  getById,
  createOne,
  deleteById,
  updateStatusById,
  updateById,
};
