const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../app');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP PUT route /tasks/:id/:status', () => {
  const fakeBody = { name: 'test', description: 'test' };
  const baseStatus = 'pending';
  const updatedMidStatus = 'ongoing';
  const updatedFinalStatus = 'finished';
  let idWhatExists;

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

  it('should return the message of the status updated to ongoing', async () => {
    const response = await chai.request(App).put(`/tasks/${idWhatExists}/ongoing`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal(`Task ${idWhatExists} updated to ${updatedMidStatus}`);
  });

  it('should return the task with the status ongoing', async () => {
    const response = await chai.request(App).get(`/tasks/${idWhatExists}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id');
    expect(response.body.id).to.equal(idWhatExists);
    expect(response.body.status).to.equal(updatedMidStatus);
  });

  it('should return the message of the status updated to pending', async () => {
    const response = await chai.request(App).put(`/tasks/${idWhatExists}/pending`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal(`Task ${idWhatExists} updated to ${baseStatus}`);
  });

  it('should return the task with the status pending', async () => {
    const response = await chai.request(App).get(`/tasks/${idWhatExists}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id');
    expect(response.body.id).to.equal(idWhatExists);
    expect(response.body.status).to.equal(baseStatus);
  });
  
  it('should return the message of the status updated to finished', async () => {
    const response = await chai.request(App).put(`/tasks/${idWhatExists}/finished`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal(`Task ${idWhatExists} updated to ${updatedFinalStatus}`);
  });

  it('should return the task with the status finished', async () => {
    const response = await chai.request(App).get(`/tasks/${idWhatExists}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id');
    expect(response.body.id).to.equal(idWhatExists);
    expect(response.body.status).to.equal(updatedFinalStatus);
  });
});
