var expect = require('expect');
var request = require('supertest');

describe('API', function(){
	var server;

	beforeEach(function(){
		server = require('../src/server.js');
	});

	afterEach(function(){
		server.close();
	});

	it('should probably load', function testHealth(done){
		request(server)
		.get('/api/')
		.set('Accept','application/json')
		.expect('Content-Type', /json/)
		.expect(200, {hello: 'world'}, done);
	});
	it('/status should return true', function testHealth(done){
		request(server)
		.get('/api/status/')
		.set('Accept','application/json')
		.expect('Content-Type', /json/)
		.expect(200, {healthy: 'true'}, done);
	});
	it('/user/id should return user object with id', function testHealth(done){
		var fakeid = 374
		request(server)
		.get('/api/user/' + fakeid)
		.set('Accept','application/json')
		.expect('Content-Type', /json/)
		.expect(200, {user: {id: 374}}, done);
	});
});