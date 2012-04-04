exports.name = 'hashish';
exports.category = 'Manipulate';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/hashish';
exports.description = [
    , "\tHashish".red
    , "\t========="
    , ""
    , "\tHashish is a node.js library for manipulating hash data structures. It is distilled from the finest that ruby, perl, and haskell have to offer by way of hash/map interfaces."

    , ""
    , "\tHashish provides a chaining interface, where you can do:"
    , ""

    , "\tvar Hash = require('hashish');".green
    , "\tHash({ a : 1, b : 2, c : 3, d : 4 })".green
    , "\t    .map(function (x) { return x * 10 })".green
    , "\t    .filter(function (x) { return x < 30 })".green
    , "\t    .forEach(function (x, key) {".green
    , "\t        console.log(key + ' => ' + x);".green
    , "\t    })".green
    , "\t;".green
    , ""
    , "\tOutput:".cyan
    , "\t-------"
    , ""

    , "\ta => 10".yellow
    , "\tb => 20".yellow
    , ""
    , "\tSome functions and attributes in the chaining interface are terminal, like .items or .detect(). They return values of their own instead of the chain context."

    , ""
    , "\tEach function in the chainable interface is also attached to Hash in chainless form:"
    , ""

    , "\tvar Hash = require('hashish');".green
    , "\tvar obj = { a : 1, b : 2, c : 3, d : 4 };".green
    , ""

    , "\tvar mapped = Hash.map(obj, function (x) {".green
    , "\t    return x * 10".green
    , "\t});".green
    , ""

    , "\tconsole.dir(mapped);".green
    , ""
    , "\tOutput:".cyan
    , "\t-------"
    , ""

    , "\t{ a: 10, b: 20, c: 30, d: 40 }".yellow
    , ""
    , "\tIn either case, the 'this' context of the function calls is the same object that the chained functions return, so you can make nested chains."
].join('\n');
