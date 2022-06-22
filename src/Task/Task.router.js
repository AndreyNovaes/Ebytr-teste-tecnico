const { Router } = require('express');
const tasksController = require('./Task.controller');

const router = Router();

router
  .get('/', tasksController.getAll);

module.exports = router;
