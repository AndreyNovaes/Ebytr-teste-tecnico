const {
  sequelize, dataTypes, checkModelName, checkPropertyExists,
} = require('sequelize-test-helpers');
const { describe, Context } = require('mocha');
const tasksModel = require('../../database/models/tasks');

describe('model tasks', () => {
  const Tasks = tasksModel(sequelize, dataTypes);
  const tasks = new Tasks();

  checkModelName(tasks, 'tasks');

  Context('tests the model tasks properties', () => {
    ['name', 'description', 'status'].forEach(checkPropertyExists(tasks));
  });
});
