exports.name = 'minimatch';
exports.category = 'FileSystem';
exports.context = 'use require';
exports.homepage = '';
exports.description = [
    "\tminimatch".red
    , "\t=========="
    , ""
    , "\tA minimal matching utility."
    , ""

    , "\tThis is the matching library used internally by npm."
    , "\tEventually, it will replace the C binding in node-glob."
    , "\tIt works by converting glob expressions into JavaScript RegExp objects."
    , ""

    , "\tUsage".red
    , "\t======"
    , ""
    , "\tvar minimatch = require(\"minimatch\")".green
    , ""

    , "\tminimatch(\"bar.foo\", \"*.foo\") // true!".green
    , "\tminimatch(\"bar.foo\", \"*.bar\") // false!".green
].join('\n');
