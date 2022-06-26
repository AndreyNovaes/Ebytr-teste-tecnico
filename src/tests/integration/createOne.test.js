const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../app');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP POST route /tasks ', () => {
  const fakeBody = { name: 'test', description: 'test' };
  it('should return the task created', async () => {
    const response = await chai
      .request(App)
      .post('/tasks')
      .send(fakeBody);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('name');
  });
});
