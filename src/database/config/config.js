require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

module.exports = {
  development: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: 'database_development',
    host: MYSQL_HOST,
    dialect: 'mysql',
    define: {
      underscored: true,
      freezeTableName: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
    },
  },
  test: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: 'database_test',
    host: MYSQL_HOST,
    dialect: 'mysql',
  },
  production: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: 'database_production',
    host: MYSQL_HOST,
    dialect: 'mysql',
  },
};
