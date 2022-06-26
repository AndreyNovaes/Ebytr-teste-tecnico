const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../app');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP DELETE route /tasks/:id', () => {
  const fakeBody = { name: 'test', description: 'test' };
  let idWhatExists;
  before(async () => {
    const response = await chai.request(App).post('/tasks').send(fakeBody);
    idWhatExists = response.body.id;
  });
  it('should return the message of Task deleted', async () => {
    const response = await chai.request(App).delete(`/tasks/${idWhatExists}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal(`Task ${idWhatExists} deleted`);
  });
});
