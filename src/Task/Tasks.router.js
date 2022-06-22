const { Router } = require('express');
const tasksController = require('./Tasks.controllers');
const updateStatusValidation = require('./Tasks.middleware');

const router = Router();

router
  .get('/', tasksController.getAll)
  .get('/:id', tasksController.getById)
  .post('/', tasksController.createOne)
  .delete('/:id', tasksController.deleteById)
  .put('/:id/pending', updateStatusValidation, tasksController.updateStatusById)
  .put('/:id/ongoing', updateStatusValidation, tasksController.updateStatusById)
  .put('/:id/finished', updateStatusValidation, tasksController.updateStatusById);

module.exports = router;
