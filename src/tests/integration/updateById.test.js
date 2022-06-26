const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../app');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP PUT route /tasks/:id', () => {
  const fakeBody = { name: 'test', description: 'test' };
  const updatedBody = { name: 'updatedName', description: 'updatedDescription' };
  let idWhatExists;

  describe('should return an error if task id is not an number and if not exists in the database', () => {
    it('should return an error if task id is not an number', async () => {
      const response = await chai.request(App)
        .put('/tasks/test')
        .send(fakeBody);
      expect(response.status).to.equal(404);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('task not found');
    });

    it('should return an error if task id is not exists in the database', async () => {
      const response = await chai.request(App)
        .put('/tasks/9999999999')
        .send(fakeBody);
      expect(response.status).to.equal(404);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('task not found');
    });
  });

  describe('should return an error if the name, description or both not exists in the request body', () => {
    it('should return an error if the name is empty', async () => {
      const response = await chai.request(App)
        .put('/tasks/1')
        .send({ description: 'test' });
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('name is required');
    });

    it('should return an error if the description is empty', async () => {
      const response = await chai.request(App)
        .put('/tasks/1')
        .send({ name: 'test' });
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('description is required');
    });

    it('should return an error if the name and description are empty', async () => {
      const response = await chai.request(App)
        .put('/tasks/1')
        .send({});
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('name and description are required');
    });
  });

  before(async () => {
    const response = await chai.request(App).post('/tasks').send(fakeBody);
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('name');
    expect(response.body).to.have.property('description');
    expect(response.body.name).to.equal(fakeBody.name);
    expect(response.body.description).to.equal(fakeBody.description);
    idWhatExists = response.body.id;
  });

  it('should return the message of the task updated', async () => {
    const response = await chai.request(App).put(`/tasks/${idWhatExists}`).send(updatedBody);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal(`task ${idWhatExists} updated`);
  });

  it('should return the task updated', async () => {
    const response = await chai.request(App).get(`/tasks/${idWhatExists}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('name');
    expect(response.body).to.have.property('description');
    expect(response.body.name).to.equal(updatedBody.name);
    expect(response.body.description).to.equal(updatedBody.description);
  });
});
