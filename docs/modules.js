exports.name = 'modules';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/modules.html';
exports.description = [
 "\t# Modules".red
,"\t"
,"\tNode has a simple module loading system.  In Node, files and modules are in"
,"\tone-to-one correspondence.  As an example, `foo.js` loads the module"
,"\t`circle.js` in the same directory."
,"\t"
,"\tThe contents of `foo.js`:"
,"\t"
,"\t    var circle = require('./circle.js');".green
,"\t    console.log( 'The area of a circle of radius 4 is '".green
,"\t               + circle.area(4));".green
,"\t"
,"\tThe contents of `circle.js`:"
,"\t"
,"\t    var PI = Math.PI;".green
,"\t".green
,"\t    exports.area = function (r) {".green
,"\t      return PI * r * r;".green
,"\t    };".green
,"\t".green
,"\t    exports.circumference = function (r) {".green
,"\t      return 2 * PI * r;".green
,"\t    };".green
,"\t"
,"\tThe module `circle.js` has exported the functions `area()` and"
,"\t`circumference()`.  To export an object, add to the special `exports`"
,"\tobject."
,"\t"
,"\tVariables"
,"\tlocal to the module will be private. In this example the variable `PI` is"
,"\tprivate to `circle.js`."
,"\t"
,"\tThe module system is implemented in the `require(\"module\")` module."
,"\t"
,"\t## Cycles".cyan
,"\t"
,"\tWhen there are circular `require()` calls, a module might not be"
,"\tdone being executed when it is returned."
,"\t"
,"\tConsider this situation:"
,"\t"
,"\t`a.js`:".yellow
,"\t"
,"\t    console.log('a starting');".green
,"\t    exports.done = false;".green
,"\t    var b = require('./b.js');".green
,"\t    console.log('in a, b.done = %j', b.done);".green
,"\t    exports.done = true;".green
,"\t    console.log('a done');".green
,"\t"
,"\t`b.js`:".yellow
,"\t"
,"\t    console.log('b starting');".green
,"\t    exports.done = false;".green
,"\t    var a = require('./a.js');".green
,"\t    console.log('in b, a.done = %j', a.done);".green
,"\t    exports.done = true;".green
,"\t    console.log('b done');".green
,"\t"
,"\t`main.js`:".yellow
,"\t"
,"\t    console.log('main starting');".green
,"\t    var a = require('./a.js');".green
,"\t    var b = require('./b.js');".green
,"\t    console.log('in main, a.done=%j, b.done=%j', a.done, b.done);".green
,"\t"
,"\tWhen `main.js` loads `a.js`, then `a.js` in turn loads `b.js`.  At that"
,"\tpoint, `b.js` tries to load `a.js`.  In order to prevent an infinite"
,"\tloop an **unfinished copy** of the `a.js` exports object is returned to the"
,"\t`b.js` module.  `b.js` then finishes loading, and its exports object is"
,"\tprovided to the `a.js` module."
,"\t"
,"\tBy the time `main.js` has loaded both modules, they're both finished."
,"\tThe output of this program would thus be:"
,"\t"
,"\t    $ node main.js".green
,"\t    main starting".yellow
,"\t    a starting".yellow
,"\t    b starting".yellow
,"\t    in b, a.done = false".yellow
,"\t    b done".yellow
,"\t    in a, b.done = true".yellow
,"\t    a done".yellow
,"\t    in main, a.done=true, b.done=true".yellow
,"\t"
,"\tIf you have cyclic module dependencies in your program, make sure to"
,"\tplan accordingly."
,"\t"
,"\t## Core Modules".cyan
,"\t"
,"\tNode has several modules compiled into the binary.  These modules are"
,"\tdescribed in greater detail elsewhere in this documentation."
,"\t"
,"\tThe core modules are defined in node's source in the `lib/` folder."
,"\t"
,"\tCore modules are always preferentially loaded if their identifier is"
,"\tpassed to `require()`.  For instance, `require('http')` will always"
,"\treturn the built in HTTP module, even if there is a file by that name."
,"\t"
,"\t## File Modules".cyan
,"\t"
,"\tIf the exact filename is not found, then node will attempt to load the"
,"\trequired filename with the added extension of `.js`, `.json`, and then `.node`."
,"\t"
,"\t`.js` files are interpreted as JavaScript text files, and `.json` files are"
,"\tparsed as JSON text files. `.node` files are interpreted as compiled addon"
,"\tmodules loaded with `dlopen`."
,"\t"
,"\tA module prefixed with `'/'` is an absolute path to the file.  For"
,"\texample, `require('/home/marco/foo.js')` will load the file at"
,"\t`/home/marco/foo.js`."
,"\t"
,"\tA module prefixed with `'./'` is relative to the file calling `require()`."
,"\tThat is, `circle.js` must be in the same directory as `foo.js` for"
,"\t`require('./circle')` to find it."
,"\t"
,"\tWithout a leading '/' or './' to indicate a file, the module is either a"
,"\t\"core module\" or is loaded from a `node_modules` folder."
,"\t"
,"\t## Loading from `node_modules` Folders".cyan
,"\t"
,"\tIf the module identifier passed to `require()` is not a native module,"
,"\tand does not begin with `'/'`, `'../'`, or `'./'`, then node starts at the"
,"\tparent directory of the current module, and adds `/node_modules`, and"
,"\tattempts to load the module from that location."
,"\t"
,"\tIf it is not found there, then it moves to the parent directory, and so"
,"\ton, until the root of the tree is reached."
,"\t"
,"\tFor example, if the file at `'/home/ry/projects/foo.js'` called"
,"\t`require('bar.js')`, then node would look in the following locations, in"
,"\tthis order:"
,"\t"
,"\t* `/home/ry/projects/node_modules/bar.js`".yellow
,"\t* `/home/ry/node_modules/bar.js`".yellow
,"\t* `/home/node_modules/bar.js`".yellow
,"\t* `/node_modules/bar.js`".yellow
,"\t"
,"\tThis allows programs to localize their dependencies, so that they do not"
,"\tclash."
,"\t"
,"\t## Folders as Modules".cyan
,"\t"
,"\tIt is convenient to organize programs and libraries into self-contained"
,"\tdirectories, and then provide a single entry point to that library."
,"\tThere are three ways in which a folder may be passed to `require()` as"
,"\tan argument."
,"\t"
,"\tThe first is to create a `package.json` file in the root of the folder,"
,"\twhich specifies a `main` module.  An example package.json file might"
,"\tlook like this:"
,"\t"
,"\t    { \"name\" : \"some-library\",".green
,"\t      \"main\" : \"./lib/some-library.js\" }".green
,"\t"
,"\tIf this was in a folder at `./some-library`, then"
,"\t`require('./some-library')` would attempt to load"
,"\t`./some-library/lib/some-library.js`."
,"\t"
,"\tThis is the extent of Node's awareness of package.json files."
,"\t"
,"\tIf there is no package.json file present in the directory, then node"
,"\twill attempt to load an `index.js` or `index.node` file out of that"
,"\tdirectory.  For example, if there was no package.json file in the above"
,"\texample, then `require('./some-library')` would attempt to load:"
,"\t"
,"\t* `./some-library/index.js`".yellow
,"\t* `./some-library/index.node`".yellow
,"\t"
,"\t## Caching".cyan
,"\t"
,"\tModules are cached after the first time they are loaded.  This means"
,"\t(among other things) that every call to `require('foo')` will get"
,"\texactly the same object returned, if it would resolve to the same file."
,"\t"
,"\tMultiple calls to `require('foo')` may not cause the module code to be"
,"\texecuted multiple times.  This is an important feature.  With it,"
,"\t\"partially done\" objects can be returned, thus allowing transitive"
,"\tdependencies to be loaded even when they would cause cycles."
,"\t"
,"\tIf you want to have a module execute code multiple times, then export a"
,"\tfunction, and call that function."
,"\t"
,"\t### Module Caching Caveats".magenta
,"\t"
,"\tModules are cached based on their resolved filename.  Since modules may"
,"\tresolve to a different filename based on the location of the calling"
,"\tmodule (loading from `node_modules` folders), it is not a *guarantee*"
,"\tthat `require('foo')` will always return the exact same object, if it"
,"\twould resolve to different files."
,"\t"
,"\t## The `module` Object".cyan
,"\t"
,"\t* {Object}"
,"\t"
,"\tIn each module, the `module` free variable is a reference to the object"
,"\trepresenting the current module.  In particular"
,"\t`module.exports` is the same as the `exports` object."
,"\t`module` isn't actually a global but rather local to each module."
,"\t"
,"\t### module.exports".magenta
,"\t"
,"\t* {Object}"
,"\t"
,"\tThe `exports` object is created by the Module system. Sometimes this is not"
,"\tacceptable, many want their module to be an instance of some class. To do this"
,"\tassign the desired export object to `module.exports`. For example suppose we"
,"\twere making a module called `a.js`"
,"\t"
,"\t    var EventEmitter = require('events').EventEmitter;".green
,"\t".green
,"\t    module.exports = new EventEmitter();".green
,"\t".green
,"\t    // Do some work, and after some time emit".green
,"\t    // the 'ready' event from the module itself.".green
,"\t    setTimeout(function() {".green
,"\t      module.exports.emit('ready');".green
,"\t    }, 1000);".green
,"\t"
,"\tThen in another file we could do"
,"\t"
,"\t    var a = require('./a');".green
,"\t    a.on('ready', function() {".green
,"\t      console.log('module a is ready');".green
,"\t    });".green
,"\t"
,"\t"
,"\tNote that assignment to `module.exports` must be done immediately. It cannot be"
,"\tdone in any callbacks.  This does not work:"
,"\t"
,"\tx.js:".yellow
,"\t"
,"\t    setTimeout(function() {".green
,"\t      module.exports = { a: \"hello\" };".green
,"\t    }, 0);".green
,"\t"
,"\ty.js:".yellow
,"\t"
,"\t    var x = require('./x');".green
,"\t    console.log(x.a);".green
,"\t"
,"\t"
,"\t### module.require(id)".magenta
,"\t"
,"\t* `id` {String}"
,"\t* Return: {Object} `exports` from the resolved module"
,"\t"
,"\tThe `module.require` method provides a way to load a module as if"
,"\t`require()` was called from the original module."
,"\t"
,"\tNote that in order to do this, you must get a reference to the `module`"
,"\tobject.  Since `require()` returns the `exports`, and the `module` is"
,"\ttypically *only* available within a specific module's code, it must be"
,"\texplicitly exported in order to be used."
,"\t"
,"\t"
,"\t### module.id".magenta
,"\t"
,"\t* {String}"
,"\t"
,"\tThe identifier for the module.  Typically this is the fully resolved"
,"\tfilename."
,"\t"
,"\t"
,"\t### module.filename".magenta
,"\t"
,"\t* {String}"
,"\t"
,"\tThe fully resolved filename to the module."
,"\t"
,"\t"
,"\t### module.loaded".magenta
,"\t"
,"\t* {Boolean}"
,"\t"
,"\tWhether or not the module is done loading, or is in the process of"
,"\tloading."
,"\t"
,"\t"
,"\t### module.parent".magenta
,"\t"
,"\t* {Module Object}"
,"\t"
,"\tThe module that required this one."
,"\t"
,"\t"
,"\t### module.children".magenta
,"\t"
,"\t* {Array}"
,"\t"
,"\tThe module objects required by this one."
,"\t"
,"\t"
,"\t"
,"\t## All Together...".cyan
,"\t"
,"\tTo get the exact filename that will be loaded when `require()` is called, use"
,"\tthe `require.resolve()` function."
,"\t"
,"\tPutting together all of the above, here is the high-level algorithm"
,"\tin pseudocode of what require.resolve does:"
,"\t"
,"\t    require(X) from module at path Y".yellow
,"\t    1. If X is a core module,"
,"\t       a. return the core module"
,"\t       b. STOP"
,"\t    2. If X begins with './' or '/' or '../'"
,"\t       a. LOAD_AS_FILE(Y + X)"
,"\t       b. LOAD_AS_DIRECTORY(Y + X)"
,"\t    3. LOAD_NODE_MODULES(X, dirname(Y))"
,"\t    4. THROW \"not found\""
,"\t"
,"\t    LOAD_AS_FILE(X)".yellow
,"\t    1. If X is a file, load X as JavaScript text.  STOP"
,"\t    2. If X.js is a file, load X.js as JavaScript text.  STOP"
,"\t    3. If X.node is a file, load X.node as binary addon.  STOP"
,"\t"
,"\t    LOAD_AS_DIRECTORY(X)".yellow
,"\t    1. If X/package.json is a file,"
,"\t       a. Parse X/package.json, and look for \"main\" field."
,"\t       b. let M = X + (json main field)"
,"\t       c. LOAD_AS_FILE(M)"
,"\t    2. If X/index.js is a file, load X/index.js as JavaScript text.  STOP"
,"\t    3. If X/index.node is a file, load X/index.node as binary addon.  STOP"
,"\t"
,"\t    LOAD_NODE_MODULES(X, START)".yellow
,"\t    1. let DIRS=NODE_MODULES_PATHS(START)"
,"\t    2. for each DIR in DIRS:"
,"\t       a. LOAD_AS_FILE(DIR/X)"
,"\t       b. LOAD_AS_DIRECTORY(DIR/X)"
,"\t"
,"\t    NODE_MODULES_PATHS(START)".yellow
,"\t    1. let PARTS = path split(START)"
,"\t    2. let ROOT = index of first instance of \"node_modules\" in PARTS, or 0"
,"\t    3. let I = count of PARTS - 1"
,"\t    4. let DIRS = []"
,"\t    5. while I > ROOT,"
,"\t       a. if PARTS[I] = \"node_modules\" CONTINUE"
,"\t       c. DIR = path join(PARTS[0 .. I] + \"node_modules\")"
,"\t       b. DIRS = DIRS + DIR"
,"\t       c. let I = I - 1"
,"\t    6. return DIRS"
,"\t"
,"\t## Loading from the global folders".cyan
,"\t"
,"\tIf the `NODE_PATH` environment variable is set to a colon-delimited list"
,"\tof absolute paths, then node will search those paths for modules if they"
,"\tare not found elsewhere.  (Note: On Windows, `NODE_PATH` is delimited by"
,"\tsemicolons instead of colons.)"
,"\t"
,"\tAdditionally, node will search in the following locations:"
,"\t"
,"\t* 1: `$HOME/.node_modules`".yellow
,"\t* 2: `$HOME/.node_libraries`".yellow
,"\t* 3: `$PREFIX/lib/node`".yellow
,"\t"
,"\tWhere `$HOME` is the user's home directory, and `$PREFIX` is node's"
,"\tconfigured `installPrefix`."
,"\t"
,"\tThese are mostly for historic reasons.  You are highly encouraged to"
,"\tplace your dependencies locally in `node_modules` folders.  They will be"
,"\tloaded faster, and more reliably."
,"\t"
,"\t## Accessing the main module".cyan
,"\t"
,"\tWhen a file is run directly from Node, `require.main` is set to its"
,"\t`module`. That means that you can determine whether a file has been run"
,"\tdirectly by testing"
,"\t"
,"\t    require.main === module".yellow
,"\t"
,"\tFor a file `foo.js`, this will be `true` if run via `node foo.js`, but"
,"\t`false` if run by `require('./foo')`."
,"\t"
,"\tBecause `module` provides a `filename` property (normally equivalent to"
,"\t`__filename`), the entry point of the current application can be obtained"
,"\tby checking `require.main.filename`."
,"\t"
,"\t## Addenda: Package Manager Tips".cyan
,"\t"
,"\tThe semantics of Node's `require()` function were designed to be general"
,"\tenough to support a number of sane directory structures. Package manager"
,"\tprograms such as `dpkg`, `rpm`, and `npm` will hopefully find it possible to"
,"\tbuild native packages from Node modules without modification."
,"\t"
,"\tBelow we give a suggested directory structure that could work:"
,"\t"
,"\tLet's say that we wanted to have the folder at"
,"\t`/usr/lib/node/<some-package>/<some-version>` hold the contents of a"
,"\tspecific version of a package."
,"\t"
,"\tPackages can depend on one another. In order to install package `foo`, you"
,"\tmay have to install a specific version of package `bar`.  The `bar` package"
,"\tmay itself have dependencies, and in some cases, these dependencies may even"
,"\tcollide or form cycles."
,"\t"
,"\tSince Node looks up the `realpath` of any modules it loads (that is,"
,"\tresolves symlinks), and then looks for their dependencies in the"
,"\t`node_modules` folders as described above, this situation is very simple to"
,"\tresolve with the following architecture:"
,"\t"
,"\t* `/usr/lib/node/foo/1.2.3/` - Contents of the `foo` package, version 1.2.3.".yellow
,"\t* `/usr/lib/node/bar/4.3.2/` - Contents of the `bar` package that `foo`".yellow
,"\t  depends on.".yellow
,"\t* `/usr/lib/node/foo/1.2.3/node_modules/bar` - Symbolic link to".yellow
,"\t  `/usr/lib/node/bar/4.3.2/`.".yellow
,"\t* `/usr/lib/node/bar/4.3.2/node_modules/*` - Symbolic links to the packages".yellow
,"\t  that `bar` depends on.".yellow
,"\t"
,"\tThus, even if a cycle is encountered, or if there are dependency"
,"\tconflicts, every module will be able to get a version of its dependency"
,"\tthat it can use."
,"\t"
,"\tWhen the code in the `foo` package does `require('bar')`, it will get the"
,"\tversion that is symlinked into `/usr/lib/node/foo/1.2.3/node_modules/bar`."
,"\tThen, when the code in the `bar` package calls `require('quux')`, it'll get"
,"\tthe version that is symlinked into"
,"\t`/usr/lib/node/bar/4.3.2/node_modules/quux`."
,"\t"
,"\tFurthermore, to make the module lookup process even more optimal, rather"
,"\tthan putting packages directly in `/usr/lib/node`, we could put them in"
,"\t`/usr/lib/node_modules/<name>/<version>`.  Then node will not bother"
,"\tlooking for missing dependencies in `/usr/node_modules` or `/node_modules`."
,"\t"
,"\tIn order to make modules available to the node REPL, it might be useful to"
,"\talso add the `/usr/lib/node_modules` folder to the `$NODE_PATH` environment"
,"\tvariable.  Since the module lookups using `node_modules` folders are all"
,"\trelative, and based on the real path of the files making the calls to"
,"\t`require()`, the packages themselves can be anywhere."
].join('\n');
