const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../app');
const sinon = require('sinon');
const { Tasks } = require('../../database/models');
const mocks = require('../__mocks__');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP GET route /tasks/:id', () => { 
  const id = '1';
  before(async () => { sinon.stub(Tasks, 'findByPk').returns(mocks.findByPk(id)); });

  after(() => { Tasks.findByPk.restore(); });

  describe('test the return with the mock of findOne', () => {
    let response;
    before(async () => { 
      response = await chai
        .request(App)
        .get(`/tasks/${id}`);
    });

    it('should return a status of 200', () => {
      expect(response).to.have.status(200);
    });

    it('should return an object', () => {
      expect(response.body).to.be.an('object');
    });

    it('should return an object with this properties', () => {
      expect(response.body).to.have.all.keys(
        'id',
        'name',
        'description',
        'status',
        'createdAt',
        'updatedAt'
      );
    });
  });

  describe('test returns of the test database', () => {
    let response;
    before(async () => {
    response = await chai
      .request(App)
      .get('/tasks/1');
    });

    it('should return an status code of 200', async () => {
      expect(response.status).to.equal(200);
    });

    it('should return an object task', async () => {
      expect(response.body).to.be.an('object');
    });

    it('should return a task with this properties', async () => {
      expect(response.body).to.have.all.keys(
        'id',
        'name',
        'description',
        'status',
        'createdAt',
        'updatedAt'
      );
    });
  });
});
