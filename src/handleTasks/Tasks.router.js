const { Router } = require('express');
const tasksController = require('./Tasks.controllers');
const {
  idParamsValidation,
  statusParamsValidation,
  nameDescriptionBodyValidation,
  nameBodyValidation,
  descriptionBodyValidation,
} = require('./Tasks.middlewares');

const router = Router();

router
  .get('/', tasksController.getAll)
  .get('/:id', tasksController.getById)
  .post('/', nameDescriptionBodyValidation, nameBodyValidation, descriptionBodyValidation, tasksController.createOne)
  .delete('/:id', tasksController.deleteById)
  .put('/:id/:status', idParamsValidation, statusParamsValidation, tasksController.updateStatusById)
  .put('/:id', idParamsValidation, nameDescriptionBodyValidation, nameBodyValidation, descriptionBodyValidation, tasksController.updateById);

module.exports = router;
