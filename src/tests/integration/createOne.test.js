const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../app');
const { before, after } = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;

describe('HTTP POST route /tasks ', () => {
  const fakeBody = { name: 'test', description: 'test' };

  it('should return an error message if the body is empty', (done) => {
    chai.request(App)
      .post('/tasks')
      .send({})
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('name and description are required');
        done();
      });
    });

  it('should return an error message if the name is empty', (done) => {
    chai.request(App)
      .post('/tasks')
      .send({ description: 'test' })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('name is required');
        done();
      });
    });
    
  it('should return an error message if the description is empty', (done) => {
    chai.request(App)
      .post('/tasks')
      .send({ name: 'test' })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('description is required');
        done();
      });
    });

  it('should return the task created', (done) => {
    chai.request(App)
      .post('/tasks')
      .send(fakeBody)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('description');
        expect(res.body).to.have.property('status');
        expect(res.body.name).to.equal(fakeBody.name);
        expect(res.body.description).to.equal(fakeBody.description);
        expect(res.body.status).to.equal('pending');
        done();
    });
  });
});
