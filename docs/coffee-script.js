exports.name = 'coffee-script';
exports.category = 'compile';
exports.context = 'use require';
exports.homepage = 'http://coffeescript.org/';
exports.description = [
,"\tCoffeeScript is a little language that compiles into JavaScript.".red
,"\t================================================================"
,""
,"\tInstall Node.js, and then the CoffeeScript compiler:"
,""
,"\tsudo bin/cake install".green
,""

,"\tOr, if you have the Node Package Manager installed:"
,""
,"\tnpm install -g coffee-script".green
,""
,"\t(Leave off the -g if you don't wish to install globally.)"
,""
,"\tExecute a script:".cyan
,"\tcoffee /path/to/script.coffee".green
,""

,"\tCompile a script:".cyan
,"\tcoffee -c /path/to/script.coffee".green
].join('\n');
