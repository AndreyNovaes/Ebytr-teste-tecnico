const { Router } = require('express');
const tasksController = require('./Tasks.controllers');
const {
  updateStatusValidation,
  updateValidation,
  createOneValidation,
  getByIdValidation,
} = require('./Tasks.middlewares');

const router = Router();

router
  .get('/', tasksController.getAll)
  .get('/:id', getByIdValidation, tasksController.getById)
  .post('/', createOneValidation, tasksController.createOne)
  .delete('/:id', tasksController.deleteById)
  .put('/:id/:status', updateStatusValidation, tasksController.updateStatusById)
  .put('/:id', updateValidation, tasksController.updateById);

module.exports = router;
