exports.name = 'util';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/util.html';
exports.description = [
 "\t# util".red
,"\t"
,"\tThese functions are in the module `'util'`. Use `require('util')` to access"
,"\tthem."
,"\t"
,"\t"
,"\t## util.format()".cyan
,"\t"
,"\tReturns a formatted string using the first argument as a `printf`-like format."
,"\t"
,"\tThe first argument is a string that contains zero or more *placeholders*."
,"\tEach placeholder is replaced with the converted value from its corresponding"
,"\targument. Supported placeholders are:"
,"\t"
,"\t* `%s` - String.".blue
,"\t* `%d` - Number (both integer and float).".blue
,"\t* `%j` - JSON.".blue
,"\t* `%%` - single percent sign (`'%'`). This does not consume an argument.".blue
,"\t"
,"\tIf the placeholder does not have a corresponding argument, the placeholder is"
,"\tnot replaced."
,"\t"
,"\t    util.format('%s:%s', 'foo'); // 'foo:%s'".green
,"\t"
,"\tIf there are more arguments than placeholders, the extra arguments are"
,"\tconverted to strings with `util.inspect()` and these strings are concatenated,"
,"\tdelimited by a space."
,"\t"
,"\t    util.format('%s:%s', 'foo', 'bar', 'baz'); // 'foo:bar baz'".green
,"\t"
,"\tIf the first argument is not a format string then `util.format()` returns"
,"\ta string that is the concatenation of all its arguments separated by spaces."
,"\tEach argument is converted to a string with `util.inspect()`."
,"\t"
,"\t    util.format(1, 2, 3); // '1 2 3'".green
,"\t"
,"\t"
,"\t## util.debug(string)".cyan
,"\t"
,"\tA synchronous output function. Will block the process and"
,"\toutput `string` immediately to `stderr`."
,"\t"
,"\t    require('util').debug('message on stderr');".green
,"\t"
,"\t"
,"\t## util.log(string)".cyan
,"\t"
,"\tOutput with timestamp on `stdout`."
,"\t"
,"\t    require('util').log('Timestamped message.');".green
,"\t"
,"\t"
,"\t## util.inspect(object, [showHidden], [depth], [colors])".cyan
,"\t"
,"\tReturn a string representation of `object`, which is useful for debugging."
,"\t"
,"\tIf `showHidden` is `true`, then the object's non-enumerable properties will be"
,"\tshown too. Defaults to `false`."
,"\t"
,"\tIf `depth` is provided, it tells `inspect` how many times to recurse while"
,"\tformatting the object. This is useful for inspecting large complicated objects."
,"\t"
,"\tThe default is to only recurse twice.  To make it recurse indefinitely, pass"
,"\tin `null` for `depth`."
,"\t"
,"\tIf `colors` is `true`, the output will be styled with ANSI color codes."
,"\tDefaults to `false`."
,"\t"
,"\tExample of inspecting all properties of the `util` object:"
,"\t"
,"\t    var util = require('util');".green
,"\t".green
,"\t    console.log(util.inspect(util, true, null));".green
,"\t"
,"\t"
,"\t## util.isArray(object)".cyan
,"\t"
,"\tReturns `true` if the given \"object\" is an `Array`. `false` otherwise."
,"\t"
,"\t    var util = require('util');".green
,"\t".green
,"\t    util.isArray([])".green
,"\t      // true".green
,"\t    util.isArray(new Array)".green
,"\t      // true".green
,"\t    util.isArray({})".green
,"\t      // false".green
,"\t"
,"\t"
,"\t## util.isRegExp(object)".cyan
,"\t"
,"\tReturns `true` if the given \"object\" is a `RegExp`. `false` otherwise."
,"\t"
,"\t    var util = require('util');".green
,"\t".green
,"\t    util.isRegExp(/some regexp/)".green
,"\t      // true".green
,"\t    util.isRegExp(new RegExp('another regexp'))".green
,"\t      // true".green
,"\t    util.isRegExp({})".green
,"\t      // false".green
,"\t"
,"\t"
,"\t## util.isDate(object)".cyan
,"\t"
,"\tReturns `true` if the given \"object\" is a `Date`. `false` otherwise."
,"\t"
,"\t    var util = require('util');".green
,"\t".green
,"\t    util.isDate(new Date())".green
,"\t      // true".green
,"\t    util.isDate(Date())".green
,"\t      // false (without 'new' returns a String)".green
,"\t    util.isDate({})".green
,"\t      // false".green
,"\t".green
,"\t"
,"\t## util.isError(object)".cyan
,"\t"
,"\tReturns `true` if the given \"object\" is an `Error`. `false` otherwise."
,"\t"
,"\t    var util = require('util');".green
,"\t".green
,"\t    util.isError(new Error())".green
,"\t      // true".green
,"\t    util.isError(new TypeError())".green
,"\t      // true".green
,"\t    util.isError({ name: 'Error', message: 'an error occurred' })".green
,"\t      // false".green
,"\t"
,"\t"
,"\t## util.pump(readableStream, writableStream, [callback])".cyan
,"\t"
,"\tExperimental"
,"\t"
,"\tRead the data from `readableStream` and send it to the `writableStream`."
,"\tWhen `writableStream.write(data)` returns `false` `readableStream` will be"
,"\tpaused until the `drain` event occurs on the `writableStream`. `callback` gets"
,"\tan error as its only argument and is called when `writableStream` is closed or"
,"\twhen an error occurs."
,"\t"
,"\t"
,"\t## util.inherits(constructor, superConstructor)".cyan
,"\t"
,"\tInherit the prototype methods from one"
,"\t[constructor](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/constructor)"
,"\tinto another.  The prototype of `constructor` will be set to a new"
,"\tobject created from `superConstructor`."
,"\t"
,"\tAs an additional convenience, `superConstructor` will be accessible"
,"\tthrough the `constructor.super_` property."
,"\t"
,"\t    var util = require(\"util\");".green
,"\t    var events = require(\"events\");".green
,"\t".green
,"\t    function MyStream() {".green
,"\t        events.EventEmitter.call(this);".green
,"\t    }".green
,"\t".green
,"\t    util.inherits(MyStream, events.EventEmitter);".green
,"\t".green
,"\t    MyStream.prototype.write = function(data) {".green
,"\t        this.emit(\"data\", data);".green
,"\t    }".green
,"\t".green
,"\t    var stream = new MyStream();".green
,"\t".green
,"\t    console.log(stream instanceof events.EventEmitter); // true".green
,"\t    console.log(MyStream.super_ === events.EventEmitter); // true".green
,"\t".green
,"\t    stream.on(\"data\", function(data) {".green
,"\t        console.log('Received data: \"' + data + '\"');".green
,"\t    })".green
,"\t    stream.write(\"It works!\"); // Received data: \"It works!\"".green
].join('\n');
