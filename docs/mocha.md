# mocha

simple, flexible, fun

Mocha is a feature-rich JavaScript test framework running on node and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

# Features

- browser support
- simple async support
- test coverage reporting
- string diff support
- javascript API for running tests
- proper exit status for CI support etc
- auto-detects and disables coloring for non-ttys
- maps uncaught exceptions to the correct test case
- async test timeout support
- test-specific timeouts
- growl notification support
- reports test durations
- highlights slow tests
- file watcher support
- global variable leak detection
- optionally run tests that match a regexp
- auto-exit to prevent “hanging” with an active loop
- easily meta-generate suites & test-cases
- mocha.opts file support
- clickable suite titles to filter test execution
- node debugger support
- detects multiple calls to done()
- use any assertion library you want
- extensible reporting, bundled with 9+ reporters
- extensible test DSLs or “interfaces”
- before, after, before each, after each hooks
- arbitrary transpiler support (coffee-script etc)
- TextMate bundle
- and more!


# Installation

Install with npm:

    $ npm install -g mocha
    $ mkdir test
    $ $EDITOR test/test.js

    var assert = require("assert")
    describe('Array', function(){
      describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
          assert.equal(-1, [1,2,3].indexOf(5));
          assert.equal(-1, [1,2,3].indexOf(0));
        })
      })
    })

    $  mocha

    .

    ✔ 1 test complete (1ms)


# Assertions

Mocha allows you to use any assertion library you want, if it throws an error, it will work! This means you can utilize libraries such as should.js, node’s regular assert module, or others. The following is a list of known assertion libraries for node and/or the browser:

- should.js BDD style shown throughout these docs
- expect.js expect() style assertions
- chai expect(), assert() and should style assertions
- better-assert c-style self-documenting assert()


# Synchronous code

When testing synchronous code, omit the callback and Mocha will automatically continue on to the next test.

    describe('Array', function(){
      describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
          [1,2,3].indexOf(5).should.equal(-1);
          [1,2,3].indexOf(0).should.equal(-1);
        })
      })
    })


# Asynchronous code

Testing asynchronous code with Mocha could not be simpler! Simply invoke the callback when your test is complete. By adding a callback (usually named done) to it() Mocha will know that it should wait for completion.

    describe('User', function(){
      describe('#save()', function(){
        it('should save without error', function(done){
          var user = new User('Luna');
          user.save(function(err){
            if (err) throw err;
            done();
          });
        })
      })
    })

To make things even easier, the done() callback accepts an error, so we may use this directly:

    describe('User', function(){
      describe('#save()', function(){
        it('should save without error', function(done){
          var user = new User('Luna');
          user.save(done);
        })
      })
    })

All “hooks”, that is before(), after(), beforeEach(), afterEach() may be sync or async as well, behaving much like a regular test-case. For example you may wish to populate database with dummy content before each test:

    describe('Connection', function(){
      var db = new Connection
        , tobi = new User('tobi')
        , loki = new User('loki')
        , jane = new User('jane');

      beforeEach(function(done){
        db.clear(function(err){
          if (err) return done(err);
          db.save([tobi, loki, jane], done);
        });
      })

      describe('#find()', function(){
        it('respond with matching records', function(done){
          db.find({ type: 'User' }, function(err, res){
            if (err) return done(err);
            res.should.have.length(3);
            done();
          })
        })
      })
    })

You may also pick any file and add “root” level hooks, for example add beforeEach() outside of describe()s then the callback will run before any test-case regardless of the file its in. This is because Mocha has a root Suite with no name.

    beforeEach(function(){
      console.log('before every test')
    })



# Pending tests

Pending test-cases are simply those without a callback:

    describe('Array', function(){
      describe('#indexOf()', function(){
        it('should return -1 when the value is not present')
      })
    })

# Exclusive tests

The exclusivity feature allows you to run only the specified suite or test-case by appending .only() to the call as shown here:

    describe('Array', function(){
      describe.only('#indexOf()', function(){
        ...
      })
    })

Or a specific test-case:

    describe('Array', function(){
      describe('#indexOf()', function(){
        it.only('should return -1 unless present', function(){

        })

        it('should return the index when present', function(){

        })
      })
    })

