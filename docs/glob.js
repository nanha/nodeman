exports.name = 'glob';
exports.category = 'FileSystem';
exports.context = 'use require';
exports.homepage = 'https://github.com/isaacs/node-glob';
exports.description = [
    , "\tUsage".red
    , "\t======="
    , ""
    , "\tvar glob = require(\"glob\")".green
    , ""

    , "\t// options is optional".green
    , "\tglob(\"**/*.js\", options, function (er, files) {".green
    , "\t  // files is an array of filenames.".green
    , "\t  // If the `nonull` option is set, and nothing".green
    , "\t  // was found, then files is [\"**/*.js\"]".green
    , "\t  // er is an error object or null.".green
    , "\t})".green
].join('\n');
