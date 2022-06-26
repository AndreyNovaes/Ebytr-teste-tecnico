const Express = require('express');
const tasksRouter = require('./handleTasks/Tasks.router');

const App = Express();

App.use(Express.json());
App.use('/tasks', tasksRouter);

module.exports = App;
