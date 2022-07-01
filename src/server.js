const App = require('./app');
require('dotenv').config();

const { PORT } = process.env;
const port = PORT || 3001;

App.listen(port, () => { console.log(`Server listening on database_development port: ${port}`); });
