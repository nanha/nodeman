exports.__doc__ = "NAME\n".yellow
    + "\tstep\n"
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/step\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tStep\n".red
    + "\t------\n"
    + "\tA simple control-flow library for node.JS that makes parallel execution, serial execution, and error handling painless.\n"

    + "\tHow to use\n".red
    + "\t------------\n"
    + "\tThe step library exports a single function I call Step. It accepts any number of functions as arguments and runs them in serial order using the passed in this context as the callback to the next step.\n"
    + "\n"


    + "\tvar Step = require('step');\n".green
    + "\tStep(\n".green
    + "\t  function readSelf() {\n".green
    + "\t    fs.readFile(__filename, this);\n".green
    + "\t  },\n".green
    + "\t  function capitalize(err, text) {\n".green
    + "\t    if (err) throw err;\n".green
    + "\t    return text.toUpperCase();\n".green
    + "\t  },\n".green
    + "\t  function showIt(err, newText) {\n".green
    + "\t    if (err) throw err;\n".green
    + "\t    console.log(newText);\n".green
    + "\t  }\n".green
    + "\t);\n".green
    + "\n"
    + "\tNotice that we pass in this as the callback to fs.readFile. When the file read completes, step will send the result as the arguments to the next function in the chain. Then in the capitalize function we're doing synchronous work so we can simple return the new value and Step will route it as if we called the callback.\n"
    + "\n"

    + "\tThe first parameter is reserved for errors since this is the node standard. Also any exceptions thrown are caught and passed as the first argument to the next function. As long as you don't nest callback functions inline your main functions this prevents there from ever being any uncaught exceptions. This is very important for long running node.JS servers since a single uncaught exception can bring the whole server down.\n"

    + "\tAlso there is support for parallel actions:\n"
    + "\n"

    + "\tStep(\n".green
    + "\t  // Loads two files in parallel\n".green
    + "\t  function loadStuff() {\n".green
    + "\t    fs.readFile(__filename, this.parallel());\n".green
    + "\t    fs.readFile(\"/etc/passwd\", this.parallel());\n".green
    + "\t  },\n".green
    + "\t  // Show the result when done\n".green
    + "\t  function showStuff(err, code, users) {\n".green
    + "\t    if (err) throw err;\n".green
    + "\t    console.log(code);\n".green
    + "\t    console.log(users);\n".green
    + "\t  }\n".green
    + "\t)\n".green
    + "\n"
    + "\tHere we pass this.parallel() instead of this as the callback. It internally keeps track of the number of callbacks issued and preserves their order then giving the result to the next step after all have finished. If there is an error in any of the parallel actions, it will be passed as the first argument to the next step.\n"
    + "\n"

    + "\tAlso you can use group with a dynamic number of common tasks.\n"
    + "\n"

    + "\tStep(\n".green
    + "\t  function readDir() {\n".green
    + "\t    fs.readdir(__dirname, this);\n".green
    + "\t  },\n".green
    + "\t  function readFiles(err, results) {\n".green
    + "\t    if (err) throw err;\n".green
    + "\t    // Create a new group\n".green
    + "\t    var group = this.group();\n".green
    + "\t    results.forEach(function (filename) {\n".green
    + "\t      if (/\.js$/.test(filename)) {\n".green
    + "\t        fs.readFile(__dirname + \"/\" + filename, 'utf8', group());\n".green
    + "\t      }\n".green
    + "\t    });\n".green
    + "\t  },\n".green
    + "\t  function showAll(err , files) {\n".green
    + "\t    if (err) throw err;\n".green
    + "\t    console.dir(files);\n".green
    + "\t  }\n".green
    + "\t);\n".green
    + "\n"
    + "\tNote that we both call this.group() and group(). The first reserves a slot in the parameters of the next step, then calling group() generates the individual callbacks and increments the internal counter.\n"
    ;
