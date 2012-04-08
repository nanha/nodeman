exports.name = 'path';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/path.html';
exports.description = [
, "\t# Path".red
,""
, "\tThis module contains utilities for handling and transforming file"
, "\tpaths.  Almost all these methods perform only string transformations."
, "\tThe file system is not consulted to check whether paths are valid."
,""
, "\t`path.exists` and `path.existsSync` are the exceptions, and should"
, "\tlogically be found in the fs module as they do access the file system."
,""
, "\tUse `require('path')` to use this module.  The following methods are provided:"
,""
, "\t## path.normalize(p)".cyan
,""
, "\tNormalize a string path, taking care of `'..'` and `'.'` parts."
,""
, "\tWhen multiple slashes are found, they're replaced by a single one;"
, "\twhen the path contains a trailing slash, it is preserved."
, "\tOn windows backslashes are used. "
,""
, "\tExample:".green
,"".green
, "\t    path.normalize('/foo/bar//baz/asdf/quux/..')".green
, "\t    // returns".green
, "\t    '/foo/bar/baz/asdf'".green
,""
, "\t## path.join([path1], [path2], [...])".cyan
,""
, "\tJoin all arguments together and normalize the resulting path."
, "\tNon-string arguments are ignored."
,""
, "\tExample:".green
,"".green
, "\t    path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')".green
, "\t    // returns".green
, "\t    '/foo/bar/baz/asdf'".green
,"".green
, "\t    path.join('foo', {}, 'bar')".green
, "\t    // returns".green
, "\t    'foo/bar'".green
,""
, "\t## path.resolve([from ...], to)".cyan
,""
, "\tResolves `to` to an absolute path."
,""
, "\tIf `to` isn't already absolute `from` arguments are prepended in right to left"
, "\torder, until an absolute path is found. If after using all `from` paths still"
, "\tno absolute path is found, the current working directory is used as well. The"
, "\tresulting path is normalized, and trailing slashes are removed unless the path "
, "\tgets resolved to the root directory. Non-string arguments are ignored."
,""
, "\tAnother way to think of it is as a sequence of `cd` commands in a shell."
,""
, "\t    path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')".green
,""
, "\tIs similar to:"
,""
, "\t    cd foo/bar".green
, "\t    cd /tmp/file/".green
, "\t    cd ..".green
, "\t    cd a/../subfile".green
, "\t    pwd".green
,""
, "\tThe difference is that the different paths don't need to exist and may also be"
, "\tfiles."
,""
, "\tExamples:".green
,"".green
, "\t    path.resolve('/foo/bar', './baz')".green
, "\t    // returns".green
, "\t    '/foo/bar/baz'".green
,"".green
, "\t    path.resolve('/foo/bar', '/tmp/file/')".green
, "\t    // returns".green
, "\t    '/tmp/file'".green
,"".green
, "\t    path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')".green
, "\t    // if currently in /home/myself/node, it returns".green
, "\t    '/home/myself/node/wwwroot/static_files/gif/image.gif'".green
,""
, "\t## path.relative(from, to)".cyan
,""
, "\tSolve the relative path from `from` to `to`."
,""
, "\tAt times we have two absolute paths, and we need to derive the relative"
, "\tpath from one to the other.  This is actually the reverse transform of"
, "\t`path.resolve`, which means we see that:"
,""
, "\t    path.resolve(from, path.relative(from, to)) == path.resolve(to)".green
,""
, "\tExamples:".yellow
,"".yellow
, "\t    path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')".yellow
, "\t    // returns".yellow
, "\t    '..\\..\\impl\\bbb'".yellow
,"".yellow
, "\t    path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')".yellow
, "\t    // returns".yellow
, "\t    '../../impl/bbb'".yellow
,""
, "\t## path.dirname(p)".cyan
,""
, "\tReturn the directory name of a path.  Similar to the Unix `dirname` command."
,""
, "\tExample:".green
,"".green
, "\t    path.dirname('/foo/bar/baz/asdf/quux')".green
, "\t    // returns".green
, "\t    '/foo/bar/baz/asdf'".green
,""
, "\t## path.basename(p, [ext])".cyan
,""
, "\tReturn the last portion of a path.  Similar to the Unix `basename` command."
,""
, "\tExample:".green
,"".green
, "\t    path.basename('/foo/bar/baz/asdf/quux.html')".green
, "\t    // returns".green
, "\t    'quux.html'".green
,"".green
, "\t    path.basename('/foo/bar/baz/asdf/quux.html', '.html')".green
, "\t    // returns".green
, "\t    'quux'".green
,""
, "\t## path.extname(p)".cyan
,""
, "\tReturn the extension of the path, from the last '.' to end of string"
, "\tin the last portion of the path.  If there is no '.' in the last portion"
, "\tof the path or the first character of it is '.', then it returns"
, "\tan empty string.  Examples:"
,""
, "\t    path.extname('index.html')".green
, "\t    // returns".green
, "\t    '.html'".green
,"".green
, "\t    path.extname('index.')".green
, "\t    // returns".green
, "\t    '.'".green
,"".green
, "\t    path.extname('index')".green
, "\t    // returns".green
, "\t    ''".green
,""
, "\t### path.exists(p, [callback])".magenta
,""
, "\tTest whether or not the given path exists by checking with the file system."
, "\tThen call the `callback` argument with either true or false.  Example:"
,""
, "\t    path.exists('/etc/passwd', function (exists) {".green
, "\t      util.debug(exists ? \"it's there\" : \"no passwd!\");".green
, "\t    });".green
,""
,""
, "\t### path.existsSync(p)".magenta
,""
, "\tSynchronous version of `path.exists`."
].join('\n');
