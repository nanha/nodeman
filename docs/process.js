exports.name = 'process';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/process.html';
exports.description = [
, "\tprocess".red
,"\t========="
,""
, "\tThe process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter."
,""
, "\tEvent: 'exit'".red
,"\t================"
,""
, "\tEmitted when the process is about to exit. This is a good hook to perform constant time checks of the module's state (like for unit tests). The main event loop will no longer be run after the 'exit' callback finishes, so timers may not be scheduled."
,""
, "\tExample of listening for exit:"
,""
, "\tprocess.on('exit', function () {".green
, "\t  process.nextTick(function () {".green
, "\t   console.log('This will not run');".green
, "\t  });".green
, "\t  console.log('About to exit.');".green
, "\t});".green
,""
, "\tEvent: 'uncaughtException'".red
,"\t==========================="
,""
, "\tEmitted when an exception bubbles all the way back to the event loop. If a listener is added for this exception, the default action (which is to print a stack trace and exit) will not occur."
,""
, "\tExample of listening for uncaughtException:"
,""
, "\tprocess.on('uncaughtException', function (err) {".green
, "\t  console.log('Caught exception: ' + err);".green
, "\t});".green
,"".green
, "\tsetTimeout(function () {".green
, "\t  console.log('This will still run.');".green
, "\t}, 500);".green
,"".green
, "\t// Intentionally cause an exception, but don't catch it.".green
, "\tnonexistentFunc();".green
, "\tconsole.log('This will not run.');".green
,""
, "\tNote that uncaughtException is a very crude mechanism for exception handling. Using try / catch in your program will give you more control over your program's flow. Especially for server programs that are designed to stay running forever, uncaughtException can be a useful safety mechanism."
,""
, "\tSignal Events".red
, "\t=============="
,""
, "\tEmitted when the processes receives a signal. See sigaction(2) for a list of standard POSIX signal names such as SIGINT, SIGUSR1, etc."
,""
, "\tExample of listening for SIGINT:"
,""
, "\t// Start reading from stdin so we don't exit.".green
, "\tprocess.stdin.resume();".green
,"".green
, "\tprocess.on('SIGINT', function () {".green
, "\t  console.log('Got SIGINT.  Press Control-D to exit.');".green
, "\t});".green
,""
, "\tAn easy way to send the SIGINT signal is with Control-C in most terminal programs."
,""
, "\tprocess.stdout".red
,"\t==============="
,""
, "\tA Writable Stream to stdout."
,""
, "\tExample: the definition of console.log"
,""
, "\tconsole.log = function (d) {".green
, "\t  process.stdout.write(d + '\\n');".green
, "\t};".green
,""
, "\tprocess.stderr and process.stdout are unlike other streams in Node in that writes to them are usually blocking. They are blocking in the case that they refer to regular files or TTY file descriptors. In the case they refer to pipes, they are non-blocking like other streams."
,""
, "\tprocess.stderr".red
,"\t==============="
,""
, "\tA writable stream to stderr."
,""
, "\tprocess.stderr and process.stdout are unlike other streams in Node in that writes to them are usually blocking. They are blocking in the case that they refer to regular files or TTY file descriptors. In the case they refer to pipes, they are non-blocking like other streams."
,""
, "\tprocess.stdin".red
,"\t==============="
,""
, "\tA Readable Stream for stdin. The stdin stream is paused by default, so one must call process.stdin.resume() to read from it."
,""
, "\tExample of opening standard input and listening for both events:"
,""
, "\tprocess.stdin.resume();".green
, "\tprocess.stdin.setEncoding('utf8');".green
,"".green
, "\tprocess.stdin.on('data', function (chunk) {".green
, "\t  process.stdout.write('data: ' + chunk);".green
, "\t});".green
,"".green
, "\tprocess.stdin.on('end', function () {".green
, "\t  process.stdout.write('end');".green
, "\t});".green
,""
, "\tprocess.argv".red
,"\t==============="
,""
, "\tAn array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments."
,""
, "\t// print process.argv".green
, "\tprocess.argv.forEach(function (val, index, array) {".green
, "\t  console.log(index + ': ' + val);".green
, "\t});".green
, "\tThis will generate:"
,""
, "\t$ node process-2.js one two=three four".yellow
, "\t0: node".yellow
, "\t1: /Users/mjr/work/node/process-2.js".yellow
, "\t2: one".yellow
, "\t3: two=three".yellow
, "\t4: four".yellow
,""
, "\tprocess.execPath".red
,"\t=================="
,""
, "\tThis is the absolute pathname of the executable that started the process."
,""
, "\tExample:"
,""
, "\t/usr/local/bin/node".yellow
,""
, "\tprocess.chdir(directory)".red
, "\t========================"
,""
, "\tChanges the current working directory of the process or throws an exception if that fails."
,""
, "\tconsole.log('Starting directory: ' + process.cwd());".green
, "\ttry {".green
, "\t  process.chdir('/tmp');".green
, "\t  console.log('New directory: ' + process.cwd());".green
, "\t}".green
, "\tcatch (err) {".green
, "\t  console.log('chdir: ' + err);".green
, "\t}".green
,""
, "\tprocess.cwd()".red
,"\t==============="
,""
, "\tReturns the current working directory of the process."
,""
, "\tconsole.log('Current directory: ' + process.cwd());".green
,""
, "\tprocess.env".red
,"\t==============="
,""
, "\tAn object containing the user environment. See environ(7)."
,""
, "\tprocess.exit([code])".red
,"\t======================"
,""
, "\tEnds the process with the specified code. If omitted, exit uses the 'success' code 0."
,""
, "\tTo exit with a 'failure' code:"
,""
, "\tprocess.exit(1);".red
,"\t==============="
,""
, "\tThe shell that executed node should see the exit code as 1."
,""
, "\tprocess.getgid()".red
,"\t==============="
,""
, "\tGets the group identity of the process. (See getgid(2).) This is the numerical group id, not the group name."
,""
, "\tconsole.log('Current gid: ' + process.getgid());".green
,""
, "\tprocess.setgid(id)".red
,"\t==================="
,""
, "\tSets the group identity of the process. (See setgid(2).) This accepts either a numerical ID or a groupname string. If a groupname is specified, this method blocks while resolving it to a numerical ID."
,""
, "\tconsole.log('Current gid: ' + process.getgid());".green
, "\ttry {".green
, "\t  process.setgid(501);".green
, "\t  console.log('New gid: ' + process.getgid());".green
, "\t}".green
, "\tcatch (err) {".green
, "\t  console.log('Failed to set gid: ' + err);".green
, "\t}".green
,""
, "\tprocess.getuid()".red
,"\t================="
,""
, "\tGets the user identity of the process. (See getuid(2).) This is the numerical userid, not the username."
,""
, "\tconsole.log('Current uid: ' + process.getuid());".green
,""
, "\tprocess.setuid(id)".red
,"\t===================="
,""
, "\tSets the user identity of the process. (See setuid(2).) This accepts either a numerical ID or a username string. If a username is specified, this method blocks while resolving it to a numerical ID."
,""
, "\tconsole.log('Current uid: ' + process.getuid());".green
, "\ttry {".green
, "\t  process.setuid(501);".green
, "\t  console.log('New uid: ' + process.getuid());".green
, "\t}".green
, "\tcatch (err) {".green
, "\t  console.log('Failed to set uid: ' + err);".green
, "\t}".green
,""
, "\tprocess.version".red
,"\t================="
,""
, "\tA compiled-in property that exposes NODE_VERSION."
,""
, "\tconsole.log('Version: ' + process.version);".green
,""
, "\tprocess.versions"
,"\t================="
,""
, "\tA property exposing version strings of node and its dependencies."
,""
, "\tconsole.log(process.versions);".green
,""
, "\tWill output:".yellow
,"".yellow
, "\t{ node: '0.4.12',".yellow
, "\t  v8: '3.1.8.26',".yellow
, "\t  ares: '1.7.4',".yellow
, "\t  ev: '4.4',".yellow
, "\t  openssl: '1.0.0e-fips' }".yellow
,""
, "\tprocess.installPrefix".red
,"\t======================"
,""
, "\tA compiled-in property that exposes NODE_PREFIX."
,""
, "\tconsole.log('Prefix: ' + process.installPrefix);".green
,""
, "\tprocess.kill(pid, [signal])".red
,"\t============================"
,""
, "\tSend a signal to a process. pid is the process id and signal is the string describing the signal to send. Signal names are strings like 'SIGINT' or 'SIGUSR1'. If omitted, the signal will be 'SIGTERM'. See kill(2) for more information."
,""
, "\tNote that just because the name of this function is process.kill, it is really just a signal sender, like the kill system call. The signal sent may do something other than kill the target process."
,""
, "\tExample of sending a signal to yourself:"
,""
, "\tprocess.on('SIGHUP', function () {".green
, "\t  console.log('Got SIGHUP signal.');".green
, "\t});".green
,"".green
, "\tsetTimeout(function () {".green
, "\t  console.log('Exiting.');".green
, "\t  process.exit(0);".green
, "\t}, 100);".green
,"".green
, "\tprocess.kill(process.pid, 'SIGHUP');".green
,""
, "\tprocess.pid".red
,"\t============="
,""
, "\tThe PID of the process."
,""
, "\tconsole.log('This process is pid ' + process.pid);".green
,""
, "\tprocess.title".red
,"\t==============="
,""
, "\tGetter/setter to set what is displayed in 'ps'."
,""
, "\tprocess.arch".red
,"\t==============="
,""
, "\tWhat processor architecture you're running on: 'arm', 'ia32', or 'x64'."
,""
, "\tconsole.log('This processor architecture is ' + process.arch);".green
,""
, "\tprocess.platform".red
,"\t=================="
,""
, "\tWhat platform you're running on. 'linux2', 'darwin', etc."
,""
, "\tconsole.log('This platform is ' + process.platform);".green
,""
, "\tprocess.memoryUsage()".red
,"\t======================="
,""
, "\tReturns an object describing the memory usage of the Node process measured in bytes."
,""
, "\tvar util = require('util');".green
,"".green
, "\tconsole.log(util.inspect(process.memoryUsage()));".green
,""
, "\tThis will generate:".yellow
,"".yellow
, "\t{ rss: 4935680,".yellow
, "\t  heapTotal: 1826816,".yellow
, "\t  heapUsed: 650472 }".yellow
,""
, "\theapTotal and heapUsed refer to V8's memory usage."
,""
, "\tprocess.nextTick(callback)".red
,"\t==============="
,""
, "\tOn the next loop around the event loop call this callback. This is not a simple alias to setTimeout(fn, 0), it's much more efficient."
,""
, "\tprocess.nextTick(function () {".green
, "\t  console.log('nextTick callback');".green
, "\t});".green
,""
, "\tprocess.umask([mask])".red
,"\t======================"
,""
, "\tSets or reads the process's file mode creation mask. Child processes inherit the mask from the parent process. Returns the old mask if mask argument is given, otherwise returns the current mask."
,""
, "\tvar oldmask, newmask = 0644;".green
,"".green
, "\toldmask = process.umask(newmask);".green
, "\tconsole.log('Changed umask from: ' + oldmask.toString(8) +".green
, "\t            ' to ' + newmask.toString(8));".green
,""
, "\tprocess.uptime()".red
,"\t=================="
,""
, "\tNumber of seconds Node has been running."
].join('\n');
