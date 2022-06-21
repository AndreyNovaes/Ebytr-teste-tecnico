const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log(process.env);

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const sequelize = new Sequelize('super-todo-list', MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST || 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
