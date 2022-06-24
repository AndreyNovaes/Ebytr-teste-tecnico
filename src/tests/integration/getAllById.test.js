const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const sinon = require('sinon');
const { Tasks } = require('../../database/models');
const { task } = require('../__mocks__');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP GET route /tasks/:id', () => { 
  const id = '1';
  before(async () => { sinon.stub(Tasks, 'findByPk').returns(task.findByPk(id)); });

  after(() => { Tasks.findByPk.restore(); });

  describe('test the return with the mock of findOne', () => {
    let response;
    before(async () => { 
      response = await chai
        .request(app)
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
});
