/**************************************************************
 * Executable Node.js User's Colorful Manual for Command-line.
 *
 * @author nanhpark <http://nodeqa.com>
 * @date 2012-03-30
 *************************************************************/

/**
 * Module dependencies.
 */
var config = require('../config'),
    colors = require('colors'),
    mustache = require('./mustache'),
    path = require('path'),
    fs = require('fs');

/**
 * template
 * - {{name}}
 * - {{homepage}}
 * - {{description}}
 */
var tpl_doc = [
    "✔ NAME: ".bold.yellow + "{{name}}".red.bold
  , "✔ DOCS HOMEPAGE: ".bold.yellow + "{{homepage}}".bold
  , ""
  ,"{{&description}}"
].join('\n');

var tpl_common = [
      '✔  Usage: nodeman'.bold.red + ' ' + '[moduleName]'.bold.yellow
    , ""
    , ' ✖ Native Module API'.bold.green
    , '   {{#public.NATIVEMODULE}}' + '{{.}}'.yellow + ' | {{/public.NATIVEMODULE}}'
    , ""
    , ' ✖ Control Flow'.bold.green
    , '   {{#public.CONTROLFLOW}}' + '{{.}}'.yellow + ' | {{/public.CONTROLFLOW}}'
    , ""
    , ' ✖ SCRAP Webpage, Request API'.bold.green
    , '   {{#public.SCRAP}}' + '{{.}}'.yellow + ' | {{/public.SCRAP}}'
    , ""
    , ' ✖ Manipulate'.bold.green
    , '   {{#public.MANIPULATE}}' + '{{.}}'.yellow + ' | {{/public.MANIPULATE}}'
    , ""
    , ' ✖ SERVER'.bold.green
    , '   {{#public.SERVER}}' + '{{.}}'.yellow + ' | {{/public.SERVER}}'
    , ""
    , ' ✖ Logging'.bold.green
    , '   {{#public.LOGGING}}' + '{{.}}'.yellow + ' | {{/public.LOGGING}}'
    , ""
    , ' ✖ TEMPLATE'.bold.green
    , '   {{#public.TEMPLATE}}' + '{{.}}'.yellow + ' | {{/public.TEMPLATE}}'
    , ""
    , ' ✖ Compile'.bold.green
    , '   {{#public.COMPILE}}' + '{{.}}'.yellow + ' | {{/public.COMPILE}}'
    , ""
    , ' ✖ Websocket'.bold.green
    , '   {{#public.WEBSOCKET}}' + '{{.}}'.yellow + ' | {{/public.WEBSOCKET}}'
    , ""
    , ' ✖ Crypt'.bold.green
    , '   {{#public.CRYPT}}' + '{{.}}'.yellow + ' | {{/public.CRYPT}}'
    , ""
    , ' ✖ Command Line Helper'.bold.green
    , '   {{#public.CLI}}' + '{{.}}'.yellow + ' | {{/public.CLI}}'
    , ""
    , ' ✖ File System'.bold.green
    , '   {{#public.FILESYSTEM}}' + '{{.}}'.yellow + ' | {{/public.FILESYSTEM}}'
    , ""
    , ' ✖ BDD/TDD'.bold.green
    , '   {{#public.BDD/TDD}}' + '{{.}}'.yellow + ' | {{/public.BDD/TDD}}'
    , ""
    , ' ✖ Not category'.bold.green
    , '   {{#public.NONE}}' + '{{.}}'.yellow + ' | {{/public.NONE}}'
    , '  --------------------------------'
];

var tpl_builtin = [
      '# Current embed moduleName [docs] list'.bold.red
    , ""
];
tpl_builtin = tpl_builtin.concat(tpl_common).join('\n');

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
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log(output);
  console.log();
}
/**
 * get category
 * @param String file
 */
function getCategory(file) {
  if (fs.existsSync(file)) {
    return (require(file).category || 'None').toUpperCase();
  } else {
    return 'NONE';
  }
}
/**
 * builtin list
 *
 * @return void
 */
function builtin() {
  var docs = path.resolve(__dirname, '..', 'docs');
  fs.readdir(docs, function(err, files) {
    if (err) throw new Error(err);

    var docs = {};
    files.forEach(function(file) {
      if (/\.meta\.js/.test(file) == false) return;
      var category = getCategory(path.resolve(__dirname, '..', 'docs/' + file));
      docs[category] || (docs[category] = []);
      docs[category].push(file.replace(/\.meta\.js/, ''));
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
 * help for module
 *
 * @param String id - module name
 * @param Function cb - cli using
 * @return void
 */
function help(id, cb) {
  var Showdown = require('showdown');
  var converter = new Showdown.converter();

  var src, meta, content, output, data;

  if (typeof id == 'undefined') {
      console.log("usage: help('moduleName')".red);
      return;
  }

  // check two-case: public, native (black edition)
  try {
    src = path.resolve(__dirname, '../docs');
    data = require(src + '/' + id + '.meta');
    data.homepage = data.homepage || config.homepage.replace('__MODULE_NAME__', id);
    data.description = converter.makeHtml(fs.readFileSync(src + '/' + id + '.md', 'utf8').toString());
  } catch (e) {
    cb && cb(e);
    return;
  }

  // parsing
  output = mustache.render(tpl_doc, data);

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
exports.dependon = dependon;
exports.help = help;
