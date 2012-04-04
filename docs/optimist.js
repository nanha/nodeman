exports.name = 'optimist';
exports.category = 'cli';
exports.context = 'use require';
exports.homepage = 'https://github.com/substack/node-optimist';
exports.description = [
    "\toptimist".red
    , "\t==========="
    , ""
    , "\tOptimist is a node.js library for option parsing for people who hate option parsing. More specifically, this module is for people who like all the --bells and -whistlz of program usage but think optstrings are a waste of time."
    , ""
    , "\tWith optimist, option parsing doesn't have to suck (as much)."
    , ""
    , ""
    , "\texamples".red
    , "\t==========="
    , ""
    , "\tWith Optimist, the options are just a hash! No optstrings attached."
    , ""
    , "\tcat xup.js".green
    , ""
    , "\t#!/usr/bin/env node".green
    , "\tvar argv = require('optimist').argv;".green
    , ""
    , "\tif (argv.rif - 5 * argv.xup > 7.138) {".green
    , "\t    console.log('Buy more riffiwobbles');".green
    , "\t}".green
    , "\telse {".green
    , "\t    console.log('Sell the xupptumblers');".green
    , "\t}".green
    , ""
    , ""
    , "\t$ ./xup.js --rif=55 --xup=9.52".green
    , "\tBuy more riffiwobbles".yellow
    , ""

    , "\t$ ./xup.js --rif 12 --xup 8.1".green
    , "\tSell the xupptumblers".yellow
].join('\n');
