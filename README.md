# swagger-ui-middleware
Swagger UI hosting middleware for ExpressJS

#Installation

Install swagger-ui in preferable version first:

```bash
npm install swagger-ui --save
```

then install swagger-ui-middleware:

```bash
npm install swagger-ui-middleware --save
```

in your ExpressJS application:

```js
var swaggerUiMiddleware = require('swagger-ui-middleware');
swaggerUiMiddleware.hostUI(app);

```

swagger-ui is being hoted under api-doc, for example: localhost:8080/api-doc and hosts ./node_modules/swagger-ui/dist content.

#Configuration

swagger-ui-middleware can be configured as follow:

```js
var swaggerUiMiddleware = require('swagger-ui-middleware');
swaggerUiMiddleware.hostUI(app, {path: '/test', overrides: __dirname+'/swagger-ui'});
```

##path
* default: /api-doc

Context resource that hosts swagger-ui

##overrides
* default: undefined

Directory which contains overriding resources lke index.html which can be adjusted

##source
* default: __dirname + '/../swagger-ui/dist'

Source folder which indicates swagger-ui resources.

#Example

Full example can be found in example deirectory.

```js
var port = process.env.PORT || 8081;
var express = require('express');
var app = express();

var swaggerUiMiddleware = require('swagger-ui-middleware');
swaggerUiMiddleware.hostUI(app, {path: '/test', overrides: __dirname+'/swagger-ui'});
    

app.listen(port);
console.log('App started on port ' + port);
```

To run example:

```bash
node examples/petstore/server
```

#Tests
To run tests via Grunt:

```bash
grunt test
```

or in watch mode:

```bash
grunt testing
```

to run testing app:

```bash
node test/fixtures/server
```