exports.__doc__ = "NAME\n".yellow
    + "\thashish\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/hashish\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tHashish\n".red
    + "\t=========\n"
    + "\n"
    + "\tHashish is a node.js library for manipulating hash data structures. It is distilled from the finest that ruby, perl, and haskell have to offer by way of hash/map interfaces.\n"

    + "\n"
    + "\tHashish provides a chaining interface, where you can do:\n"
    + "\n"

    + "\tvar Hash = require('hashish');\n".green
    + "\tHash({ a : 1, b : 2, c : 3, d : 4 })\n".green
    + "\t    .map(function (x) { return x * 10 })\n".green
    + "\t    .filter(function (x) { return x < 30 })\n".green
    + "\t    .forEach(function (x, key) {\n".green
    + "\t        console.log(key + ' => ' + x);\n".green
    + "\t    })\n".green
    + "\t;\n".green
    + "\n"
    + "\tOutput:\n".cyan
    + "\t-------\n"
    + "\n"

    + "\ta => 10\n".yellow
    + "\tb => 20\n".yellow
    + "\n"
    + "\tSome functions and attributes in the chaining interface are terminal, like .items or .detect(). They return values of their own instead of the chain context.\n"

    + "\n"
    + "\tEach function in the chainable interface is also attached to Hash in chainless form:\n"
    + "\n"

    + "\tvar Hash = require('hashish');\n".green
    + "\tvar obj = { a : 1, b : 2, c : 3, d : 4 };\n".green
    + "\n"

    + "\tvar mapped = Hash.map(obj, function (x) {\n".green
    + "\t    return x * 10\n".green
    + "\t});\n".green
    + "\n"

    + "\tconsole.dir(mapped);\n".green
    + "\n"
    + "\tOutput:\n".cyan
    + "\t-------\n"
    + "\n"

    + "\t{ a: 10, b: 20, c: 30, d: 40 }\n".yellow
    + "\n"
    + "\tIn either case, the 'this' context of the function calls is the same object that the chained functions return, so you can make nested chains.\n"
    + "\n"
    ;
