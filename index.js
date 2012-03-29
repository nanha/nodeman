#!/usr/bin/env node

var usage = ''
  + '\n'
  + '  Usage: nodeman [module_name]\n'
  ;

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
        var foo = require(id + '_doc');
    } catch (e) {
        abort(e + "\nmake file!");
    }
    
    console.log(foo.__doc__);

    console.log();
})(moduleName);

function abort(str) {
    console.error(str);
    process.exit(1);
}
