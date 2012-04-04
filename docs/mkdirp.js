exports.name = 'mkdirp';
exports.category = 'FileSystem';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/mkdirp';
exports.description = [
    "\texample".red
    , "\t========"
    , ""
    , "\tvar mkdirp = require('mkdirp');".green
    , ""

    , "\tmkdirp('/tmp/foo/bar/baz', function (err) {".green
    , "\t    if (err) console.error(err)".green
    , "\t    else console.log('pow!')".green
    , "\t});".green
    , ""
    , "\tOutput".cyan
    , "\t----------"
    , "\tpow!"
    , ""

    , "\tAnd now /tmp/foo/bar/baz exists, huzzah!"
    , ""

    , "\tmethods".red
    , "\t========"
    , ""
    , "\tvar mkdirp = require('mkdirp');".green
    , ""

    , "\tmkdirp(dir, mode, cb)".cyan
    , "\t----------------------"
    , ""
    , "\tCreate a new directory and any necessary subdirectories at dir with octal"
    , "\tpermission string mode."
    , ""

    , "\tIf mode isn't specified, it defaults to 0777 & (~process.umask())."
    , ""

    , "\tmkdirp.sync(dir, mode)".cyan
    , "\t----------------------"
    , ""
    , "\tSynchronously create a new directory and any necessary subdirectories at dir"
    , "\twith octal permission string mode."
    , ""

    , "\tIf mode isn't specified, it defaults to 0777 & (~process.umask())."
].join('\n');
