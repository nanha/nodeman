exports.name = 'net';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/net.html';
exports.description = [
 "\t# net".red
,"\t"
,"\tThe `net` module provides you with an asynchronous network wrapper. It contains"
,"\tmethods for creating both servers and clients (called streams). You can include"
,"\tthis module with `require('net');`"
,"\t"
,"\t## net.createServer([options], [connectionListener])".cyan
,"\t"
,"\tCreates a new TCP server. The `connectionListener` argument is"
,"\tautomatically set as a listener for the ['connection'](#event_connection_)"
,"\tevent."
,"\t"
,"\t`options` is an object with the following defaults:"
,"\t"
,"\t    { allowHalfOpen: false".green
,"\t    }".green
,"\t"
,"\tIf `allowHalfOpen` is `true`, then the socket won't automatically send FIN"
,"\tpacket when the other end of the socket sends a FIN packet. The socket becomes"
,"\tnon-readable, but still writable. You should call the `end()` method explicitly."
,"\tSee ['end'](#event_end_) event for more information."
,"\t"
,"\tHere is an example of a echo server which listens for connections"
,"\ton port 8124:"
,"\t"
,"\t    var net = require('net');".green
,"\t    var server = net.createServer(function(c) { //'connection' listener".green
,"\t      console.log('server connected');".green
,"\t      c.on('end', function() {".green
,"\t        console.log('server disconnected');".green
,"\t      });".green
,"\t      c.write('hello\r\n');".green
,"\t      c.pipe(c);".green
,"\t    });".green
,"\t    server.listen(8124, function() { //'listening' listener".green
,"\t      console.log('server bound');".green
,"\t    });".green
,"\t".green
,"\tTest this by using `telnet`:"
,"\t"
,"\t    telnet localhost 8124".green
,"\t"
,"\tTo listen on the socket `/tmp/echo.sock` the third line from the last would"
,"\tjust be changed to"
,"\t"
,"\t    server.listen('/tmp/echo.sock', function() { //'listening' listener".green
,"\t"
,"\tUse `nc` to connect to a UNIX domain socket server:"
,"\t"
,"\t    nc -U /tmp/echo.sock".green
,"\t"
,"\t## net.connect(arguments...)".cyan
,"\t## net.createConnection(arguments...)".cyan
,"\t"
,"\tConstruct a new socket object and opens a socket to the given location. When"
,"\tthe socket is established the ['connect'](#event_connect_) event will be"
,"\temitted."
,"\t"
,"\tThe arguments for these methods change the type of connection:"
,"\t"
,"\t* `net.connect(port, [host], [connectListener])`"
,"\t* `net.createConnection(port, [host], [connectListener])`"
,"\t"
,"\t  Creates a TCP connection to `port` on `host`. If `host` is omitted,"
,"\t  `'localhost'` will be assumed."
,"\t"
,"\t* `net.connect(path, [connectListener])`"
,"\t* `net.createConnection(path, [connectListener])`"
,"\t"
,"\t  Creates unix socket connection to `path`."
,"\t"
,"\tThe `connectListener` parameter will be added as an listener for the"
,"\t['connect'](#event_connect_) event."
,"\t"
,"\tHere is an example of a client of echo server as described previously:"
,"\t"
,"\t    var net = require('net');".green
,"\t    var client = net.connect(8124, function() { //'connect' listener".green
,"\t      console.log('client connected');".green
,"\t      client.write('world!\r\n');".green
,"\t    });".green
,"\t    client.on('data', function(data) {".green
,"\t      console.log(data.toString());".green
,"\t      client.end();".green
,"\t    });".green
,"\t    client.on('end', function() {".green
,"\t      console.log('client disconnected');".green
,"\t    });".green
,"\t"
,"\tTo connect on the socket `/tmp/echo.sock` the second line would just be"
,"\tchanged to"
,"\t"
,"\t    var client = net.connect('/tmp/echo.sock', function() { //'connect' listener".green
,"\t"
,"\t## Class: net.Server".cyan
,"\t"
,"\tThis class is used to create a TCP or UNIX server."
,"\tA server is a `net.Socket` that can listen for new incoming connections."
,"\t"
,"\t### server.listen(port, [host], [listeningListener])".magenta
,"\t"
,"\tBegin accepting connections on the specified `port` and `host`.  If the"
,"\t`host` is omitted, the server will accept connections directed to any"
,"\tIPv4 address (`INADDR_ANY`). A port value of zero will assign a random port."
,"\t"
,"\tThis function is asynchronous.  When the server has been bound,"
,"\t['listening'](#event_listening_) event will be emitted."
,"\tthe last parameter `listeningListener` will be added as an listener for the"
,"\t['listening'](#event_listening_) event."
,"\t"
,"\tOne issue some users run into is getting `EADDRINUSE` errors. This means that"
,"\tanother server is already running on the requested port. One way of handling this"
,"\twould be to wait a second and then try again. This can be done with"
,"\t"
,"\t    server.on('error', function (e) {".green
,"\t      if (e.code == 'EADDRINUSE') {".green
,"\t        console.log('Address in use, retrying...');".green
,"\t        setTimeout(function () {".green
,"\t          server.close();".green
,"\t          server.listen(PORT, HOST);".green
,"\t        }, 1000);".green
,"\t      }".green
,"\t    });".green
,"\t"
,"\t"
,"\t(Note: All sockets in Node set `SO_REUSEADDR` already)"
,"\t"
,"\t"
,"\t### server.listen(path, [listeningListener])".magenta
,"\t"
,"\tStart a UNIX socket server listening for connections on the given `path`."
,"\t"
,"\tThis function is asynchronous.  When the server has been bound,"
,"\t['listening'](#event_listening_) event will be emitted."
,"\tthe last parameter `listeningListener` will be added as an listener for the"
,"\t['listening'](#event_listening_) event."
,"\t"
,"\t### server.close()".magenta
,"\t"
,"\tStops the server from accepting new connections. This function is"
,"\tasynchronous, the server is finally closed when the server emits a `'close'`"
,"\tevent."
,"\t"
,"\t"
,"\t### server.address()".magenta
,"\t"
,"\tReturns the bound address and port of the server as reported by the operating system."
,"\tUseful to find which port was assigned when giving getting an OS-assigned address."
,"\tReturns an object with two properties, e.g. `{\"address\":\"127.0.0.1\", \"port\":2121}`"
,"\t"
,"\tExample:"
,"\t"
,"\t    var server = net.createServer(function (socket) {".green
,"\t      socket.end(\"goodbye\n\");".green
,"\t    });".green
,"\t".green
,"\t    // grab a random port.".green
,"\t    server.listen(function() {".green
,"\t      address = server.address();".green
,"\t      console.log(\"opened server on %j\", address);".green
,"\t    });".green
,"\t"
,"\tDon't call `server.address()` until the `'listening'` event has been emitted."
,"\t"
,"\t### server.maxConnections".magenta
,"\t"
,"\tSet this property to reject connections when the server's connection count gets"
,"\thigh."
,"\t"
,"\t### server.connections".magenta
,"\t"
,"\tThe number of concurrent connections on the server."
,"\t"
,"\t"
,"\t`net.Server` is an `EventEmitter` with the following events:"
,"\t"
,"\t### Event: 'listening'".magenta
,"\t"
,"\tEmitted when the server has been bound after calling `server.listen`."
,"\t"
,"\t### Event: 'connection'".magenta
,"\t"
,"\t* {Socket object} The connection object"
,"\t"
,"\tEmitted when a new connection is made. `socket` is an instance of"
,"\t`net.Socket`."
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\tEmitted when the server closes."
,"\t"
,"\t### Event: 'error'".magenta
,"\t"
,"\t* {Error Object}"
,"\t"
,"\tEmitted when an error occurs.  The `'close'` event will be called directly"
,"\tfollowing this event.  See example in discussion of `server.listen`."
,"\t"
,"\t## Class: net.Socket".cyan
,"\t"
,"\tThis object is an abstraction of a TCP or UNIX socket.  `net.Socket`"
,"\tinstances implement a duplex Stream interface.  They can be created by the"
,"\tuser and used as a client (with `connect()`) or they can be created by Node"
,"\tand passed to the user through the `'connection'` event of a server."
,"\t"
,"\t### new net.Socket([options])".magenta
,"\t"
,"\tConstruct a new socket object."
,"\t"
,"\t`options` is an object with the following defaults:"
,"\t"
,"\t    { fd: null".green
,"\t      type: null".green
,"\t      allowHalfOpen: false".green
,"\t    }".green
,"\t"
,"\t`fd` allows you to specify the existing file descriptor of socket. `type`"
,"\tspecified underlying protocol. It can be `'tcp4'`, `'tcp6'`, or `'unix'`."
,"\tAbout `allowHalfOpen`, refer to `createServer()` and `'end'` event."
,"\t"
,"\t### socket.connect(port, [host], [connectListener])".magenta
,"\t### socket.connect(path, [connectListener])".magenta
,"\t"
,"\tOpens the connection for a given socket. If `port` and `host` are given,"
,"\tthen the socket will be opened as a TCP socket, if `host` is omitted,"
,"\t`localhost` will be assumed. If a `path` is given, the socket will be"
,"\topened as a unix socket to that path."
,"\t"
,"\tNormally this method is not needed, as `net.createConnection` opens the"
,"\tsocket. Use this only if you are implementing a custom Socket or if a"
,"\tSocket is closed and you want to reuse it to connect to another server."
,"\t"
,"\tThis function is asynchronous. When the ['connect'](#event_connect_) event is"
,"\temitted the socket is established. If there is a problem connecting, the"
,"\t`'connect'` event will not be emitted, the `'error'` event will be emitted with"
,"\tthe exception."
,"\t"
,"\tThe `connectListener` parameter will be added as an listener for the"
,"\t['connect'](#event_connect_) event."
,"\t"
,"\t"
,"\t### socket.bufferSize".magenta
,"\t"
,"\t`net.Socket` has the property that `socket.write()` always works. This is to"
,"\thelp users get up and running quickly. The computer cannot always keep up"
,"\twith the amount of data that is written to a socket - the network connection"
,"\tsimply might be too slow. Node will internally queue up the data written to a"
,"\tsocket and send it out over the wire when it is possible. (Internally it is"
,"\tpolling on the socket's file descriptor for being writable)."
,"\t"
,"\tThe consequence of this internal buffering is that memory may grow. This"
,"\tproperty shows the number of characters currently buffered to be written."
,"\t(Number of characters is approximately equal to the number of bytes to be"
,"\twritten, but the buffer may contain strings, and the strings are lazily"
,"\tencoded, so the exact number of bytes is not known.)"
,"\t"
,"\tUsers who experience large or growing `bufferSize` should attempt to"
,"\t\"throttle\" the data flows in their program with `pause()` and `resume()`."
,"\t"
,"\t"
,"\t### socket.setEncoding([encoding])".magenta
,"\t"
,"\tSets the encoding (either `'ascii'`, `'utf8'`, or `'base64'`) for data that is"
,"\treceived. Defaults to `null`."
,"\t"
,"\t### socket.setSecure()".magenta
,"\t"
,"\tThis function has been removed in v0.3. It used to upgrade the connection to"
,"\tSSL/TLS. See the [TLS section](tls.html#tLS_) for the new API."
,"\t"
,"\t"
,"\t### socket.write(data, [encoding], [callback])".magenta
,"\t"
,"\tSends data on the socket. The second parameter specifies the encoding in the"
,"\tcase of a string--it defaults to UTF8 encoding."
,"\t"
,"\tReturns `true` if the entire data was flushed successfully to the kernel"
,"\tbuffer. Returns `false` if all or part of the data was queued in user memory."
,"\t`'drain'` will be emitted when the buffer is again free."
,"\t"
,"\tThe optional `callback` parameter will be executed when the data is finally"
,"\twritten out - this may not be immediately."
,"\t"
,"\t### socket.write(data, [encoding], [callback])".magenta
,"\t"
,"\tWrite data with the optional encoding. The callback will be made when the"
,"\tdata is flushed to the kernel."
,"\t"
,"\t### socket.end([data], [encoding])".magenta
,"\t"
,"\tHalf-closes the socket. i.e., it sends a FIN packet. It is possible the"
,"\tserver will still send some data."
,"\t"
,"\tIf `data` is specified, it is equivalent to calling"
,"\t`socket.write(data, encoding)` followed by `socket.end()`."
,"\t"
,"\t### socket.destroy()".magenta
,"\t"
,"\tEnsures that no more I/O activity happens on this socket. Only necessary in"
,"\tcase of errors (parse error or so)."
,"\t"
,"\t### socket.pause()".magenta
,"\t"
,"\tPauses the reading of data. That is, `'data'` events will not be emitted."
,"\tUseful to throttle back an upload."
,"\t"
,"\t### socket.resume()".magenta
,"\t"
,"\tResumes reading after a call to `pause()`."
,"\t"
,"\t### socket.setTimeout(timeout, [callback])".magenta
,"\t"
,"\tSets the socket to timeout after `timeout` milliseconds of inactivity on"
,"\tthe socket. By default `net.Socket` do not have a timeout."
,"\t"
,"\tWhen an idle timeout is triggered the socket will receive a `'timeout'`"
,"\tevent but the connection will not be severed. The user must manually `end()`"
,"\tor `destroy()` the socket."
,"\t"
,"\tIf `timeout` is 0, then the existing idle timeout is disabled."
,"\t"
,"\tThe optional `callback` parameter will be added as a one time listener for the"
,"\t`'timeout'` event."
,"\t"
,"\t### socket.setNoDelay([noDelay])".magenta
,"\t"
,"\tDisables the Nagle algorithm. By default TCP connections use the Nagle"
,"\talgorithm, they buffer data before sending it off. Setting `true` for"
,"\t`noDelay` will immediately fire off data each time `socket.write()` is called."
,"\t`noDelay` defaults to `true`."
,"\t"
,"\t### socket.setKeepAlive([enable], [initialDelay])".magenta
,"\t"
,"\tEnable/disable keep-alive functionality, and optionally set the initial"
,"\tdelay before the first keepalive probe is sent on an idle socket."
,"\t`enable` defaults to `false`."
,"\t"
,"\tSet `initialDelay` (in milliseconds) to set the delay between the last"
,"\tdata packet received and the first keepalive probe. Setting 0 for"
,"\tinitialDelay will leave the value unchanged from the default"
,"\t(or previous) setting. Defaults to `0`."
,"\t"
,"\t### socket.address()".magenta
,"\t"
,"\tReturns the bound address and port of the socket as reported by the operating"
,"\tsystem. Returns an object with two properties, e.g."
,"\t`{\"address\":\"192.168.57.1\", \"port\":62053}`"
,"\t"
,"\t### socket.remoteAddress".magenta
,"\t"
,"\tThe string representation of the remote IP address. For example,"
,"\t`'74.125.127.100'` or `'2001:4860:a005::68'`."
,"\t"
,"\t### socket.remotePort".magenta
,"\t"
,"\tThe numeric representation of the remote port. For example,"
,"\t`80` or `21`."
,"\t"
,"\t### socket.bytesRead".magenta
,"\t"
,"\tThe amount of received bytes."
,"\t"
,"\t### socket.bytesWritten".magenta
,"\t"
,"\tThe amount of bytes sent."
,"\t"
,"\t"
,"\t`net.Socket` instances are EventEmitters with the following events:"
,"\t"
,"\t### Event: 'connect'".magenta
,"\t"
,"\tEmitted when a socket connection is successfully established."
,"\tSee `connect()`."
,"\t"
,"\t### Event: 'data'".magenta
,"\t"
,"\t* {Buffer object}"
,"\t"
,"\tEmitted when data is received.  The argument `data` will be a `Buffer` or"
,"\t`String`.  Encoding of data is set by `socket.setEncoding()`."
,"\t(See the [Readable Stream](stream.html#readable_stream) section for more"
,"\tinformation.)"
,"\t"
,"\tNote that the __data will be lost__ if there is no listener when a `Socket`"
,"\temits a `'data'` event."
,"\t"
,"\t### Event: 'end'".magenta
,"\t"
,"\tEmitted when the other end of the socket sends a FIN packet."
,"\t"
,"\tBy default (`allowHalfOpen == false`) the socket will destroy its file"
,"\tdescriptor  once it has written out its pending write queue.  However, by"
,"\tsetting `allowHalfOpen == true` the socket will not automatically `end()`"
,"\tits side allowing the user to write arbitrary amounts of data, with the"
,"\tcaveat that the user is required to `end()` their side now."
,"\t"
,"\t"
,"\t### Event: 'timeout'".magenta
,"\t"
,"\tEmitted if the socket times out from inactivity. This is only to notify that"
,"\tthe socket has been idle. The user must manually close the connection."
,"\t"
,"\tSee also: `socket.setTimeout()`"
,"\t"
,"\t"
,"\t### Event: 'drain'".magenta
,"\t"
,"\tEmitted when the write buffer becomes empty. Can be used to throttle uploads."
,"\t"
,"\tSee also: the return values of `socket.write()`"
,"\t"
,"\t### Event: 'error'".magenta
,"\t"
,"\t* {Error object}"
,"\t"
,"\tEmitted when an error occurs.  The `'close'` event will be called directly"
,"\tfollowing this event."
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\t* `had_error` {Boolean} true if the socket had a transmission error"
,"\t"
,"\tEmitted once the socket is fully closed. The argument `had_error` is a boolean"
,"\twhich says if the socket was closed due to a transmission error."
,"\t"
,"\t## net.isIP(input)".cyan
,"\t"
,"\tTests if input is an IP address. Returns 0 for invalid strings,"
,"\treturns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses."
,"\t"
,"\t"
,"\t## net.isIPv4(input)".cyan
,"\t"
,"\tReturns true if input is a version 4 IP address, otherwise returns false."
,"\t"
,"\t"
,"\t## net.isIPv6(input)".cyan
,"\t"
,"\tReturns true if input is a version 6 IP address, otherwise returns false."
,"\t"
].join('\n');
