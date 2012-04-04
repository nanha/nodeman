exports.name = 'commander';
exports.category = 'cli';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/commander';
exports.description = [
"\tOption parsing".red
, "\t==============="
, ""
, "\tOptions with commander are defined with the .option() method, also serving as documentation for the options. The example below parses args and options from process.argv, leaving remaining args as the program.args array which were not consumed by options."
, ""

, "\t!/usr/bin/env node".green
, "\t/**".green
, "\t * Module dependencies.".green
, "\t */".green
, ""
, "\tvar program = require('commander');".green
, ""
, "\tprogram".green
, "\t  .version('0.0.1')".green
, "\t  .option('-p, --peppers', 'Add peppers')".green
, "\t  .option('-P, --pineapple', 'Add pineapple')".green
, "\t  .option('-b, --bbq', 'Add bbq sauce')".green
, "\t  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')".green
, "\t  .parse(process.argv);".green
, ""
, "\tconsole.log('you ordered a pizza with:');".green
, "\tif (program.peppers) console.log('  - peppers');".green
, "\tif (program.pineapple) console.log('  - pineappe');".green
, "\tif (program.bbq) console.log('  - bbq');".green
, "\tconsole.log('  - %s cheese', program.cheese);".green
, ""
, "\tShort flags may be passed as a single arg, for example -abc is equivalent to -a -b -c. Multi-word options such as \"--template-engine\" are camel-cased, becoming program.templateEngine etc."
, ""
, ""
, "\tAutomated --help".red
, "\t================"
, ""
, "\tThe help information is auto-generated based on the information commander already knows about your program, so the following --help info is for free:"
, ""
, "\t $ ./examples/pizza --help".green
, ""
, "\t   Usage: pizza [options]".green
, ""
, "\t   Options:".green
, ""
, "\t -v, --version        output the version number".green
, "\t -p, --peppers        Add peppers".green
, "\t -P, --pineapple      Add pineappe".green
, "\t -b, --bbq            Add bbq sauce".green
, "\t -c, --cheese <type>  Add the specified type of cheese [marble]".green
, "\t -h, --help           output usage information".green
, ""
, ""
, "\tCoercion".red
, "\t========"
, ""
, "\tfunction range(val) {".green
, "\t  return val.split('..').map(Number);".green
, "\t}".green
, ""
, "\tfunction list(val) {".green
, "\t  return val.split(',');".green
, "\t}".green
, ""
, "\tprogram".green
, "\t  .version('0.0.1')".green
, "\t  .usage('[options] ')".green
, "\t  .option('-i, --integer ', 'An integer argument', parseInt)".green
, "\t  .option('-f, --float ', 'A float argument', parseFloat)".green
, "\t  .option('-r, --range ..', 'A range', range)".green
, "\t  .option('-l, --list ', 'A list', list)".green
, "\t  .option('-o, --optional [value]', 'An optional value')".green
, "\t  .parse(process.argv);".green
, ""
, "\tconsole.log(' int: %j', program.integer);".green
, "\tconsole.log(' float: %j', program.float);".green
, "\tconsole.log(' optional: %j', program.optional);".green
, "\tprogram.range = program.range || [];".green
, "\tconsole.log(' range: %j..%j', program.range[0], program.range[1]);".green
, "\tconsole.log(' list: %j', program.list);".green
, "\tconsole.log(' args: %j', program.args);".green
, ""
, ""
, "\tCustom help".red
, "\t============"
, ""
, "\tYou can display arbitrary -h, --help information"
, "\tby listening for \"--help\". Commander will automatically"
, "\texit once you are done so that the remainder of your program"
, "\tdoes not execute causing undesired behaviours, for example"
, "\tin the following executable \"stuff\" will not output when"
, "\t--help is used."
, ""
, ""
, "\t!/usr/bin/env node".green
, ""
, ""
, "\t/**".green
, "\t * Module dependencies.".green
, "\t */".green
, ""
, "\tvar program = require('../');".green
, ""
, "\tfunction list(val) {".green
, "\t  return val.split(',').map(Number);".green
, "\t}".green
, ""
, "\tprogram".green
, "\t  .version('0.0.1')".green
, "\t  .option('-f, --foo', 'enable some foo')".green
, "\t  .option('-b, --bar', 'enable some bar')".green
, "\t  .option('-B, --baz', 'enable some baz');".green
, ""
, "\t// must be before .parse() since".green
, "\t// node's emit() is immediate".green
, ""
, "\tprogram.on('--help', function(){".green
, "\t  console.log('  Examples:');".green
, "\t  console.log('');".green
, "\t  console.log('    $ custom-help --help');".green
, "\t  console.log('    $ custom-help -h');".green
, "\t  console.log('');".green
, "\t});".green
, ""
, "\tprogram.parse(process.argv);".green
, ""
, "\tconsole.log('stuff');".green
, ""
, ""
, "\tyielding the following help output".red
, "\t==================================="
, ""
, "\tUsage: custom-help [options]".green
, ""
, "\tOptions:".green
, ""
, "\t  -h, --help     output usage information".green
, "\t  -v, --version  output the version number".green
, "\t  -f, --foo      enable some foo".green
, "\t  -b, --bar      enable some bar".green
, "\t  -B, --baz      enable some baz".green
, ""
, "\tExamples:".green
, ""
, "\t  $ custom-help --help".green
, "\t  $ custom-help -h".green
, ""
, ""
, "\t.prompt(msg, fn)".red
, "\t=================="
, ""
, "\tSingle-line prompt".cyan
, "\t-------------------"
, ""
, "\tprogram.prompt('name: ', function(name){".green
, "\t  console.log('hi %s', name);".green
, "\t});".green
, ""
, "\tMulti-line prompt".cyan
, "\t-------------------"
, ""
, "\tprogram.prompt('description:', function(name){".green
, "\t  console.log('hi %s', name);".green
, "\t});".green
, ""
, "\tCoercion".cyan
, "\t---------"
, ""
, "\tprogram.prompt('Age: ', Number, function(age){".green
, "\t  console.log('age: %j', age);".green
, "\t});".green
, "\tprogram.prompt('Birthdate: ', Date, function(date){".green
, "\t  console.log('date: %s', date);".green
, "\t});".green
, ""
, ""
, "\t.password(msg[, mask], fn)".red
, "\t==========================="
, ""
, "\tPrompt for password without echoing:".cyan
, "\t------------------------------------"
, ""
, "\tprogram.password('Password: ', function(pass){".green
, "\t  console.log('got \"%s\"', pass);".green
, "\t  process.stdin.destroy();".green
, "\t});".green
, ""
, "\tPrompt for password with mask char \"*\":".cyan
, "\t------------------------------------"
, ""
, "\tprogram.password('Password: ', '*', function(pass){".green
, "\t  console.log('got \"%s\"', pass);".green
, "\t  process.stdin.destroy();".green
, "\t});".green
, ""
, ""
, "\t.confirm(msg, fn)".red
, "\t==================="
, ""
, "\tConfirm with the given msg:".cyan
, "\t---------------------------"
, ""
, "\tprogram.confirm('continue? ', function(ok){".green
, "\t  console.log(' got %j', ok);".green
, "\t});".green
, ""
, ""
, "\t.choose(list, fn)".red
, "\t==================="
, ""
, "\tLet the user choose from a list".cyan
, "\t--------------------------------".cyan
, ""
, "\tvar list = ['tobi', 'loki', 'jane', 'manny', 'luna'];".green
, ""
, "\tconsole.log('Choose the coolest pet:');".green
, "\tprogram.choose(list, function(i){".green
, "\t  console.log('you chose %d \"%s\"', i, list[i]);".green
, "\t});".green
].join('\n');
