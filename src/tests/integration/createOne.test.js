const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../app');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP POST route /tasks ', () => {
  const fakeBody = { name: 'test', description: 'test' };

  describe('failure cases', () => {
    it('should return an error message if the body is empty', async () => {
      const response = await chai.request(App)
        .post('/tasks')
        .send({});
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('name and description are required');
    });
  
    it('should return an error message if the name is empty', async () => {
      const response = await chai.request(App)
        .post('/tasks')
        .send({ description: 'test' });
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('name is required');
    });
      
    it('should return an error message if the description is empty', async () => {
      const response = await chai.request(App)
        .post('/tasks')
        .send({ name: 'test' });
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('description is required');
    });
  });

  describe('sucessfully cases', () => {
    it('should return the task created', async () => {
      const response = await chai.request(App)
        .post('/tasks')
        .send(fakeBody);
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('description');
      expect(response.body).to.have.property('status');
      expect(response.body).to.have.property('createdAt');
      expect(response.body).to.have.property('updatedAt');
    });
  });
});
