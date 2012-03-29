exports.__doc__ = "NAME\n".yellow
    + "\tminimatch\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/minimatch\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tminimatch\n".red
    + "\t==========\n"
    + "\n"
    + "\tA minimal matching utility.\n"
    + "\n"

    + "\tThis is the matching library used internally by npm.\n"
    + "\tEventually, it will replace the C binding in node-glob.\n"
    + "\tIt works by converting glob expressions into JavaScript RegExp objects.\n"
    + "\n"

    + "\tUsage\n".red
    + "\t======\n"
    + "\n"
    + "\tvar minimatch = require(\"minimatch\")\n".green
    + "\n"

    + "\tminimatch(\"bar.foo\", \"*.foo\") // true!\n".green
    + "\tminimatch(\"bar.foo\", \"*.bar\") // false!\n".green
    ;
