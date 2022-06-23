const { expect } = require('chai');
const indexModel = require('../../database/models/index')

require('dotenv').config();

const { sequelize: { config } } = indexModel;

describe('tests if the database has the correct environment variables', () => {
  const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT } = process.env; 
  const { username, password, host, port } = config;
  expect(MYSQL_HOST).to.equal(host);
  expect(MYSQL_USER).to.equal(username);
  expect(MYSQL_PASSWORD).to.equal(password);
  expect(MYSQL_PORT).to.equal(port);
});
