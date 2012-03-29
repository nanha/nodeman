exports.__doc__ = "NAME\n".yellow
    + "\tfibers\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttps://github.com/laverdet/node-fibers\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    +"\tEXAMPLES\n".red
    +"\t==========\n"
    +"\n"
    +"\tThe examples below describe basic use of Fiber, but note that it is not recommended to use Fiber without an abstraction in between your code and fibers. See \"FUTURES\" below for additional information.\n"
    +"\n"
    +"\tSleep\n".cyan
    +"\t-------\n"
    +"\n"
    +"\tThis is a quick example of how you can write sleep() with fibers. Note that while the sleep() call is blocking inside the fiber, node is able to handle other events.\n"
    +"\n"
    +"\t$ cat sleep.js\n".green
    +"\trequire('fibers');\n".green
    +"\n"
    +"\tfunction sleep(ms) {\n".green
    +"\t    var fiber = Fiber.current;\n".green
    +"\t    setTimeout(function() {\n".green
    +"\t        fiber.run();\n".green
    +"\t    }, ms);\n".green
    +"\t    yield();\n".green
    +"\t}\n".green
    +"\n"
    +"\tFiber(function() {\n".green
    +"\t    console.log('wait... ' + new Date);\n".green
    +"\t    sleep(1000);\n".green
    +"\t    console.log('ok... ' + new Date);\n".green
    +"\t}).run();\n".green
    +"\tconsole.log('back in main');\n".green
    +"\n"
    +"\n"
    +"\t$ node sleep.js\n".green
    +"\twait... Fri Jan 21 2011 22:42:04 GMT+0900 (JST)\n".yellow
    +"\tback in main\n".yellow
    +"\tok... Fri Jan 21 2011 22:42:05 GMT+0900 (JST)\n".yellow
    +"\n"
    +"\n"
    +"\tIncremental Generator\n".cyan
    +"\t----------------------\n"
    +"\n"
    +"\n"
    +"\tYielding execution will resume back in the fiber right where you left off. You can also pass values back and forth through yield() and run(). Again, the node event loop is never blocked while this script is running.\n"
    +"\n"
    +"\t$ cat generator.js\n".green
    +"\trequire('fibers');\n".green
    +"\n"
    +"\tvar inc = Fiber(function(start) {\n".green
    +"\t    var total = start;\n".green
    +"\t    while (true) {\n".green
    +"\t        total += yield(total);\n".green
    +"\t    }\n".green
    +"\t});\n".green
    +"\n"
    +"\tfor (var ii = inc.run(1); ii <= 10; ii = inc.run(1)) {\n".green
    +"\t    console.log(ii);\n".green
    +"\t}\n".green
    +"\n"
    +"\n"
    +"\t$ node generator.js\n".green
    +"\t1\n".yellow
    +"\t2\n".yellow
    +"\t3\n".yellow
    +"\t4\n".yellow
    +"\t5\n".yellow
    +"\t6\n".yellow
    +"\t7\n".yellow
    +"\t8\n".yellow
    +"\t9\n".yellow
    +"\t10\n".yellow
    +"\n"
    +"\n"
    +"\tFibonacci Generator\n".cyan
    +"\t----------------------\n"
    +"\n"
    +"\tExpanding on the incremental generator above, we can create a generator which returns a new Fibonacci number with each invocation. You can compare this with the ECMAScript Harmony Generator Fibonacci example.\n"
    +"\n"
    +"\t$ cat fibonacci.js\n".green
    +"\trequire('fibers');\n".green
    +"\n"
    +"\t// Generator function. Returns a function which returns incrementing\n".green
    +"\t// Fibonacci numbers with each call.\n".green
    +"\tfunction Fibonacci() {\n".green
    +"\t    // Create a new fiber which yields sequential Fibonacci numbers\n".green
    +"\t    var fiber = Fiber(function() {\n".green
    +"\t        yield(0); // F(0) -> 0\n".green
    +"\t        var prev = 0, curr = 1;\n".green
    +"\t        while (true) {\n".green
    +"\t            yield(curr);\n".green
    +"\t            var tmp = prev + curr;\n".green
    +"\t            prev = curr;\n".green
    +"\t            curr = tmp;\n".green
    +"\t        }\n".green
    +"\t    });\n".green
    +"\t    // Return a bound handle to `run` on this fiber\n".green
    +"\t    return fiber.run.bind(fiber);\n".green
    +"\t}\n".green
    +"\n"
    +"\t// Initialize a new Fibonacci sequence and iterate up to 1597\n".green
    +"\tvar seq = Fibonacci();\n".green
    +"\tfor (var ii = seq(); ii <= 1597; ii = seq()) {\n".green
    +"\t    console.log(ii);\n".green
    +"\t}\n".green
    +"\n"
    +"\n"
    +"\t$ node fibonacci.js\n".green
    +"\t0\n".yellow
    +"\t1\n".yellow
    +"\t1\n".yellow
    +"\t2\n".yellow
    +"\t3\n".yellow
    +"\t5\n".yellow
    +"\t8\n".yellow
    +"\t13\n".yellow
    +"\t21\n".yellow
    +"\t34\n".yellow
    +"\t55\n".yellow
    +"\t89\n".yellow
    +"\t144\n".yellow
    +"\t233\n".yellow
    +"\t377\n".yellow
    +"\t610\n".yellow
    +"\t987\n".yellow
    +"\t1597\n".yellow
    +"\n"
    +"\n"
    +"\tBasic Exceptions\n".cyan
    +"\t-----------------\n"
    +"\n"
    +"\tFibers are exception-safe; exceptions will continue travelling through fiber boundaries:\n"
    +"\n"
    +"\t$ cat error.js\n".green
    +"\trequire('fibers');\n".green
    +"\n"
    +"\tvar fn = Fiber(function() {\n".green
    +"\t    console.log('async work here...');\n".green
    +"\t    yield();\n".green
    +"\t    console.log('still working...');\n".green
    +"\t    yield();\n".green
    +"\t    console.log('just a little bit more...');\n".green
    +"\t    yield();\n".green
    +"\t    throw new Error('oh crap!');\n".green
    +"\t});\n".green
    +"\n"
    +"\ttry {\n".green
    +"\t    while (true) {\n".green
    +"\t        fn.run();\n".green
    +"\t    }\n".green
    +"\t} catch(e) {\n".green
    +"\t    console.log('safely caught that error!');\n".green
    +"\t    console.log(e.stack);\n".green
    +"\t}\n".green
    +"\tconsole.log('done!');\n".green
    + "\n"
    + "\n"
    +"\t$ node error.js\n".green
    +"\tasync work here...\n".yellow
    +"\tstill working...\n".yellow
    +"\tjust a little bit more...\n".yellow
    +"\tsafely caught that error!\n".yellow
    +"\tError: oh crap!\n".yellow
    +"\t        at error.js:11:9\n".yellow
    +"\tdone!\n".yellow
    + "\n"
    ;
