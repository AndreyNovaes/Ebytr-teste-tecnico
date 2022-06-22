const Express = require('express');
const { Tasks } = require('./database/models');

const App = Express();

App.use(Express.json());

App.get('/', (req, res) => { res.json({ message: 'Hello World!' }); });
App.get('/tasks', async (req, res) => {
  const tarefas = await Tasks.findAll();
  res.status(200).json(tarefas);
});

module.exports = App;