Note that currently only one .only() call is respected, this effectively turns into a --grep.

# Inclusive tests

This feature is similar to .only(), however by appending .skip() you may tell Mocha to simply ignore these suite(s) and test-case(s). This puts them in a pending state, and is favoured over commenting out tests which you may forget to uncomment.

    describe('Array', function(){
      describe.skip('#indexOf()', function(){
        ...
      })
    })

Or a specific test-case:

    describe('Array', function(){
      describe('#indexOf()', function(){
        it.skip('should return -1 unless present', function(){

        })

        it('should return the index when present', function(){

        })
      })
    })





# Usage

    Usage: mocha [debug] [options] [files]

    Commands:

      init <path>
      initialize a client-side mocha setup at <path>

    Options:

      -h, --help                      output usage information
      -V, --version                   output the version number
      -r, --require <name>            require the given module
      -R, --reporter <name>           specify the reporter to use
      -u, --ui <name>                 specify user-interface (bdd|tdd|exports)
      -g, --grep <pattern>            only run tests matching <pattern>
      -i, --invert                    inverts --grep matches
      -t, --timeout <ms>              set test-case timeout in milliseconds [2000]
      -s, --slow <ms>                 "slow" test threshold in milliseconds [75]
      -w, --watch                     watch files for changes
      -c, --colors                    force enabling of colors
      -C, --no-colors                 force disabling of colors
      -G, --growl                     enable growl notification support
      -d, --debug                     enable node's debugger, synonym for node --debug
      -b, --bail                      bail after first test failure
      --recursive                     include sub directories
      --debug-brk                     enable node's debugger breaking on the first line
      --globals <names>               allow the given comma-delimited global [names]
      --ignore-leaks                  ignore global variable leaks
      --interfaces                    display available interfaces
      --reporters                     display available reporters
      --compilers <ext>:<module>,...  use the given module(s) to compile files

## -w, --watch

Executes tests on changes to JavaScript in the CWD, and once initially.

## --compilers

coffee-script is no longer supported out of the box. CS and similar transpilers may be used by mapping the file extensions (for use with –watch) and the module name. For example --compilers coffee:coffee-script.

## -b, --bail

Only interested in the first exception? use --bail !

## -d, --debug

Enables node’s debugger support, this executes your script(s) with node debug <file ...> allowing you to step through code and break with the debugger statement.

## --globals <names>

Accepts a comma-delimited list of accepted global variable names. For example suppose your app deliberately exposes a global named app and YUI, you may want to add --globals app,YUI.

## --ignore-leaks

By default Mocha will fail when global variables are introduced, you may use --globals to specify a few, or use --ignore-leaks to disable this functionality.

## -r, --require <name>

The --require option is useful for libraries such as should.js, so you may simply --require should instead of manually invoking require('should') within each test file. Note that this works well for should as it augments Object.prototype, however if you wish to access a module’s exports you will have to require them, for example var should = require('should').

## -u, --ui <name>

The --ui option lets you specify the interface to use, defaulting to “bdd”.

## -R, --reporter <name>

The --reporter option allows you to specify the reporter that will be used, defaulting to “dot”. This flag may also be used to utilize third-party reporters. For example if you npm install mocha-lcov-reporter you may then do --reporter mocha-lcov-reporter.

## -t, --timeout <ms>

Specifies the test-case timeout, defaulting to 2 seconds. To override you may pass the timeout in milliseconds, or a value with the s suffix, ex: --timeout 2s or --timeout 2000 would be equivalent.

## -s, --slow <ms>

Specify the “slow” test threshold, defaulting to 75ms. Mocha uses this to highlight test-cases that are taking too long.

## -g, --grep <pattern>

The --grep option when specified will trigger mocha to only run tests matching the given pattern which is internally compiled to a RegExp.

Suppose for example you have “api” related tests, as well as “app” related tests, as shown in the following snippet; One could use --grep api or --grep app to run one or the other. The same goes for any other part of a suite or test-case title, --grep users would be valid as well, or even --grep GET.

    describe('api', function(){
      describe('GET /api/users', function(){
        it('respond with an array of users')
      })
    })

    describe('app', function(){
      describe('GET /users', function(){
        it('respond with an array of users')
      })
    })

