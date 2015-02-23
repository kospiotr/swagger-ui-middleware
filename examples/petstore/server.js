var port = process.env.PORT || 8081;
var express = require('express');
var app = express();

var swaggerUiMiddleware = require('swagger-ui-middleware');
swaggerUiMiddleware.hostUI(app, {path: '/test', overrides: __dirname+'/swagger-ui'});
    

app.listen(port);
console.log('App started on port ' + port);

