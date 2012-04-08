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
].join('\n');
