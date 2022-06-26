const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../app');
const sinon = require('sinon');
const { Tasks } = require('../../database/models');
const mocks = require('../__mocks__');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP GET route /tasks', () => {
  before(async () => { sinon.stub(Tasks, 'findAll').returns(mocks.findAll()); });

  after(() => { Tasks.findAll.restore(); });
  
  describe('test the return with the mock of findAll', () => {
    let response;
    before(async () => {
      response = await chai
        .request(App)
        .get('/tasks');
    });

    it('should return a status of 200', () => {
      expect(response).to.have.status(200);
    });

    it('should return an array with a lengthOf 3', () => {
      expect(response.body).to.have.lengthOf(3);
    });

    it('should return an array of objects', () => {
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.be.an('object');
      expect(response.body[1]).to.be.an('object');
      expect(response.body[2]).to.be.an('object');
    });

    it('should return an array of objects with this properties', () => {
      expect(response.body[0]).to.have.all.keys(
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
      .get('/tasks');
    });

    it('should return an status code of 200', async () => {
      expect(response.status).to.equal(200);
    });

    it('should return an array of tasks', async () => {
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.be.an('object');
      expect(response.body[1]).to.be.an('object');
    });

    it('should return an array of tasks with this properties', async () => {
      expect(response.body[0]).to.have.all.keys(
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
