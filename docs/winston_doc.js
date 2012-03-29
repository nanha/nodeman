exports.__doc__ = "NAME\n".yellow
    + "\twinston\n"
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/winston\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tMotivation\n".red
    + "\t------------\n"
    + "\tWinston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each instance of a winston logger can have multiple transports configured at different levels. For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file.\n"

    + "\n"
    + "\tThere also seemed to be a lot of logging libraries out there that coupled their implementation of logging (i.e. how the logs are stored / indexed) to the API that they exposed to the programmer. This library aims to decouple those parts of the process to make it more flexible and extensible.\n"
    + "\n"

    + "\tUsage\n".red
    + "\t------------\n"
    + "\n"
    + "\tThere are two different ways to use winston: directly via the default logger, or by instantiating your own Logger. The former is merely intended to be a convenient shared logger to use throughout your application if you so choose.\n"

    + "\tUsing the Default Logger\n".red
    + "\t--------------------------\n"
    + "\n"
    + "\tThe default logger is accessible through the winston module directly. Any method that you could call on an instance of a logger is available on the default logger:\n"
    + "\n"

    + "\t  var winston = require('winston');\n".green

    + "\t  winston.log('info', 'Hello distributed log files!');\n".green
    + "\t  winston.info('Hello again distributed logs');\n".green
    + "\n"
    + "\tBy default, only the Console transport is set on the default logger. You can add or remove transports via the add() and remove() methods:\n"
    + "\n"

    + "\t  winston.add(winston.transports.File, { filename: 'somefile.log' });\n".green
    + "\t  winston.remove(winston.transports.Console);\n".green
    + "\n"
    + "\tFor more documenation about working with each individual transport supported by Winston see the \"Working with Transports\" section below.\n"

    + "\tInstantiating your own Logger\n".red
    + "\t--------------------------------\n"
    + "\n"
    + "\tIf you would prefer to manage the object lifetime of loggers you are free to instantiate them yourself:\n"
    + "\n"

    + "\t  var logger = new (winston.Logger)({\n".green
    + "\t    transports: [\n".green
    + "\t      new (winston.transports.Console)(),\n".green
    + "\t      new (winston.transports.File)({ filename: 'somefile.log' })\n".green
    + "\t    ]\n".green
    + "\t  });\n".green
    + "\n"
    + "\tYou can work with this logger in the same way that you work with the default logger:\n"
    + "\n"

    + "\t  //\n".green
    + "\t  // Logging\n".green
    + "\t  //\n".green
    + "\t  logger.log('info', 'Hello distributed log files!');\n".green
    + "\t  logger.info('Hello again distributed logs');\n".green
    + "\n"

    + "\t  //\n".green
    + "\t  // Adding / Removing Transports\n".green
    + "\t  //   (Yes It's chainable)\n".green
    + "\t  //\n".green
    + "\t  logger.add(winston.transports.File)\n".green
    + "\t        .remove(winston.transports.Console);\n".green
    + "\n"

    + "\tmore info: http://startic.kr/njs/package/winston\n"
    ;
