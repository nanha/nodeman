exports.__doc__ = "NAME\n".yellow
    + "\toptimist\n"
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttps://github.com/substack/node-optimist\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\toptimist\n".red
    + "\t----------\n"
    + "\tOptimist is a node.js library for option parsing for people who hate option parsing. More specifically, this module is for people who like all the --bells and -whistlz of program usage but think optstrings are a waste of time.\n"
    + "\n"

    + "\tWith optimist, option parsing doesn't have to suck (as much).\n"
    + "\n"

    + "\texamples\n".red
    + "\t----------\n"
    + "\tWith Optimist, the options are just a hash! No optstrings attached.\n"
    + "\txup.js:\n"
    + "\n"

    + "\t#!/usr/bin/env node\n".green
    + "\tvar argv = require('optimist').argv;\n".green
    + "\n"

    + "\tif (argv.rif - 5 * argv.xup > 7.138) {\n".green
    + "\t    console.log('Buy more riffiwobbles');\n".green
    + "\t}\n".green
    + "\telse {\n".green
    + "\t    console.log('Sell the xupptumblers');\n".green
    + "\t}\n".green
    + "\n"
    + "\t$ ./xup.js --rif=55 --xup=9.52\n".green
    + "\tBuy more riffiwobbles\n"
    + "\n"

    + "\t$ ./xup.js --rif 12 --xup 8.1\n".green
    + "\tSell the xupptumblers\n"
    + "\n"
    ;
