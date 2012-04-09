exports.name = 'repl';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/repl.html';
exports.description = [
 "\t# REPL".red
,"\t"
,"\tA Read-Eval-Print-Loop (REPL) is available both as a standalone program and easily"
,"\tincludable in other programs.  REPL provides a way to interactively run"
,"\tJavaScript and see the results.  It can be used for debugging, testing, or"
,"\tjust trying things out."
,"\t"
,"\tBy executing `node` without any arguments from the command-line you will be"
,"\tdropped into the REPL. It has simplistic emacs line-editing."
,"\t"
,"\t    mjr:~$ node".green
,"\t    Type '.help' for options.".green
,"\t    > a = [ 1, 2, 3];".green
,"\t    [ 1, 2, 3 ]".yellow
,"\t    > a.forEach(function (v) {".green
,"\t    ...   console.log(v);".green
,"\t    ...   });".green
,"\t    1".yellow
,"\t    2".yellow
,"\t    3".yellow
,"\t"
,"\tFor advanced line-editors, start node with the environmental variable `NODE_NO_READLINE=1`."
,"\tThis will start the REPL in canonical terminal settings which will allow you to use with `rlwrap`."
,"\t"
,"\tFor example, you could add this to your bashrc file:"
,"\t"
,"\t    alias node=\"env NODE_NO_READLINE=1 rlwrap node\"".green
,"\t"
,"\t"
,"\t## repl.start([prompt], [stream], [eval], [useGlobal], [ignoreUndefined])".cyan
,"\t"
,"\tStarts a REPL with `prompt` as the prompt and `stream` for all I/O.  `prompt`"
,"\tis optional and defaults to `> `.  `stream` is optional and defaults to"
,"\t`process.stdin`. `eval` is optional too and defaults to async wrapper for"
,"\t`eval()`."
,"\t"
,"\tIf `useGlobal` is set to true, then the repl will use the global object,"
,"\tinstead of running scripts in a separate context. Defaults to `false`."
,"\t"
,"\tIf `ignoreUndefined` is set to true, then the repl will not output return value"
,"\tof command if it's `undefined`. Defaults to `false`."
,"\t"
,"\tYou can use your own `eval` function if it has following signature:"
,"\t"
,"\t    function eval(cmd, callback) {".green
,"\t      callback(null, result);".green
,"\t    }".green
,"\t"
,"\tMultiple REPLs may be started against the same running instance of node.  Each"
,"\twill share the same global object but will have unique I/O."
,"\t"
,"\tHere is an example that starts a REPL on stdin, a Unix socket, and a TCP socket:"
,"\t"
,"\t    var net = require(\"net\"),".green
,"\t        repl = require(\"repl\");".green
,"\t".green
,"\t    connections = 0;".green
,"\t".green
,"\t    repl.start(\"node via stdin> \");".green
,"\t".green
,"\t    net.createServer(function (socket) {".green
,"\t      connections += 1;".green
,"\t      repl.start(\"node via Unix socket> \", socket);".green
,"\t    }).listen(\"/tmp/node-repl-sock\");".green
,"\t".green
,"\t    net.createServer(function (socket) {".green
,"\t      connections += 1;".green
,"\t      repl.start(\"node via TCP socket> \", socket);".green
,"\t    }).listen(5001);".green
,"\t"
,"\tRunning this program from the command line will start a REPL on stdin.  Other"
,"\tREPL clients may connect through the Unix socket or TCP socket. `telnet` is useful"
,"\tfor connecting to TCP sockets, and `socat` can be used to connect to both Unix and"
,"\tTCP sockets."
,"\t"
,"\tBy starting a REPL from a Unix socket-based server instead of stdin, you can"
,"\tconnect to a long-running node process without restarting it."
,"\t"
,"\t"
,"\t## REPL Features".cyan
,"\t"
,"\tInside the REPL, Control+D will exit.  Multi-line expressions can be input."
,"\tTab completion is supported for both global and local variables."
,"\t"
,"\tThe special variable `_` (underscore) contains the result of the last expression."
,"\t"
,"\t    > [ \"a\", \"b\", \"c\" ]".green
,"\t    [ 'a', 'b', 'c' ]".yellow
,"\t    > _.length".green
,"\t    3".yellow
,"\t    > _ += 1".green
,"\t    4".yellow
,"\t"
,"\tThe REPL provides access to any variables in the global scope. You can expose"
,"\ta variable to the REPL explicitly by assigning it to the `context` object"
,"\tassociated with each `REPLServer`.  For example:"
,"\t"
,"\t    // repl_test.js".green
,"\t    var repl = require(\"repl\"),".green
,"\t        msg = \"message\";".green
,"\t".green
,"\t    repl.start().context.m = msg;".green
,"\t"
,"\tThings in the `context` object appear as local within the REPL:"
,"\t"
,"\t    mjr:~$ node repl_test.js".green
,"\t    > m".green
,"\t    'message'".yellow
,"\t"
,"\tThere are a few special REPL commands:"
,"\t"
,"\t  - `.break` - While inputting a multi-line expression, sometimes you get lost".blue
,"\t    or just don't care about completing it. `.break` will start over.".blue
,"\t  - `.clear` - Resets the `context` object to an empty object and clears any".blue
,"\t    multi-line expression.".blue
,"\t  - `.exit` - Close the I/O stream, which will cause the REPL to exit.".blue
,"\t  - `.help` - Show this list of special commands.".blue
,"\t  - `.save` - Save the current REPL session to a file".blue
,"\t    >.save ./file/to/save.js".yellow
,"\t  - `.load` - Load a file into the current REPL session.".blue
,"\t    >.load ./file/to/load.js".yellow
,"\t"
,"\tThe following key combinations in the REPL have these special effects:"
,"\t"
,"\t  - `<ctrl>C` - Similar to the `.break` keyword.  Terminates the current".blue
,"\t    command.  Press twice on a blank line to forcibly exit.".blue
,"\t  - `<ctrl>D` - Similar to the `.exit` keyword.".blue
,"\t"
].join('\n');
