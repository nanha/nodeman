exports.name = 'vows';
exports.category = 'BDD/TDD';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/vows';
exports.description = [
 '\tVows'.red
,'\t===='
,'\t'
,'\tAsynchronous BDD & continuous integration for node.js'
,'\thttp://vowsjs.org'.magenta
,'\t'
,'\tintroduction'.red
,'\t=============='
,'\t'
,'\tThere are two reasons why we might want asynchronous testing. The first, and obvious reason is that node.js is asynchronous, and therefore our tests need to be. The second reason is to make test suites which target I/O libraries run much faster.'
,'\t'
,'\tVows is an experiment in making this possible, while adding a minimum of overhead.'
,'\t'
,'\tsynopsis'.red
,'\t========='
,'\t'
,'\t    var vows = require(\'vows\'),'.green
,'\t        assert = require(\'assert\');'.green
,'\t'.green
,'\t    vows.describe(\'Deep Thought\').addBatch({'.green
,'\t        \'An instance of DeepThought\': {'.green
,'\t            topic: new DeepThought,'.green
,'\t'.green
,'\t            \'should know the answer to the ultimate question of life\': function (deepThought) {'.green
,'\t                assert.equal (deepThought.question(\'what is the answer to the universe?\'), 42);'.green
,'\t            }'.green
,'\t        }'.green
,'\t    });'.green
,'\t'
,'\tcoverage reporting'.red
,'\t=================='
,'\t'
,'\tCode coverage reporting is available if _instrumented_ code is detected.  Currently only _instrumentation_ via [node-jscoverage](https://github.com/visionmedia/node-jscoverage) is supported.  When _instrumented_ code is detected and coverage reporting is enabled using any of the `--cover-plain`, `--cover-html`, or `--cover-json` options a code coverage map is generated.'
,'\t'
,'\t### downloading and installing [node-jscoverage](https://github.com/visionmedia/node-jscoverage)'.magenta
,'\t[node-jscoverage](https://github.com/visionmedia/node-jscoverage) is a binary package that needs to be compiled from source:'
,'\t'
,'\t    $ git clone https://github.com/visionmedia/node-jscoverage.git'.green
,'\t    $ cd node-jscoverage/'.green
,'\t    $ ./configure'.green
,'\t    checking for a BSD-compatible install... /usr/bin/install -c'.green
,'\t    checking whether build environment is sane... yes'.green
,'\t    [...]'.green
,'\t    $ make && sudo make install'.green
,'\t'
,'\t### instrumenting with jscoverage'.magenta
,'\t'
,'\t    $ jscoverage myfile.js myfile-instrumented.js'.green
,'\t    '
,'\tinstallation'.red
,'\t============='
,'\t'
,'\t    $ npm install vows'.green
,'\t'
,'\tdocumentation'.red
,'\t=============='
,'\t'
,'\tHead over to <http://vowsjs.org>'
].join('\n');
