exports.__doc__ = "NAME\n".yellow
    + "\tglob\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttps://github.com/isaacs/node-glob\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tUsage\n".red
    + "\t=======\n"
    + "\n"
    + "\tvar glob = require(\"glob\")\n".green
    + "\n"

    + "\t// options is optional\n".green
    + "\tglob(\"**/*.js\", options, function (er, files) {\n".green
    + "\t  // files is an array of filenames.\n".green
    + "\t  // If the `nonull` option is set, and nothing\n".green
    + "\t  // was found, then files is [\"**/*.js\"]\n".green
    + "\t  // er is an error object or null.\n".green
    + "\t})\n".green
    ;
