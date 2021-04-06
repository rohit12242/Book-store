process.env.NODE_ENV = 'test';

var app = require('../index.js');
var request = require("supertest");
var should = require("should");
const conn = require('../db/index.js');
// var server = supertest.agent("http://localhost:8080");
describe("SAMPLE unit test",function(){
  before((done) => {
   conn.connect()
     .then(() => done())
     .catch((err) => done(err));
 })

 after((done) => {
   conn.close()
     .then(() => done())
     .catch((err) => done(err));
 })
  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

  it("should add a book",function(done){

    //calling ADD api
    request(app)
    .post('/api/books')
    .send({name : 'Test Book', releaseDate : new Date(2021, 04,01),authorName:'Rohit'})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.message.should.equal('New Book Added!');
      done();
    });
  });
  it("should get all book",function(done){

    //calling get  api
    request(app)
    .get('/api/books')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.message.should.equal("Books retrieved successfully");
      done();
    });
  });
});
