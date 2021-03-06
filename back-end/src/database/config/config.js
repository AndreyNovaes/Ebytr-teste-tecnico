require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, PORT_TEST } = process.env;

// initial setup generated by sequelize-cli (https://github.com/sequelize/cli);
// modified by me(Andrey Novaes)

module.exports = {
  development: {
    username: MYSQL_USER || 'root',
    password: MYSQL_PASSWORD || 'root',
    database: 'Ebytr-backend',
    host: MYSQL_HOST || 'localhost',
    port: MYSQL_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: MYSQL_USER || 'root',
    password: MYSQL_PASSWORD || '123456',
    database: 'ebitr_db',
    host: MYSQL_HOST || 'localhost',
    port: MYSQL_PORT || 3306,
    dialect: 'mysql',
  },
};
