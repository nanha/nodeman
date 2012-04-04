exports.name = 'connect';
exports.category = 'server';
exports.context = 'use require';
exports.homepage = 'http://www.senchalabs.org/connect/';
exports.description = [
,'\t# Connect'.red
,'\t'
,'\t  Connect is an extensible HTTP server framework for [node](http://nodejs.org), providing high performance "plugins" known as _middleware_.'
,'\t'
,'\t Connect is bundled with over _20_ commonly used middleware, including'
,'\t a logger, session support, cookie parser, and [more](http://senchalabs.github.com/connect). Be sure to view the 2.x [documentation](http://senchalabs.github.com/connect/).'
,'\t'
,'\t'
,'\tvar app = connect()'.green
,'\t  .use(connect.logger(\'dev\'))'.green
,'\t  .use(connect.static(\'public\'))'.green
,'\t  .use(function(req, res){'.green
,'\t    res.end(\'hello world\\n\');'.green
,'\t  })'.green
,'\t .listen(3000);'.green
,'\t'
,'\t'
,'\tvar connect = require(\'connect\')'.green
,'\t  , http = require(\'http\');'.green
,'\t'.green
,'\tvar app = connect()'.green
,'\t  .use(connect.favicon())'.green
,'\t  .use(connect.logger(\'dev\'))'.green
,'\t  .use(connect.static(\'public\'))'.green
,'\t  .use(connect.directory(\'public\'))'.green
,'\t  .use(connect.cookieParser(\'my secret here\'))'.green
,'\t  .use(connect.session())'.green
,'\t  .use(function(req, res){'.green
,'\t    res.end(\'Hello from Connect!\n\');'.green
,'\t  });'.green
,'\t'.green
,'\thttp.createServer(app).listen(3000);'.green
,'\t'
,'\t## Middleware'.cyan
,'\t'
,'\t  - csrf'
,'\t  - basicAuth'
,'\t  - bodyParser'
,'\t  - json'
,'\t  - multipart'
,'\t  - urlencoded'
,'\t  - cookieParser'
,'\t  - directory'
,'\t  - compress'
,'\t  - errorHandler'
,'\t  - favicon'
,'\t  - limit'
,'\t  - logger'
,'\t  - methodOverride'
,'\t  - query'
,'\t  - responseTime'
,'\t  - session'
,'\t  - static'
,'\t  - staticCache'
,'\t  - vhost'
,'\t  - subdomains'
,'\t  - cookieSession'
].join('\n');
