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
var tpl_doc = [
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

var tpl_builtin = [
    '    Current embed moduleName list'.red
    , '    --------------------------------'
    , ""
    , '    usage: nodeman [moduleName]'.yellow
    , ""
    , '    - public module list'.magenta
    , ""
    , '    {{public}}'.cyan
    , ""
    , '    - native module list (Node.js Black Edition)'.magenta
    , ""
    , '    {{native}}'.cyan
    , ""
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

        var public = [], native = [];
        files.forEach(function(file) {
            if (!/_doc/.test(file)) return;

            if (/^public_/.test(file)) {
                public.push(file.replace(/public_|_doc.js/g, ''));
            } else {
                native.push(file.replace(/_doc.js/g, ''));
            }
        });

        // parsing
        var view = {
            public: public.join(', '),
            native: native.join(', ')
        };
        var output = mustache.render(tpl_builtin, view);

        // print
        console.log('\033[2J');
        console.log(output);
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
        console.log("usage: help('moduleName')".red);
        return;
    }

    // check two-case: public, native (black edition)
    var view, err, errCnt = 0, div, divs = ['public_', ''];
    while (divs.length) {
        div = divs.shift();
        try {
            view = require('../docs/' + div + id + '_doc');
        } catch (e) {
            err = e;
            errCnt++;
        }
    }

    // err
    if (errCnt == 2) {
        cb && cb(err);
        return;
    }

    // parsing
    view.context = view.context || 'use require';
    var output = mustache.render(tpl_doc, view);

    // print
    //console.log('\033[2J');
    console.log(output);
    console.log();
}

exports.builtin = builtin;
exports.help = help;
