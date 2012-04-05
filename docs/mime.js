exports.name = 'mime';
exports.category = 'SERVER';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/mime';
exports.description = [
 '\t# mime'.red
,'\t'
,'\tComprehensive MIME type mapping API. Includes all 600+ types and 800+ extensions defined by the Apache project, plus additional types submitted by the node.js community.'
,'\t'
,'\t## Install'.cyan
,'\t'
,'\tInstall with [npm](http://github.com/isaacs/npm):'
,'\t'
,'\t    npm install mime'.green
,'\t'
,'\t## API - Queries'.cyan
,'\t'
,'\t### mime.lookup(path)'.magenta
,'\tGet the mime type associated with a file. Performs a case-insensitive lookup using the extension in `path` (the substring after the last \'/\' or \'.\').  E.g.'
,'\t'
,'\t    var mime = require(\'mime\');'.green
,'\t'.green
,'\t    mime.lookup(\'/path/to/file.txt\');         // => \'text/plain\''.green
,'\t    mime.lookup(\'file.txt\');                  // => \'text/plain\''.green
,'\t    mime.lookup(\'.TXT\');                      // => \'text/plain\''.green
,'\t    mime.lookup(\'htm\');                       // => \'text/html\''.green
,'\t'
,'\t### mime.extension(type)'.magenta
,'\tGet the default extension for `type`'
,'\t'
,'\t    mime.extension(\'text/html\');                 // => \'html\''.green
,'\t    mime.extension(\'application/octet-stream\');  // => \'bin\''.green
,'\t'
,'\t### mime.charsets.lookup()'.magenta
,'\t'
,'\tMap mime-type to charset'
,'\t'
,'\t    mime.charsets.lookup(\'text/plain\');        // => \'UTF-8\''.green
,'\t'
,'\t(The logic for charset lookups is pretty rudimentary.  Feel free to suggest improvements.)'
,'\t'
,'\t## API - Defining Custom Types'.cyan
,'\t'
,'\tThe following APIs allow you to add your own type mappings within your project.  If you feel a type should be included as part of node-mime, see [requesting new types](https://github.com/bentomas/node-mime/wiki/Requesting-New-Types).'
,'\t'
,'\t### mime.define()'.magenta
,'\t'
,'\tAdd custom mime/extension mappings'
,'\t'
,'\t    mime.define({'.green
,'\t        \'text/x-some-format\': [\'x-sf\', \'x-sft\', \'x-sfml\'],'.green
,'\t        \'application/x-my-type\': [\'x-mt\', \'x-mtt\'],'.green
,'\t        // etc ...'.green
,'\t    });'.green
,'\t'.green
,'\t    mime.lookup(\'x-sft\');                 // => \'text/x-some-format\''.green
,'\t'
,'\tThe first entry in the extensions array is returned by `mime.extension()`. E.g.'
,'\t'
,'\t    mime.extension(\'text/x-some-format\'); // => \'x-sf\''.green
,'\t'
,'\t### mime.load(filepath)'.magenta
,'\t'
,'\tLoad mappings from an Apache ".types" format file'
,'\t'
,'\t    mime.load(\'./my_project.types\');'.green
,'\t'
,'\tThe .types file format is simple -  See the `types` dir for examples.'
].join('\n');
