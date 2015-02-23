var express = require('express');
var app = express();
var swaggerUiMiddleware = require('../..');

swaggerUiMiddleware.hostUI(app, {
    path: '/test', 
    src: __dirname+'/../../node_modules/swagger-ui/dist',
    overrides: __dirname+'/overrides'
});

module.exports = app;