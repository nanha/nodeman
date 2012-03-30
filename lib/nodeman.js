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
    path = require('path'),
    fs = require('fs');

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
 * builtin list
 *
 * @return void
 */
function builtin() {
    var docs = path.resolve(__dirname, '..', 'docs');
    fs.readdir(docs, function(err, files) {
        if (err) throw new Error(err);

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
 * @param String id - module name
 * @param Function cb - cli using
 * @return void
 */
function help(id, cb) {
    if (typeof id == 'undefined') {
        console.log("usage: help('moduleName')");
        return;
    }

    try {
        var view = require('../docs/' + id + '_doc');
        
        console.log('\033[2J');
        view.context = view.context || 'use require';
        var output = mustache.render(tpl, view);
        console.log(output);
        console.log();
    } catch (e) {
        cb ? cb(e) : console.log(e + "\nmake file!");
    }
}

exports.builtin = builtin;
exports.help = help;
