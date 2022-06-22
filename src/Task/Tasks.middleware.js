const { Tasks } = require('../database/models');

const updateStatusValidation = (req, res, next) => {
  const status = req.url.split('/').pop();
  const { id } = req.params;
  const task = Tasks.findByPk(id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  } if (task.status === status) {
    return res.status(400).json({ message: 'Task already in this status' });
  } if (!['pending', 'ongoing', 'finished'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }
  return next();
};

module.exports = updateStatusValidation;
