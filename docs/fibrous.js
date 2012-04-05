exports.name = 'fibrous';
exports.category = 'ControlFlow';
exports.context = 'use require';
exports.homepage = 'https://github.com/goodeggs/fibrous';
exports.description = [
 '\tFibrous'.red
,'\t======='
,'\t'
,'\tEasily mix asynchronous and synchronous programming styles in node.js.'
,'\t'
,'\t*A project by [Good Eggs](http://goodeggsinc.com) at https://github.com/goodeggs/fibrous.*'
,'\t'
,'\tInstall'.cyan
,'\t-------'
,'\t'
,'\t    npm install fibrous'.yellow
,'\t'
,'\tFibrous requires node version 0.6.x or greater.'
,'\t'
,'\tUsage'.cyan
,'\t-----'
,'\t'
,'\tWould you rather write this:'
,'\t'
,'\tvar updateUser = function(id, attributes, callback) {'.green
,'\t  User.findOne(id, function (err, user) {'.green
,'\t    if (err) return callback(err);'.green
,'\t    '.green
,'\t    user.set(attributes);'.green
,'\t    user.save(function(err, updated) {'.green
,'\t      if (err) return callback(err);'.green
,'\t'.green
,'\t      console.log("Updated", updated);'.green
,'\t      callback(null, updated);'.green
,'\t    });'.green
,'\t  });'.green
,'\t});'.green
,'\t```'
,'\t'
,'\tOr this, which behaves identically to calling code:'
,'\t'
,'\tvar updateUser = fibrous(function(id, attributes) {'.green
,'\t  user = User.sync.findOne(id);'.green
,'\t  user.set(attributes);'.green
,'\t  updated = user.sync.save();'.green
,'\t  console.log("Updated", updated);'.green
,'\t  return updated;'.green
,'\t});'.green
,'\t'
,'\tOr even better, with [coffeescript](coffeescript.org):'
,'\t'
,'\tupdateUser = fibrous (id, attributes) ->'.green
,'\t  user = User.sync.findOne(id)'.green
,'\t  user.set(attributes)'.green
,'\t  updated = user.sync.save()'.green
,'\t  console.log("Updated", updated)'.green
,'\t  updated'.green
,'\t'
,'\t### Without Fibrous'.magenta
,'\t'
,'\tUsing standard node callback-style APIs without fibrous, we write '
,'\t(from [the fs docs](http://nodejs.org/docs/v0.6.14/api/fs.html#fs_fs_readfile_filename_encoding_callback)):'.red
,'\t'
,'\tfs.readFile(\'/etc/passwd\', function (err, data) {'.green
,'\t  if (err) throw err;'.green
,'\t  console.log(data);'.green
,'\t});'.green
,'\t'
,'\t### Using sync'.magenta
,'\t'
,'\tUsing fibrous, we write:'
,'\t'
,'\tdata = fs.sync.readFile(\'/etc/passwd\');'.green
,'\tconsole.log(data);'.green
,'\t'
,'\t### Using future'.magenta
,'\t'
,'\tThis is the same as writing:'
,'\t'
,'\tfuture = fs.future.readFile(\'/etc/passwd\');'.green
,'\tdata = future.wait();'.green
,'\tconsole.log(data);'.green
,'\t'
,'\t### Waiting for Multiple Futures'.magenta
,'\t'
,'\tOr for multiple files read asynchronously:'
,'\t'
,'\tfutures = ['.green
,'\t  fs.future.readFile(\'/etc/passwd\'),'.green
,'\t  fs.future.readFile(\'/etc/hosts\')'.green
,'\t];'.green
,'\tdata = fibrous.wait(futures);'.green
,'\tconsole.log(data[0], data[1]);'.green
,'\t'
,'\tNote that `fs.sync.readFile` is **not** the same as `fs.readFileSync`. The'
,'\tlatter blocks while the former allows the process to continue while'
,'\twaiting for the file read to complete.'
,'\t'
,'\tFibrous Requires a Fiber for sync and wait'.cyan
,'\t------------------------------------------'
,'\t'
,'\tFibrous uses [node-fibers](https://github.com/laverdet/node-fibers)'
,'\tbehind the scenes.'
,'\t'
,'\t`wait` and `sync` (which uses `wait`'
,'\tinternally) require that they are called within a fiber. Fibrous'
,'\tprovides two easy ways to do this.'
,'\t'
,'\t### 1. fibrous Function Wrapper'.magenta
,'\t'
,'\tPass any function to `fibrous` and it returns a function that'
,'\tconforms to standard node async APIs with a callback as the last'
,'\targument. The callback expects `err` as the first argument and the function'
,'\tresult as the second. Any exception thrown will be passed to the'
,'\tcallback as an error.'
,'\t'
,'\tvar asynFunc = fibrous(function() {'.green
,'\t  return fs.sync.readFile(\'/etc/passwd\');'.green
,'\t});'.green
,'\t'
,'\tis functionally equivalent to:'
,'\t'
,'\tvar asyncFunc = function(callback) {'.green
,'\t  fs.readFile(\'/etc/passwd\', function(err, data) {'.green
,'\t    if (err) return callback(err);'.green
,'\t'.green
,'\t    callback(null, data);'.green
,'\t  });'.green
,'\t}'.green
,'\t'
,'\tWith coffeescript, the fibrous version is even cleaner:'
,'\t'
,'\tasyncFunc = fibrous ->'.green
,'\t  fs.sync.readFile(\'/etc/passwd\')'.green
,'\t'
,'\t`fibrous` ensures that the passed function is'
,'\trunning in an existing fiber (from higher up the call stack) or will'
,'\tcreate a new fiber if one does not already exist.'
,'\t'
,'\t### 2. Connect Middleware'.magenta
,'\t'
,'\tFibrous provides [connect](http://www.senchalabs.org/connect/)'
,'\tmiddleware that ensures that every request runs in a fiber.'
,'\tIf you are using [express](http://expressjs.com/), you\'ll'
,'\twant to use this middleware.'
,'\t'
,'\tvar express = require(\'express\');'.green
,'\tvar fibrous = require(\'fibrous\');'.green
,'\t'.green
,'\tvar app = express.createServer();'.green
,'\t'.green
,'\tapp.use(fibrous.middleware);'.green
,'\t'.green
,'\tapp.get(\'/\', function(req, res){'.green
,'\t    data = fs.sync.readFile(\'./index.html\', \'utf8\');'.green
,'\t    res.send(data);'.green
,'\t});'.green
,'\t'
,'\tFutures'.cyan
,'\t-------'
,'\t'
,'\tFibrous uses the `Future` implementation from [node-fibers](https://github.com/laverdet/node-fibers).'
,'\t'
,'\t`future.wait` waits for the future to resolve then returns the result while allowing the process'
,'\tto continue. `fibrous.wait` accepts a single future, multiple future arguments or an array of futures.'
,'\tIt returns the result of the future if passed just one, or an array of'
,'\tresults if passed multiple.'
,'\t'
,'\t`future.get` returns the result of the resolved future or throws an'
,'\texception if not yet resolved.'
,'\t'
,'\tError Handling / Exceptions'.cyan
,'\t---------------------------'
,'\t'
,'\tIn the above examples, if `readFile` produces an error, the fibrous versions'
,'\t(both `sync` and `wait`) will throw an exception. Additionally, the stack'
,'\ttrace will include the stack of the calling code unlike exceptions'
,'\ttypically thrown from within callback.'
,'\t'
,'\t'
,'\tTesting'.cyan
,'\t-------'
,'\t'
,'\tFibrous provides a test helper for [jasmine-node](https://github.com/mhevery/jasmine-node) '
,'\tthat ensures that `beforeEach`, `it`, and `afterEach` run in a fiber.'
,'\tRequire it in your shared `spec_helper` file or in the spec files where'
,'\tyou want to use fibrous.'
,'\t'
,'\trequire(\'fibrous/lib/jasmine_spec_helper\');'.green
,'\t'.green
,'\tdescribe(\'My Spec\', function() {'.green
,'\t  '.green
,'\t  it(\'tests something asynchronous\', function() {'.green
,'\t    data = fs.sync.readFile(\'/etc/password\');'.green
,'\t    expect(data.length).toBeGreaterThan(0);'.green
,'\t  });'.green
,'\t});'.green
,'\t'
,'\tIf an asynchronous method called through fibrous produces an error, the'
,'\tspec helper will fail the spec.'
,'\t'
,'\t'
,'\tConsole'.cyan
,'\t-------'
,'\t'
,'\tFibrous can make it easier to work with asynchronous methods in the'
,'\tconsole. It\'s not convenient to create a fiber to run console commands with `sync`, but'
,'\tusing `future` is still easier than constructing callbacks in the'
,'\tconsole.'
,'\t'
,'\t> fs = require(\'fs\');'.green
,'\t> require(\'fibrous\');'.green
,'\t> data = fs.future.readFile(\'/etc/passwd\', \'utf8\');'.green
,'\t> data.get()'.green
,'\t'
,'\tIn this example, `data.get()` will return the result of the future'
,'\tprovided you have waited long enough (not very long) for the future to'
,'\tcomplete.'
,'\t'
,'\tBehind The Scenes'.cyan
,'\t-----------------'
,'\t'
,'\tFibrous mixes `future` and `sync` into `Function.prototype` so you can'
,'\tuse them directly as in:'
,'\t'
,'\treadFile = require(\'fs\').readFile;'.green
,'\tdata = readFile.sync(\'/etc/passwd\');'.green
,'\t'
,'\tFibrous adds `future` and `sync` to `Object.prototype` correctly so they'
,'\tare not enumerable.'
,'\t'
,'\tThese proxy methods also ignore all getters, even those that may'
,'\treturn functions. If you need to call a getter with fibrous that returns an'
,'\tasynchronous function, you can do:'
,'\t'
,'\tfunc = obj.getter'.green
,'\tfunc.future.call(obj, args)'.green
].join('\n');
