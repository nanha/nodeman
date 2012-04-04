exports.name = 'redis';
exports.category = 'cache';
exports.context = 'use require';
exports.homepage = 'https://github.com/mranney/node_redis';
exports.description = [
,'\tredis - a node.js redis client'.red
,'\t==========================='
,''
,'\tThis is a complete Redis client for node.js.  It supports all Redis commands, including many recently added commands like EVAL from'
,'\texperimental Redis server branches.'
,''
,'\tInstall with:'
,''
,'\t    npm install redis'.green
,'\t    '
,'\tPieter Noordhuis has provided a binding to the official `hiredis` C library, which is non-blocking and fast.  To use `hiredis`, do:'
,''
,'\t    npm install hiredis redis'.green
,''
,'\tIf `hiredis` is installed, `node_redis` will use it by default.  Otherwise, a pure JavaScript parser will be used.'
,''
,'\tIf you use `hiredis`, be sure to rebuild it whenever you upgrade your version of node.  There are mysterious failures that can'
,'\thappen between node and native code modules after a node upgrade.'
,''
,''
,'\t## Usage'.cyan
,''
,'\tSimple example, included as `examples/simple.js`:'
,''
,'\t    var redis = require("redis"),'.green
,'\t        client = redis.createClient();'.green
,''.green
,'\t    client.on("error", function (err) {'.green
,'\t        console.log("Error " + err);'.green
,'\t    });'.green
,''.green
,'\t    client.set("string key", "string val", redis.print);'.green
,'\t    client.hset("hash key", "hashtest 1", "some value", redis.print);'.green
,'\t    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);'.green
,'\t    client.hkeys("hash key", function (err, replies) {'.green
,'\t        console.log(replies.length + " replies:");'.green
,'\t        replies.forEach(function (reply, i) {'.green
,'\t            console.log("    " + i + ": " + reply);'.green
,'\t        });'.green
,'\t        client.quit();'.green
,'\t    });'.green
,''
,'\tThis will display:'
,''
,'\t    $ node example.js'.green
,'\t    Reply: OK'.yellow
,'\t    Reply: 0'.yellow
,'\t    Reply: 0'.yellow
,'\t    2 replies:'.yellow
,'\t        0: hashtest 1'.yellow
,'\t        1: hashtest 2'.yellow
,''
,''
,'\t# API'.red
,'\t======'
,''
,'\t## Connection Events'.cyan
,''
,'\t`client` will emit some events about the state of the connection to the Redis server.'
,''
,'\t### ready'.magenta
,''
,'\t`client` will emit `ready` a connection is established to the Redis server and the server reports '
,'\tthat it is ready to receive commands.  Commands issued before the `ready` event are queued, '
,'\tthen replayed just before this event is emitted.'
,''
,'\t### connect'.magenta
,''
,'\t`client` will emit `connect` at the same time as it emits `ready` unless `client.options.no_ready_check`'
,'\tis set.  If this options is set, `connect` will be emitted when the stream is connected, and then'
,'\tyou are free to try to send commands.'
,''
,'\t### error'.magenta
,''
,'\t`client` will emit `error` when encountering an error connecting to the Redis server.'
,''
,'\tNote that "error" is a special event type in node.  If there are no listeners for an '
,'\t"error" event, node will exit.  This is usually what you want, but it can lead to some '
,'\tcryptic error messages like this:'
,''
,'\t    $ node example.js '.green
,''.green
,'\t    node.js:50'.green
,'\t        throw e;'.green
,'\t        ^'.green
,'\t    Error: ECONNREFUSED, Connection refused'.green
,'\t        at IOWatcher.callback (net:870:22)'.green
,'\t        at node.js:607:9'.green
,''
,'\tNot very useful in diagnosing the problem, but if your program isn\'t ready to handle this,'
,'\tit is probably the right thing to just exit.'
,''
,'\t`client` will also emit `error` if an exception is thrown inside of `node_redis` for whatever reason.'
,'\tIt would be nice to distinguish these two cases.'
,''
,'\t### end'.magenta
,''
,'\t`client` will emit `end` when an established Redis server connection has closed.'
,''
,'\t### drain'.magenta
,''
,'\t`client` will emit `drain` when the TCP connection to the Redis server has been buffering, but is now'
,'\twritable.  This event can be used to stream commands in to Redis and adapt to backpressure.  Right now,'
,'\tyou need to check `client.command_queue.length` to decide when to reduce your send rate.  Then you can '
,'\tresume sending when you get `drain`.'
,''
,'\t### "idle"'.magenta
,''
,'\t`client` will emit `idle` when there are no outstanding commands that are awaiting a response.'
,''
,'\t## redis.createClient(port, host, options)'.cyan
,''
,'\tCreate a new client connection.  `port` defaults to `6379` and `host` defaults'
,'\tto `127.0.0.1`.  If you have `redis-server` running on the same computer as node, then the defaults for'
,'\tport and host are probably fine.  `options` in an object with the following possible properties:'
,''
,'\t* `parser`: which Redis protocol reply parser to use.  Defaults to `hiredis` if that module is installed.'
,'\tThis may also be set to `javascript`.'
,'\t* `return_buffers`: defaults to `false`.  If set to `true`, then all replies will be sent to callbacks as node Buffer'
,'\tobjects instead of JavaScript Strings.'
,'\t* `detect_buffers`: default to `false`. If set to `true`, then replies will be sent to callbacks as node Buffer objects'
,'\tif any of the input arguments to the original command were Buffer objects.'
,'\tThis option lets you switch between Buffers and Strings on a per-command basis, whereas `return_buffers` applies to'
,'\tevery command on a client.'
,'\t* `socket_nodelay`: defaults to `true`. Whether to call setNoDelay() on the TCP stream, which disables the'
,'\tNagle algorithm on the underlying socket.  Setting this option to `false` can result in additional throughput at the '
,'\tcost of more latency.  Most applications will want this set to `true`.'
,'\t* `no_ready_check`: defaults to `false`. When a connection is established to the Redis server, the server might still'
,'\tbe loading the database from disk.  While loading, the server not respond to any commands.  To work around this, '
,'\t`node_redis` has a "ready check" which sends the `INFO` command to the server.  The response from the `INFO` command'
,'\tindicates whether the server is ready for more commands.  When ready, `node_redis` emits a `ready` event.'
,'\tSetting `no_ready_check` to `true` will inhibit this check.'
,''
,'\t    var redis = require("redis"),'.green
,'\t        client = redis.createClient(null, null, {detect_buffers: true});'.green
,''.green
,'\t    client.set("foo_rand000000000000", "OK");'.green
,''.green
,'\t    // This will return a JavaScript String'.green
,'\t    client.get("foo_rand000000000000", function (err, reply) {'.green
,'\t        console.log(reply.toString()); // Will print `OK`'.green
,'\t    });'.green
,''.green
,'\t    // This will return a Buffer since original key is specified as a Buffer'.green
,'\t    client.get(new Buffer("foo_rand000000000000"), function (err, reply) {'.green
,'\t        console.log(reply.toString()); // Will print `<Buffer 4f 4b>`'.green
,'\t    });'.green
,'\t    client.end();'.green
,''
,'\t`createClient()` returns a `RedisClient` object that is named `client` in all of the examples here.'
,''
,'\t## client.auth(password, callback)'.cyan
,''
,'\tWhen connecting to Redis servers that require authentication, the `AUTH` command must be sent as the'
,'\tfirst command after connecting.  This can be tricky to coordinate with reconnections, the ready check,'
,'\tetc.  To make this easier, `client.auth()` stashes `password` and will send it after each connection,'
,'\tincluding reconnections.  `callback` is invoked only once, after the response to the very first'
,'\t`AUTH` command sent.'
,'\tNOTE: Your call to `client.auth()` should not be inside the ready handler. If'
,'\tyou are doing this wrong, `client` will emit an error that looks'
,'\tsomething like this `Error: Ready check failed: ERR operation not permitted`.'
,''
,'\t## client.end()'.cyan
,''
,'\tForcibly close the connection to the Redis server.  Note that this does not wait until all replies have been parsed.'
,'\tIf you want to exit cleanly, call `client.quit()` to send the `QUIT` command after you have handled all replies.'
,''
,'\tThis example closes the connection to the Redis server before the replies have been read.  You probably don\'t '
,'\twant to do this:'
,''
,'\t    var redis = require("redis"),'.green
,'\t        client = redis.createClient();'.green
,''.green
,'\t    client.set("foo_rand000000000000", "some fantastic value");'.green
,'\t    client.get("foo_rand000000000000", function (err, reply) {'.green
,'\t        console.log(reply.toString());'.green
,'\t    });'.green
,'\t    client.end();'.green
,''
,'\t`client.end()` is useful for timeout cases where something is stuck or taking too long and you want '
,'\tto start over.'
,''
,'\t## Friendlier hash commands'.cyan
,''
,'\tMost Redis commands take a single String or an Array of Strings as arguments, and replies are sent back as a single String or an Array of Strings.'
,'\tWhen dealing with hash values, there are a couple of useful exceptions to this.'
,''
,'\t### client.hgetall(hash)'.magenta
,''
,'\tThe reply from an HGETALL command will be converted into a JavaScript Object by `node_redis`.  That way you can interact '
,'\twith the responses using JavaScript syntax.'
,''
,'\tExample:'
,''
,'\t    client.hmset("hosts", "mjr", "1", "another", "23", "home", "1234");'.green
,'\t    client.hgetall("hosts", function (err, obj) {'.green
,'\t        console.dir(obj);'.green
,'\t    });'.green
,''
,'\tOutput:'
,''
,'\t    { mjr: \'1\', another: \'23\', home: \'1234\' }'.yellow
,''
,'\t### client.hmset(hash, obj, [callback])'.magenta
,''
,'\tMultiple values in a hash can be set by supplying an object:'
,''
,'\t    client.HMSET(key2, {'.green
,'\t        "0123456789": "abcdefghij",'.green
,'\t        "some manner of key": "a type of value"'.green
,'\t    });'.green
,''
,'\tThe properties and values of this Object will be set as keys and values in the Redis hash.'
,''
,'\t### client.hmset(hash, key1, val1, ... keyn, valn, [callback])'.magenta
,''
,'\tMultiple values may also be set by supplying a list:'
,''
,'\t    client.HMSET(key1, "0123456789", "abcdefghij", "some manner of key", "a type of value");'.green
,''
,''
,'\t## Publish / Subscribe'.cyan
,''
,'\tHere is a simple example of the API for publish / subscribe.  This program opens two'
,'\tclient connections, subscribes to a channel on one of them, and publishes to that '
,'\tchannel on the other:'
,''
,'\t    var redis = require("redis"),'.green
,'\t        client1 = redis.createClient(), client2 = redis.createClient(),'.green
,'\t        msg_count = 0;'.green
,''.green
,'\t    client1.on("subscribe", function (channel, count) {'.green
,'\t        client2.publish("a nice channel", "I am sending a message.");'.green
,'\t        client2.publish("a nice channel", "I am sending a second message.");'.green
,'\t        client2.publish("a nice channel", "I am sending my last message.");'.green
,'\t    });'.green
,''.green
,'\t    client1.on("message", function (channel, message) {'.green
,'\t        console.log("client1 channel " + channel + ": " + message);'.green
,'\t        msg_count += 1;'.green
,'\t        if (msg_count === 3) {'.green
,'\t            client1.unsubscribe();'.green
,'\t            client1.end();'.green
,'\t            client2.end();'.green
,'\t        }'.green
,'\t    });'.green
,''.green
,'\t    client1.incr("did a thing");'.green
,'\t    client1.subscribe("a nice channel");'.green
,''
,'\tWhen a client issues a `SUBSCRIBE` or `PSUBSCRIBE`, that connection is put into "pub/sub" mode.'
,'\tAt that point, only commands that modify the subscription set are valid.  When the subscription '
,'\tset is empty, the connection is put back into regular mode.'
,''
,'\tIf you need to send regular commands to Redis while in pub/sub mode, just open another connection.'
,''
,'\t## Pub / Sub Events'.cyan
,''
,'\tIf a client has subscriptions active, it may emit these events:'
,''
,'\t### "message" (channel, message)'.magenta
,''
,'\tClient will emit `message` for every message received that matches an active subscription.'
,'\tListeners are passed the channel name as `channel` and the message Buffer as `message`.'
,''
,'\t### "pmessage" (pattern, channel, message)'.magenta
,''
,'\tClient will emit `pmessage` for every message received that matches an active subscription pattern.'
,'\tListeners are passed the original pattern used with `PSUBSCRIBE` as `pattern`, the sending channel'
,'\tname as `channel`, and the message Buffer as `message`.'
,''
,'\t### "subscribe" (channel, count)'.magenta
,''
,'\tClient will emit `subscribe` in response to a `SUBSCRIBE` command.  Listeners are passed the '
,'\tchannel name as `channel` and the new count of subscriptions for this client as `count`.'
,''
,'\t### "psubscribe" (pattern, count) '.magenta
,''
,'\tClient will emit `psubscribe` in response to a `PSUBSCRIBE` command.  Listeners are passed the'
,'\toriginal pattern as `pattern`, and the new count of subscriptions for this client as `count`.'
,''
,'\t### "unsubscribe" (channel, count)'.magenta
,''
,'\tClient will emit `unsubscribe` in response to a `UNSUBSCRIBE` command.  Listeners are passed the '
,'\tchannel name as `channel` and the new count of subscriptions for this client as `count`.  When'
,'\t`count` is 0, this client has left pub/sub mode and no more pub/sub events will be emitted.'
,''
,'\t### "punsubscribe" (pattern, count)'.magenta
,''
,'\tClient will emit `punsubscribe` in response to a `PUNSUBSCRIBE` command.  Listeners are passed the '
,'\tchannel name as `channel` and the new count of subscriptions for this client as `count`.  When'
,'\t`count` is 0, this client has left pub/sub mode and no more pub/sub events will be emitted.'
,''
,'\t## client.multi([commands])'.magenta
,''
,'\t`MULTI` commands are queued up until an `EXEC` is issued, and then all commands are run atomically by'
,'\tRedis.  The interface in `node_redis` is to return an individual `Multi` object by calling `client.multi()`.'
,''
,'\t    var redis  = require("./index"),'.green
,'\t        client = redis.createClient(), set_size = 20;'.green
,''.green
,'\t    client.sadd("bigset", "a member");'.green
,'\t    client.sadd("bigset", "another member");'.green
,''.green
,'\t    while (set_size > 0) {'.green
,'\t        client.sadd("bigset", "member " + set_size);'.green
,'\t        set_size -= 1;'.green
,'\t    }'.green
,''.green
,'\t    // multi chain with an individual callback'.green
,'\t    client.multi()'.green
,'\t        .scard("bigset")'.green
,'\t        .smembers("bigset")'.green
,'\t        .keys("*", function (err, replies) {'.green
,'\t            client.mget(replies, redis.print);'.green
,'\t        })'.green
,'\t        .dbsize()'.green
,'\t        .exec(function (err, replies) {'.green
,'\t            console.log("MULTI got " + replies.length + " replies");'.green
,'\t            replies.forEach(function (reply, index) {'.green
,'\t                console.log("Reply " + index + ": " + reply.toString());'.green
,'\t            });'.green
,'\t        });'.green
,''
,'\t`client.multi()` is a constructor that returns a `Multi` object.  `Multi` objects share all of the'
,'\tsame command methods as `client` objects do.  Commands are queued up inside the `Multi` object'
,'\tuntil `Multi.exec()` is invoked.'
,''
,'\tYou can either chain together `MULTI` commands as in the above example, or you can queue individual'
,'\tcommands while still sending regular client command as in this example:'
,''
,'\t    var redis  = require("redis"),'.green
,'\t        client = redis.createClient(), multi;'.green
,''.green
,'\t    // start a separate multi command queue '.green
,'\t    multi = client.multi();'.green
,'\t    multi.incr("incr thing", redis.print);'.green
,'\t    multi.incr("incr other thing", redis.print);'.green
,''.green
,'\t    // runs immediately'.green
,'\t    client.mset("incr thing", 100, "incr other thing", 1, redis.print);'.green
,''.green
,'\t    // drains multi queue and runs atomically'.green
,'\t    multi.exec(function (err, replies) {'.green
,'\t        console.log(replies); // 101, 2'.green
,'\t    });'.green
,''.green
,'\t    // you can re-run the same transaction if you like'.green
,'\t    multi.exec(function (err, replies) {'.green
,'\t        console.log(replies); // 102, 3'.green
,'\t        client.quit();'.green
,'\t    });'.green
,''
,'\tIn addition to adding commands to the `MULTI` queue individually, you can also pass an array '
,'\tof commands and arguments to the constructor:'
,''
,'\t    var redis  = require("redis"),'.green
,'\t        client = redis.createClient(), multi;'.green
,''.green
,'\t    client.multi(['.green
,'\t        ["mget", "multifoo", "multibar", redis.print],'.green
,'\t        ["incr", "multifoo"],'.green
,'\t        ["incr", "multibar"]'.green
,'\t    ]).exec(function (err, replies) {'.green
,'\t        console.log(replies);'.green
,'\t    });'.green
].join('\n');
