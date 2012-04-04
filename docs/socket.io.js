exports.name = 'socket.io';
exports.category = 'websocket';
exports.context = 'use require';
exports.homepage = 'http://socket.io';
exports.description = [
 '\t# Socket.IO'.red
,'\t'
,'\tSocket.IO is a Node.JS project that makes WebSockets and realtime possible in'
,'\tall browsers. It also enhances WebSockets by providing built-in multiplexing,'
,'\thorizontal scalability, automatic JSON encoding/decoding, and more.'
,'\t'
,'\t## How to Install'.cyan
,'\t'
,'\tnpm install socket.io'.green
,'\t'
,'\t## How to use'.cyan
,'\t'
,'\tFirst, require `socket.io`:'
,'\t'
,'\tvar io = require(\'socket.io\');'.green
,'\t'
,'\tNext, attach it to a HTTP/HTTPS server. If you\'re using the fantastic `express`'
,'\tweb framework:'
,'\t'
,'\tvar app = express.createServer()'.green
,'\t  , io = io.listen(app);'.green
,'\t'.green
,'\tapp.listen(80);'.green
,'\t'.green
,'\tio.sockets.on(\'connection\', function (socket) {'.green
,'\t  socket.emit(\'news\', { hello: \'world\' });'.green
,'\t  socket.on(\'my other event\', function (data) {'.green
,'\t    console.log(data);'.green
,'\t  });'.green
,'\t});'.green
,'\t'
,'\tFinally, load it from the client side code:'
,'\t'
,'\t<script src="/socket.io/socket.io.js"></script>'.green
,'\t<script>'.green
,'\t  var socket = io.connect(\'http://localhost\');'.green
,'\t  socket.on(\'news\', function (data) {'.green
,'\t    console.log(data);'.green
,'\t    socket.emit(\'my other event\', { my: \'data\' });'.green
,'\t  });'.green
,'\t</script>'.green
,'\t'
,'\tFor more thorough examples, look at the `examples/` directory.'
,'\t'
,'\t## Short recipes'.cyan
,'\t'
,'\t### Sending and receiving events.'.magenta
,'\t'
,'\tSocket.IO allows you to emit and receive custom events.'
,'\tBesides `connect`, `message` and `disconnect`, you can emit custom events:'
,'\t'
,'\t// note, io.listen(<port>) will create a http server for you'.green
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tio.sockets.on(\'connection\', function (socket) {'.green
,'\t  io.sockets.emit(\'this\', { will: \'be received by everyone\' });'.green
,'\t'.green
,'\t  socket.on(\'private message\', function (from, msg) {'.green
,'\t    console.log(\'I received a private message by \', from, \' saying \', msg);'.green
,'\t  });'.green
,'\t'.green
,'\t  socket.on(\'disconnect\', function () {'.green
,'\t    io.sockets.emit(\'user disconnected\');'.green
,'\t  });'.green
,'\t});'.green
,'\t'
,'\t### Storing data associated to a client'.magenta
,'\t'
,'\tSometimes it\'s necessary to store data associated with a client that\'s'
,'\tnecessary for the duration of the session.'
,'\t'
,'\t#### Server side'.magenta
,'\t'
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tio.sockets.on(\'connection\', function (socket) {'.green
,'\t  socket.on(\'set nickname\', function (name) {'.green
,'\t    socket.set(\'nickname\', name, function () { socket.emit(\'ready\'); });'.green
,'\t  });'.green
,'\t'.green
,'\t  socket.on(\'msg\', function () {'.green
,'\t    socket.get(\'nickname\', function (err, name) {'.green
,'\t      console.log(\'Chat message by \', name);'.green
,'\t    });'.green
,'\t  });'.green
,'\t});'.green
,'\t'
,'\t#### Client side'.magenta
,'\t'
,'\t<script>'.green
,'\t  var socket = io.connect(\'http://localhost\');'.green
,'\t'.green
,'\t  socket.on(\'connect\', function () {'.green
,'\t    socket.emit(\'set nickname\', confirm(\'What is your nickname?\'));'.green
,'\t    socket.on(\'ready\', function () {'.green
,'\t      console.log(\'Connected !\');'.green
,'\t      socket.emit(\'msg\', confirm(\'What is your message?\'));'.green
,'\t    });'.green
,'\t  });'.green
,'\t</script>'.green
,'\t'
,'\t### Restricting yourself to a namespace'.magenta
,'\t'
,'\tIf you have control over all the messages and events emitted for a particular'
,'\tapplication, using the default `/` namespace works.'
,'\t'
,'\tIf you want to leverage 3rd-party code, or produce code to share with others,'
,'\tsocket.io provides a way of namespacing a `socket`.'
,'\t'
,'\tThis has the benefit of `multiplexing` a single connection. Instead of'
,'\tsocket.io using two `WebSocket` connections, it\'ll use one.'
,'\t'
,'\tThe following example defines a socket that listens on \'/chat\' and one for'
,'\t\'/news\':'
,'\t'
,'\t#### Server side'.magenta
,'\t'
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tvar chat = io'.green
,'\t  .of(\'/chat\')'.green
,'\t  .on(\'connection\', function (socket) {'.green
,'\t    socket.emit(\'a message\', { that: \'only\', \'/chat\': \'will get\' });'.green
,'\t    chat.emit(\'a message\', { everyone: \'in\', \'/chat\': \'will get\' });'.green
,'\t  });'.green
,'\t'.green
,'\tvar news = io'.green
,'\t  .of(\'/news\');'.green
,'\t  .on(\'connection\', function (socket) {'.green
,'\t    socket.emit(\'item\', { news: \'item\' });'.green
,'\t  });'.green
,'\t'
,'\t#### Client side:'.magenta
,'\t'
,'\t<script>'.green
,'\t  var chat = io.connect(\'http://localhost/chat\')'.green
,'\t    , news = io.connect(\'http://localhost/news\');'.green
,'\t'.green
,'\t  chat.on(\'connect\', function () {'.green
,'\t    chat.emit(\'hi!\');'.green
,'\t  });'.green
,'\t'.green
,'\t  news.on(\'news\', function () {'.green
,'\t    news.emit(\'woot\');'.green
,'\t  });'.green
,'\t</script>'.green
,'\t'
,'\t### Sending volatile messages.'.magenta
,'\t'
,'\tSometimes certain messages can be dropped. Let\'s say you have an app that'
,'\tshows realtime tweets for the keyword `bieber`. '
,'\t'
,'\tIf a certain client is not ready to receive messages (because of network slowness'
,'\tor other issues, or because he\'s connected through long polling and is in the'
,'\tmiddle of a request-response cycle), if he doesn\'t receive ALL the tweets related'
,'\tto bieber your application won\'t suffer.'
,'\t'
,'\tIn that case, you might want to send those messages as volatile messages.'
,'\t'
,'\t#### Server side'.magenta
,'\t'
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tio.sockets.on(\'connection\', function (socket) {'.green
,'\t  var tweets = setInterval(function () {'.green
,'\t    getBieberTweet(function (tweet) {'.green
,'\t      socket.volatile.emit(\'bieber tweet\', tweet);'.green
,'\t    });'.green
,'\t  }, 100);'.green
,'\t'.green
,'\t  socket.on(\'disconnect\', function () {'.green
,'\t    clearInterval(tweets);'.green
,'\t  });'.green
,'\t});'.green
,'\t'
,'\t#### Client side'.magenta
,'\t'
,'\tIn the client side, messages are received the same way whether they\'re volatile'
,'\tor not.'
,'\t'
,'\t### Getting acknowledgements'.magenta
,'\t'
,'\tSometimes, you might want to get a callback when the client confirmed the message'
,'\treception.'
,'\t'
,'\tTo do this, simply pass a function as the last parameter of `.send` or `.emit`.'
,'\tWhat\'s more, when you use `.emit`, the acknowledgement is done by you, which'
,'\tmeans you can also pass data along:'
,'\t'
,'\t#### Server side'.magenta
,'\t'
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tio.sockets.on(\'connection\', function (socket) {'.green
,'\t  socket.on(\'ferret\', function (name, fn) {'.green
,'\t    fn(\'woot\');'.green
,'\t  });'.green
,'\t});'.green
,'\t'
,'\t#### Client side'.magenta
,'\t'
,'\t<script>'.green
,'\t  var socket = io.connect(); // TIP: .connect with no args does auto-discovery'.green
,'\t  socket.on(\'connect\', function () { // TIP: you can avoid listening on `connect` and listen on events directly too!'.green
,'\t    socket.emit(\'ferret\', \'tobi\', function (data) {'.green
,'\t      console.log(data); // data will be \'woot\''.green
,'\t    });'.green
,'\t  });'.green
,'\t</script>'.green
,'\t'
,'\t### Broadcasting messages'.magenta
,'\t'
,'\tTo broadcast, simply add a `broadcast` flag to `emit` and `send` method calls.'
,'\tBroadcasting means sending a message to everyone else except for the socket'
,'\tthat starts it.'
,'\t'
,'\t#### Server side'.magenta
,'\t'
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tio.sockets.on(\'connection\', function (socket) {'.green
,'\t  socket.broadcast.emit(\'user connected\');'.green
,'\t  socket.broadcast.json.send({ a: \'message\' });'.green
,'\t});'.green
,'\t'
,'\t### Rooms'.magenta
,'\t'
,'\tSometimes you want to put certain sockets in the same room, so that it\'s easy'
,'\tto broadcast to all of them together.'
,'\t'
,'\tThink of this as built-in channels for sockets. Sockets `join` and `leave`'
,'\trooms in each socket.'
,'\t'
,'\t#### Server side'.magenta
,'\t'
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tio.sockets.on(\'connection\', function (socket) {'.green
,'\t  socket.join(\'justin bieber fans\');'.green
,'\t  socket.broadcast.to(\'justin bieber fans\').emit(\'new fan\');'.green
,'\t  io.sockets.in(\'rammstein fans\').emit(\'new non-fan\');'.green
,'\t});'.green
,'\t'
,'\t### Using it just as a cross-browser WebSocket'.magenta
,'\t'
,'\tIf you just want the WebSocket semantics, you can do that too.'
,'\tSimply leverage `send` and listen on the `message` event:'
,'\t'
,'\t#### Server side'.magenta
,'\t'
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tio.sockets.on(\'connection\', function (socket) {'.green
,'\t  socket.on(\'message\', function () { });'.green
,'\t  socket.on(\'disconnect\', function () { });'.green
,'\t});'.green
,'\t'
,'\t#### Client side'.magenta
,'\t'
,'\t<script>'.green
,'\t  var socket = io.connect(\'http://localhost/\');'.green
,'\t  socket.on(\'connect\', function () {'.green
,'\t    socket.send(\'hi\');'.green
,'\t'.green
,'\t    socket.on(\'message\', function (msg) {'.green
,'\t      // my msg'.green
,'\t    });'.green
,'\t  });'.green
,'\t</script>'.green
,'\t```'
,'\t'
,'\t### Changing configuration'.magenta
,'\t'
,'\tConfiguration in socket.io is TJ-style:'
,'\t'
,'\t#### Server side'.magenta
,'\t'
,'\tvar io = require(\'socket.io\').listen(80);'.green
,'\t'.green
,'\tio.configure(function () {'.green
,'\t  io.set(\'transports\', [\'websocket\', \'flashsocket\', \'xhr-polling\']);'.green
,'\t});'.green
,'\t'.green
,'\tio.configure(\'development\', function () {'.green
,'\t  io.set(\'transports\', [\'websocket\', \'xhr-polling\']);'.green
,'\t  io.enable(\'log\');'.green
,'\t});'.green
].join('\n');
