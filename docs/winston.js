exports.name = 'winston';
exports.category = 'logging';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/winston';
exports.description = [
      "\tMotivation".red
    , "\t------------"
    , "\tWinston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each instance of a winston logger can have multiple transports configured at different levels. For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file."

    , ""
    , ""
    , "\tThere also seemed to be a lot of logging libraries out there that coupled their implementation of logging (i.e. how the logs are stored / indexed) to the API that they exposed to the programmer. This library aims to decouple those parts of the process to make it more flexible and extensible."
    , ""
    , ""

    , "\tUsage".red
    , "\t------------"
    , ""
    , "\tThere are two different ways to use winston: directly via the default logger, or by instantiating your own Logger. The former is merely intended to be a convenient shared logger to use throughout your application if you so choose."

    , ""
    , ""
    , "\tUsing the Default Logger".red
    , "\t--------------------------"
    , ""
    , "\tThe default logger is accessible through the winston module directly. Any method that you could call on an instance of a logger is available on the default logger:"
    , ""

    , "\t  var winston = require('winston');".green

    , "\t  winston.log('info', 'Hello distributed log files!');".green
    , "\t  winston.info('Hello again distributed logs');".green
    , ""
    , "\tBy default, only the Console transport is set on the default logger. You can add or remove transports via the add() and remove() methods:"
    , ""

    , "\t  winston.add(winston.transports.File, { filename: 'somefile.log' });".green
    , "\t  winston.remove(winston.transports.Console);".green
    , ""
    , "\tFor more documenation about working with each individual transport supported by Winston see the \"Working with Transports\" section below."
    , ""
    , ""

    , "\tInstantiating your own Logger".red
    , "\t--------------------------------"
    , ""
    , "\tIf you would prefer to manage the object lifetime of loggers you are free to instantiate them yourself:"
    , ""

    , "\t  var logger = new (winston.Logger)({".green
    , "\t    transports: [".green
    , "\t      new (winston.transports.Console)(),".green
    , "\t      new (winston.transports.File)({ filename: 'somefile.log' })".green
    , "\t    ]".green
    , "\t  });".green
    , ""
    , "\tYou can work with this logger in the same way that you work with the default logger:"
    , ""

    , "\t  //".green
    , "\t  // Logging".green
    , "\t  //".green
    , "\t  logger.log('info', 'Hello distributed log files!');".green
    , "\t  logger.info('Hello again distributed logs');".green
    , ""

    , "\t  //".green
    , "\t  // Adding / Removing Transports".green
    , "\t  //   (Yes It's chainable)".green
    , "\t  //".green
    , "\t  logger.add(winston.transports.File)".green
    , "\t        .remove(winston.transports.Console);".green
    , ""

    , "\tmore info: http://startic.kr/njs/package/winston".yellow
].join('\n');
