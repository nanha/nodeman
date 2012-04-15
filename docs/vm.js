exports.name = 'vm';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/vm.html';
exports.description = [
 "\t# Executing JavaScript".red
,"\t"
,"\tYou can access this module with:"
,"\t"
,"\t    var vm = require('vm');".yellow
,"\t"
,"\tJavaScript code can be compiled and run immediately or compiled, saved, and run later."
,"\t"
,"\t"
,"\t## vm.runInThisContext(code, [filename])".cyan
,"\t"
,"\t`vm.runInThisContext()` compiles `code`, runs it and returns the result. Running"
,"\tcode does not have access to local scope. `filename` is optional, it's used only"
,"\tin stack traces."
,"\t"
,"\tExample of using `vm.runInThisContext` and `eval` to run the same code:"
,"\t"
,"\t    var localVar = 123,".green
,"\t        usingscript, evaled,".green
,"\t        vm = require('vm');".green
,"\t".green
,"\t    usingscript = vm.runInThisContext('localVar = 1;',".green
,"\t      'myfile.vm');".green
,"\t    console.log('localVar: ' + localVar + ', usingscript: ' +".green
,"\t      usingscript);".green
,"\t    evaled = eval('localVar = 1;');".green
,"\t    console.log('localVar: ' + localVar + ', evaled: ' +".green
,"\t      evaled);".green
,"\t"
,"\t    // localVar: 123, usingscript: 1".yellow
,"\t    // localVar: 1, evaled: 1".yellow
,"\t"
,"\t`vm.runInThisContext` does not have access to the local scope, so `localVar` is unchanged."
,"\t`eval` does have access to the local scope, so `localVar` is changed."
,"\t"
,"\tIn case of syntax error in `code`, `vm.runInThisContext` emits the syntax error to stderr"
,"\tand throws an exception."
,"\t"
,"\t"
,"\t## vm.runInNewContext(code, [sandbox], [filename])".cyan
,"\t"
,"\t`vm.runInNewContext` compiles `code`, then runs it in `sandbox` and returns the"
,"\tresult. Running code does not have access to local scope. The object `sandbox`"
,"\twill be used as the global object for `code`."
,"\t`sandbox` and `filename` are optional, `filename` is only used in stack traces."
,"\t"
,"\tExample: compile and execute code that increments a global variable and sets a new one."
,"\tThese globals are contained in the sandbox."
,"\t"
,"\t    var util = require('util'),".green
,"\t        vm = require('vm'),".green
,"\t        sandbox = {".green
,"\t          animal: 'cat',".green
,"\t          count: 2".green
,"\t        };".green
,"\t".green
,"\t    vm.runInNewContext('count += 1; name = \"kitty\"', sandbox, 'myfile.vm');".green
,"\t    console.log(util.inspect(sandbox));".green
,"\t".green
,"\t    // { animal: 'cat', count: 3, name: 'kitty' }".yellow
,"\t"
,"\tNote that running untrusted code is a tricky business requiring great care.  To prevent accidental"
,"\tglobal variable leakage, `vm.runInNewContext` is quite useful, but safely running untrusted code"
,"\trequires a separate process."
,"\t"
,"\tIn case of syntax error in `code`, `vm.runInNewContext` emits the syntax error to stderr"
,"\tand throws an exception."
,"\t"
,"\t## vm.runInContext(code, context, [filename])".cyan
,"\t"
,"\t`vm.runInContext` compiles `code`, then runs it in `context` and returns the"
,"\tresult. A (V8) context comprises a global object, together with a set of"
,"\tbuilt-in objects and functions. Running code does not have access to local scope"
,"\tand the global object held within `context` will be used as the global object"
,"\tfor `code`."
,"\t`filename` is optional, it's used only in stack traces."
,"\t"
,"\tExample: compile and execute code in a existing context."
,"\t"
,"\t    var util = require('util'),".green
,"\t        vm = require('vm'),".green
,"\t        initSandbox = {".green
,"\t          animal: 'cat',".green
,"\t          count: 2".green
,"\t        },".green
,"\t        context = vm.createContext(initSandbox);".green
,"\t".green
,"\t    vm.runInContext('count += 1; name = \"CATT\"', context, 'myfile.vm');".green
,"\t    console.log(util.inspect(context));".green
,"\t"
,"\t    // { animal: 'cat', count: 3, name: 'CATT' }".yellow
,"\t"
,"\tNote that `createContext` will perform a shallow clone of the supplied sandbox object in order to"
,"\tinitialise the global object of the freshly constructed context."
,"\t"
,"\tNote that running untrusted code is a tricky business requiring great care.  To prevent accidental"
,"\tglobal variable leakage, `vm.runInContext` is quite useful, but safely running untrusted code"
,"\trequires a separate process."
,"\t"
,"\tIn case of syntax error in `code`, `vm.runInContext` emits the syntax error to stderr"
,"\tand throws an exception."
,"\t"
,"\t## vm.createContext([initSandbox])".cyan
,"\t"
,"\t`vm.createContext` creates a new context which is suitable for use as the 2nd argument of a subsequent"
,"\tcall to `vm.runInContext`. A (V8) context comprises a global object together with a set of"
,"\tbuild-in objects and functions. The optional argument `initSandbox` will be shallow-copied"
,"\tto seed the initial contents of the global object used by the context."
,"\t"
,"\t## vm.createScript(code, [filename])".cyan
,"\t"
,"\t`createScript` compiles `code` but does not run it. Instead, it returns a"
,"\t`vm.Script` object representing this compiled code. This script can be run"
,"\tlater many times using methods below. The returned script is not bound to any"
,"\tglobal object. It is bound before each run, just for that run. `filename` is"
,"\toptional, it's only used in stack traces."
,"\t"
,"\tIn case of syntax error in `code`, `createScript` prints the syntax error to stderr"
,"\tand throws an exception."
,"\t"
,"\t"
,"\t## Class: Script".cyan
,"\t"
,"\tA class for running scripts.  Returned by vm.createScript."
,"\t"
,"\t### script.runInThisContext()".magenta
,"\t"
,"\tSimilar to `vm.runInThisContext` but a method of a precompiled `Script` object."
,"\t`script.runInThisContext` runs the code of `script` and returns the result."
,"\tRunning code does not have access to local scope, but does have access to the `global` object"
,"\t(v8: in actual context)."
,"\t"
,"\tExample of using `script.runInThisContext` to compile code once and run it multiple times:"
,"\t"
,"\t    var vm = require('vm');".green
,"\t".green
,"\t    globalVar = 0;".green
,"\t".green
,"\t    var script = vm.createScript('globalVar += 1', 'myfile.vm');".green
,"\t".green
,"\t    for (var i = 0; i < 1000 ; i += 1) {".green
,"\t      script.runInThisContext();".green
,"\t    }".green
,"\t".green
,"\t    console.log(globalVar);".green
,"\t"
,"\t    // 1000".yellow
,"\t"
,"\t"
,"\t### script.runInNewContext([sandbox])".magenta
,"\t"
,"\tSimilar to `vm.runInNewContext` a method of a precompiled `Script` object."
,"\t`script.runInNewContext` runs the code of `script` with `sandbox` as the global object and returns the result."
,"\tRunning code does not have access to local scope. `sandbox` is optional."
,"\t"
,"\tExample: compile code that increments a global variable and sets one, then execute this code multiple times."
,"\tThese globals are contained in the sandbox."
,"\t"
,"\t    var util = require('util'),".green
,"\t        vm = require('vm'),".green
,"\t        sandbox = {".green
,"\t          animal: 'cat',".green
,"\t          count: 2".green
,"\t        };".green
,"\t".green
,"\t    var script = vm.createScript('count += 1; name = \"kitty\"', 'myfile.vm');".green
,"\t".green
,"\t    for (var i = 0; i < 10 ; i += 1) {".green
,"\t      script.runInNewContext(sandbox);".green
,"\t    }".green
,"\t".green
,"\t    console.log(util.inspect(sandbox));".green
,"\t"
,"\t    // { animal: 'cat', count: 12, name: 'kitty' }".yellow
,"\t"
,"\tNote that running untrusted code is a tricky business requiring great care.  To prevent accidental"
,"\tglobal variable leakage, `script.runInNewContext` is quite useful, but safely running untrusted code"
,"\trequires a separate process."
].join('\n');
