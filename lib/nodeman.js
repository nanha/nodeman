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
    , "\t{{name}}".red.underline.bold
    , ""
    , "Category".yellow
    , "\t{{category}}".magenta
    , ""
    , "CONTEXT".yellow
    , "\t{{context}}".magenta
    , ""
    , "MODULE DOCS HOMEPAGE".yellow
    , "\t{{homepage}}"
    , ""
    , "DESCRIPTION".yellow
    ,"{{&description}}"
].join('\n');

var tpl_common = [
      '  usage: nodeman'.red + ' ' + '[moduleName]'.yellow
    , ""
    , '     - Node.js Manual & Documentation Native Module API'.green
    , '        {{#public.NATIVEMODULE}}' + '{{.}}'.yellow + ' | {{/public.NATIVEMODULE}}'
    , ""
    , '     - SCRAP Webpage, Request API'.green
    , '        {{#public.SCRAP}}' + '{{.}}'.yellow + ' | {{/public.SCRAP}}'
    , ""
    , '     - Control Flow'.green
    , '        {{#public.CONTROLFLOW}}' + '{{.}}'.yellow + ' | {{/public.CONTROLFLOW}}'
    , ""
    , '     - Manipulate'.green
    , '        {{#public.MANIPULATE}}' + '{{.}}'.yellow + ' | {{/public.MANIPULATE}}'
    , ""
    , '     - SERVER'.green
    , '        {{#public.SERVER}}' + '{{.}}'.yellow + ' | {{/public.SERVER}}'
    , ""
    , '     - TEMPLATE'.green
    , '        {{#public.TEMPLATE}}' + '{{.}}'.yellow + ' | {{/public.TEMPLATE}}'
    , ""
    , '     - Compile'.green
    , '        {{#public.COMPILE}}' + '{{.}}'.yellow + ' | {{/public.COMPILE}}'
    , ""
    , '     - Websocket'.green
    , '        {{#public.WEBSOCKET}}' + '{{.}}'.yellow + ' | {{/public.WEBSOCKET}}'
    , ""
    , '     - Crypt'.green
    , '        {{#public.CRYPT}}' + '{{.}}'.yellow + ' | {{/public.CRYPT}}'
    , ""
    , '     - Command Line Helper'.green
    , '        {{#public.CLI}}' + '{{.}}'.yellow + ' | {{/public.CLI}}'
    , ""
    , '     - File System'.green
    , '        {{#public.FILESYSTEM}}' + '{{.}}'.yellow + ' | {{/public.FILESYSTEM}}'
    , ""
    , '     - OOP'.green
    , '        {{#public.OOP}}' + '{{.}}'.yellow + ' | {{/public.OOP}}'
    , ""
    , '     - BDD/TDD'.green
    , '        {{#public.BDD/TDD}}' + '{{.}}'.yellow + ' | {{/public.BDD/TDD}}'
    , ""
    , '     - Not category'.green
    , '        {{#public.NONE}}' + '{{.}}'.yellow + ' | {{/public.NONE}}'
    , '  --------------------------------'
];

var tpl_builtin = [
      '  # Current embed moduleName [docs] list'.red
    , '  ======================================'
    , ""
];
tpl_builtin = tpl_builtin.concat(tpl_common).join('\n');

var tpl_nodeb_builtin = [
      '  # Node.js Black Edition'.cyan
    , '  ## Current embed moduleName [docs] list'.red
    , '  ======================================'
    , ""
];
tpl_nodeb_builtin = tpl_nodeb_builtin.concat(tpl_common).join('\n');

var tpl_dependon = [
    '    npm site: Most Depend On List'.red
    , '    http://search.npmjs.org'.cyan
    , '    ----------------------------'
    , ""
    , '{{rows}}'
    , ""
].join('\n');

/**
 * print
 */
function write(output) {
    //console.log('\033[2J');
    console.log(output);
    console.log();
}
/**
 * get category
 * @param String file
 */
function getCategory(file) {
    if (path.existsSync(file)) {
        return (require(file).category || 'None').toUpperCase();
    } else {
        return false;
    }
}
/**
 * builtin list
 *
 * @return void
 */
function builtin() {
    var native = require(path.resolve(__dirname, '..', 'nodeb'));
    var docs = path.resolve(__dirname, '..', 'docs');
    fs.readdir(docs, function(err, files) {
        if (err) throw new Error(err);

        var docs = {};
        files.forEach(function(file) {
            if (/\.swp/.test(file)) return;
            var category = getCategory(path.resolve(__dirname, '..', 'docs/' + file));
            if (!category) return;
            docs[category] || (docs[category] = []);
            docs[category].push(file.replace(/\.js/, ''));
            docs[category].sort();
        });

        var view = {
            public: docs
        };
        var output = mustache.render(tpl_builtin, view);

        // print
        write(output);
    });
}

/**
 * node black edition builtin list
 *
 * @return void
 */
function nodebBuiltin() {
    var files = require(path.resolve(__dirname, '..', 'nodeb'));
    var docs = {};
    files.forEach(function(file) {
        if (/\.swp/.test(file)) return;
        var category = getCategory(path.resolve(__dirname, '..', 'docs/' + file + '.js'));
        if (!category) return;
        docs[category] || (docs[category] = []);
        docs[category].push(file.replace(/\.js/, ''));
        docs[category].sort();
    });

    var view = {
        public: docs
    };
    var output = mustache.render(tpl_nodeb_builtin, view);

    write(output);
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
    try {
        var view = require('../docs/' + id);
    } catch (e) {
        cb && cb(err);
        return;
    }

    // parsing
    view.context = view.context || 'use require';
    view.category = view.category || 'None';
    var output = mustache.render(tpl_doc, view);

    // print
    write(output);
}

/**
 *
 */
function dependon() {
    var apiURL = 'http://search.npmjs.org/_list/dependencies_limit/dependencies?group=true&descending=true&list_limit=20';
    var rest = require('restler');
    rest.get(apiURL).on('complete', function(result) {
        if (result instanceof Error) {
            console.log('Error: ' + result.message);
            this.retry(5000); // try again after 5 sec
        } else {
            var rows = '';
            result.rows.forEach(function(vo) {
               rows +=  '    (' + vo['value'].toString().yellow + ')' + '    ' + vo['key'].red + '\n'; 
            });

            var view = {rows: rows};
            var output = mustache.render(tpl_dependon, view);

            // print
            write(output);
        }
    });
}

exports.builtin = builtin;
exports.nodebBuiltin = nodebBuiltin;
exports.dependon = dependon;
exports.help = help;
