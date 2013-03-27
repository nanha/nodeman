# restify

[restify](http://mcavage.github.com/node-restify) is a smallish framework,
similar to [express](http://expressjs.com) for building REST APIs.  For full
details, see http://mcavage.github.com/node-restify.

# Usage

## Server

    var restify = require('restify');

    var server = restify.createServer({
      name: 'myapp',
      version: '1.0.0'
    });
    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    server.get('/echo/:name', function (req, res, next) {
      res.send(req.params);
      return next();
    });

    server.listen(8080, function () {
      console.log('%s listening at %s', server.name, server.url);
    });

## Client

    var assert = require('assert');
    var restify = require('restify');

    var client = restify.createJsonClient({
      url: 'http://localhost:8080',
      version: '~1.0'
    });

    client.get('/echo/mark', function (err, req, res, obj) {
      assert.ifError(err);
      console.log('Server returned: %j', obj);
    });

# Installation

    $ npm install restify

