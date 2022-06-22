const { Router } = require('express');
const tasksController = require('./Tasks.controller');

const router = Router();

router
  .get('/', tasksController.getAll)
  .get('/:id', tasksController.getById)
  .post('/', tasksController.createOne)
  .delete('/:id', tasksController.deleteById);

module.exports = router;
