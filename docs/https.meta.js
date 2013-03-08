exports.name = 'https';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/https.html';
exports.description = [
 "\t# HTTPS".red
,"\t"
,"\tHTTPS is the HTTP protocol over TLS/SSL. In Node this is implemented as a"
,"\tseparate module."
,"\t"
,"\t## Class: https.Server".cyan
,"\t"
,"\tThis class is a subclass of `tls.Server` and emits events same as"
,"\t`http.Server`. See `http.Server` for more information."
,"\t"
,"\t## https.createServer(options, [requestListener])".cyan
,"\t"
,"\tReturns a new HTTPS web server object. The `options` is similar to"
,"\t`tls.createServer()`. The `requestListener` is a function which is"
,"\tautomatically added to the `'request'` event."
,"\t"
,"\tExample:"
,"\t"
,"\t    // curl -k https://localhost:8000/".green
,"\t    var https = require('https');".green
,"\t    var fs = require('fs');".green
,"\t".green
,"\t    var options = {".green
,"\t      key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),".green
,"\t      cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')".green
,"\t    };".green
,"\t".green
,"\t    https.createServer(options, function (req, res) {".green
,"\t      res.writeHead(200);".green
,"\t      res.end(\"hello world\n\");".green
,"\t    }).listen(8000);".green
,"\t"
,"\t"
,"\t## https.request(options, callback)".cyan
,"\t"
,"\tMakes a request to a secure web server."
,"\tAll options from [http.request()](http.html#http.request) are valid."
,"\t"
,"\tExample:"
,"\t"
,"\t    var https = require('https');".green
,"\t".green
,"\t    var options = {".green
,"\t      host: 'encrypted.google.com',".green
,"\t      port: 443,".green
,"\t      path: '/',".green
,"\t      method: 'GET'".green
,"\t    };".green
,"\t".green
,"\t    var req = https.request(options, function(res) {".green
,"\t      console.log(\"statusCode: \", res.statusCode);".green
,"\t      console.log(\"headers: \", res.headers);".green
,"\t".green
,"\t      res.on('data', function(d) {".green
,"\t        process.stdout.write(d);".green
,"\t      });".green
,"\t    });".green
,"\t    req.end();".green
,"\t".green
,"\t    req.on('error', function(e) {".green
,"\t      console.error(e);".green
,"\t    });".green
,"\t"
,"\tThe options argument has the following options"
,"\t"
,"\t- host: IP or domain of host to make request to. Defaults to `'localhost'`."
,"\t- port: port of host to request to. Defaults to 443."
,"\t- path: Path to request. Default `'/'`."
,"\t- method: HTTP request method. Default `'GET'`."
,"\t"
,"\t- `host`: A domain name or IP address of the server to issue the request to."
,"\t  Defaults to `'localhost'`."
,"\t- `hostname`: To support `url.parse()` `hostname` is preferred over `host`"
,"\t- `port`: Port of remote server. Defaults to 443."
,"\t- `method`: A string specifying the HTTP request method. Defaults to `'GET'`."
,"\t- `path`: Request path. Defaults to `'/'`. Should include query string if any."
,"\t  E.G. `'/index.html?page=12'`"
,"\t- `headers`: An object containing request headers."
,"\t- `auth`: Basic authentication i.e. `'user:password'` to compute an"
,"\t  Authorization header."
,"\t- `agent`: Controls [Agent](#https.Agent) behavior. When an Agent is"
,"\t  used request will default to `Connection: keep-alive`. Possible values:"
,"\t - `undefined` (default): use [globalAgent](#https.globalAgent) for this"
,"\t   host and port."
,"\t - `Agent` object: explicitly use the passed in `Agent`."
,"\t - `false`: opts out of connection pooling with an Agent, defaults request to"
,"\t   `Connection: close`."
,"\t"
,"\tThe following options from [tls.connect()](tls.html#tls.connect) can also be"
,"\tspecified. However, a [globalAgent](#https.globalAgent) silently ignores these."
,"\t"
,"\t- `key`: Private key to use for SSL. Default `null`."
,"\t- `passphrase`: A string of passphrase for the private key. Default `null`."
,"\t- `cert`: Public x509 certificate to use. Default `null`."
,"\t- `ca`: An authority certificate or array of authority certificates to check"
,"\t  the remote host against."
,"\t"
,"\tIn order to specify these options, use a custom `Agent`."
,"\t"
,"\tExample:"
,"\t"
,"\t    var options = {".green
,"\t      host: 'encrypted.google.com',".green
,"\t      port: 443,".green
,"\t      path: '/',".green
,"\t      method: 'GET',".green
,"\t      key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),".green
,"\t      cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')".green
,"\t    };".green
,"\t    options.agent = new https.Agent(options);".green
,"\t".green
,"\t    var req = https.request(options, function(res) {".green
,"\t      ...".green
,"\t    }".green
,"\t"
,"\tOr does not use an `Agent`.".yellow
,"\t"
,"\tExample:"
,"\t"
,"\t    var options = {".green
,"\t      host: 'encrypted.google.com',".green
,"\t      port: 443,".green
,"\t      path: '/',".green
,"\t      method: 'GET',".green
,"\t      key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),".green
,"\t      cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),".green
,"\t      agent: false".green
,"\t    };".green
,"\t".green
,"\t    var req = https.request(options, function(res) {".green
,"\t      ...".green
,"\t    }".green
,"\t"
,"\t## https.get(options, callback)".cyan
,"\t"
,"\tLike `http.get()` but for HTTPS."
,"\t"
,"\tExample:"
,"\t"
,"\t    var https = require('https');".green
,"\t".green
,"\t    https.get({ host: 'encrypted.google.com', path: '/' }, function(res) {".green
,"\t      console.log(\"statusCode: \", res.statusCode);".green
,"\t      console.log(\"headers: \", res.headers);".green
,"\t".green
,"\t      res.on('data', function(d) {".green
,"\t        process.stdout.write(d);".green
,"\t      });".green
,"\t".green
,"\t    }).on('error', function(e) {".green
,"\t      console.error(e);".green
,"\t    });".green
,"\t"
,"\t"
,"\t## Class: https.Agent".cyan
,"\t"
,"\tAn Agent object for HTTPS similar to [http.Agent](http.html#http.Agent)."
,"\tSee [https.request()](#https.request) for more information."
,"\t"
,"\t"
,"\t## https.globalAgent".cyan
,"\t"
,"\tGlobal instance of [https.Agent](#https.Agent) which is used as the default"
,"\tfor all HTTPS client requests."
].join('\n');
