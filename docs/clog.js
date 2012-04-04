exports.name = 'clog';
exports.category = 'logging';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/clog';
exports.description = [
"\tUsage".red
, "\t======="
, ""
, "\tvar clog = require('clog');".green

, "\tclog('server', 'start listening on port 3000');  // custom head".green

, "\tclog.log('hello', 'world');                      // console.log".green
, "\tclog.info(['foo', 'bar']);                       // console.info".green
, "\tclog.warn('baz is deprecated.');                 // console.warn".green
, "\tclog.error('HTTP/1.1 400 Bad Request');          // console.error".green
, "\tclog.debug('headers', {                          // console.debug".green
, "\t    'Content-Type': 'text/javascript'".green
, "\t});".green
, ""
, "\tConfigure".red
, "\t=========="
, ""
, "\t// display level configration:".green
, "\tclog.configure({'log level': 2});".green
, "\t//=> {'log': true, 'info': true, 'warn': false, 'error': false, 'debug': false}".green

, "\t// custom display configration:".green
, "\tclog.configure({".green
, "\t    'log level': {".green
, "\t        'log': true,".green
, "\t        'info': true,".green
, "\t        'warn': false,".green
, "\t        'error': true,".green
, "\t        'debug': false".green
, "\t    }".green
, "\t});".green
, "\t//=> {'log': true, 'info': true, 'warn': false, 'error': true, 'debug': false}".green
].join('\n');
