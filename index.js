var _ = require('lodash');
var serveStatic = require('serve-static');

module.exports.hostUI = function(app, config){
    config = _.merge({
        path: '/api-doc',
        overrides: undefined,
        dest: __dirname + '/../swagger-ui/dist'
    },config);
    if(config.overrides !== undefined){
        app.use(config.path, serveStatic(config.overrides));
    }
    app.use(config.path, serveStatic(config.dest));
}