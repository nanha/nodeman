exports.name = 'readline';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/readline.html';
exports.description = [
 "\t# Readline".red
,"\t"
,"\tTo use this module, do `require('readline')`. Readline allows reading of a"
,"\tstream (such as STDIN) on a line-by-line basis."
,"\t"
,"\tNote that once you've invoked this module, your node program will not"
,"\tterminate until you've closed the interface, and the STDIN stream. Here's how"
,"\tto allow your program to gracefully terminate:"
,"\t"
,"\t    var rl = require('readline');".green
,"\t".green
,"\t    var i = rl.createInterface(process.stdin, process.stdout, null);".green
,"\t    i.question(\"What do you think of node.js?\", function(answer) {".green
,"\t      // TODO: Log the answer in a database".green
,"\t      console.log(\"Thank you for your valuable feedback.\");".green
,"\t".green
,"\t      // These two lines together allow the program to terminate. Without".green
,"\t      // them, it would run forever.".green
,"\t      i.close();".green
,"\t      process.stdin.destroy();".green
,"\t    });".green
,"\t"
,"\t## rl.createInterface(input, output, completer)".cyan
,"\t"
,"\tTakes two streams and creates a readline interface. The `completer` function"
,"\tis used for autocompletion. When given a substring, it returns `[[substr1,"
,"\tsubstr2, ...], originalsubstring]`."
,"\t"
,"\tAlso `completer` can be run in async mode if it accepts two arguments:"
,"\t"
,"\t  function completer(linePartial, callback) {".green
,"\t    callback(null, [['123'], linePartial]);".green
,"\t  }".green
,"\t"
,"\t`createInterface` is commonly used with `process.stdin` and"
,"\t`process.stdout` in order to accept user input:"
,"\t"
,"\t    var readline = require('readline'),".green
,"\t      rl = readline.createInterface(process.stdin, process.stdout);".green
,"\t"
,"\t## Class: Interface".cyan
,"\t"
,"\tThe class that represents a readline interface with a stdin and stdout"
,"\tstream."
,"\t"
,"\t### rl.setPrompt(prompt, length)".magenta
,"\t"
,"\tSets the prompt, for example when you run `node` on the command line, you see"
,"\t`> `, which is node's prompt."
,"\t"
,"\t### rl.prompt()".magenta
,"\t"
,"\tReadies readline for input from the user, putting the current `setPrompt`"
,"\toptions on a new line, giving the user a new spot to write."
,"\t"
,"\t### rl.question(query, callback)".magenta
,"\t"
,"\tPrepends the prompt with `query` and invokes `callback` with the user's"
,"\tresponse. Displays the query to the user, and then invokes `callback` with the"
,"\tuser's response after it has been typed."
,"\t"
,"\tExample usage:"
,"\t"
,"\t    interface.question('What is your favorite food?', function(answer) {".green
,"\t      console.log('Oh, so your favorite food is ' + answer);".green
,"\t    });".green
,"\t"
,"\t### rl.close()".magenta
,"\t"
,"\t  Closes tty."
,"\t"
,"\t### rl.pause()".magenta
,"\t"
,"\t  Pauses tty."
,"\t"
,"\t### rl.resume()".magenta
,"\t"
,"\t  Resumes tty."
,"\t"
,"\t### rl.write()".magenta
,"\t"
,"\t  Writes to tty."
,"\t"
,"\t### Event: 'line'".magenta
,"\t"
,"\t`function (line) {}`"
,"\t"
,"\tEmitted whenever the `in` stream receives a `\\n`, usually received when the"
,"\tuser hits enter, or return. This is a good hook to listen for user input."
,"\t"
,"\tExample of listening for `line`:"
,"\t"
,"\t    rl.on('line', function (cmd) {".green
,"\t      console.log('You just typed: '+cmd);".green
,"\t    });".green
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\t`function () {}`".green
,"\t"
,"\tEmitted whenever the `in` stream receives a `^C` or `^D`, respectively known"
,"\tas `SIGINT` and `EOT`. This is a good way to know the user is finished using"
,"\tyour program."
,"\t"
,"\tExample of listening for `close`, and exiting the program afterward:"
,"\t"
,"\t    rl.on('close', function() {".green
,"\t      console.log('goodbye!');".green
,"\t      process.exit(0);".green
,"\t    });".green
,"\t".green
,"\tHere's an example of how to use all these together to craft a tiny command"
,"\tline interface:"
,"\t"
,"\t    var readline = require('readline'),".green
,"\t      rl = readline.createInterface(process.stdin, process.stdout),".green
,"\t      prefix = 'OHAI> ';".green
,"\t".green
,"\t    rl.on('line', function(line) {".green
,"\t      switch(line.trim()) {".green
,"\t        case 'hello':".green
,"\t          console.log('world!');".green
,"\t          break;".green
,"\t        default:".green
,"\t          console.log('Say what? I might have heard `' + line.trim() + '`');".green
,"\t          break;".green
,"\t      }".green
,"\t      rl.setPrompt(prefix, prefix.length);".green
,"\t      rl.prompt();".green
,"\t    }).on('close', function() {".green
,"\t      console.log('Have a great day!');".green
,"\t      process.exit(0);".green
,"\t    });".green
,"\t    console.log(prefix + 'Good to see you. Try typing stuff.');".green
,"\t    rl.setPrompt(prefix, prefix.length);".green
,"\t    rl.prompt();".green
,"\t"
,"\t"
,"\tTake a look at this slightly more complicated"
,"\t[example](https://gist.github.com/901104), and"
,"\t[http-console](https://github.com/cloudhead/http-console) for a real-life use"
,"\tcase."
].join('\n');
