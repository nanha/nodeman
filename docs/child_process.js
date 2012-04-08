exports.name = 'child_process';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/child_process.html';
exports.description = [
  "\t# Child Process".red
,""
, "\tNode provides a tri-directional `popen(3)` facility through the"
, "\t`child_process` module."
,""
, "\tIt is possible to stream data through a child's `stdin`, `stdout`, and"
, "\t`stderr` in a fully non-blocking way."
,""
, "\tTo create a child process use `require('child_process').spawn()` or"
, "\t`require('child_process').fork()`.  The semantics of each are slightly"
, "\tdifferent, and explained below."
,""
, "\t## Class: ChildProcess".cyan
,""
, "\t`ChildProcess` is an `EventEmitter`."
,""
, "\tChild processes always have three streams associated with them. `child.stdin`,"
, "\t`child.stdout`, and `child.stderr`.  These may be shared with the stdio"
, "\tstreams of the parent process, or they may be separate stream objects"
, "\twhich can be piped to and from."
,""
, "\tThe ChildProcess class is not intended to be used directly.  Use the"
, "\t`spawn()` or `fork()` methods to create a Child Process instance."
,""
, "\t### Event:  'exit'".magenta
,""
, "\t* `code` {Number} the exit code, if it exited normally."
, "\t* `signal` {String} the signal passed to kill the child process, if it"
, "\t  was killed by the parent."
,""
, "\tThis event is emitted after the child process ends. If the process terminated"
, "\tnormally, `code` is the final exit code of the process, otherwise `null`. If"
, "\tthe process terminated due to receipt of a signal, `signal` is the string name"
, "\tof the signal, otherwise `null`."
,""
, "\tSee `waitpid(2)`."
,""
, "\t### child.stdin".magenta
,""
, "\t* {Stream object}"
,""
, "\tA `Writable Stream` that represents the child process's `stdin`."
, "\tClosing this stream via `end()` often causes the child process to terminate."
,""
, "\tIf the child stdio streams are shared with the parent, then this will"
, "\tnot be set."
,""
, "\t### child.stdout".magenta
,""
, "\t* {Stream object}"
,""
, "\tA `Readable Stream` that represents the child process's `stdout`."
,""
, "\tIf the child stdio streams are shared with the parent, then this will"
, "\tnot be set."
,""
, "\t### child.stderr".magenta
,""
, "\t* {Stream object}"
,""
, "\tA `Readable Stream` that represents the child process's `stderr`."
,""
, "\tIf the child stdio streams are shared with the parent, then this will"
, "\tnot be set."
,""
, "\t### child.pid".magenta
,""
, "\t* {Integer}"
,""
, "\tThe PID of the child process."
,""
, "\tExample:".green
,"".green
, "\t    var spawn = require('child_process').spawn,".green
, "\t        grep  = spawn('grep', ['ssh']);".green
,"".green
, "\t    console.log('Spawned child pid: ' + grep.pid);".green
, "\t    grep.stdin.end();".green
,""
, "\t### child.kill([signal])".magenta
,""
, "\t* `signal` {String}"
,""
, "\tSend a signal to the child process. If no argument is given, the process will"
, "\tbe sent `'SIGTERM'`. See `signal(7)` for a list of available signals."
,""
, "\t    var spawn = require('child_process').spawn,".green
, "\t        grep  = spawn('grep', ['ssh']);".green
,"".green
, "\t    grep.on('exit', function (code, signal) {".green
, "\t      console.log('child process terminated due to receipt of signal '+signal);".green
, "\t    });".green
,"".green
, "\t    // send SIGHUP to process".green
, "\t    grep.kill('SIGHUP');".green
,""
, "\tNote that while the function is called `kill`, the signal delivered to the child"
, "\tprocess may not actually kill it.  `kill` really just sends a signal to a process."
,""
, "\tSee `kill(2)`"
,""
, "\t### child.send(message, [sendHandle])".magenta
,""
, "\t* `message` {Object}"
, "\t* `sendHandle` {Handle object}"
,""
, "\tSend a message (and, optionally, a handle object) to a child process."
,""
, "\tSee `child_process.fork()` for details."
,""
, "\t## child_process.spawn(command, [args], [options])".cyan
,""
, "\t* `command` {String} The command to run"
, "\t* `args` {Array} List of string arguments"
, "\t* `options` {Object}"
, "\t  * `cwd` {String} Current working directory of the child process"
, "\t  * `customFds` {Array} **Deprecated** File descriptors for the child to use"
, "\t    for stdio.  (See below)"
, "\t  * `env` {Object} Environment key-value pairs"
, "\t  * `setsid` {Boolean}"
, "\t* return: {ChildProcess object}"
,""
, "\tLaunches a new process with the given `command`, with  command line arguments in `args`."
, "\tIf omitted, `args` defaults to an empty Array."
,""
, "\tThe third argument is used to specify additional options, which defaults to:"
,""
, "\t    { cwd: undefined,".green
, "\t      env: process.env".green
, "\t    }".green
,""
, "\t`cwd` allows you to specify the working directory from which the process is spawned."
, "\tUse `env` to specify environment variables that will be visible to the new process."
,""
, "\tExample of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the exit code:"
,""
, "\t    var util  = require('util'),".green
, "\t        spawn = require('child_process').spawn,".green
, "\t        ls    = spawn('ls', ['-lh', '/usr']);".green
,"".green
, "\t    ls.stdout.on('data', function (data) {".green
, "\t      console.log('stdout: ' + data);".green
, "\t    });".green
,"".green
, "\t    ls.stderr.on('data', function (data) {".green
, "\t      console.log('stderr: ' + data);".green
, "\t    });".green
,"".green
, "\t    ls.on('exit', function (code) {".green
, "\t      console.log('child process exited with code ' + code);".green
, "\t    });".green
,""
,""
, "\tExample: A very elaborate way to run 'ps ax | grep ssh'"
,""
, "\t    var util  = require('util'),".green
, "\t        spawn = require('child_process').spawn,".green
, "\t        ps    = spawn('ps', ['ax']),".green
, "\t        grep  = spawn('grep', ['ssh']);".green
,"".green
, "\t    ps.stdout.on('data', function (data) {".green
, "\t      grep.stdin.write(data);".green
, "\t    });".green
,"".green
, "\t    ps.stderr.on('data', function (data) {".green
, "\t      console.log('ps stderr: ' + data);".green
, "\t    });".green
,"".green
, "\t    ps.on('exit', function (code) {".green
, "\t      if (code !== 0) {".green
, "\t        console.log('ps process exited with code ' + code);".green
, "\t      }".green
, "\t      grep.stdin.end();".green
, "\t    });".green
,"".green
, "\t    grep.stdout.on('data', function (data) {".green
, "\t      console.log(data);".green
, "\t    });".green
,"".green
, "\t    grep.stderr.on('data', function (data) {".green
, "\t      console.log('grep stderr: ' + data);".green
, "\t    });".green
,"".green
, "\t    grep.on('exit', function (code) {".green
, "\t      if (code !== 0) {".green
, "\t        console.log('grep process exited with code ' + code);".green
, "\t      }".green
, "\t    });".green
,""
,""
, "\tExample of checking for failed exec:"
,""
, "\t    var spawn = require('child_process').spawn,".green
, "\t        child = spawn('bad_command');".green
,"".green
, "\t    child.stderr.setEncoding('utf8');".green
, "\t    child.stderr.on('data', function (data) {".green
, "\t      if (/^execvp\(\)/.test(data)) {".green
, "\t        console.log('Failed to start child process.');".green
, "\t      }".green
, "\t    });".green
,""
, "\tNote that if spawn receives an empty options object, it will result in"
, "\tspawning the process with an empty environment rather than using"
, "\t`process.env`. This due to backwards compatibility issues with a deprecated"
, "\tAPI."
,""
, "\tThere is a deprecated option called `customFds` which allows one to specify"
, "\tspecific file descriptors for the stdio of the child process. This API was"
, "\tnot portable to all platforms and therefore removed."
, "\tWith `customFds` it was possible to hook up the new process' `[stdin, stdout,"
, "\tstderr]` to existing streams; `-1` meant that a new stream should be created."
, "\tUse at your own risk."
,""
, "\tThere are several internal options. In particular `stdinStream`,"
, "\t`stdoutStream`, `stderrStream`. They are for INTERNAL USE ONLY. As with all"
, "\tundocumented APIs in Node, they should not be used."
,""
, "\tSee also: `child_process.exec()` and `child_process.fork()`"
,""
, "\t## child_process.exec(command, [options], callback)".cyan
,""
, "\t* `command` {String} The command to run, with space-separated arguments"
, "\t* `options` {Object}"
, "\t  * `cwd` {String} Current working directory of the child process"
, "\t  * `customFds` {Array} **Deprecated** File descriptors for the child to use"
, "\t    for stdio.  (See below)"
, "\t  * `env` {Object} Environment key-value pairs"
, "\t  * `setsid` {Boolean}"
, "\t  * `encoding` {String} (Default: 'utf8')"
, "\t  * `timeout` {Number} (Default: 0)"
, "\t  * `maxBuffer` {Number} (Default: 200*1024)"
, "\t  * `killSignal` {String} (Default: 'SIGTERM')"
, "\t* `callback` {Function} called with the output when process terminates"
, "\t  * `code` {Integer} Exit code"
, "\t  * `stdout` {Buffer}"
, "\t  * `stderr` {Buffer}"
, "\t* Return: ChildProcess object"
,""
, "\tRuns a command in a shell and buffers the output."
,""
, "\t    var util = require('util'),".green
, "\t        exec = require('child_process').exec,".green
, "\t        child;".green
,"".green
, "\t    child = exec('cat *.js bad_file | wc -l',".green
, "\t      function (error, stdout, stderr) {".green
, "\t        console.log('stdout: ' + stdout);".green
, "\t        console.log('stderr: ' + stderr);".green
, "\t        if (error !== null) {".green
, "\t          console.log('exec error: ' + error);".green
, "\t        }".green
, "\t    });".green
,""
, "\tThe callback gets the arguments `(error, stdout, stderr)`. On success, `error`"
, "\twill be `null`.  On error, `error` will be an instance of `Error` and `err.code`"
, "\twill be the exit code of the child process, and `err.signal` will be set to the"
, "\tsignal that terminated the process."
,""
, "\tThere is a second optional argument to specify several options. The"
, "\tdefault options are"
,""
, "\t    { encoding: 'utf8',".yellow
, "\t      timeout: 0,".yellow
, "\t      maxBuffer: 200*1024,".yellow
, "\t      killSignal: 'SIGTERM',".yellow
, "\t      cwd: null,".yellow
, "\t      env: null }".yellow
,""
, "\tIf `timeout` is greater than 0, then it will kill the child process"
, "\tif it runs longer than `timeout` milliseconds. The child process is killed with"
, "\t`killSignal` (default: `'SIGTERM'`). `maxBuffer` specifies the largest"
, "\tamount of data allowed on stdout or stderr - if this value is exceeded then"
, "\tthe child process is killed."
,""
,""
, "\t## child_process.execFile(file, args, options, callback)".cyan
,""
, "\t* `file` {String} The filename of the program to run"
, "\t* `args` {Array} List of string arguments"
, "\t* `options` {Object}"
, "\t  * `cwd` {String} Current working directory of the child process"
, "\t  * `customFds` {Array} **Deprecated** File descriptors for the child to use"
, "\t    for stdio.  (See below)"
, "\t  * `env` {Object} Environment key-value pairs"
, "\t  * `setsid` {Boolean}"
, "\t  * `encoding` {String} (Default: 'utf8')"
, "\t  * `timeout` {Number} (Default: 0)"
, "\t  * `maxBuffer` {Number} (Default: 200*1024)"
, "\t  * `killSignal` {String} (Default: 'SIGTERM')"
, "\t* `callback` {Function} called with the output when process terminates"
, "\t  * `code` {Integer} Exit code"
, "\t  * `stdout` {Buffer}"
, "\t  * `stderr` {Buffer}"
, "\t* Return: ChildProcess object"
,""
, "\tThis is similar to `child_process.exec()` except it does not execute a"
, "\tsubshell but rather the specified file directly. This makes it slightly"
, "\tleaner than `child_process.exec`. It has the same options."
,""
,""
, "\t## child_process.fork(modulePath, [args], [options])".cyan
,""
, "\t* `modulePath` {String} The module to run in the child"
, "\t* `args` {Array} List of string arguments"
, "\t* `options` {Object}"
, "\t  * `cwd` {String} Current working directory of the child process"
, "\t  * `customFds` {Array} **Deprecated** File descriptors for the child to use"
, "\t    for stdio.  (See below)"
, "\t  * `env` {Object} Environment key-value pairs"
, "\t  * `setsid` {Boolean}"
, "\t  * `encoding` {String} (Default: 'utf8')"
, "\t  * `timeout` {Number} (Default: 0)"
, "\t* `callback` {Function} called with the output when process terminates"
, "\t  * `code` {Integer} Exit code"
, "\t  * `stdout` {Buffer}"
, "\t  * `stderr` {Buffer}"
, "\t* Return: ChildProcess object"
,""
, "\tThis is a special case of the `spawn()` functionality for spawning Node"
, "\tprocesses. In addition to having all the methods in a normal ChildProcess"
, "\tinstance, the returned object has a communication channel built-in. The"
, "\tchannel is written to with `child.send(message, [sendHandle])` and messages"
, "\tare received by a `'message'` event on the child."
,""
, "\tFor example:"
,""
, "\t    var cp = require('child_process');".green
,"".green
, "\t    var n = cp.fork(__dirname + '/sub.js');".green
,"".green
, "\t    n.on('message', function(m) {".green
, "\t      console.log('PARENT got message:', m);".green
, "\t    });".green
,"".green
, "\t    n.send({ hello: 'world' });".green
,"".green
, "\tAnd then the child script, `'sub.js'` might look like this:"
,""
, "\t    process.on('message', function(m) {".green
, "\t      console.log('CHILD got message:', m);".green
, "\t    });".green
,"".green
, "\t    process.send({ foo: 'bar' });".green
,""
, "\tIn the child the `process` object will have a `send()` method, and `process`"
, "\twill emit objects each time it receives a message on its channel."
,""
, "\tBy default the spawned Node process will have the stdin, stdout, stderr"
, "\tassociated with the parent's."
,""
, "\tThese child Nodes are still whole new instances of V8. Assume at least 30ms"
, "\tstartup and 10mb memory for each new Node. That is, you cannot create many"
, "\tthousands of them."
,""
, "\tThe `sendHandle` option to `child.send()` is for sending a handle object to"
, "\tanother process. Child will receive the handle as as second argument to the"
, "\t`message` event. Here is an example of sending a handle:"
,""
, "\t    var server = require('net').createServer();".green
, "\t    var child = require('child_process').fork(__dirname + '/child.js');".green
, "\t    // Open up the server object and send the handle.".green
, "\t    server.listen(1337, function() {".green
, "\t      child.send({ server: true }, server._handle);".green
, "\t    });".green
,""
, "\tHere is an example of receiving the server handle and sharing it between"
, "\tprocesses:"
,""
, "\t    process.on('message', function(m, serverHandle) {".green
, "\t      if (serverHandle) {".green
, "\t        var server = require('net').createServer();".green
, "\t        server.listen(serverHandle);".green
, "\t      }".green
, "\t    });".green
].join('\n');
