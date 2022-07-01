const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');

const idParamsValidation = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(BAD_REQUEST).json({ message: 'id is required' });
  }
  return next();
};

const statusParamsValidation = async (req, res, next) => {
  const { status } = req.params;
  if (!status) {
    return res.status(BAD_REQUEST).json({ message: 'status is required' });
  }
  if (!['pending', 'ongoing', 'finished'].includes(status)) {
    return res.status(BAD_REQUEST).json({ message: 'invalid status' });
  }
  return next();
};

const nameDescriptionBodyValidation = async (req, res, next) => {
  const { name, description } = req.body;
  if (!name && !description) {
    return res.status(BAD_REQUEST).json({ message: 'name and description are required' });
  }
  return next();
};

const nameBodyValidation = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(BAD_REQUEST).json({ message: 'name is required' });
  }
  return next();
};

const descriptionBodyValidation = async (req, res, next) => {
  const { description } = req.body;
  if (!description) {
    return res.status(BAD_REQUEST).json({ message: 'description is required' });
  }
  return next();
};

module.exports = {
  idParamsValidation,
  statusParamsValidation,
  nameDescriptionBodyValidation,
  nameBodyValidation,
  descriptionBodyValidation,
};
