exports.name = 'http';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/http.html';
exports.description = [
 "\t# HTTP".red
,"\t"
,"\tTo use the HTTP server and client one must `require('http')`."
,"\t"
,"\tThe HTTP interfaces in Node are designed to support many features"
,"\tof the protocol which have been traditionally difficult to use."
,"\tIn particular, large, possibly chunk-encoded, messages. The interface is"
,"\tcareful to never buffer entire requests or responses--the"
,"\tuser is able to stream data."
,"\t"
,"\tHTTP message headers are represented by an object like this:"
,"\t"
,"\t    { 'content-length': '123',".green
,"\t      'content-type': 'text/plain',".green
,"\t      'connection': 'keep-alive',".green
,"\t      'accept': '*/*' }".green
,"\t"
,"\tKeys are lowercased. Values are not modified."
,"\t"
,"\tIn order to support the full spectrum of possible HTTP applications, Node's"
,"\tHTTP API is very low-level. It deals with stream handling and message"
,"\tparsing only. It parses a message into headers and body but it does not"
,"\tparse the actual headers or the body."
,"\t"
,"\t"
,"\t## http.createServer([requestListener])".cyan
,"\t"
,"\tReturns a new web server object."
,"\t"
,"\tThe `requestListener` is a function which is automatically"
,"\tadded to the `'request'` event."
,"\t"
,"\t## Class: http.Server".cyan
,"\t"
,"\tThis is an `EventEmitter` with the following events:"
,"\t"
,"\t### Event: 'request'".magenta
,"\t"
,"\t`function (request, response) { }`".green
,"\t"
,"\tEmitted each time there is a request. Note that there may be multiple requests"
,"\tper connection (in the case of keep-alive connections)."
,"\t `request` is an instance of `http.ServerRequest` and `response` is"
,"\t an instance of `http.ServerResponse`"
,"\t"
,"\t### Event: 'connection'".magenta
,"\t"
,"\t`function (socket) { }`".green
,"\t"
,"\t When a new TCP stream is established. `socket` is an object of type"
,"\t `net.Socket`. Usually users will not want to access this event. The"
,"\t `socket` can also be accessed at `request.connection`."
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\t Emitted when the server closes."
,"\t"
,"\t### Event: 'checkContinue'".magenta
,"\t"
,"\t`function (request, response) { }`".green
,"\t"
,"\tEmitted each time a request with an http Expect: 100-continue is received."
,"\tIf this event isn't listened for, the server will automatically respond"
,"\twith a 100 Continue as appropriate."
,"\t"
,"\tHandling this event involves calling `response.writeContinue` if the client"
,"\tshould continue to send the request body, or generating an appropriate HTTP"
,"\tresponse (e.g., 400 Bad Request) if the client should not continue to send the"
,"\trequest body."
,"\t"
,"\tNote that when this event is emitted and handled, the `request` event will"
,"\tnot be emitted."
,"\t"
,"\t### Event: 'upgrade'".magenta
,"\t"
,"\t`function (request, socket, head) { }`".green
,"\t"
,"\tEmitted each time a client requests a http upgrade. If this event isn't"
,"\tlistened for, then clients requesting an upgrade will have their connections"
,"\tclosed."
,"\t"
,"\t* `request` is the arguments for the http request, as it is in the request event.".blue
,"\t* `socket` is the network socket between the server and client.".blue
,"\t* `head` is an instance of Buffer, the first packet of the upgraded stream, this may be empty.".blue
,"\t"
,"\tAfter this event is emitted, the request's socket will not have a `data`"
,"\tevent listener, meaning you will need to bind to it in order to handle data"
,"\tsent to the server on that socket."
,"\t"
,"\t### Event: 'clientError'".magenta
,"\t"
,"\t`function (exception) { }`".green
,"\t"
,"\tIf a client connection emits an 'error' event - it will forwarded here."
,"\t"
,"\t### server.listen(port, [hostname], [callback])".magenta
,"\t"
,"\tBegin accepting connections on the specified port and hostname.  If the"
,"\thostname is omitted, the server will accept connections directed to any"
,"\tIPv4 address (`INADDR_ANY`)."
,"\t"
,"\tTo listen to a unix socket, supply a filename instead of port and hostname."
,"\t"
,"\tThis function is asynchronous. The last parameter `callback` will be added as"
,"\ta listener for the ['listening'](net.html#event_listening_) event."
,"\tSee also [net.Server.listen()](net.html#server.listen)."
,"\t"
,"\t"
,"\t### server.listen(path, [callback])".magenta
,"\t"
,"\tStart a UNIX socket server listening for connections on the given `path`."
,"\t"
,"\tThis function is asynchronous. The last parameter `callback` will be added as"
,"\ta listener for the ['listening'](net.html#event_listening_) event."
,"\tSee also [net.Server.listen()](net.html#server.listen)."
,"\t"
,"\t"
,"\t### server.close()".magenta
,"\t"
,"\tStops the server from accepting new connections."
,"\tSee [net.Server.close()](net.html#server.close)."
,"\t"
,"\t"
,"\t## Class: http.ServerRequest".cyan
,"\t"
,"\tThis object is created internally by a HTTP server -- not by"
,"\tthe user -- and passed as the first argument to a `'request'` listener."
,"\t"
,"\tThe request implements the [Readable Stream](stream.html#readable_stream)".red
,"\tinterface. This is an `EventEmitter` with the following events:"
,"\t"
,"\t### Event: 'data'".magenta
,"\t"
,"\t`function (chunk) { }`".green
,"\t"
,"\tEmitted when a piece of the message body is received. The chunk is a string if"
,"\tan encoding has been set with `request.setEncoding()`, otherwise it's a"
,"\t[Buffer](buffer.html)."
,"\t"
,"\tNote that the __data will be lost__ if there is no listener when a"
,"\t`ServerRequest` emits a `'data'` event."
,"\t"
,"\t### Event: 'end'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tEmitted exactly once for each request. After that, no more `'data'` events"
,"\twill be emitted on the request."
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tIndicates that the underlaying connection was terminated before"
,"\t`response.end()` was called or able to flush."
,"\t"
,"\tJust like `'end'`, this event occurs only once per request, and no more `'data'`"
,"\tevents will fire afterwards."
,"\t"
,"\tNote: `'close'` can fire after `'end'`, but not vice versa."
,"\t"
,"\t### request.method".magenta
,"\t"
,"\tThe request method as a string. Read only. Example:"
,"\t`'GET'`, `'DELETE'`."
,"\t"
,"\t"
,"\t### request.url".magenta
,"\t"
,"\tRequest URL string. This contains only the URL that is"
,"\tpresent in the actual HTTP request. If the request is:"
,"\t"
,"\t    GET /status?name=ryan HTTP/1.1\\r\\n".green
,"\t    Accept: text/plain\\r\\n".green
,"\t    \\r\\n".green
,"\t"
,"\tThen `request.url` will be:"
,"\t"
,"\t    '/status?name=ryan'".green
,"\t"
,"\tIf you would like to parse the URL into its parts, you can use"
,"\t`require('url').parse(request.url)`.  Example:"
,"\t"
,"\t    node> require('url').parse('/status?name=ryan')".yellow
,"\t    { href: '/status?name=ryan',".yellow
,"\t      search: '?name=ryan',".yellow
,"\t      query: 'name=ryan',".yellow
,"\t      pathname: '/status' }".yellow
,"\t"
,"\tIf you would like to extract the params from the query string,"
,"\tyou can use the `require('querystring').parse` function, or pass"
,"\t`true` as the second argument to `require('url').parse`.  Example:"
,"\t"
,"\t    node> require('url').parse('/status?name=ryan', true)".yellow
,"\t    { href: '/status?name=ryan',".yellow
,"\t      search: '?name=ryan',".yellow
,"\t      query: { name: 'ryan' },".yellow
,"\t      pathname: '/status' }".yellow
,"\t"
,"\t"
,"\t"
,"\t### request.headers".magenta
,"\t"
,"\tRead only."
,"\t"
,"\t### request.trailers".magenta
,"\t"
,"\tRead only; HTTP trailers (if present). Only populated after the 'end' event."
,"\t"
,"\t### request.httpVersion".magenta
,"\t"
,"\tThe HTTP protocol version as a string. Read only. Examples:"
,"\t`'1.1'`, `'1.0'`."
,"\tAlso `request.httpVersionMajor` is the first integer and"
,"\t`request.httpVersionMinor` is the second."
,"\t"
,"\t"
,"\t### request.setEncoding([encoding])".magenta
,"\t"
,"\tSet the encoding for the request body. Either `'utf8'` or `'binary'`. Defaults"
,"\tto `null`, which means that the `'data'` event will emit a `Buffer` object.."
,"\t"
,"\t"
,"\t### request.pause()".magenta
,"\t"
,"\tPauses request from emitting events.  Useful to throttle back an upload."
,"\t"
,"\t"
,"\t### request.resume()".magenta
,"\t"
,"\tResumes a paused request."
,"\t"
,"\t### request.connection".magenta
,"\t"
,"\tThe `net.Socket` object associated with the connection."
,"\t"
,"\t"
,"\tWith HTTPS support, use request.connection.verifyPeer() and"
,"\trequest.connection.getPeerCertificate() to obtain the client's"
,"\tauthentication details."
,"\t"
,"\t"
,"\t"
,"\t## Class: http.ServerResponse".cyan
,"\t"
,"\tThis object is created internally by a HTTP server--not by the user. It is"
,"\tpassed as the second parameter to the `'request'` event."
,"\t"
,"\tThe response implements the [Writable  Stream](stream.html#writable_stream)"
,"\tinterface. This is an `EventEmitter` with the following events:"
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tIndicates that the underlaying connection was terminated before"
,"\t`response.end()` was called or able to flush."
,"\t"
,"\t### response.writeContinue()".magenta
,"\t"
,"\tSends a HTTP/1.1 100 Continue message to the client, indicating that"
,"\tthe request body should be sent. See the [checkContinue](#event_checkContinue_) event on"
,"\t`Server`."
,"\t"
,"\t### response.writeHead(statusCode, [reasonPhrase], [headers])".magenta
,"\t"
,"\tSends a response header to the request. The status code is a 3-digit HTTP"
,"\tstatus code, like `404`. The last argument, `headers`, are the response headers."
,"\tOptionally one can give a human-readable `reasonPhrase` as the second"
,"\targument."
,"\t"
,"\tExample:"
,"\t"
,"\t    var body = 'hello world';".green
,"\t    response.writeHead(200, {".green
,"\t      'Content-Length': body.length,".green
,"\t      'Content-Type': 'text/plain' });".green
,"\t"
,"\tThis method must only be called once on a message and it must"
,"\tbe called before `response.end()` is called."
,"\t"
,"\tIf you call `response.write()` or `response.end()` before calling this, the"
,"\timplicit/mutable headers will be calculated and call this function for you."
,"\t"
,"\tNote: that Content-Length is given in bytes not characters. The above example"
,"\tworks because the string `'hello world'` contains only single byte characters."
,"\tIf the body contains higher coded characters then `Buffer.byteLength()`"
,"\tshould be used to determine the number of bytes in a given encoding."
,"\tAnd Node does not check whether Content-Length and the length of the body"
,"\twhich has been transmitted are equal or not."
,"\t"
,"\t### response.statusCode".magenta
,"\t"
,"\tWhen using implicit headers (not calling `response.writeHead()` explicitly), this property"
,"\tcontrols the status code that will be send to the client when the headers get"
,"\tflushed."
,"\t"
,"\tExample:"
,"\t"
,"\t    response.statusCode = 404;".green
,"\t"
,"\tAfter response header was sent to the client, this property indicates the"
,"\tstatus code which was sent out."
,"\t"
,"\t### response.setHeader(name, value)".magenta
,"\t"
,"\tSets a single header value for implicit headers.  If this header already exists"
,"\tin the to-be-sent headers, its value will be replaced.  Use an array of strings"
,"\there if you need to send multiple headers with the same name."
,"\t"
,"\tExample:"
,"\t"
,"\t    response.setHeader(\"Content-Type\", \"text/html\");".green
,"\t"
,"\tor"
,"\t"
,"\t    response.setHeader(\"Set-Cookie\", [\"type=ninja\", \"language=javascript\"]);".green
,"\t"
,"\t"
,"\t### response.getHeader(name)".magenta
,"\t"
,"\tReads out a header that's already been queued but not sent to the client.  Note"
,"\tthat the name is case insensitive.  This can only be called before headers get"
,"\timplicitly flushed."
,"\t"
,"\tExample:"
,"\t"
,"\t    var contentType = response.getHeader('content-type');".green
,"\t"
,"\t### response.removeHeader(name)".magenta
,"\t"
,"\tRemoves a header that's queued for implicit sending."
,"\t"
,"\tExample:"
,"\t"
,"\t    response.removeHeader(\"Content-Encoding\");".green
,"\t"
,"\t"
,"\t### response.write(chunk, [encoding])".magenta
,"\t"
,"\tIf this method is called and `response.writeHead()` has not been called, it will"
,"\tswitch to implicit header mode and flush the implicit headers."
,"\t"
,"\tThis sends a chunk of the response body. This method may"
,"\tbe called multiple times to provide successive parts of the body."
,"\t"
,"\t`chunk` can be a string or a buffer. If `chunk` is a string,"
,"\tthe second parameter specifies how to encode it into a byte stream."
,"\tBy default the `encoding` is `'utf8'`."
,"\t"
,"\t**Note**: This is the raw HTTP body and has nothing to do with"
,"\thigher-level multi-part body encodings that may be used."
,"\t"
,"\tThe first time `response.write()` is called, it will send the buffered"
,"\theader information and the first body to the client. The second time"
,"\t`response.write()` is called, Node assumes you're going to be streaming"
,"\tdata, and sends that separately. That is, the response is buffered up to the"
,"\tfirst chunk of body."
,"\t"
,"\t### response.addTrailers(headers)".magenta
,"\t"
,"\tThis method adds HTTP trailing headers (a header but at the end of the"
,"\tmessage) to the response."
,"\t"
,"\tTrailers will **only** be emitted if chunked encoding is used for the"
,"\tresponse; if it is not (e.g., if the request was HTTP/1.0), they will"
,"\tbe silently discarded."
,"\t"
,"\tNote that HTTP requires the `Trailer` header to be sent if you intend to"
,"\temit trailers, with a list of the header fields in its value. E.g.,"
,"\t"
,"\t    response.writeHead(200, { 'Content-Type': 'text/plain',".green
,"\t                              'Trailer': 'Content-MD5' });".green
,"\t    response.write(fileData);".green
,"\t    response.addTrailers({'Content-MD5': \"7895bf4b8828b55ceaf47747b4bca667\"});".green
,"\t    response.end();".green
,"\t"
,"\t"
,"\t### response.end([data], [encoding])".magenta
,"\t"
,"\tThis method signals to the server that all of the response headers and body"
,"\thas been sent; that server should consider this message complete."
,"\tThe method, `response.end()`, MUST be called on each"
,"\tresponse."
,"\t"
,"\tIf `data` is specified, it is equivalent to calling `response.write(data, encoding)`"
,"\tfollowed by `response.end()`."
,"\t"
,"\t"
,"\t## http.request(options, callback)".cyan
,"\t"
,"\tNode maintains several connections per server to make HTTP requests."
,"\tThis function allows one to transparently issue requests.  `options` align"
,"\twith [url.parse()](url.html#url.parse)."
,"\t"
,"\tOptions:"
,"\t"
,"\t- `host`: A domain name or IP address of the server to issue the request to.".blue
,"\t  Defaults to `'localhost'`.".blue
,"\t- `hostname`: To support `url.parse()` `hostname` is preferred over `host`".blue
,"\t- `port`: Port of remote server. Defaults to 80.".blue
,"\t- `socketPath`: Unix Domain Socket (use one of host:port or socketPath)".blue
,"\t- `method`: A string specifying the HTTP request method. Defaults to `'GET'`.".blue
,"\t- `path`: Request path. Defaults to `'/'`. Should include query string if any.".blue
,"\t  E.G. `'/index.html?page=12'`".blue
,"\t- `headers`: An object containing request headers.".blue
,"\t- `auth`: Basic authentication i.e. `'user:password'` to compute an".blue
,"\t  Authorization header.".blue
,"\t- `agent`: Controls [Agent](#http.Agent) behavior. When an Agent is used".blue
,"\t  request will default to `Connection: keep-alive`. Possible values:".blue
,"\t - `undefined` (default): use [global Agent](#http.globalAgent) for this host".blue
,"\t   and port.".blue
,"\t - `Agent` object: explicitly use the passed in `Agent`.".blue
,"\t - `false`: opts out of connection pooling with an Agent, defaults request to".blue
,"\t   `Connection: close`.".blue
,"\t"
,"\t`http.request()` returns an instance of the `http.ClientRequest`"
,"\tclass. The `ClientRequest` instance is a writable stream. If one needs to"
,"\tupload a file with a POST request, then write to the `ClientRequest` object."
,"\t"
,"\tExample:"
,"\t"
,"\t    var options = {".green
,"\t      host: 'www.google.com',".green
,"\t      port: 80,".green
,"\t      path: '/upload',".green
,"\t      method: 'POST'".green
,"\t    };".green
,"\t".green
,"\t    var req = http.request(options, function(res) {".green
,"\t      console.log('STATUS: ' + res.statusCode);".green
,"\t      console.log('HEADERS: ' + JSON.stringify(res.headers));".green
,"\t      res.setEncoding('utf8');".green
,"\t      res.on('data', function (chunk) {".green
,"\t        console.log('BODY: ' + chunk);".green
,"\t      });".green
,"\t    });".green
,"\t".green
,"\t    req.on('error', function(e) {".green
,"\t      console.log('problem with request: ' + e.message);".green
,"\t    });".green
,"\t".green
,"\t    // write data to request body".green
,"\t    req.write('data\\n');".green
,"\t    req.write('data\\n');".green
,"\t    req.end();".green
,"\t"
,"\tNote that in the example `req.end()` was called. With `http.request()` one"
,"\tmust always call `req.end()` to signify that you're done with the request -"
,"\teven if there is no data being written to the request body."
,"\t"
,"\tIf any error is encountered during the request (be that with DNS resolution,"
,"\tTCP level errors, or actual HTTP parse errors) an `'error'` event is emitted"
,"\ton the returned request object."
,"\t"
,"\tThere are a few special headers that should be noted."
,"\t"
,"\t* Sending a 'Connection: keep-alive' will notify Node that the connection to".blue
,"\t  the server should be persisted until the next request.".blue
,"\t".blue
,"\t* Sending a 'Content-length' header will disable the default chunked encoding.".blue
,"\t".blue
,"\t* Sending an 'Expect' header will immediately send the request headers.".blue
,"\t  Usually, when sending 'Expect: 100-continue', you should both set a timeout".blue
,"\t  and listen for the `continue` event. See RFC2616 Section 8.2.3 for more".blue
,"\t  information.".blue
,"\t".blue
,"\t* Sending an Authorization header will override using the `auth` option".blue
,"\t  to compute basic authentication.".blue
,"\t"
,"\t## http.get(options, callback)".cyan
,"\t"
,"\tSince most requests are GET requests without bodies, Node provides this"
,"\tconvenience method. The only difference between this method and `http.request()` is"
,"\tthat it sets the method to GET and calls `req.end()` automatically."
,"\t"
,"\tExample:"
,"\t"
,"\t    var options = {".green
,"\t      host: 'www.google.com',".green
,"\t      port: 80,".green
,"\t      path: '/index.html'".green
,"\t    };".green
,"\t".green
,"\t    http.get(options, function(res) {".green
,"\t      console.log(\"Got response: \" + res.statusCode);".green
,"\t    }).on('error', function(e) {".green
,"\t      console.log(\"Got error: \" + e.message);".green
,"\t    });".green
,"\t"
,"\t"
,"\t## Class: http.Agent".cyan
,"\t"
,"\tIn node 0.5.3+ there is a new implementation of the HTTP Agent which is used"
,"\tfor pooling sockets used in HTTP client requests."
,"\t"
,"\tPreviously, a single agent instance help the pool for single host+port. The"
,"\tcurrent implementation now holds sockets for any number of hosts."
,"\t"
,"\tThe current HTTP Agent also defaults client requests to using"
,"\tConnection:keep-alive. If no pending HTTP requests are waiting on a socket"
,"\tto become free the socket is closed. This means that node's pool has the"
,"\tbenefit of keep-alive when under load but still does not require developers"
,"\tto manually close the HTTP clients using keep-alive."
,"\t"
,"\tSockets are removed from the agent's pool when the socket emits either a"
,"\t\"close\" event or a special \"agentRemove\" event. This means that if you intend"
,"\tto keep one HTTP request open for a long time and don't want it to stay in the"
,"\tpool you can do something along the lines of:"
,"\t"
,"\t    http.get(options, function(res) {".green
,"\t      // Do stuff".green
,"\t    }).on(\"socket\", function (socket) {".green
,"\t      socket.emit(\"agentRemove\");".green
,"\t    });".green
,"\t"
,"\tAlternatively, you could just opt out of pooling entirely using `agent:false`:"
,"\t"
,"\t    http.get({host:'localhost', port:80, path:'/', agent:false}, function (res) {".yellow
,"\t      // Do stuff".yellow
,"\t    })".yellow
,"\t"
,"\t### agent.maxSockets".magenta
,"\t"
,"\tBy default set to 5. Determines how many concurrent sockets the agent can have "
,"\topen per host."
,"\t"
,"\t### agent.sockets".magenta
,"\t"
,"\tAn object which contains arrays of sockets currently in use by the Agent. Do not "
,"\tmodify."
,"\t"
,"\t### agent.requests".magenta
,"\t"
,"\tAn object which contains queues of requests that have not yet been assigned to "
,"\tsockets. Do not modify."
,"\t"
,"\t## http.globalAgent".cyan
,"\t"
,"\tGlobal instance of Agent which is used as the default for all http client"
,"\trequests."
,"\t"
,"\t"
,"\t## Class: http.ClientRequest".cyan
,"\t"
,"\tThis object is created internally and returned from `http.request()`.  It"
,"\trepresents an _in-progress_ request whose header has already been queued.  The"
,"\theader is still mutable using the `setHeader(name, value)`, `getHeader(name)`,"
,"\t`removeHeader(name)` API.  The actual header will be sent along with the first"
,"\tdata chunk or when closing the connection."
,"\t"
,"\tTo get the response, add a listener for `'response'` to the request object."
,"\t`'response'` will be emitted from the request object when the response"
,"\theaders have been received.  The `'response'` event is executed with one"
,"\targument which is an instance of `http.ClientResponse`."
,"\t"
,"\tDuring the `'response'` event, one can add listeners to the"
,"\tresponse object; particularly to listen for the `'data'` event. Note that"
,"\tthe `'response'` event is called before any part of the response body is received,"
,"\tso there is no need to worry about racing to catch the first part of the"
,"\tbody. As long as a listener for `'data'` is added during the `'response'`"
,"\tevent, the entire body will be caught."
,"\t"
,"\t"
,"\t    // Good".green
,"\t    request.on('response', function (response) {".green
,"\t      response.on('data', function (chunk) {".green
,"\t        console.log('BODY: ' + chunk);".green
,"\t      });".green
,"\t    });".green
,"\t".green
,"\t    // Bad - misses all or part of the body".green
,"\t    request.on('response', function (response) {".green
,"\t      setTimeout(function () {".green
,"\t        response.on('data', function (chunk) {".green
,"\t          console.log('BODY: ' + chunk);".green
,"\t        });".green
,"\t      }, 10);".green
,"\t    });".green
,"\t"
,"\tNote: Node does not check whether Content-Length and the length of the body"
,"\twhich has been transmitted are equal or not."
,"\t"
,"\tThe request implements the [Writable  Stream](stream.html#writable_stream)"
,"\tinterface. This is an `EventEmitter` with the following events:"
,"\t"
,"\t### Event 'response'".magenta
,"\t"
,"\t`function (response) { }`".green
,"\t"
,"\tEmitted when a response is received to this request. This event is emitted only once. The"
,"\t`response` argument will be an instance of `http.ClientResponse`."
,"\t"
,"\tOptions:"
,"\t"
,"\t- `host`: A domain name or IP address of the server to issue the request to.".blue
,"\t- `port`: Port of remote server.".blue
,"\t- `socketPath`: Unix Domain Socket (use one of host:port or socketPath)".blue
,"\t"
,"\t### Event: 'socket'".magenta
,"\t"
,"\t`function (socket) { }`".green
,"\t"
,"\tEmitted after a socket is assigned to this request."
,"\t"
,"\t### Event: 'upgrade'".magenta
,"\t"
,"\t`function (response, socket, head) { }`".green
,"\t"
,"\tEmitted each time a server responds to a request with an upgrade. If this"
,"\tevent isn't being listened for, clients receiving an upgrade header will have"
,"\ttheir connections closed."
,"\t"
,"\tA client server pair that show you how to listen for the `upgrade` event using `http.getAgent`:"
,"\t"
,"\t    var http = require('http');".green
,"\t    var net = require('net');".green
,"\t".green
,"\t    // Create an HTTP server".green
,"\t    var srv = http.createServer(function (req, res) {".green
,"\t      res.writeHead(200, {'Content-Type': 'text/plain'});".green
,"\t      res.end('okay');".green
,"\t    });".green
,"\t    srv.on('upgrade', function(req, socket, upgradeHead) {".green
,"\t      socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\\r\\n' +".green
,"\t                   'Upgrade: WebSocket\\r\\n' +".green
,"\t                   'Connection: Upgrade\\r\\n' +".green
,"\t                   '\\r\\n\\r\\n');".green
,"\t".green
,"\t      socket.ondata = function(data, start, end) {".green
,"\t        socket.write(data.toString('utf8', start, end), 'utf8'); // echo back".green
,"\t      };".green
,"\t    });".green
,"\t".green
,"\t    // now that server is running".green
,"\t    srv.listen(1337, '127.0.0.1', function() {".green
,"\t".green
,"\t      // make a request".green
,"\t      var options = {".green
,"\t        port: 1337,".green
,"\t        host: '127.0.0.1',".green
,"\t        headers: {".green
,"\t          'Connection': 'Upgrade',".green
,"\t          'Upgrade': 'websocket'".green
,"\t        }".green
,"\t      };".green
,"\t".green
,"\t      var req = http.request(options);".green
,"\t      req.end();".green
,"\t".green
,"\t      req.on('upgrade', function(res, socket, upgradeHead) {".green
,"\t        console.log('got upgraded!');".green
,"\t        socket.end();".green
,"\t        process.exit(0);".green
,"\t      });".green
,"\t    });".green
,"\t"
,"\t### Event: 'continue'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tEmitted when the server sends a '100 Continue' HTTP response, usually because"
,"\tthe request contained 'Expect: 100-continue'. This is an instruction that"
,"\tthe client should send the request body."
,"\t"
,"\t### request.write(chunk, [encoding])".magenta
,"\t"
,"\tSends a chunk of the body.  By calling this method"
,"\tmany times, the user can stream a request body to a"
,"\tserver--in that case it is suggested to use the"
,"\t`['Transfer-Encoding', 'chunked']` header line when"
,"\tcreating the request."
,"\t"
,"\tThe `chunk` argument should be a [buffer](buffer.html) or a string."
,"\t"
,"\tThe `encoding` argument is optional and only applies when `chunk` is a string."
,"\tDefaults to `'utf8'`."
,"\t"
,"\t"
,"\t### request.end([data], [encoding])".magenta
,"\t"
,"\tFinishes sending the request. If any parts of the body are"
,"\tunsent, it will flush them to the stream. If the request is"
,"\tchunked, this will send the terminating `'0\\r\\n\\r\\n'`."
,"\t"
,"\tIf `data` is specified, it is equivalent to calling"
,"\t`request.write(data, encoding)` followed by `request.end()`."
,"\t"
,"\t### request.abort()".magenta
,"\t"
,"\tAborts a request.  (New since v0.3.8.)"
,"\t"
,"\t### request.setTimeout(timeout, [callback])".magenta
,"\t"
,"\tOnce a socket is assigned to this request and is connected "
,"\t[socket.setTimeout(timeout, [callback])](net.html#socket.setTimeout)"
,"\twill be called."
,"\t"
,"\t### request.setNoDelay([noDelay])".magenta
,"\t"
,"\tOnce a socket is assigned to this request and is connected "
,"\t[socket.setNoDelay(noDelay)](net.html#socket.setNoDelay)"
,"\twill be called."
,"\t"
,"\t### request.setSocketKeepAlive([enable], [initialDelay])".magenta
,"\t"
,"\tOnce a socket is assigned to this request and is connected "
,"\t[socket.setKeepAlive(enable, [initialDelay])](net.html#socket.setKeepAlive)"
,"\twill be called."
,"\t"
,"\t## http.ClientResponse".cyan
,"\t"
,"\tThis object is created when making a request with `http.request()`. It is"
,"\tpassed to the `'response'` event of the request object."
,"\t"
,"\tThe response implements the [Readable Stream](stream.html#readable_stream)"
,"\tinterface. This is an `EventEmitter` with the following events:"
,"\t"
,"\t"
,"\t### Event: 'data'".magenta
,"\t"
,"\t`function (chunk) { }`".green
,"\t"
,"\tEmitted when a piece of the message body is received."
,"\t"
,"\tNote that the __data will be lost__ if there is no listener when a"
,"\t`ClientResponse` emits a `'data'` event."
,"\t"
,"\t"
,"\t### Event: 'end'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tEmitted exactly once for each message. No arguments. After"
,"\temitted no other events will be emitted on the response."
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\t`function (err) { }`".green
,"\t"
,"\tIndicates that the underlaying connection was terminated before"
,"\t`end` event was emitted."
,"\tSee [http.ServerRequest](#http.ServerRequest)'s `'close'` event for more"
,"\tinformation."
,"\t"
,"\t### response.statusCode".magenta
,"\t"
,"\tThe 3-digit HTTP response status code. E.G. `404`."
,"\t"
,"\t### response.httpVersion".magenta
,"\t"
,"\tThe HTTP version of the connected-to server. Probably either"
,"\t`'1.1'` or `'1.0'`."
,"\tAlso `response.httpVersionMajor` is the first integer and"
,"\t`response.httpVersionMinor` is the second."
,"\t"
,"\t### response.headers".magenta
,"\t"
,"\tThe response headers object."
,"\t"
,"\t### response.trailers".magenta
,"\t"
,"\tThe response trailers object. Only populated after the 'end' event."
,"\t"
,"\t### response.setEncoding([encoding])".magenta
,"\t"
,"\tSet the encoding for the response body. Either `'utf8'`, `'ascii'`, or"
,"\t`'base64'`. Defaults to `null`, which means that the `'data'` event will emit"
,"\ta `Buffer` object."
,"\t"
,"\t### response.pause()".magenta
,"\t"
,"\tPauses response from emitting events.  Useful to throttle back a download."
,"\t"
,"\t### response.resume()".magenta
,"\t"
,"\tResumes a paused response."
, "\t"
, "\t"
, "\t"
, "\tfrom: http://docs.nodejitsu.com".red.underline.bold
, "\t================================"
, "\t"
, "\tHow to handle multipart form data".red
, "\t"
, "\tHandling form data and file uploads properly is an important and complex problem in HTTP servers. Doing it by hand would involve parsing streaming binary data, writing it to the file system, parsing out other form data, and several other complex concerns - luckily, only a very few people will need to worry about it on that deep level. Felix Geisendorfer, one of the Node.js core committers, wrote a library called node-formidable that handles all the hard parts for you. With its friendly API, you can be parsing forms and receiving file uploads in no time."
, "\t"
, "\tThis example is taken directly from the node-formidable GitHub page, with some additional explanation added."
, "\t"
, "\t  var formidable = require('formidable'),".green
, "\t      http = require('http'),".green
, "\t      util = require('util');".green
, "\t".green
, "\t  http.createServer(function(req, res) {".green
, "\t".green
, "\t    // This if statement is here to catch form submissions, and initiate multipart form data parsing.".green
, "\t".green
, "\t    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {".green
, "\t".green
, "\t      // Instantiate a new formidable form for processing.".green
, "\t".green
, "\t      var form = new formidable.IncomingForm();".green
, "\t".green
, "\t      // form.parse analyzes the incoming stream data, picking apart the different fields and files for you.".green
, "\t".green
, "\t      form.parse(req, function(err, fields, files) {".green
, "\t        if (err) {".green
, "\t".green
, "\t          // Check for and handle any errors here.".green
, "\t".green
, "\t          console.error(err.message);".green
, "\t          return;".green
, "\t        }".green
, "\t        res.writeHead(200, {'content-type': 'text/plain'});".green
, "\t        res.write('received upload:\n\n');".green
, "\t".green
, "\t        // This last line responds to the form submission with a list of the parsed data and files.".green
, "\t".green
, "\t        res.end(util.inspect({fields: fields, files: files}));".green
, "\t      });".green
, "\t      return;".green
, "\t    }".green
, "\t".green
, "\t    // If this is a regular request, and not a form submission, then send the form.".green
, "\t".green
, "\t    res.writeHead(200, {'content-type': 'text/html'});".green
, "\t    res.end(".green
, "\t      '<form action=\"/upload\" enctype=\"multipart/form-data\" method=\"post\">'+".green
, "\t      '<input type=\"text\" name=\"title\"><br>'+".green
, "\t      '<input type=\"file\" name=\"upload\" multiple=\"multiple\"><br>'+".green
, "\t      '<input type=\"submit\" value=\"Upload\">'+".green
, "\t      '</form>'".green
, "\t    );".green
, "\t  }).listen(8080);".green
, "\t"
, "\tTry it out for yourself - it's definitely the simpler solution, and node-formidable is a battle-hardened, production-ready library. Let userland solve problems like this for you, so that you can get back to writing the rest of your code!"
, "\t"
, "\t"
, "\tHow can I read POST data?".red
, "\t"
, "\tby Mr. Nico Reed [github] on Fri Aug 26 2011 03:08:50 GMT-0700 (PST) articlesHTTPservershow-to-read-POST-data"
, "\tReading the data from a POST request (i.e. a form submission) can be a little bit of a pitfall in Node.js, so we're going to go through an example of how to do it properly. The first step, obviously, is to listen for incoming data - the trick is to wait for the data to finish, so that you can process all the form data without losing anything."
, "\t"
, "\tHere is a quick script that shows you how to do exactly that:"
, "\t"
, "\tvar http = require('http');".green
, "\tvar postHTML = ".green
, "\t  '<html><head><title>Post Example</title></head>' +".green
, "\t  '<body>' +".green
, "\t  '<form method=\"post\">' +".green
, "\t  'Input 1: <input name=\"input1\"><br>' +".green
, "\t  'Input 2: <input name=\"input2\"><br>' +".green
, "\t  '<input type=\"submit\">' +".green
, "\t  '</form>' +".green
, "\t  '</body></html>';".green
, "\t".green
, "\thttp.createServer(function (req, res) {".green
, "\t  var body = '';".green
, "\t  req.on('data', function (chunk) {".green
, "\t    body += chunk;".green
, "\t  });".green
, "\t  req.on('end', function () {".green
, "\t    console.log('POSTed: ' + body);".green
, "\t    res.writeHead(200);".green
, "\t    res.end(postHTML);".green
, "\t  });".green
, "\t}).listen(8080);".green
, "\t"
, "\tThe variable postHTML is a static string containing the HTML for two input boxes and a submit box - this HTML is provided so that you can POST example data. This is NOT the right way to serve static HTML - please see How to Serve Static Files for a more proper example."
, "\t"
, "\tWith the HTML out of the way, we create a server to listen for requests. It is important to note, when listening for POST data, that the req object is also an Event Emitter. req, therefore, will emit a data event whenever a 'chunk' of incoming data is received; when there is no more incoming data, the end event is emitted. So, in our case, we listen for data events. Once all the data is recieved, we log the data to the console and send the response."
, "\t"
, "\tSomething important to note is that the event listeners are being added immediately after the request object is received. If you don't immediately set them, then there is a possibility of missing some of the events. If, for example, an event listener was attached from inside a callback, then the data and end events might be fired in the meantime with no listeners attached!"
, "\t"
, "\tYou can save this script to server.js and run it with node server.js. Once you run it you will notice that occassionally you will see lines with no data, e.g. POSTed:. This happens because regular GET requests go through the same codepath. In a more 'real-world' application, it would be proper practice to check the type of request and handle the different request types differently."
, "\t"
, "\t"
, "\tHow to serve static files".red
, "\t"
, "\tA basic necessity for most http servers is to be able to serve static files. Thankfully, it is not that hard to do in Node.js. First you [link]read the file, then you serve the file. Here is an example of a script that will serve the files in the current directory:"
, "\t"
, "\tvar fs = require('fs'),".green
, "\t    http = require('http');".green
, "\t".green
, "\thttp.createServer(function (req, res) {".green
, "\t  fs.readFile(__dirname + req.url, function (err,data) {".green
, "\t    if (err) {".green
, "\t      res.writeHead(404);".green
, "\t      res.end(JSON.stringify(err));".green
, "\t      return;".green
, "\t    }".green
, "\t    res.writeHead(200);".green
, "\t    res.end(data);".green
, "\t  });".green
, "\t}).listen(8080);".green
, "\t"
, "\tThis example takes the path requested and it serves that path, relative to the local directory. This works fine as a quick solution; however, there are a few problems with this approach. First, this code does not correctly handle mime types. Additionally, a proper static file server should really be taking advantage of client side caching, and should send a \"Not Modified\" response if nothing has changed. Furthermore, there are security bugs that can enable a malicious user to break out of the current directory. (for example, GET /../../../)."
, "\t"
, "\tEach of these can be addressed invidually without much difficulty. You can send the proper mime type header. You can figure how to utilize the client caches. You can take advantage of path.normalize to make sure that requests don't break out of the current directory. But why write all that code when you can just use someone else's library?"
, "\t"
, "\tThere is a good static file server called node-static written by Alexis Sellier which you can leverage. Here is a script which functions similarly to the previous one:"
, "\t"
, "\tvar static = require('node-static');".green
, "\tvar http = require('http');".green
, "\t".green
, "\tvar file = new(static.Server)();".green
, "\t".green
, "\thttp.createServer(function (req, res) {".green
, "\t  file.serve(req, res);".green
, "\t}).listen(8080);".green
, "\t"
, "\tThis is a fully functional file server that doesn't have any of the bugs previously mentioned. This is just the most basic set up, there are more things you can do if you look at the api. Also since it is an open source project, you can always modify it to your needs (and feel free to contribute back to the project!)."
, "\t"
, "\t"
, "\tHow do I create a HTTP server?".red
, "\t"
, "\tMaking a simple HTTP server in Node.js has become the de facto 'hello world' for the platform. On the one hand, Node.js provides extremely easy-to-use HTTP APIs; on the other hand, a simple web server also serves as an excellent demonstration of Node's asynchronous strengths."
, "\t"
, "\tLet's take a look at a very simple example:"
, "\t"
, "\tvar http = require('http');".green
, "\tvar requestListener = function (req, res) {".green
, "\t  res.writeHead(200);".green
, "\t  res.end('Hello, World!\n');".green
, "\t}".green
, "\t".green
, "\tvar server = http.createServer(requestListener);".green
, "\tserver.listen(8080);".green
, "\t"
, "\tSave this in a file called server.js - run node server.js, and your program will hang there... it's waiting for connections to respond to, so you'll have to give it one if you want to see it do anything. Try opening up a browser, and typing localhost:8080 into the location bar. If everything has been set up correctly, you should see your server saying hello!"
, "\t"
, "\tLet's take a more in-depth look at what the above code is doing. First, a function is defined called requestListener that takes a request object and a response object as parameters."
, "\t"
, "\tThe request object contains things such as the requested URL, but in this example we ignore it and always return \"Hello World\"."
, "\t"
, "\tThe response object is how we send the headers and contents of the response back to the user making the request. Here we return a 200 response code (signaling a successful response) with the body \"Hello World\". Other headers, such as Content-type, would also be set here."
, "\t"
, "\tNext, the http.createServer method creates a server that calls requestListener whenever a request comes in. The next line, server.listen(8080), calls the listen method, which causes the server to wait for incoming requests on the specified port - 8080, in this case."
, "\t"
, "\tThere you have it - your most basic Node.js HTTP server."
, "\t"
, "\t"
, "\tHow to create an https server?".red
, "\t"
, "\tTo create an HTTPS server, you need two things: an SSL certificate, and Node's built-in https module."
, "\t"
, "\tWe need to start out with a word about SSL certificates. Speaking generally, there are two kinds of certificates: those signed by a 'Certificate Authority', or CA, and 'self-signed certificates'. A Certificate Authority is a trusted source for an SSL certificate, and using a certificate from a CA allows your users to be trust the identity of your website. In most cases, you would want to use a CA-signed certificate in a production environment - for testing purposes, however, a self-signed certicate will do just fine."
, "\t"
, "\tTo generate a self-signed certificate, run the following in your shell:"
, "\t"
, "\topenssl genrsa -out key.pem".green
, "\topenssl req -new -key key.pem -out csr.pem".green
, "\topenssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem".green
, "\trm csr.pem".green
, "\t"
, "\tThis should leave you with two files, cert.pem (the certificate) and key.pem (the private key). This is all you need for a SSL connection. So now you set up a quick hello world example (the biggest difference between https and http is the options parameter):"
, "\t"
, "\tvar https = require('https');".green
, "\tvar fs = require('fs');".green
, "\t".green
, "\tvar options = {".green
, "\t  key: fs.readFileSync('key.pem'),".green
, "\t  cert: fs.readFileSync('cert.pem')".green
, "\t};".green
, "\t".green
, "\tvar a = https.createServer(options, function (req, res) {".green
, "\t  res.writeHead(200);".green
, "\t  res.end(\"hello world\\n\");".green
, "\t}).listen(8000);".green
, "\t"
, "\tNODE PRO TIP: Note fs.readFileSync - unlike fs.readFile, fs.readFileSync will block the entire process until it completes. In situations like this - loading vital configuration data - the sync functions are okay. In a busy server, however, using a synchronous function during a request will force the server to deal with the requests one by one!"
, "\t"
, "\tNow that your server is set up and started, you should be able to get the file with curl:"
, "\t"
, "\tcurl -k https://localhost:8000".yellow
, "\tor in your browser, by going to https://localhost:8000 ."
, "\t"
, "\t"
, "\tHow to access query string parameters".red
, "\t"
, "\tIn Node.js, functionality to aid in the accessing of URL query string parameters is built into the standard library. The built-in url.parse method takes care of most of the heavy lifting for us. Here is an example script using this handy function and an explanation on how it works:"
, "\t"
, "\tvar fs = require('fs');".green
, "\tvar http = require('http');".green
, "\tvar url = require('url') ;".green
, "\t".green
, "\thttp.createServer(function (req, res) {".green
, "\t  var queryObject = url.parse(req.url,true).query;".green
, "\t  console.log(queryObject);".green
, "\t".green
, "\t  res.writeHead(200);".green
, "\t  res.end('Feel free to add query parameters to the end of the url');".green
, "\t}).listen(8080);".green
, "\t"
, "\tThe key part of this whole script is this line: var queryObject = url.parse(req.url,true).query;. Let's take a look at things from the inside-out. First off, req.url will look like /app.js?foo=bad&baz=foo. This is the part that is in the URL bar of the browser. Next, it gets passed to url.parse which parses out the various elements of the URL (NOTE: the second paramater is a boolean stating whether the method should parse the query string, so we set it to true). Finally, we access the .query property, which returns us a nice, friendly Javascript object with our query string data."
, "\t"
, "\t"
, "\tHow do I make a http request?".red
, "\t"
, "\tAnother extremely common programming task is making an HTTP request to a web server. Node.js provides an extremely simple API for this functionality in the form of http.request."
, "\t"
, "\tAs an example, we are going to preform a GET request to www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new (which returns a random integer between 1 and 10) and print the result to the console."
, "\t"
, "\tvar http = require('http');".green
, "\t".green
, "\t//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'".green
, "\tvar options = {".green
, "\t  host: 'www.random.org',".green
, "\t  path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'".green
, "\t};".green
, "\t".green
, "\tcallback = function(response) {".green
, "\t  var str = '';".green
, "\t".green
, "\t  //another chunk of data has been recieved, so append it to `str`".green
, "\t  response.on('data', function (chunk) {".green
, "\t    str += chunk;".green
, "\t  });".green
, "\t".green
, "\t  //the whole response has been recieved, so we just print it out here".green
, "\t  response.on('end', function () {".green
, "\t    console.log(str);".green
, "\t  });".green
, "\t}".green
, "\t".green
, "\thttp.request(options, callback).end();".green
, "\t"
, "\tMaking a POST request is just as easy. We will make a POST request to www.nodejitsu.com:1337 which is running a server that will echo back what we post. The code for making a POST request is almost identical to making a GET request, just a few simple modifications:"
, "\t"
, "\tvar http = require('http');".green
, "\t".green
, "\t//The url we want is `www.nodejitsu.com:1337/`".green
, "\tvar options = {".green
, "\t  host: 'www.nodejitsu.com',".green
, "\t  path: '/',".green
, "\t  //since we are listening on a custom port, we need to specify it by hand".green
, "\t  port: '1337',".green
, "\t  //This is what changes the request to a POST request".green
, "\t  method: 'POST'".green
, "\t};".green
, "\t".green
, "\tcallback = function(response) {".green
, "\t  var str = ''".green
, "\t  response.on('data', function (chunk) {".green
, "\t    str += chunk;".green
, "\t  });".green
, "\t".green
, "\t  response.on('end', function () {".green
, "\t    console.log(str);".green
, "\t  });".green
, "\t}".green
, "\t".green
, "\tvar req = http.request(options, callback);".green
, "\t//This is the data we are posting, it needs to be a string or a buffer".green
, "\treq.write(\"hello world!\");".green
, "\treq.end();".green
, "\t"
, "\tThrowing in custom headers is just a tiny bit harder. On www.nodejitsu.com:1338 we are running a server that will print out the custom header. So we will just make a quick request to it:"
, "\t"
, "\tvar http = require('http');".green
, "\t".green
, "\tvar options = {".green
, "\t  host: 'www.nodejitsu.com',".green
, "\t  path: '/',".green
, "\t  port: '1338',".green
, "\t  //This is the only line that is new. `headers` is an object with the headers to request".green
, "\t  headers: {'custom': 'Custom Header Demo works'}".green
, "\t};".green
, "\t".green
, "\tcallback = function(response) {".green
, "\t  var str = ''".green
, "\t  response.on('data', function (chunk) {".green
, "\t    str += chunk;".green
, "\t  });".green
, "\t".green
, "\t  response.on('end', function () {".green
, "\t    console.log(str);".green
, "\t  });".green
, "\t}".green
, "\t".green
, "\tvar req = http.request(options, callback);".green
, "\treq.end();".green
].join('\n');
