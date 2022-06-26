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
    expect(response.body.message).to.equal(`Task ${idWhatExists} updated`);
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
