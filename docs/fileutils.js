exports.name = 'fileutils';
exports.category = 'FileSystem';
exports.context = 'use require';
exports.homepage = 'https://github.com/coolaj86/node-examples-js/tree/master/fs.extra';
exports.description = [
    "\tfs.copy".red
    , "\t========"
    , ""
    , "\tCreates an fs.readStream and fs.writeStream and uses util.pump to efficiently copy."
    , ""
    , "\tvar fs = require('fileutils');".green
    , "\tfs.copy('foo.txt', 'bar.txt', function (err) {".green
    , "\t  if (err) {".green
    , "\t    throw err;".green
    , "\t  }".green
    , ""
    , "\t  console.log(\"Copied 'foo.txt' to 'bar.txt'\");".green
    , "\t});".green
    , ""
    , ""
    , "\tfs.move".red
    , "\t========"
    , ""
    , "\tAttempts fs.rename, then tries fs.copy/fs.unlink before failing."
    , ""

    , "\tvar fs = require('fileutils');".green
    , "\tfs.move('foo.txt', 'bar.txt', function (err) {".green
    , "\t  if (err) {".green
    , "\t    throw err;".green
    , "\t  }".green
    , ""
    , "\t  console.log(\"Moved 'foo.txt' to 'bar.txt'\");".green
    , "\t});".green
    , ""
    , ""
    , "\tfs.touch".red
    , "\t========="
    , ""
    , "\ttouch file"
    , ""

    , "\tvar fs = require('fileutils');".green
    , "\tfs.touch('foo.txt', function() {".green
    , "\t});".green
].join('\n');
