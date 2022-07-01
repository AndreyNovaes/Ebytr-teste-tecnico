import { describe, it } from 'mocha';

const { expect } = require('chai');
const indexModel = require('../../database/models/index');

require('dotenv').config();

const { sequelize: { config } } = indexModel;

describe('tests if the database has received the environment variables', () => {
  const {
    MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT,
  } = process.env;
  const {
    username, password, host, port,
  } = config;
  it('MYSQL_HOST .env envionment variable should be the same as config.host config', () => {
    expect(MYSQL_HOST).to.equal(host);
  });
  it('MYSQL_USER .env envionment variable should be the same as config.username config', () => {
    expect(MYSQL_USER).to.equal(username);
  });
  it('MYSQL_PASSWORD .env envionment variable should be the same as config.password config', () => {
    expect(MYSQL_PASSWORD).to.equal(password);
  });
  it('MYSQL_PORT .env envionment variable should be the same as config.port config', () => {
    expect(MYSQL_PORT).to.equal(port);
  });
});
