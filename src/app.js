const Express = require('express');
const tasksRouter = require('./handleTasks/Tasks.router');
const doc = require('./utils/taskDoc');

const App = Express();

App.use(Express.json());
App.use('/tasks', tasksRouter);
App.use('/', (req, res) => { res.json(doc); });

module.exports = App;
