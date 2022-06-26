const chai = require('chai');
const chaiHttp = require('chai-http');
const { before, describe, it } = require('mocha');
const App = require('../../app');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP PUT route /tasks/:id/:status', () => {
  const fakeBody = { name: 'test', description: 'test' };
  const baseStatus = 'pending';
  const updatedMidStatus = 'ongoing';
  const updatedFinalStatus = 'finished';
  const invalidStatus = 'invalid';
  const invalidId = '99999999999999999999999999999';
  let idWhatExists;

  before(async () => {
    const task = await chai.request(App)
      .post('/tasks')
      .send(fakeBody);
    expect(task.status).to.equal(201);
    idWhatExists = task.body.id;
  });

  describe('failure cases', () => {
    it('should return an error message if the id is invalid', async () => {
      const response = await chai.request(App)
        .put(`/tasks/${invalidId}/${baseStatus}`);
      expect(response.status).to.equal(404);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('task not found');
    });
    it('should return an error message if the status is invalid', async () => {
      const response = await chai.request(App)
        .put(`/tasks/${idWhatExists}/${invalidStatus}`);
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('invalid status');
    });
  });

  describe('successfully cases', () => {
    it('should return the message of the status updated to ongoing', async () => {
      const response = await chai.request(App)
        .put(`/tasks/${idWhatExists}/${updatedMidStatus}`);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal(`task ${idWhatExists} updated to ${updatedMidStatus}`);
    });

    it('should return the task with the status ongoing', async () => {
      const response = await chai.request(App)
        .get(`/tasks/${idWhatExists}`);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('description');
      expect(response.body).to.have.property('status');
      expect(response.body.id).to.equal(idWhatExists);
      expect(response.body.status).to.equal(updatedMidStatus);
    });

    it('should return the message of the status updated to finished', async () => {
      const response = await chai.request(App)
        .put(`/tasks/${idWhatExists}/${updatedFinalStatus}`);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal(`task ${idWhatExists} updated to ${updatedFinalStatus}`);
    });

    it('should return the task with the status finished', async () => {
      const response = await chai.request(App)
        .get(`/tasks/${idWhatExists}`);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('description');
      expect(response.body).to.have.property('status');
      expect(response.body.id).to.equal(idWhatExists);
      expect(response.body.status).to.equal(updatedFinalStatus);
    });
  });
});
