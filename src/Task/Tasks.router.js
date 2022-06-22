const { Router } = require('express');
const tasksController = require('./Tasks.controller');

const router = Router();

router
  .get('/', tasksController.getAll);

module.exports = router;
