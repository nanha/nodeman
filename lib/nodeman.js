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
    mustache = require('./mustache'),
    path = require('path'),
    fs = require('fs');
    require('colors');
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
    , '✔  Current Total Document Count: {{cnt}}'.bold.yellow
    , ""
    , ' ✖ Native Module API'.bold.green
    , '{{#public.NATIVEMODULE}}' + '    - {{.}}'.bold.yellow + '\n{{/public.NATIVEMODULE}}'
    , ""
    , ' ✖ SERVER'.bold.green
    , '   {{#public.SERVER}}' + '{{.}}'.bold.yellow + ' | {{/public.SERVER}}'
    , ""
    , ' ✖ Websocket'.bold.green
    , '   {{#public.WEBSOCKET}}' + '{{.}}'.bold.yellow + ' | {{/public.WEBSOCKET}}'
    , ""
    , ' ✖ Control Flow'.bold.green
    , '   {{#public.CONTROLFLOW}}' + '{{.}}'.bold.yellow + ' | {{/public.CONTROLFLOW}}'
    , ""
    , ' ✖ Stream'.bold.green
    , '   {{#public.STREAM}}' + '{{.}}'.bold.yellow + ' | {{/public.STREAM}}'
    , ""
    , ' ✖ Logging'.bold.green
    , '   {{#public.LOGGING}}' + '{{.}}'.bold.yellow + ' | {{/public.LOGGING}}'
    , ""
    , ' ✖ File System'.bold.green
    , '   {{#public.FILESYSTEM}}' + '{{.}}'.bold.yellow + ' | {{/public.FILESYSTEM}}'
    , ""
    , ' ✖ DATABASE'.bold.green
    , '   {{#public.DATABASE}}' + '{{.}}'.bold.yellow + ' | {{/public.DATABASE}}'
    , ""
    , ' ✖ TEMPLATE'.bold.green
    , '   {{#public.TEMPLATE}}' + '{{.}}'.bold.yellow + ' | {{/public.TEMPLATE}}'
    , ""
    , ' ✖ Auth'.bold.green
    , '   {{#public.AUTH}}' + '{{.}}'.bold.yellow + ' | {{/public.AUTH}}'
    , ""
    , ' ✖ SCRAP Webpage, Request API'.bold.green
    , '   {{#public.SCRAP}}' + '{{.}}'.bold.yellow + ' | {{/public.SCRAP}}'
    , ""
    , ' ✖ Manipulate'.bold.green
    , '   {{#public.MANIPULATE}}' + '{{.}}'.bold.yellow + ' | {{/public.MANIPULATE}}'
    , ""
    , ' ✖ Crypt'.bold.green
    , '   {{#public.CRYPT}}' + '{{.}}'.bold.yellow + ' | {{/public.CRYPT}}'
    , ""
    , ' ✖ Command Line Helper'.bold.green
    , '   {{#public.CLI}}' + '{{.}}'.bold.yellow + ' | {{/public.CLI}}'
    , ""
    , ' ✖ TEST'.bold.green
    , '   {{#public.TEST}}' + '{{.}}'.bold.yellow + ' | {{/public.TEST}}'
    , ""
    , ' ✖ DATE'.bold.green
    , '   {{#public.DATE}}' + '{{.}}'.bold.yellow + ' | {{/public.DATE}}'
    , ""
    , ' ✖ COLOR'.bold.green
    , '   {{#public.COLOR}}' + '{{.}}'.bold.yellow + ' | {{/public.COLOR}}'
    , ""
    , ' ✖ Not category'.bold.green
    , '   {{#public.NONE}}' + '{{.}}'.bold.yellow + ' | {{/public.NONE}}'
    , '  --------------------------------'
];

var tpl_builtin = [
      '# Current embed ModuleName(doc) list'.bold.red
    , ""
];
tpl_builtin = tpl_builtin.concat(tpl_common).join('\n');

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

    // todo: level
    var docs = {}, cnt = 0;
    files.forEach(function(file) {
      if (/\.meta\.js/.test(file) === false) return;
      var category = getCategory(path.resolve(__dirname, '..', 'docs/' + file));
      docs[category] || (docs[category] = []);
      docs[category].push(file.replace(/\.meta\.js/, ''));
      docs[category].sort();
      cnt++;
    });

    var view = {
      cnt: cnt,
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
  var Showdown = require('./showdown');
  var converter = new Showdown.converter();

  var src, output, data;

  if (typeof id == 'undefined') {
      console.log("Usage: help('moduleName')".red);
      return;
  }

  // check two-case: public, native (black edition)
  try {
    src = path.resolve(__dirname, '../docs');
    data = require(src + '/' + id + '.meta');
    data.homepage = data.homepage || config.homepage.replace('__MODULE_NAME__', id);
    data.description = converter.makeHtml(fs.readFileSync(src + '/' + id + '.md', 'utf8').toString());
  } catch (e) {
    cb && cb(e.stack);
    return;
  }

  // parsing
  output = mustache.render(tpl_doc, data);

  // print
  write(output);
}

exports.builtin = builtin;
exports.help = help;
