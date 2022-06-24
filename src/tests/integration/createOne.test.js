const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const sinon = require('sinon');
const { Tasks } = require('../../database/models');
const { task } = require('../__mocks__');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP POST route /tasks', () => {
  before(async () => { sinon.stub(Tasks, 'create').returns(task.create()); });

  after(() => { Tasks.create.restore(); });

  describe('test the return with the mock of create', () => {
    let response;
    before(async () => {
      response = await chai
        .request(app)
        .post('/tasks');
    });

    it('should return a status of 201', () => {
      expect(response).to.have.status(201);
    })
    it('should return an object', () => {
      expect(response.body).to.be.an('object');
    });
  });
});