#!/usr/bin/env node
/**************************************************************
 * Executable Node.js User's Colorful Manual for Command-line.
 *
 * @author nanhpark <http://nodeqa.com>
 * @date 2012-03-30
 *************************************************************/

/**
 * Module dependencies.
 */
var colors = require('colors'),
    mustache = require('./mustache'),
    fs = require('fs');

/**
 * usage
 */
var usage = ''
  + '\n'
  + '  Usage: nodeman [module_name]\n'.yellow
  + '\n'
  + '  Options:\n'
  + '    -b, --builtin           show module_name list\n'
  + '    -h, --help              output help information\n'
  ;

/**
 * template
 * - {{name}}
 * - {{context}} : use require (default)
 * - {{homepage}}
 * - {{description}}
 */
var tpl = [
    "NAME".yellow
    , "\t{{name}}"
    , ""
    , "CONTEXT".yellow
    , "\t{{context}}".magenta
    , ""
    , "MODULE DOCS".yellow
    , "\t{{homepage}}"
    , ""
    , "DESCRIPTION".yellow
    ,"{{&description}}"
].join('\n');

/**
 * check module
 */
var args = process.argv.slice(2),
    moduleName;

while (args.length) {
    var arg = args.shift();
    switch (arg) {
        case '-h':
        case '--help':
            abort(usage);
            break;
        case '-b':
        case '--builtin':
            builtin();
            break;
        default:
            moduleName = arg;
            help(moduleName);
            break;
    }
}

/**
 * builtin list
 *
 * @return void
 */
function builtin() {
    fs.readdir('./docs', function(err, files) {
        var __builtin__ = [];
        files.forEach(function(file) {
            if (!/_doc/.test(file)) return;

            __builtin__.push(file.replace(/_doc.js/g, ''));
        });

        console.log('\033[2J');
        console.log('    Current embed moduleName list'.red);
        console.log('    --------------------------------');
        console.log();
        console.log('    ' + __builtin__.join(', '));
        console.log();
    });
}

/**
 * help for module
 *
 * @param {String} id - module name
 * @return void
 */
function help(id) {
    try {
        var view = require('./docs/' + id + '_doc');
    } catch (e) {
        abort(e + "\nmake file!");
    }
    
    console.log('\033[2J');
    view.context = view.context || 'use require';
    var output = mustache.render(tpl, view);
    console.log(output);
    console.log();
}

/**
 * console.error && process exit
 */
function abort(str) {
    console.error(str);
    process.exit(1);
}
