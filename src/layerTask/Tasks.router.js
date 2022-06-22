const { Router } = require('express');
const tasksController = require('./Tasks.controllers');
const { updateStatusValidation, updateValidation } = require('./Tasks.middleware');

const router = Router();

router
  .get('/', tasksController.getAll)
  .get('/:id', tasksController.getById)
  .post('/', tasksController.createOne)
  .delete('/:id', tasksController.deleteById)
  .put('/:id/:status', updateStatusValidation, tasksController.updateStatusById)
  .put('/:id', updateValidation, tasksController.updateById);

module.exports = router;
