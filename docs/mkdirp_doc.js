exports.__doc__ = "NAME\n".yellow
    + "\tmkdirp\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/mkdirp\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\texample\n".red
    + "\t========\n"
    + "\n"
    + "\tvar mkdirp = require('mkdirp');\n".green
    + "\n"

    + "\tmkdirp('/tmp/foo/bar/baz', function (err) {\n".green
    + "\t    if (err) console.error(err)\n".green
    + "\t    else console.log('pow!')\n".green
    + "\t});\n".green
    + "\n"
    + "\tOutput\n".cyan
    + "\t----------\n"
    + "\tpow!\n"
    + "\n"

    + "\tAnd now /tmp/foo/bar/baz exists, huzzah!\n"
    + "\n"

    + "\tmethods\n".red
    + "\t========\n"
    + "\n"
    + "\tvar mkdirp = require('mkdirp');\n".green
    + "\n"

    + "\tmkdirp(dir, mode, cb)\n".cyan
    + "\t----------------------\n"
    + "\n"
    + "\tCreate a new directory and any necessary subdirectories at dir with octal\n"
    + "\tpermission string mode.\n"
    + "\n"

    + "\tIf mode isn't specified, it defaults to 0777 & (~process.umask()).\n"
    + "\n"

    + "\tmkdirp.sync(dir, mode)\n".cyan
    + "\t----------------------\n"
    + "\n"
    + "\tSynchronously create a new directory and any necessary subdirectories at dir\n"
    + "\twith octal permission string mode.\n"
    + "\n"

    + "\tIf mode isn't specified, it defaults to 0777 & (~process.umask()).\n"
    ;
