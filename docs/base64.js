exports.name = 'base64';
exports.category = 'Crypt';
exports.context = 'use require';
exports.homepage = 'https://github.com/brainfucker/node-base64';
exports.description = [
"\tFunctions".red
,"\t=========="
, ""
,"\t- encode(str); // Encode string"
,"\t- decode(str); // Decode string"
, ""
, ""
,"\tUsage".red
,"\t======="
, ""
,"\tvar base64 = require('base64');".green
,"\tvar code = base64.encode('text');".green
,"\tvar str = base64.decode(code); // text".green
, ""
, ""
,"\tSpeed testing".red
,"\t=============="
, ""
,"\tTo run speed test on your computer run test.js, here is my: C++ base64 result is: 82 JS base64 result is: 517 C++ module faster than JS in 6.304878048780488 times"
].join('\n');
