exports.name = 'graceful-fs';
exports.category = 'FileSystem';
exports.context = 'use require';
exports.homepage = 'https://github.com/isaacs/node-graceful-fs';
exports.description = [
"\tJust like node's fs module, but it does an incremental back-off when EMFILE is encountered."

, "\tUseful in asynchronous situations where one needs to try to open lots and lots of files"
].join('\n');

