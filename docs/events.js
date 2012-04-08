exports.name = 'events';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/events.html';
exports.description = [
  "\tEvents".red
, "\t======"
,""
, "\tStability: 4 - API Frozen".yellow
,""
, "\tMany objects in Node emit events: a net.Server emits an event each time a peer connects to it, a fs.readStream emits an event when the file is opened. All objects which emit events are instances of events.EventEmitter. You can access this module by doing: require(\"events\");"
,""
, "\tTypically, event names are represented by a camel-cased string, however, there aren't any strict restrictions on that, as any string will be accepted."
,""
, "\tFunctions can then be attached to objects, to be executed when an event is emitted. These functions are called listeners."
,""
, "\tClass: events.EventEmitter".cyan
,""
, "\tTo access the EventEmitter class, require('events').EventEmitter."
,""
, "\tWhen an EventEmitter instance experiences an error, the typical action is to emit an 'error' event. Error events are treated as a special case in node. If there is no listener for it, then the default action is to print a stack trace and exit the program."
,""
, "\tAll EventEmitters emit the event 'newListener' when new listeners are added."
,""
, "\temitter.addListener(event, listener)#".magenta
, "\temitter.on(event, listener)#".magenta
,""
, "\tAdds a listener to the end of the listeners array for the specified event."
,""
, "\tserver.on('connection', function (stream) {".green
, "\t  console.log('someone connected!');".green
, "\t});".green
,""
, "\temitter.once(event, listener)#".magenta
,""
, "\tAdds a one time listener for the event. This listener is invoked only the next time the event is fired, after which it is removed."
,""
, "\tserver.once('connection', function (stream) {".green
, "\t  console.log('Ah, we have our first user!');".green
, "\t});".green
,""
, "\temitter.removeListener(event, listener)#".magenta
,""
, "\tRemove a listener from the listener array for the specified event. Caution: changes array indices in the listener array behind the listener."
,""
, "\tvar callback = function(stream) {".green
, "\t  console.log('someone connected!');".green
, "\t};".green
, "\tserver.on('connection', callback);".green
, "\t// ...".green
, "\tserver.removeListener('connection', callback);".green
,""
, "\temitter.removeAllListeners([event])#".magenta
,""
, "\tRemoves all listeners, or those of the specified event."
,""
, "\temitter.setMaxListeners(n)#".magenta
,""
, "\tBy default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default which helps finding memory leaks. Obviously not all Emitters should be limited to 10. This function allows that to be increased. Set to zero for unlimited."
,""
, "\temitter.listeners(event)#".magenta
,""
, "\tReturns an array of listeners for the specified event. This array can be manipulated, e.g. to remove listeners."
,""
, "\tserver.on('connection', function (stream) {".green
, "\t  console.log('someone connected!');".green
, "\t});".green
, "\tconsole.log(util.inspect(server.listeners('connection'))); // [ [Function] ]".green
,""
, "\temitter.emit(event, [arg1], [arg2], [...])#".magenta
,""
, "\tExecute each of the listeners in order with the supplied arguments."
,""
, "\tEvent: 'newListener'#".magenta
,""
, "\tevent String The event name"
, "\tlistener Function The event handler function"
, "\tThis event is emitted any time someone adds a new listener."
].join('\n');
