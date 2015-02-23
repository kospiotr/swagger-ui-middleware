var api = require('hippie');
var app = require('./fixtures/app');

var doneTest = function (done) {
    return function (err) {
        if (err) {
            throw err;
        }
        done();
    };
};

describe('Should host swagger-ui', function () {
    it('Should host overriden index.html page', function (done) {
        api(app)
                .get('/test/')
                .expectBody("overriden test page")
                .end(doneTest(done));
    });
    
    it('Should host non overriden o2c.html', function (done) {
        api(app)
                .get('/test/o2c.html')
                .expectBody(/value:decodeURIComponent/)
                .end(doneTest(done));
    });
});