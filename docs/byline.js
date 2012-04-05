exports.name = 'byline';
exports.category = 'FileSystem';
exports.context = 'use require';
exports.homepage = 'https://github.com/jahewson/node-byline';
exports.description = [
 '\t# byline -- buffered Stream for reading lines'.red
,'\t'
,'\t`byline` is a super-simple module providing a `LineStream` for [node.js](http://nodejs.org/).'
,'\t'
,'\t- supports `pipe`'
,'\t- supports both UNIX and Windows line endings'
,'\t- can wrap any readable stream'
,'\t- can be used as a readable-writable "through-stream"'
,'\t- super-simple: `stream = byline(stream);`'
,'\t'
,'\t## Install'.cyan
,'\t'
,'\t    npm install byline'.green
,'\t'
,'\tor from source:'
,'\t'
,'\t    git clone git://github.com/jahewson/node-byline.git'.green
,'\t	cd node-byline'.green
,'\t	npm link'.green
,'\t'
,'\t# Convenience API'.red
,'\t'
,'\tThe `byline` module can be used as a function to quickly wrap a readable stream:'
,'\t'
,'\tvar fs = require(\'fs\'),'.green
,'\t    byline = require(\'byline\');'.green
,'\t'.green
,'\tvar stream = byline(fs.createReadStream(\'sample.txt\'));'.green
,'\t'
,'\tThe `data` event then emits lines:'
,'\t'
,'\tstream.on(\'data\', function(line) {'.green
,'\t  console.log(line);'.green
,'\t});'.green
,'\t'
,'\t#Standard API'.red
,'\t    '
,'\tYou just need to add one line to wrap your readable `Stream` with a `LineStream`.'
,'\t'
,'\tvar fs = require(\'fs\'),	'.green
,'\t    byline = require(\'byline\');'.green
,'\t'.green
,'\tvar stream = fs.createReadStream(\'sample.txt\');'.green
,'\tstream = byline.createStream(stream);'.green
,'\t'.green
,'\tstream.on(\'data\', function(line) {'.green
,'\t  console.log(line);'.green
,'\t});'.green
,'\t'
,'\t# Piping'.red
,'\t'
,'\t`byline` supports `pipe` (though it strips the line endings, of course).'
,'\t'
,'\tvar stream = fs.createReadStream(\'sample.txt\');'.green
,'\tstream = byline.createLineStream(stream);'.green
,'\tstream.pipe(fs.createWriteStream(\'nolines.txt\'));'.green
,'\t'
,'\tAlternatively, you can create a readable/writable "through-stream" which doesn\'t wrap any specific stream:'
,'\t'
,'\tvar stream = fs.createReadStream(\'sample.txt\');'.green
,'\tstream = byline.createLineStream(stream);'.green
,'\tstream.pipe(fs.createWriteStream(\'nolines.txt\'));'.green
,'\t	'.green
,'\tvar input = fs.createReadStream(\'LICENSE\');'.green
,'\tvar lineStream = byline.createStream();'.green
,'\tinput.pipe(lineStream);'.green
,'\t'.green
,'\tvar output = fs.createWriteStream(\'test.txt\');'.green
,'\tlineStream.pipe(output);'.green
].join('\n');
