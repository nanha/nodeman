exports.name = 'fibers';
exports.category = 'ControlFlow';
exports.context = 'use require';
exports.homepage = 'https://github.com/laverdet/node-fibers';
exports.description = [
    ,"\tEXAMPLES".red
    ,"\t=========="
    ,""
    ,"\tThe examples below describe basic use of Fiber, but note that it is not recommended to use Fiber without an abstraction in between your code and fibers. See \"FUTURES\" below for additional information."
    ,""
    ,"\tSleep".cyan
    ,"\t-------"
    ,""
    ,"\tThis is a quick example of how you can write sleep() with fibers. Note that while the sleep() call is blocking inside the fiber, node is able to handle other events."
    ,""
    ,"\t$ cat sleep.js".green
    , ""
    ,"\trequire('fibers');".green
    ,""
    ,"\tfunction sleep(ms) {".green
    ,"\t    var fiber = Fiber.current;".green
    ,"\t    setTimeout(function() {".green
    ,"\t        fiber.run();".green
    ,"\t    }, ms);".green
    ,"\t    yield();".green
    ,"\t}".green
    ,""
    ,"\tFiber(function() {".green
    ,"\t    console.log('wait... ' + new Date);".green
    ,"\t    sleep(1000);".green
    ,"\t    console.log('ok... ' + new Date);".green
    ,"\t}).run();".green
    ,"\tconsole.log('back in main');".green
    ,""
    ,""
    ,"\t$ node sleep.js".green
    , ""
    ,"\twait... Fri Jan 21 2011 22:42:04 GMT+0900 (JST)".yellow
    ,"\tback in main".yellow
    ,"\tok... Fri Jan 21 2011 22:42:05 GMT+0900 (JST)".yellow
    ,""
    ,""
    ,"\tIncremental Generator".cyan
    ,"\t----------------------"
    ,""
    ,""
    ,"\tYielding execution will resume back in the fiber right where you left off. You can also pass values back and forth through yield() and run(). Again, the node event loop is never blocked while this script is running."
    ,""
    ,"\t$ cat generator.js".green
    , ""
    ,"\trequire('fibers');".green
    ,""
    ,"\tvar inc = Fiber(function(start) {".green
    ,"\t    var total = start;".green
    ,"\t    while (true) {".green
    ,"\t        total += yield(total);".green
    ,"\t    }".green
    ,"\t});".green
    ,""
    ,"\tfor (var ii = inc.run(1); ii <= 10; ii = inc.run(1)) {".green
    ,"\t    console.log(ii);".green
    ,"\t}".green
    ,""
    ,""
    ,"\t$ node generator.js".green
    , ""
    ,"\t1".yellow
    ,"\t2".yellow
    ,"\t3".yellow
    ,"\t4".yellow
    ,"\t5".yellow
    ,"\t6".yellow
    ,"\t7".yellow
    ,"\t8".yellow
    ,"\t9".yellow
    ,"\t10".yellow
    ,""
    ,""
    ,"\tFibonacci Generator".cyan
    ,"\t----------------------"
    ,""
    ,"\tExpanding on the incremental generator above, we can create a generator which returns a new Fibonacci number with each invocation. You can compare this with the ECMAScript Harmony Generator Fibonacci example."
    ,""
    ,"\t$ cat fibonacci.js".green
    , ""
    ,"\trequire('fibers');".green
    ,""
    ,"\t// Generator function. Returns a function which returns incrementing".green
    ,"\t// Fibonacci numbers with each call.".green
    ,"\tfunction Fibonacci() {".green
    ,"\t    // Create a new fiber which yields sequential Fibonacci numbers".green
    ,"\t    var fiber = Fiber(function() {".green
    ,"\t        yield(0); // F(0) -> 0".green
    ,"\t        var prev = 0, curr = 1;".green
    ,"\t        while (true) {".green
    ,"\t            yield(curr);".green
    ,"\t            var tmp = prev + curr;".green
    ,"\t            prev = curr;".green
    ,"\t            curr = tmp;".green
    ,"\t        }".green
    ,"\t    });".green
    ,"\t    // Return a bound handle to `run` on this fiber".green
    ,"\t    return fiber.run.bind(fiber);".green
    ,"\t}".green
    ,""
    ,"\t// Initialize a new Fibonacci sequence and iterate up to 1597".green
    ,"\tvar seq = Fibonacci();".green
    ,"\tfor (var ii = seq(); ii <= 1597; ii = seq()) {".green
    ,"\t    console.log(ii);".green
    ,"\t}".green
    ,""
    ,""
    ,"\t$ node fibonacci.js".green
    , ""
    ,"\t0".yellow
    ,"\t1".yellow
    ,"\t1".yellow
    ,"\t2".yellow
    ,"\t3".yellow
    ,"\t5".yellow
    ,"\t8".yellow
    ,"\t13".yellow
    ,"\t21".yellow
    ,"\t34".yellow
    ,"\t55".yellow
    ,"\t89".yellow
    ,"\t144".yellow
    ,"\t233".yellow
    ,"\t377".yellow
    ,"\t610".yellow
    ,"\t987".yellow
    ,"\t1597".yellow
    ,""
    ,""
    ,"\tBasic Exceptions".cyan
    ,"\t-----------------"
    ,""
    ,"\tFibers are exception-safe; exceptions will continue travelling through fiber boundaries:"
    ,""
    ,"\t$ cat error.js".green
    , ""
    ,"\trequire('fibers');".green
    ,""
    ,"\tvar fn = Fiber(function() {".green
    ,"\t    console.log('async work here...');".green
    ,"\t    yield();".green
    ,"\t    console.log('still working...');".green
    ,"\t    yield();".green
    ,"\t    console.log('just a little bit more...');".green
    ,"\t    yield();".green
    ,"\t    throw new Error('oh crap!');".green
    ,"\t});".green
    ,""
    ,"\ttry {".green
    ,"\t    while (true) {".green
    ,"\t        fn.run();".green
    ,"\t    }".green
    ,"\t} catch(e) {".green
    ,"\t    console.log('safely caught that error!');".green
    ,"\t    console.log(e.stack);".green
    ,"\t}".green
    ,"\tconsole.log('done!');".green
    , ""
    , ""
    ,"\t$ node error.js".green
    , ""
    ,"\tasync work here...".yellow
    ,"\tstill working...".yellow
    ,"\tjust a little bit more...".yellow
    ,"\tsafely caught that error!".yellow
    ,"\tError: oh crap!".yellow
    ,"\t        at error.js:11:9".yellow
    ,"\tdone!".yellow
].join('\n');
