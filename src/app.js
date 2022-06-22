const Express = require('express');
const tasksRouter = require('./layerTask/Tasks.router');

const App = Express();

App.use(Express.json());

App.get('/', (req, res) => { res.json({ message: 'Hello World!' }); });
App.use('/tasks', tasksRouter);

module.exports = App;
