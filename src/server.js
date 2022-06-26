const App = require('./app');
require('dotenv').config();

const { PORT, PORT_TEST } = process.env;

if (process.env.NODE_ENV === 'test') {
  App.listen(PORT_TEST, () => { console.log(`Server is listening on database_test port: ${PORT_TEST}`); });
} else {
  App.listen(PORT, () => { console.log(`Server listening on database_development port: ${PORT}`); });
}
