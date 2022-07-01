const { Router } = require('express');
const tasksController = require('./Tasks.controllers');
const {
  idParamsExists,
  idParamsIsValid,
  statusParamsValidation,
  nameDescriptionBodyValidation,
  nameBodyValidation,
  descriptionBodyValidation,
} = require('./Tasks.middlewares');

const router = Router();

router
  .get('/', tasksController.getAll)
  .get('/:id', idParamsExists, idParamsIsValid, tasksController.getById)
  .post('/', nameDescriptionBodyValidation, nameBodyValidation, descriptionBodyValidation, tasksController.createOne)
  .delete('/:id', idParamsExists, idParamsIsValid, tasksController.deleteById)
  .put('/:id/:status', idParamsExists, idParamsIsValid, statusParamsValidation, tasksController.updateStatusById)
  .put('/:id', idParamsExists, idParamsIsValid, nameDescriptionBodyValidation, nameBodyValidation, descriptionBodyValidation, tasksController.updateById);

module.exports = router;
