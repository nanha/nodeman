exports.name = 'fs';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/fs.html';
exports.description = [
, "\t# File System".red
,""
, "\tFile I/O is provided by simple wrappers around standard POSIX functions.  To"
, "\tuse this module do `require('fs')`. All the methods have asynchronous and"
, "\tsynchronous forms."
,""
, "\tThe asynchronous form always take a completion callback as its last argument."
, "\tThe arguments passed to the completion callback depend on the method, but the"
, "\tfirst argument is always reserved for an exception. If the operation was"
, "\tcompleted successfully, then the first argument will be `null` or `undefined`."
,""
, "\tWhen using the synchronous form any exceptions are immediately thrown."
, "\tYou can use try/catch to handle exceptions or allow them to bubble up."
,""
, "\tHere is an example of the asynchronous version:"
,""
, "\t    var fs = require('fs');".green
,"".green
, "\t    fs.unlink('/tmp/hello', function (err) {".green
, "\t      if (err) throw err;".green
, "\t      console.log('successfully deleted /tmp/hello');".green
, "\t    });".green
,""
, "\tHere is the synchronous version:"
,""
, "\t    var fs = require('fs');".yellow
,"".yellow
, "\t    fs.unlinkSync('/tmp/hello')".yellow
, "\t    console.log('successfully deleted /tmp/hello');".yellow
,""
, "\tWith the asynchronous methods there is no guaranteed ordering. So the"
, "\tfollowing is prone to error:"
,""
, "\t    fs.rename('/tmp/hello', '/tmp/world', function (err) {".green
, "\t      if (err) throw err;".green
, "\t      console.log('renamed complete');".green
, "\t    });".green
, "\t    fs.stat('/tmp/world', function (err, stats) {".green
, "\t      if (err) throw err;".green
, "\t      console.log('stats: ' + JSON.stringify(stats));".green
, "\t    });".green
,""
, "\tIt could be that `fs.stat` is executed before `fs.rename`."
, "\tThe correct way to do this is to chain the callbacks."
,""
, "\t    fs.rename('/tmp/hello', '/tmp/world', function (err) {".green
, "\t      if (err) throw err;".green
, "\t      fs.stat('/tmp/world', function (err, stats) {".green
, "\t        if (err) throw err;".green
, "\t        console.log('stats: ' + JSON.stringify(stats));".green
, "\t      });".green
, "\t    });".green
,""
, "\tIn busy processes, the programmer is _strongly encouraged_ to use the"
, "\tasynchronous versions of these calls. The synchronous versions will block"
, "\tthe entire process until they complete--halting all connections."
,""
, "\tRelative path to filename can be used, remember however that this path will be relative"
, "\tto `process.cwd()`."
,""
, "\t## fs.rename(path1, path2, [callback])".cyan
,""
, "\tAsynchronous rename(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.renameSync(path1, path2)".cyan
,""
, "\tSynchronous rename(2)."
,""
, "\t## fs.truncate(fd, len, [callback])".cyan
,""
, "\tAsynchronous ftruncate(2). No arguments other than a possible exception are"
, "\tgiven to the completion callback."
,""
, "\t## fs.truncateSync(fd, len)".cyan
,""
, "\tSynchronous ftruncate(2)."
,""
, "\t## fs.chown(path, uid, gid, [callback])".cyan
,""
, "\tAsynchronous chown(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.chownSync(path, uid, gid)".cyan
,""
, "\tSynchronous chown(2)."
,""
, "\t## fs.fchown(fd, uid, gid, [callback])".cyan
,""
, "\tAsynchronous fchown(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.fchownSync(fd, uid, gid)".cyan
,""
, "\tSynchronous fchown(2)."
,""
, "\t## fs.lchown(path, uid, gid, [callback])".cyan
,""
, "\tAsynchronous lchown(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.lchownSync(path, uid, gid)".cyan
,""
, "\tSynchronous lchown(2)."
,""
, "\t## fs.chmod(path, mode, [callback])".cyan
,""
, "\tAsynchronous chmod(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.chmodSync(path, mode)".cyan
,""
, "\tSynchronous chmod(2)."
,""
, "\t## fs.fchmod(fd, mode, [callback])".cyan
,""
, "\tAsynchronous fchmod(2). No arguments other than a possible exception"
, "\tare given to the completion callback."
,""
, "\t## fs.fchmodSync(fd, mode)".cyan
,""
, "\tSynchronous fchmod(2)."
,""
, "\t## fs.lchmod(path, mode, [callback])".cyan
,""
, "\tAsynchronous lchmod(2). No arguments other than a possible exception"
, "\tare given to the completion callback."
,""
, "\t## fs.lchmodSync(path, mode)".cyan
,""
, "\tSynchronous lchmod(2)."
,""
, "\t## fs.stat(path, [callback])".cyan
,""
, "\tAsynchronous stat(2). The callback gets two arguments `(err, stats)` where"
, "\t`stats` is a [fs.Stats](#fs.Stats) object.  See the [fs.Stats](#fs.Stats)"
, "\tsection below for more information."
,""
, "\t## fs.lstat(path, [callback])".cyan
,""
, "\tAsynchronous lstat(2). The callback gets two arguments `(err, stats)` where"
, "\t`stats` is a `fs.Stats` object. `lstat()` is identical to `stat()`, except that if"
, "\t`path` is a symbolic link, then the link itself is stat-ed, not the file that it"
, "\trefers to."
,""
, "\t## fs.fstat(fd, [callback])".cyan
,""
, "\tAsynchronous fstat(2). The callback gets two arguments `(err, stats)` where"
, "\t`stats` is a `fs.Stats` object. `fstat()` is identical to `stat()`, except that"
, "\tthe file to be stat-ed is specified by the file descriptor `fd`."
,""
, "\t## fs.statSync(path)".cyan
,""
, "\tSynchronous stat(2). Returns an instance of `fs.Stats`."
,""
, "\t## fs.lstatSync(path)".cyan
,""
, "\tSynchronous lstat(2). Returns an instance of `fs.Stats`."
,""
, "\t## fs.fstatSync(fd)".cyan
,""
, "\tSynchronous fstat(2). Returns an instance of `fs.Stats`."
,""
, "\t## fs.link(srcpath, dstpath, [callback])".cyan
,""
, "\tAsynchronous link(2). No arguments other than a possible exception are given to"
, "\tthe completion callback."
,""
, "\t## fs.linkSync(srcpath, dstpath)".cyan
,""
, "\tSynchronous link(2)."
,""
, "\t## fs.symlink(linkdata, path, [type], [callback])".cyan
,""
, "\tAsynchronous symlink(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
, "\t`type` argument can be either `'dir'` or `'file'` (default is `'file'`).  It is only "
, "\tused on Windows (ignored on other platforms)."
,""
, "\t## fs.symlinkSync(linkdata, path, [type])".cyan
,""
, "\tSynchronous symlink(2)."
,""
, "\t## fs.readlink(path, [callback])".cyan
,""
, "\tAsynchronous readlink(2). The callback gets two arguments `(err,"
, "\tlinkString)`."
,""
, "\t## fs.readlinkSync(path)".cyan
,""
, "\tSynchronous readlink(2). Returns the symbolic link's string value."
,""
, "\t## fs.realpath(path, [callback])".cyan
,""
, "\tAsynchronous realpath(2).  The callback gets two arguments `(err,"
, "\tresolvedPath)`.  May use `process.cwd` to resolve relative paths."
,""
, "\t## fs.realpathSync(path)".cyan
,""
, "\tSynchronous realpath(2). Returns the resolved path."
,""
, "\t## fs.unlink(path, [callback])".cyan
,""
, "\tAsynchronous unlink(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.unlinkSync(path)".cyan
,""
, "\tSynchronous unlink(2)."
,""
, "\t## fs.rmdir(path, [callback])".cyan
,""
, "\tAsynchronous rmdir(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.rmdirSync(path)".cyan
,""
, "\tSynchronous rmdir(2)."
,""
, "\t## fs.mkdir(path, [mode], [callback])".cyan
,""
, "\tAsynchronous mkdir(2). No arguments other than a possible exception are given"
, "\tto the completion callback. `mode` defaults to `0777`."
,""
, "\t## fs.mkdirSync(path, [mode])".cyan
,""
, "\tSynchronous mkdir(2)."
,""
, "\t## fs.readdir(path, [callback])".cyan
,""
, "\tAsynchronous readdir(3).  Reads the contents of a directory."
, "\tThe callback gets two arguments `(err, files)` where `files` is an array of"
, "\tthe names of the files in the directory excluding `'.'` and `'..'`."
,""
, "\t## fs.readdirSync(path)".cyan
,""
, "\tSynchronous readdir(3). Returns an array of filenames excluding `'.'` and"
, "\t`'..'`."
,""
, "\t## fs.close(fd, [callback])".cyan
,""
, "\tAsynchronous close(2).  No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.closeSync(fd)".cyan
,""
, "\tSynchronous close(2)."
,""
, "\t## fs.open(path, flags, [mode], [callback])".cyan
,""
, "\tAsynchronous file open. See open(2). `flags` can be:"
,""
, "\t* `'r'` - Open file for reading."
, "\tAn exception occurs if the file does not exist."
,""
, "\t* `'r+'` - Open file for reading and writing."
, "\tAn exception occurs if the file does not exist."
,""
, "\t* `'w'` - Open file for writing."
, "\tThe file is created (if it does not exist) or truncated (if it exists)."
,""
, "\t* `'w+'` - Open file for reading and writing."
, "\tThe file is created (if it does not exist) or truncated (if it exists)."
,""
, "\t* `'a'` - Open file for appending."
, "\tThe file is created if it does not exist."
,""
, "\t* `'a+'` - Open file for reading and appending."
, "\tThe file is created if it does not exist."
,""
, "\t`mode` defaults to `0666`. The callback gets two arguments `(err, fd)`."
,""
, "\t## fs.openSync(path, flags, [mode])".cyan
,""
, "\tSynchronous open(2)."
,""
, "\t## fs.utimes(path, atime, mtime, [callback])".cyan
, "\t## fs.utimesSync(path, atime, mtime)".cyan
,""
, "\tChange file timestamps of the file referenced by the supplied path."
,""
, "\t## fs.futimes(fd, atime, mtime, [callback])".cyan
, "\t## fs.futimesSync(fd, atime, mtime)".cyan
,""
, "\tChange the file timestamps of a file referenced by the supplied file"
, "\tdescriptor."
,""
, "\t## fs.fsync(fd, [callback])".cyan
,""
, "\tAsynchronous fsync(2). No arguments other than a possible exception are given"
, "\tto the completion callback."
,""
, "\t## fs.fsyncSync(fd)".cyan
,""
, "\tSynchronous fsync(2)."
,""
, "\t## fs.write(fd, buffer, offset, length, position, [callback])".cyan
,""
, "\tWrite `buffer` to the file specified by `fd`."
,""
, "\t`offset` and `length` determine the part of the buffer to be written."
,""
, "\t`position` refers to the offset from the beginning of the file where this data"
, "\tshould be written. If `position` is `null`, the data will be written at the"
, "\tcurrent position."
, "\tSee pwrite(2)."
,""
, "\tThe callback will be given three arguments `(err, written, buffer)` where `written`"
, "\tspecifies how many _bytes_ were written from `buffer`."
,""
, "\tNote that it is unsafe to use `fs.write` multiple times on the same file"
, "\twithout waiting for the callback. For this scenario,"
, "\t`fs.createWriteStream` is strongly recommended."
,""
, "\t## fs.writeSync(fd, buffer, offset, length, position)".cyan
,""
, "\tSynchronous version of buffer-based `fs.write()`. Returns the number of bytes"
, "\twritten."
,""
, "\t## fs.writeSync(fd, str, position, [encoding])".cyan
,""
, "\tSynchronous version of string-based `fs.write()`. `encoding` defaults to"
, "\t`'utf8'`. Returns the number of _bytes_ written."
,""
, "\t## fs.read(fd, buffer, offset, length, position, [callback])".cyan
,""
, "\tRead data from the file specified by `fd`."
,""
, "\t`buffer` is the buffer that the data will be written to."
,""
, "\t`offset` is offset within the buffer where writing will start."
,""
, "\t`length` is an integer specifying the number of bytes to read."
,""
, "\t`position` is an integer specifying where to begin reading from in the file."
, "\tIf `position` is `null`, data will be read from the current file position."
,""
, "\tThe callback is given the three arguments, `(err, bytesRead, buffer)`."
,""
, "\t## fs.readSync(fd, buffer, offset, length, position)".cyan
,""
, "\tSynchronous version of buffer-based `fs.read`. Returns the number of"
, "\t`bytesRead`."
,""
, "\t## fs.readSync(fd, length, position, encoding)".cyan
,""
, "\tSynchronous version of string-based `fs.read`. Returns the number of"
, "\t`bytesRead`."
,""
, "\t## fs.readFile(filename, [encoding], [callback])".cyan
,""
, "\tAsynchronously reads the entire contents of a file. Example:"
,""
, "\t    fs.readFile('/etc/passwd', function (err, data) {".green
, "\t      if (err) throw err;".green
, "\t      console.log(data);".green
, "\t    });".green
,""
, "\tThe callback is passed two arguments `(err, data)`, where `data` is the"
, "\tcontents of the file."
,""
, "\tIf no encoding is specified, then the raw buffer is returned."
,""
,""
, "\t## fs.readFileSync(filename, [encoding])".cyan
,""
, "\tSynchronous version of `fs.readFile`. Returns the contents of the `filename`."
,""
, "\tIf `encoding` is specified then this function returns a string. Otherwise it"
, "\treturns a buffer."
,""
,""
, "\t## fs.writeFile(filename, data, [encoding], [callback])".cyan
,""
, "\tAsynchronously writes data to a file, replacing the file if it already exists."
, "\t`data` can be a string or a buffer. The `encoding` argument is ignored if"
, "\t`data` is a buffer. It defaults to `'utf8'`."
,""
, "\tExample:"
,""
, "\t    fs.writeFile('message.txt', 'Hello Node', function (err) {".green
, "\t      if (err) throw err;".green
, "\t      console.log('It\'s saved!');".green
, "\t    });".green
,""
, "\t## fs.writeFileSync(filename, data, [encoding])".cyan
,""
, "\tThe synchronous version of `fs.writeFile`."
,""
, "\t## fs.watchFile(filename, [options], listener)".cyan
,""
, "\tWatch for changes on `filename`. The callback `listener` will be called each"
, "\ttime the file is accessed."
,""
, "\tThe second argument is optional. The `options` if provided should be an object"
, "\tcontaining two members a boolean, `persistent`, and `interval`. `persistent`"
, "\tindicates whether the process should continue to run as long as files are"
, "\tbeing watched. `interval` indicates how often the target should be polled,"
, "\tin milliseconds. (On Linux systems with inotify, `interval` is ignored.) The"
, "\tdefault is `{ persistent: true, interval: 0 }`."
,""
, "\tThe `listener` gets two arguments the current stat object and the previous"
, "\tstat object:"
,""
, "\t    fs.watchFile('message.text', function (curr, prev) {".green
, "\t      console.log('the current mtime is: ' + curr.mtime);".green
, "\t      console.log('the previous mtime was: ' + prev.mtime);".green
, "\t    });".green
,""
, "\tThese stat objects are instances of `fs.Stat`."
,""
, "\tIf you want to be notified when the file was modified, not just accessed"
, "\tyou need to compare `curr.mtime` and `prev.mtime`."
,""
,""
, "\t## fs.unwatchFile(filename)".cyan
,""
, "\tStop watching for changes on `filename`."
,""
, "\t## fs.watch(filename, [options], listener)".cyan
,""
, "\tWatch for changes on `filename`, where `filename` is either a file or a"
, "\tdirectory.  The returned object is [fs.FSWatcher](#fs.FSWatcher)."
,""
, "\tThe second argument is optional. The `options` if provided should be an object"
, "\tcontaining a boolean member `persistent`, which indicates whether the process"
, "\tshould continue to run as long as files are being watched. The default is"
, "\t`{ persistent: true }`."
,""
, "\tThe listener callback gets two arguments `(event, filename)`.  `event` is either"
, "\t'rename' or 'change', and `filename` is the name of the file which triggered"
, "\tthe event."
,""
, "\t***Warning:***"
, "\tProviding `filename` argument in the callback is not supported"
, "\ton every platform (currently it's only supported on Linux and Windows).  Even"
, "\ton supported platforms `filename` is not always guaranteed to be provided."
, "\tTherefore, don't assume that `filename` argument is always provided in the"
, "\tcallback, and have some fallback logic if it is null."
,""
, "\t    fs.watch('somedir', function (event, filename) {".green
, "\t      console.log('event is: ' + event);".green
, "\t      if (filename) {".green
, "\t        console.log('filename provided: ' + filename);".green
, "\t      } else {".green
, "\t        console.log('filename not provided');".green
, "\t      }".green
, "\t    });".green
,""
, "\t## Class: fs.Stats".cyan
,""
, "\tObjects returned from `fs.stat()`, `fs.lstat()` and `fs.fstat()` and their"
, "\tsynchronous counterparts are of this type."
,""
, "\t - `stats.isFile()`".green
, "\t - `stats.isDirectory()`".green
, "\t - `stats.isBlockDevice()`".green
, "\t - `stats.isCharacterDevice()`".green
, "\t - `stats.isSymbolicLink()` (only valid with  `fs.lstat()`)".green
, "\t - `stats.isFIFO()`".green
, "\t - `stats.isSocket()`".green
,""
, "\tFor a regular file `util.inspect(stats)` would return a string very"
, "\tsimilar to this:"
,""
, "\t    { dev: 2114,".yellow
, "\t      ino: 48064969,".yellow
, "\t      mode: 33188,".yellow
, "\t      nlink: 1,".yellow
, "\t      uid: 85,".yellow
, "\t      gid: 100,".yellow
, "\t      rdev: 0,".yellow
, "\t      size: 527,".yellow
, "\t      blksize: 4096,".yellow
, "\t      blocks: 8,".yellow
, "\t      atime: Mon, 10 Oct 2011 23:24:11 GMT,".yellow
, "\t      mtime: Mon, 10 Oct 2011 23:24:11 GMT,".yellow
, "\t      ctime: Mon, 10 Oct 2011 23:24:11 GMT }".yellow
,""
, "\tPlease note that `atime`, `mtime` and `ctime` are instances"
, "\tof [Date][MDN-Date] object and to compare the values of"
, "\tthese objects you should use appropriate methods. For most"
, "\tgeneral uses [getTime()][MDN-Date-getTime] will return"
, "\tthe number of milliseconds elapsed since _1 January 1970"
, "\t00:00:00 UTC_ and this integer should be sufficient for"
, "\tany comparison, however there additional methods which can"
, "\tbe used for displaying fuzzy information. More details can"
, "\tbe found in the [MDN JavaScript Reference][MDN-Date] page."
,""
, "\t[MDN-Date]: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date"
, "\t[MDN-Date-getTime]: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getTime"
,""
,""
, "\t## fs.createReadStream(path, [options])".cyan
,""
, "\tReturns a new ReadStream object (See `Readable Stream`)."
,""
, "\t`options` is an object with the following defaults:"
,""
, "\t    { flags: 'r',".green
, "\t      encoding: null,".green
, "\t      fd: null,".green
, "\t      mode: 0666,".green
, "\t      bufferSize: 64 * 1024".green
, "\t    }".green
,""
, "\t`options` can include `start` and `end` values to read a range of bytes from"
, "\tthe file instead of the entire file.  Both `start` and `end` are inclusive and"
, "\tstart at 0."
,""
, "\tAn example to read the last 10 bytes of a file which is 100 bytes long:"
,""
, "\t    fs.createReadStream('sample.txt', {start: 90, end: 99});"
,""
,""
, "\t## Class: fs.ReadStream".cyan
,""
, "\t`ReadStream` is a [Readable Stream](stream.html#readable_stream)."
,""
, "\t### Event: 'open'".magenta
,""
, "\t`function (fd) { }`".green
,""
, "\t `fd` is the file descriptor used by the ReadStream."
,""
,""
, "\t## fs.createWriteStream(path, [options])".cyan
,""
, "\tReturns a new WriteStream object (See `Writable Stream`)."
,""
, "\t`options` is an object with the following defaults:"
,""
, "\t    { flags: 'w',".green
, "\t      encoding: null,".green
, "\t      mode: 0666 }".green
,""
, "\t`options` may also include a `start` option to allow writing data at"
, "\tsome position past the beginning of the file.  Modifying a file rather"
, "\tthan replacing it may require a `flags` mode of `r+` rather than the"
, "\tdefault mode `w`."
,""
, "\t## fs.WriteStream".cyan
,""
, "\t`WriteStream` is a [Writable Stream](stream.html#writable_stream)."
,""
, "\t### Event: 'open'".magenta
,""
, "\t`function (fd) { }`"
,""
, "\t `fd` is the file descriptor used by the WriteStream."
,""
, "\t### file.bytesWritten".magenta
,""
, "\tThe number of bytes written so far. Does not include data that is still queued"
, "\tfor writing."
,""
, "\t## Class: fs.FSWatcher".cyan
,""
, "\tObjects returned from `fs.watch()` are of this type."
,""
, "\t### watcher.close()".magenta
,""
, "\tStop watching for changes on the given `fs.FSWatcher`."
,""
, "\t### Event: 'change'".magenta
,""
, "\t* `event` {String} The type of fs change"
, "\t* `filename` {String} The filename that changed (if relevant/available)"
,""
, "\tEmitted when something changes in a watched directory or file."
, "\tSee more details in [fs.watch](#fs.watch)."
,""
, "\t### Event: 'error'".magenta
,""
, "\t`function (exception) {}`".green
,""
, "\tEmitted when an error occurs."
,""
,""
, "\tfrom: http://docs.nodejitsu.com/articles/file-system/how-to-store-local-config-data".red.underline
, "\t==================================================================================="
,""
, "\tHow to store local configuration data".red
,""
, "\tby Charlie McConnell [github] on Fri Aug 26 2011 03:08:50 GMT-0700 (PST) articlesfile-systemhow-to-store-local-config-data"
, "\tStoring your Node.js application's configuration data is quite simple - every object in JavaScript can be easily rendered as JSON, which in turn is just string data that can be sent or saved any way you'd like. The simplest way to do this involves the built-in JSON.parse() and JSON.stringify() methods."
,""
, "\tLet's take a look at a very simple (and contrived) example. First, to save some very simple data:"
,""
, "\t  var fs = require('fs');".green
,"".green
, "\t  var myOptions = {".green
, "\t    name: 'Avian',".green
, "\t    dessert: 'cake'".green
, "\t    flavor: 'chocolate',".green
, "\t    beverage: 'coffee'".green
, "\t  };".green
,"".green
, "\t  var data = JSON.stringify(myOptions);".green
,"".green
, "\t  fs.writeFile('./config.json', data, function (err) {".green
, "\t    if (err) {".green
, "\t      console.log('There has been an error saving your configuration data.');".green
, "\t      console.log(err.message);".green
, "\t      return;".green
, "\t    }".green
, "\t    console.log('Configuration saved successfully.')".green
, "\t  });".green
,""
, "\tIt's really that simple - just JSON.stringify() and then save it however you'd like."
,""
, "\tNow let's load some configuration data:"
,""
, "\t  var fs = require('fs');".green
,"".green
, "\t  var data = fs.readFileSync('./config.json'),".green
, "\t      myObj;".green
,"".green
, "\t  try {".green
, "\t    myObj = JSON.parse(data);".green
, "\t    console.dir(myObj);".green
, "\t  }".green
, "\t  catch (err) {".green
, "\t    console.log('There has been an error parsing your JSON.')".green
, "\t    console.log(err);".green
, "\t  }".green
,""
, "\tNODE PRO TIP: Even if you don't like using try/catch, this is a place to use it. JSON.parse is a very strict JSON parser, and errors are common - most importantly, though, JSON.parse uses the throw statement rather than giving a callback, so try/catch is the only way to guard against the error."
,""
, "\tUsing the built-in JSON methods can take you far, but as with so many other problems you might be looking to solve with Node.js, there is already a solution in Userland that can take you much further. The solution, in this case, is nconf. Written by Charlie Robbins, it's a configuration manager for Node.js, supporting in-memory storage, local file storage, as well as support for a redis backend, provided in a separate module."
,""
, "\tLet's take a look now at how we'd perform some local configuration access with nconf. First, you'll need to install it to your project's working directory:"
,""
, "\t  npm install nconf".green
,""
, "\tAfter that, the syntax is a breeze. Have a look at an example:"
,""
, "\t  var nconf = require('nconf');".green
,"".green
, "\t  nconf.use('file', { file: './config.json' });".green
, "\t  nconf.load();".green
, "\t  nconf.set('name', 'Avian');".green
, "\t  nconf.set('dessert:name', 'Ice Cream');".green
, "\t  nconf.set('dessert:flavor', 'chocolate');".green
,"".green
, "\t  console.log(nconf.get('dessert'));".green
,"".green
, "\t  nconf.save(function (err) {".green
, "\t    if (err) {".green
, "\t      console.error(err.message);".green
, "\t      return;".green
, "\t    }".green
, "\t    console.log('Configuration saved successfully.');".green
, "\t  });".green
,"".green
,""
, "\tThe only tricky thing to notice here is the delimiter - ':'. When accessing nested properties with nconf, a colon is used to delimit the namespaces of key names. If a specific sub-key is not provided, the whole object is set or returned."
,""
, "\tWhen using nconf to store your configuration data to a file, nconf.save() and nconf.load() are the only times that any actual file interaction will happen. All other access is performed on an in-memory copy of your data, which will not persist without a call to nconf.save(). Similarly, if you're trying to bring back configuration data from the last time your application ran, it will not exist in memory without a call to nconf.load(), as shown above."
,""
,""
, "\tHow do I search files and directories?".red
,""
, "\tby Mr. Nico Reed [github] on Fri Aug 26 2011 03:08:50 GMT-0700 (PST) articlesfile-systemhow-to-search-files-and-directories-in-nodejs"
, "\tSuppose you want to list all the files in the current directory. One approach is to use the builtin fs.readdir method. This will get you an array of all the files and directories on the specified path:"
,""
, "\tfs = require('fs');".green
,"".green
, "\tfs.readdir(process.cwd(), function (err, files) {".green
, "\t  if (err) {".green
, "\t    console.log(err);".green
, "\t    return;".green
, "\t  }".green
, "\t  console.log(files);".green
, "\t});".green

, "\tUnfortunately, if you want to do a recursive list of files, then things get much more complicated very quickly. To avoid all of this scary complexity, this is one of the places where a Node.js user-land library can save the day. Node-findit, by SubStack, is a helper module to make searching for files easier. It has interfaces to let you work with callbacks, events, or just plain old synchronously (not a good idea most of the time)."
,""
, "\tTo install node-findit, simply use npm:"
,""
, "\tnpm install findit".green
,""
, "\tIn the same folder, create a file called example.js, and then add this code. Run it with node example.js. This example uses the node-findit event-based interface."
,""
, "\t//This sets up the file finder".green
, "\tvar finder = require('findit').find(__dirname);".green
,"".green
, "\t//This listens for directories found".green
, "\tfinder.on('directory', function (dir) {".green
, "\t  console.log('Directory: ' + dir + '/');".green
, "\t});".green
,"".green
, "\t//This listens for files found".green
, "\tfinder.on('file', function (file) {".green
, "\t  console.log('File: ' + file);".green
, "\t});".green

, "\tHow do I write files in node.js?".red
, "\t"
, "\tby Mr. Nico Reed [github] on Fri Aug 26 2011 03:08:50 GMT-0700 (PST) articlesfile-systemhow-to-write-files-in-nodejs"
, "\tWriting to a file is another of the basic programming tasks that one usually needs to know about - luckily, this task is very simple in Node.js. We can use the handy writeFile method inside the standard library's fs module, which can save all sorts of time and trouble."
, "\t"
, "\tfs = require('fs');".green
, "\tfs.writeFile(filename, data, [encoding], [callback])".green
, "\t"
, "\tfile = (string) filepath of the file to read".blue
, "\t".blue
, "\tdata = (string or buffer) the data you want to write to the file".blue
, "\t".blue
, "\tencoding = (optional string) the encoding of the data. Possible encodings are 'ascii', 'utf8', and 'base64'. If no encoding provided, then 'utf8' is assumed.".blue
, "\t".blue
, "\tcallback = (optional function (err) {}) If there is no error, err === null, otherwise err contains the error message.".blue
, "\t"
, "\tSo if we wanted to write \"Hello World\" to helloworld.txt:"
, "\t"
, "\tfs = require('fs');".green
, "\tfs.writeFile('helloworld.txt', 'Hello World!', function (err) {".green
, "\t  if (err) return console.log(err);".green
, "\t  console.log('Hello World > helloworld.txt');".green
, "\t});".green
, "\t"
, "\t[contents of helloworld.txt]:".yellow
, "\tHello World!".yellow
, "\t"
, "\t"
, "\tIf we purposely want to cause an error, we can try to write to a file that we don't have permission to access:"
, "\t"
, "\tfs = require('fs')".green
, "\tfs.writeFile('/etc/doesntexist', 'abc', function (err,data) {".green
, "\t  if (err) {".green
, "\t    return console.log(err);".green
, "\t  }".green
, "\t  console.log(data);".green
, "\t});".green
, "\t"
, "\t{ stack: [Getter/Setter],".yellow
, "\t  arguments: undefined,".yellow
, "\t  type: undefined,".yellow
, "\t  message: 'EACCES, Permission denied \'/etc/doesntexist\'',".yellow
, "\t  errno: 13,".yellow
, "\t  code: 'EACCES',".yellow
, "\t  path: '/etc/doesntexist' }".yellow

, "\t"
, "\tHow do I read files in node.js?".red
, "\t"
, "\tby Mr. Nico Reed [github] on Fri Aug 26 2011 03:08:50 GMT-0700 (PST) articlesfile-systemhow-to-read-files-in-nodejs"
, "\tReading the contents of a file into memory is a very common programming task, and, as with many other things, the Node.js core API provides methods to make this trivial. There are a variety of file system methods, all contained in the fs module. The easiest way to read the entire contents of a file is with fs.readFile, as follows:"
, "\t"
, "\tfs = require('fs');".green
, "\tfs.readFile(file, [encoding], [callback]);".green
, "\t"
, "\t// file = (string) filepath of the file to read"
, "\tencoding is an optional parameter that specifies the type of encoding to read the file. Possible encodings are 'ascii', 'utf8', and 'base64'. If no encoding is provided, the default is utf8."
, "\t"
, "\tcallback is a function to call when the file has been read and the contents are ready - it is passed two arguments, error and data. If there is no error, error will be null and data will contain the file contents; otherwise err contains the error message."
, "\t"
, "\tSo if we wanted to read /etc/hosts and print it to stdout (just like UNIX cat):"
, "\t"
, "\tfs = require('fs')".green
, "\tfs.readFile('/etc/hosts', 'utf8', function (err,data) {".green
, "\t  if (err) {".green
, "\t    return console.log(err);".green
, "\t  }".green
, "\t  console.log(data);".green
, "\t});".green
, "\t"
, "\tThe contents of /etc/hosts should now be visible to you, provided you have permission to read the file in the first place."
, "\t"
, "\tLet's now take a look at an example of what happens when you try to read an invalid file - the easiest example is one that doesn't exist."
, "\t"
, "\tfs = require('fs');".green
, "\tfs.readFile('/doesnt/exist', 'utf8', function (err,data) {".green
, "\t  if (err) {".green
, "\t    return console.log(err);".green
, "\t  }".green
, "\t  console.log(data);".green
, "\t});".green
, "\t"
, "\tThis is the output:"
, "\t"
, "\t{ stack: [Getter/Setter],".yellow
, "\t  arguments: undefined,".yellow
, "\t  type: undefined,".yellow
, "\t  message: 'ENOENT, No such file or directory \'/doesnt/exist\'',".yellow
, "\t  errno: 2,".yellow
, "\t  code: 'ENOENT',".yellow
, "\t  path: '/doesnt/exist' }".yellow
, "\t"
, "\tThis is a basic Node.js Error object - it can often be useful to log err.stack directly, since this contains a stack trace to the location in code at which the Error object was created."
, "\t"
, "\t"
, "\tHow to use the path module?".red
, "\t"
, "\tby Mr. Nico Reed [github] on Fri Aug 26 2011 03:08:50 GMT-0700 (PST) articlesfile-systemhow-to-use-the-path-module"
, "\tThe path module contains several helper functions to help make path manipulation easier."
, "\t"
, "\tThe first function worth mentioning is path.normalize. This function takes a path (in the form of a string) and strips it of duplicate slashes and normalizes directory abbreviations, like '.' for 'this directory' and '..' for 'one level up'. For example:"
, "\t"
, "\t    > var path = require('path');".green
, "\t    > path.normalize('/a/.///b/d/../c/')".green
, "\t    '/a/b/c/'".green
, "\t"
, "\tA closely related function to normalize is join. This function takes a variable number of arguments, joins them together, and normalizes the path."
, "\t"
, "\t    > var path = require('path');".green
, "\t    > path.join('/a/.', './//b/', 'd/../c/')".green
, "\t    '/a/b/c'".green
, "\t"
, "\tA possible use of join is to manipulate paths when serving urls:"
, "\t"
, "\t    > var path = require('path');".green
, "\t    > var url = '/index.html';".green
, "\t    > path.join(process.cwd(), 'static', url);".green
, "\t    '/home/nico/static/index.html'".green
, "\t"
, "\t"
, "\tThere are three functions which are used to extract the various parts of the path name: basename, extname, and dirname. "
, "\t- basename returns the last portion of the path passed in. "
, "\t- extname returns the extension of the last portion. Generally for directories, extname just returns ''. "
, "\t- Finally, dirname returns everything that basename does not return."
, "\t"
, "\tFor example:"
, "\t"
, "\t    > var path = require('path')".green
, "\t    > var a = '/a/b/c.html'".green
, "\t    > path.basename(a)".green
, "\t    'c.html'".green
, "\t    > path.extname(a)".green
, "\t    '.html'".green
, "\t    > path.dirname(a)".green
, "\t    '/a/b'".green
, "\t"
, "\tNote that basename has an optional second parameter that will strip out the extension if you pass the correct extension."
, "\t"
, "\t    > var path = require('path')".green
, "\t    > var a = '/a/b/c.html'".green
, "\t    > path.basename(a, path.extname(a))".green
, "\t    'c'".green
, "\t"
, "\tLastly, the path module provides methods to check whether or not a given path exists: exists and existsSync They both take the path of a file for the first parameter."
, "\t"
, "\texists takes a callback as its second parameter, to which is returned a boolean representing the existance of the file."
, "\t"
, "\texistsSync, on the other hand, checks the given path synchronously, returning the boolean directly. In Node.js, you will typically want to use the asynchronous functions for most file system I/O - the synchronous versions will block your entire process until they finish."
, "\t"
, "\tBlocking isn't always a bad thing. Checking the existence of a vital configuration file synchronously makes sense, for example - it doesn't matter much if your process is blocking for something it can't run without! Conversely, though, in a busy HTTP server, any per-request file I/O MUST be asynchronous, or else you'll be responding to requests one by one. See the article on asynchronous operations for more details."
, "\t"
, "\t    > var path = require('path')".green
, "\t    > path.exists('/etc', function(exists){console.log(\"Does the file exist?\", exists)})".green
, "\t    > Does the file exist? true".green
, "\t".green
, "\t    > path.existsSync('/etc')".green
, "\t    true".green
].join('\n');
