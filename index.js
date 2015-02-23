var _ = require('lodash');
var serveStatic = require('serve-static');

module.exports.hostUI = function(app, config){
    config = _.merge({
        path: '/api-doc',
        overrides: undefined,
        src: __dirname + '/../swagger-ui/dist'
    },config);
    if(config.overrides !== undefined){
        app.use(config.path, serveStatic(config.overrides));
    }
    console.log('Testing: ' + config.path + ", Source: " + config.src);
    app.use(config.path, serveStatic(config.src));
};