const Express = require('express');
const tasksRouter = require('./handleTasks/Tasks.router');

const App = Express();

App.use(Express.json());
App.use('/tasks', tasksRouter);
App.use('/', (req, res) => { res.json('Hello World!'); });

module.exports = App;
