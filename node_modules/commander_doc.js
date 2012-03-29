exports.__doc__ = "NAME\n".yellow
    + "\tcommander\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/commander\n"
    + "\n"
    + "DESCRIPTION\n".yellow
	+ "\tOption parsing\n".red
	+ "\t===============\n"
    + "\n"
	+ "\tOptions with commander are defined with the .option() method, also serving as documentation for the options. The example below parses args and options from process.argv, leaving remaining args as the program.args array which were not consumed by options.\n"
    + "\n"

	+ "\t!/usr/bin/env node\n".green
    + "\t/**\n".green
	+ "\t * Module dependencies.\n".green
	+ "\t */\n".green
    + "\n"
	+ "\tvar program = require('commander');\n".green
    + "\n"
	+ "\tprogram\n".green
	+ "\t  .version('0.0.1')\n".green
	+ "\t  .option('-p, --peppers', 'Add peppers')\n".green
	+ "\t  .option('-P, --pineapple', 'Add pineapple')\n".green
	+ "\t  .option('-b, --bbq', 'Add bbq sauce')\n".green
	+ "\t  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')\n".green
	+ "\t  .parse(process.argv);\n".green
    + "\n"
	+ "\tconsole.log('you ordered a pizza with:');\n".green
	+ "\tif (program.peppers) console.log('  - peppers');\n".green
	+ "\tif (program.pineapple) console.log('  - pineappe');\n".green
	+ "\tif (program.bbq) console.log('  - bbq');\n".green
	+ "\tconsole.log('  - %s cheese', program.cheese);\n".green
    + "\n"
	+ "\tShort flags may be passed as a single arg, for example -abc is equivalent to -a -b -c. Multi-word options such as \"--template-engine\" are camel-cased, becoming program.templateEngine etc.\n"
    + "\n"
    + "\n"
	+ "\tAutomated --help\n".red
	+ "\t================\n"
    + "\n"
	+ "\tThe help information is auto-generated based on the information commander already knows about your program, so the following --help info is for free:\n"
    + "\n"
	+ "\t $ ./examples/pizza --help\n".green
    + "\n"
	+ "\t   Usage: pizza [options]\n".green
    + "\n"
	+ "\t   Options:\n".green
    + "\n"
	+ "\t -v, --version        output the version number\n".green
	+ "\t -p, --peppers        Add peppers\n".green
	+ "\t -P, --pineapple      Add pineappe\n".green
	+ "\t -b, --bbq            Add bbq sauce\n".green
	+ "\t -c, --cheese <type>  Add the specified type of cheese [marble]\n".green
	+ "\t -h, --help           output usage information\n".green
    + "\n"
    + "\n"
	+ "\tCoercion\n".red
	+ "\t========\n"
    + "\n"
	+ "\tfunction range(val) {\n".green
	+ "\t  return val.split('..').map(Number);\n".green
	+ "\t}\n".green
    + "\n"
	+ "\tfunction list(val) {\n".green
	+ "\t  return val.split(',');\n".green
	+ "\t}\n".green
    + "\n"
	+ "\tprogram\n".green
	+ "\t  .version('0.0.1')\n".green
	+ "\t  .usage('[options] ')\n".green
	+ "\t  .option('-i, --integer ', 'An integer argument', parseInt)\n".green
	+ "\t  .option('-f, --float ', 'A float argument', parseFloat)\n".green
	+ "\t  .option('-r, --range ..', 'A range', range)\n".green
	+ "\t  .option('-l, --list ', 'A list', list)\n".green
	+ "\t  .option('-o, --optional [value]', 'An optional value')\n".green
	+ "\t  .parse(process.argv);\n".green
    + "\n"
	+ "\tconsole.log(' int: %j', program.integer);\n".green
	+ "\tconsole.log(' float: %j', program.float);\n".green
	+ "\tconsole.log(' optional: %j', program.optional);\n".green
	+ "\tprogram.range = program.range || [];\n".green
	+ "\tconsole.log(' range: %j..%j', program.range[0], program.range[1]);\n".green
	+ "\tconsole.log(' list: %j', program.list);\n".green
	+ "\tconsole.log(' args: %j', program.args);\n".green
    + "\n"
    + "\n"
	+ "\tCustom help\n".red
	+ "\t============\n"
    + "\n"
	+ "\tYou can display arbitrary -h, --help information\n"
	+ "\tby listening for \"--help\". Commander will automatically\n"
	+ "\texit once you are done so that the remainder of your program\n"
	+ "\tdoes not execute causing undesired behaviours, for example\n"
	+ "\tin the following executable \"stuff\" will not output when\n"
	+ "\t--help is used.\n"
    + "\n"
    + "\n"
	+ "\t!/usr/bin/env node\n".green
    + "\n"
    + "\n"
	+ "\t/**\n".green
	+ "\t * Module dependencies.\n".green
	+ "\t */\n".green
    + "\n"
	+ "\tvar program = require('../');\n".green
    + "\n"
	+ "\tfunction list(val) {\n".green
	+ "\t  return val.split(',').map(Number);\n".green
	+ "\t}\n".green
    + "\n"
	+ "\tprogram\n".green
	+ "\t  .version('0.0.1')\n".green
	+ "\t  .option('-f, --foo', 'enable some foo')\n".green
	+ "\t  .option('-b, --bar', 'enable some bar')\n".green
	+ "\t  .option('-B, --baz', 'enable some baz');\n".green
    + "\n"
	+ "\t// must be before .parse() since\n".green
	+ "\t// node's emit() is immediate\n".green
    + "\n"
	+ "\tprogram.on('--help', function(){\n".green
	+ "\t  console.log('  Examples:');\n".green
	+ "\t  console.log('');\n".green
	+ "\t  console.log('    $ custom-help --help');\n".green
	+ "\t  console.log('    $ custom-help -h');\n".green
	+ "\t  console.log('');\n".green
	+ "\t});\n".green
    + "\n"
	+ "\tprogram.parse(process.argv);\n".green
    + "\n"
	+ "\tconsole.log('stuff');\n".green
    + "\n"
    + "\n"
	+ "\tyielding the following help output\n".red
	+ "\t===================================\n"
    + "\n"
	+ "\tUsage: custom-help [options]\n".green
    + "\n"
	+ "\tOptions:\n".green
    + "\n"
	+ "\t  -h, --help     output usage information\n".green
	+ "\t  -v, --version  output the version number\n".green
	+ "\t  -f, --foo      enable some foo\n".green
	+ "\t  -b, --bar      enable some bar\n".green
	+ "\t  -B, --baz      enable some baz\n".green
    + "\n"
	+ "\tExamples:\n".green
    + "\n"
	+ "\t  $ custom-help --help\n".green
	+ "\t  $ custom-help -h\n".green
    + "\n"
    + "\n"
	+ "\t.prompt(msg, fn)\n".red
	+ "\t==================\n"
    + "\n"
	+ "\tSingle-line prompt\n".cyan
	+ "\t-------------------\n"
    + "\n"
	+ "\tprogram.prompt('name: ', function(name){\n".green
	+ "\t  console.log('hi %s', name);\n".green
	+ "\t});\n".green
    + "\n"
	+ "\tMulti-line prompt\n".cyan
	+ "\t-------------------\n"
    + "\n"
	+ "\tprogram.prompt('description:', function(name){\n".green
	+ "\t  console.log('hi %s', name);\n".green
	+ "\t});\n".green
    + "\n"
	+ "\tCoercion\n".cyan
	+ "\t---------\n"
    + "\n"
	+ "\tprogram.prompt('Age: ', Number, function(age){\n".green
	+ "\t  console.log('age: %j', age);\n".green
	+ "\t});\n".green
	+ "\tprogram.prompt('Birthdate: ', Date, function(date){\n".green
	+ "\t  console.log('date: %s', date);\n".green
	+ "\t});\n".green
    + "\n"
    + "\n"
	+ "\t.password(msg[, mask], fn)\n".red
	+ "\t===========================\n"
    + "\n"
	+ "\tPrompt for password without echoing:\n".cyan
	+ "\t------------------------------------\n"
    + "\n"
	+ "\tprogram.password('Password: ', function(pass){\n".green
	+ "\t  console.log('got \"%s\"', pass);\n".green
	+ "\t  process.stdin.destroy();\n".green
	+ "\t});\n".green
    + "\n"
	+ "\tPrompt for password with mask char \"*\":\n".cyan
	+ "\t------------------------------------\n"
    + "\n"
	+ "\tprogram.password('Password: ', '*', function(pass){\n".green
	+ "\t  console.log('got \"%s\"', pass);\n".green
	+ "\t  process.stdin.destroy();\n".green
	+ "\t});\n".green
    + "\n"
    + "\n"
	+ "\t.confirm(msg, fn)\n".red
	+ "\t===================\n"
    + "\n"
	+ "\tConfirm with the given msg:\n".cyan
	+ "\t---------------------------\n"
    + "\n"
	+ "\tprogram.confirm('continue? ', function(ok){\n".green
	+ "\t  console.log(' got %j', ok);\n".green
	+ "\t});\n".green
    + "\n"
    + "\n"
	+ "\t.choose(list, fn)\n".red
	+ "\t===================\n"
    + "\n"
	+ "\tLet the user choose from a list\n".cyan
	+ "\t--------------------------------\n".cyan
    + "\n"
	+ "\tvar list = ['tobi', 'loki', 'jane', 'manny', 'luna'];\n".green
    + "\n"
	+ "\tconsole.log('Choose the coolest pet:');\n".green
	+ "\tprogram.choose(list, function(i){\n".green
	+ "\t  console.log('you chose %d \"%s\"', i, list[i]);\n".green
	+ "\t});\n".green
    ;
