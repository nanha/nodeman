exports.name = 'step';
exports.category = 'ControlFlow';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/step';
exports.description = [
    , "\tStep".red
    , "\t------"
    , ""
    , "\tA simple control-flow library for node.JS that makes parallel execution, serial execution, and error handling painless."
    , ""
    , ""
    , "\tHow to use".red
    , "\t------------"
    , ""
    , "\tThe step library exports a single function I call Step. It accepts any number of functions as arguments and runs them in serial order using the passed in this context as the callback to the next step."
    , ""
    , "\tvar Step = require('step');".green
    , "\tStep(".green
    , "\t  function readSelf() {".green
    , "\t    fs.readFile(__filename, this);".green
    , "\t  },".green
    , "\t  function capitalize(err, text) {".green
    , "\t    if (err) throw err;".green
    , "\t    return text.toUpperCase();".green
    , "\t  },".green
    , "\t  function showIt(err, newText) {".green
    , "\t    if (err) throw err;".green
    , "\t    console.log(newText);".green
    , "\t  }".green
    , "\t);".green
    , ""
    , "\tNotice that we pass in this as the callback to fs.readFile. When the file read completes, step will send the result as the arguments to the next function in the chain. Then in the capitalize function we're doing synchronous work so we can simple return the new value and Step will route it as if we called the callback."
    , ""

    , "\tThe first parameter is reserved for errors since this is the node standard. Also any exceptions thrown are caught and passed as the first argument to the next function. As long as you don't nest callback functions inline your main functions this prevents there from ever being any uncaught exceptions. This is very important for long running node.JS servers since a single uncaught exception can bring the whole server down."

    , "\tAlso there is support for parallel actions:"
    , ""

    , "\tStep(".green
    , "\t  // Loads two files in parallel".green
    , "\t  function loadStuff() {".green
    , "\t    fs.readFile(__filename, this.parallel());".green
    , "\t    fs.readFile(\"/etc/passwd\", this.parallel());".green
    , "\t  },".green
    , "\t  // Show the result when done".green
    , "\t  function showStuff(err, code, users) {".green
    , "\t    if (err) throw err;".green
    , "\t    console.log(code);".green
    , "\t    console.log(users);".green
    , "\t  }".green
    , "\t)".green
    , ""
    , "\tHere we pass this.parallel() instead of this as the callback. It internally keeps track of the number of callbacks issued and preserves their order then giving the result to the next step after all have finished. If there is an error in any of the parallel actions, it will be passed as the first argument to the next step."
    , ""

    , "\tAlso you can use group with a dynamic number of common tasks."
    , ""

    , "\tStep(".green
    , "\t  function readDir() {".green
    , "\t    fs.readdir(__dirname, this);".green
    , "\t  },".green
    , "\t  function readFiles(err, results) {".green
    , "\t    if (err) throw err;".green
    , "\t    // Create a new group".green
    , "\t    var group = this.group();".green
    , "\t    results.forEach(function (filename) {".green
    , "\t      if (/\.js$/.test(filename)) {".green
    , "\t        fs.readFile(__dirname + \"/\" + filename, 'utf8', group());".green
    , "\t      }".green
    , "\t    });".green
    , "\t  },".green
    , "\t  function showAll(err , files) {".green
    , "\t    if (err) throw err;".green
    , "\t    console.dir(files);".green
    , "\t  }".green
    , "\t);".green
    , ""
    , "\tNote that we both call this.group() and group(). The first reserves a slot in the parameters of the next step, then calling group() generates the individual callbacks and increments the internal counter."
].join('\n');
