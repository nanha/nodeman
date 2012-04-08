exports.name = 'stream';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/stream.html';
exports.description = [
 "\t# Stream".red
,"\t"
,"\tA stream is an abstract interface implemented by various objects in Node."
,"\tFor example a request to an HTTP server is a stream, as is stdout. Streams"
,"\tare readable, writable, or both. All streams are instances of `EventEmitter`."
,"\t"
,"\tYou can load up the Stream base class by doing `require('stream')`."
,"\t"
,"\t## Readable Stream".cyan
,"\t"
,"\tA `Readable Stream` has the following methods, members, and events."
,"\t"
,"\t### Event: 'data'".magenta
,"\t"
,"\t`function (data) { }`".green
,"\t"
,"\tThe `'data'` event emits either a `Buffer` (by default) or a string if"
,"\t`setEncoding()` was used."
,"\t"
,"\tNote that the __data will be lost__ if there is no listener when a"
,"\t`Readable Stream` emits a `'data'` event."
,"\t"
,"\t### Event: 'end'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tEmitted when the stream has received an EOF (FIN in TCP terminology)."
,"\tIndicates that no more `'data'` events will happen. If the stream is also"
,"\twritable, it may be possible to continue writing."
,"\t"
,"\t### Event: 'error'".magenta
,"\t"
,"\t`function (exception) { }`".green
,"\t"
,"\tEmitted if there was an error receiving data."
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tEmitted when the underlying file descriptor has been closed. Not all streams"
,"\twill emit this.  (For example, an incoming HTTP request will not emit"
,"\t`'close'`.)"
,"\t"
,"\t### stream.readable".magenta
,"\t"
,"\tA boolean that is `true` by default, but turns `false` after an `'error'`"
,"\toccurred, the stream came to an `'end'`, or `destroy()` was called."
,"\t"
,"\t### stream.setEncoding(encoding)".magenta
,"\tMakes the data event emit a string instead of a `Buffer`. `encoding` can be"
,"\t`'utf8'`, `'ascii'`, or `'base64'`."
,"\t"
,"\t### stream.pause()".magenta
,"\t"
,"\tPauses the incoming `'data'` events."
,"\t"
,"\t### stream.resume()".magenta
,"\t"
,"\tResumes the incoming `'data'` events after a `pause()`."
,"\t"
,"\t### stream.destroy()".magenta
,"\t"
,"\tCloses the underlying file descriptor. Stream will not emit any more events."
,"\t"
,"\t"
,"\t### stream.destroySoon()".magenta
,"\t"
,"\tAfter the write queue is drained, close the file descriptor."
,"\t"
,"\t### stream.pipe(destination, [options])".magenta
,"\t"
,"\tThis is a `Stream.prototype` method available on all `Stream`s."
,"\t"
,"\tConnects this read stream to `destination` WriteStream. Incoming"
,"\tdata on this stream gets written to `destination`. The destination and source"
,"\tstreams are kept in sync by pausing and resuming as necessary."
,"\t"
,"\tThis function returns the `destination` stream."
,"\t"
,"\tEmulating the Unix `cat` command:"
,"\t"
,"\t    process.stdin.resume();".green
,"\t    process.stdin.pipe(process.stdout);".green
,"\t"
,"\t"
,"\tBy default `end()` is called on the destination when the source stream emits"
,"\t`end`, so that `destination` is no longer writable. Pass `{ end: false }` as"
,"\t`options` to keep the destination stream open."
,"\t"
,"\tThis keeps `process.stdout` open so that \"Goodbye\" can be written at the end."
,"\t"
,"\t    process.stdin.resume();".green
,"\t".green
,"\t    process.stdin.pipe(process.stdout, { end: false });".green
,"\t".green
,"\t    process.stdin.on(\"end\", function() {".green
,"\t      process.stdout.write(\"Goodbye\\n\");".green
,"\t    });".green
,"\t"
,"\t"
,"\t## Writable Stream".cyan
,"\t"
,"\tA `Writable Stream` has the following methods, members, and events."
,"\t"
,"\t### Event: 'drain'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tAfter a `write()` method returned `false`, this event is emitted to"
,"\tindicate that it is safe to write again."
,"\t"
,"\t### Event: 'error'".magenta
,"\t"
,"\t`function (exception) { }`".green
,"\t"
,"\tEmitted on error with the exception `exception`."
,"\t"
,"\t### Event: 'close'".magenta
,"\t"
,"\t`function () { }`".green
,"\t"
,"\tEmitted when the underlying file descriptor has been closed."
,"\t"
,"\t### Event: 'pipe'".magenta
,"\t"
,"\t`function (src) { }`".green
,"\t"
,"\tEmitted when the stream is passed to a readable stream's pipe method."
,"\t"
,"\t### stream.writable".magenta
,"\t"
,"\tA boolean that is `true` by default, but turns `false` after an `'error'`"
,"\toccurred or `end()` / `destroy()` was called."
,"\t"
,"\t### stream.write(string, [encoding], [fd])".magenta
,"\t"
,"\tWrites `string` with the given `encoding` to the stream.  Returns `true` if"
,"\tthe string has been flushed to the kernel buffer.  Returns `false` to"
,"\tindicate that the kernel buffer is full, and the data will be sent out in"
,"\tthe future. The `'drain'` event will indicate when the kernel buffer is"
,"\tempty again. The `encoding` defaults to `'utf8'`."
,"\t"
,"\tIf the optional `fd` parameter is specified, it is interpreted as an integral"
,"\tfile descriptor to be sent over the stream. This is only supported for UNIX"
,"\tstreams, and is silently ignored otherwise. When writing a file descriptor in"
,"\tthis manner, closing the descriptor before the stream drains risks sending an"
,"\tinvalid (closed) FD."
,"\t"
,"\t### stream.write(buffer)".magenta
,"\t"
,"\tSame as the above except with a raw buffer."
,"\t"
,"\t### stream.end()".magenta
,"\t"
,"\tTerminates the stream with EOF or FIN."
,"\tThis call will allow queued write data to be sent before closing the stream."
,"\t"
,"\t### stream.end(string, encoding)".magenta
,"\t"
,"\tSends `string` with the given `encoding` and terminates the stream with EOF"
,"\tor FIN. This is useful to reduce the number of packets sent."
,"\t"
,"\t### stream.end(buffer)".magenta
,"\t"
,"\tSame as above but with a `buffer`."
,"\t"
,"\t### stream.destroy()".magenta
,"\t"
,"\tCloses the underlying file descriptor. Stream will not emit any more events."
,"\tAny queued write data will not be sent."
,"\t"
,"\t### stream.destroySoon()".magenta
,"\t"
,"\tAfter the write queue is drained, close the file descriptor. `destroySoon()`"
,"\tcan still destroy straight away, as long as there is no data left in the queue"
,"\tfor writes."
].join('\n');
