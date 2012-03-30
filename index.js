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
var colors = require('colors'), mustache = require('./mustache');

/**
 * usage
 */
var usage = ''
  + '\n'
  + '  Usage: nodeman [module_name]\n'
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
var moduleName = process.argv.slice(2).shift();
if (!moduleName) {
    abort(usage);
}

/**
 * help for module
 *
 * @param {String} id - module name
 * @return void
 */
(function help(id) {
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
})(moduleName);

/**
 * console.error && process exit
 */
function abort(str) {
    console.error(str);
    process.exit(1);
}
