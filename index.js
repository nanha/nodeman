#!/usr/bin/env node

var usage = ''
  + '\n'
  + '  Usage: express [options] [path]\n'
  + '\n'
  + '  Options:\n'
  + '    -s, --sessions           add session support\n'
  + '    -t, --template <engine>  add template <engine> support (jade|ejs). default=jade\n'
  + '    -c, --css <engine>       add stylesheet <engine> support (stylus). default=plain css\n'
  + '    -v, --version            output framework version\n'
  + '    -h, --help               output help information\n'
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
