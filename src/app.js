const Express = require('express');

const App = Express();

App.get('/', (req, res) => { res.json({ message: 'Hello World!' }); });

module.exports = App;
