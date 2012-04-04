exports.name = 'xml2js';
exports.category = 'compile';
exports.context = 'use require';
exports.homepage = 'https://github.com/Leonidas-from-XIV/node-xml2js';
exports.description = [
 '\tnode-xml2js'.red
,'\t==========='
,'\t'
,'\tEver had the urge to parse XML? And wanted to access the data in some sane,'
,'\teasy way? Don\'t want to compile a C parser, for whatever reason? Then xml2js is'
,'\twhat you\'re looking for!'
,'\t'
,'\tDescription'.red
,'\t==========='
,'\t'
,'\tSimple XML to JavaScript object converter. Uses'
,'\t[sax-js](https://github.com/isaacs/sax-js/).'
,'\t'
,'\tNote: If you\'re looking for a full DOM parser, you probably want'
,'\t[JSDom](https://github.com/tmpvar/jsdom).'
,'\t'
,'\tInstallation'.red
,'\t============'
,'\t'
,'\tSimplest way to install `xml2js` is to use [npm](http://npmjs.org), just `npm'
,'\tinstall xml2js` which will download xml2js and all dependencies.'
,'\t'
,'\tUsage'.red
,'\t====='
,'\t'
,'\tThis will have to do, unless you\'re looking for some fancy extensive'
,'\tdocumentation. If you\'re looking for every single option and usage, see the'
,'\tunit tests.'
,'\t'
,'\tSimple as pie usage'.cyan
,'\t-------------------'
,'\t'
,'\tThe simplest way to use it, is to use the optional callback interface added in'
,'\t0.1.11. That\'s right, if you have been using xml-simple or a home-grown'
,'\twrapper, this is for you:'
,'\t'
,'\tvar fs = require(\'fs\'),'.green
,'\t    xml2js = require(\'xml2js\');'.green
,'\t'.green
,'\tvar parser = new xml2js.Parser();'.green
,'\tfs.readFile(__dirname + \'/foo.xml\', function(err, data) {'.green
,'\t    parser.parseString(data, function (err, result) {'.green
,'\t        console.dir(result);'.green
,'\t        console.log(\'Done\');'.green
,'\t    });'.green
,'\t});'.green
,'\t'
,'\tLook ma, no event listeners! Alternatively you can still use the traditional'
,'\t`addListener` variant:'
,'\t'
,'\tvar fs = require(\'fs\'),'.green
,'\t    xml2js = require(\'xml2js\');'.green
,'\t'.green
,'\tvar parser = new xml2js.Parser();'.green
,'\tparser.addListener(\'end\', function(result) {'.green
,'\t    console.dir(result);'.green
,'\t    console.log(\'Done.\');'.green
,'\t});'.green
,'\tfs.readFile(__dirname + \'/foo.xml\', function(err, data) {'.green
,'\t    parser.parseString(data);'.green
,'\t});'.green
,'\t'
,'\tYou can also use xml2js from'
,'\t[CoffeeScript](http://jashkenas.github.com/coffee-script/), further reducing'
,'\tthe clutter:'
,'\t'
,'\tfs = require \'fs\','.green
,'\txml2js = require \'xml2js\''.green
,'\t'.green
,'\tparser = new xml2js.Parser()'.green
,'\tfs.readFile __dirname + \'/foo.xml\', (err, data) ->'.green
,'\t  parser.parseString data, (err, result) ->'.green
,'\t    console.dir result'.green
,'\t    console.log \'Done.\''.green
,'\t'
,'\tSo you wanna some JSON?'.cyan
,'\t-----------------------'
,'\t'
,'\tJust wrap the `result` object in a call to `JSON.stringify` like this'
,'\t`JSON.stringify(result)`. You get a string containing the JSON representation'
,'\tof the parsed object that you can feed to JSON-hungry consumers.'
,'\t'
,'\tDisplaying results'.cyan
,'\t------------------'
,'\t'
,'\tYou might wonder why, using `console.dir` or `console.log` the output at some'
,'\tlevel is only `[Object]`. Don\'t worry, this is not because xml2js got lazy.'
,'\tThat\'s because Node uses `util.inspect` to convert the object into strings and'
,'\tthat function stops after `depth=2` which is a bit low for most XML.'
,'\t'
,'\tTo display the whole deal, you can use `console.log(util.inspect(result, false,'
,'\tnull))`, which displays the whole result.'
,'\t'
,'\tSo much for that, but what if you use'
,'\t[eyes](https://github.com/cloudhead/eyes.js) for nice colored output and it'
,'\ttruncates the output with `…`? Don\'t fear, there\'s also a solution for that,'
,'\tyou just need to increase the `maxLength` limit by creating a custom inspector'
,'\t`var inspect = require(\'eyes\').inspector({maxLength: false})` and then you can'
,'\teasily `inspect(result)`.'
,'\t'
,'\tOptions'.red
,'\t======='
,'\t'
,'\tApart from the default settings, there is a number of options that can be'
,'\tspecified for the parser. Options are specified by ``new Parser({optionName:'
,'\tvalue})``. Possible options are:'
,'\t'
,'\t  * `explicitCharkey` (default: `false`)'.yellow
,'\t  * `trim` (default: `true`): Trim the whitespace at the beginning and end of'.yellow
,'\t    text nodes.'.yellow
,'\t  * `normalize` (default: `true`): Trim whitespaces inside text nodes.'.yellow
,'\t  * `explicitRoot` (default: `false`): Set this if you want to get the root'.yellow
,'\t    node in the resulting object.'.yellow
,'\t  * `emptyTag` (default: `undefined`): what will the value of empty nodes be.'.yellow
,'\t    Default is `{}`.'.yellow
,'\t  * `explicitArray` (default: `false`): Always put child nodes in an array if'.yellow
,'\t    true; otherwise an array is created only if there is more than one.'.yellow
,'\t  * `ignoreAttrs` (default: `false`): Ignore all XML attributes and only create'.yellow
,'\t    text nodes.'.yellow
,'\t  * `mergeAttrs` (default: `false`): Merge attributes and child elements as'.yellow
,'\t    properties of the parent, instead of keying attributes off a child'.yellow
,'\t    attribute object. This option is ignored if `ignoreAttrs` is `false`.'.yellow
,'\t'
,'\tThese default settings are for backward-compatibility (and might change in the'
,'\tfuture). For the most \'clean\' parsing, you should disable `normalize` and'
,'\t`trimming` and enable `explicitRoot`.'
].join('\n');
