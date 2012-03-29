exports.__doc__ = "NAME\n".yellow
    + "\tclog\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/clog\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tColorful console output for your applications in NodeJS.\n"

    + "\t- Colors for log, info, warn and error\n"
    + "\t- Support custom labels\n"
    + "\t- Support display level and custom display level\n"
    + "\t- Tiny library\n"
    + "\t- Easy to use\n"
    + "\n"

    + "\tUsage\n".red
    + "\t=======\n"
    + "\n"
    + "\tvar clog = require('clog');\n".green

    + "\tclog('server', 'start listening on port 3000');  // custom head\n".green

    + "\tclog.log('hello', 'world');                      // console.log\n".green
    + "\tclog.info(['foo', 'bar']);                       // console.info\n".green
    + "\tclog.warn('baz is deprecated.');                 // console.warn\n".green
    + "\tclog.error('HTTP/1.1 400 Bad Request');          // console.error\n".green
    + "\tclog.debug('headers', {                          // console.debug\n".green
    + "\t    'Content-Type': 'text/javascript'\n".green
    + "\t});\n".green
    + "\n"
    + "\tConfigure\n".red
    + "\t==========\n"
    + "\n"
    + "\t// display level configration:\n".green
    + "\tclog.configure({'log level': 2});\n".green
    + "\t//=> {'log': true, 'info': true, 'warn': false, 'error': false, 'debug': false}\n".green

    + "\t// custom display configration:\n".green
    + "\tclog.configure({\n".green
    + "\t    'log level': {\n".green
    + "\t        'log': true,\n".green
    + "\t        'info': true,\n".green
    + "\t        'warn': false,\n".green
    + "\t        'error': true,\n".green
    + "\t        'debug': false\n".green
    + "\t    }\n".green
    + "\t});\n".green
    + "\t//=> {'log': true, 'info': true, 'warn': false, 'error': true, 'debug': false}\n".green
    ;
