exports.name = 'node-static';
exports.category = 'server';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/node-static';
exports.description = [
    "\tnode-static".red
    , "\t============="
    , ""
    , "\tnode-static has an in-memory file cache, making it highly efficient."
    , "\tnode-static understands and supports conditional GET and HEAD requests."
    , "\tnode-static was inspired by some of the other static-file serving modules out there,"
    , "\tsuch as node-paperboy and antinode."
    , ""
    , ""
    , "\tsynopsis".red
    , "\t============="
    , ""
    , "\tvar static = require('node_static');".green
    , ""
    , "\t//".green
    , "\t// Create a node-static server instance to serve the './public' folder".green
    , "\t//".green
    , "\tvar file = new(static.Server)('./public');".green
    , ""
    , "\trequire('http').createServer(function (request, response) {".green
    , "\t    request.addListener('end', function () {".green
    , "\t        //".green
    , "\t        // Serve files!".green
    , "\t        //".green
    , "\t        file.serve(request, response);".green
    , "\t    });".green
    , "\t}).listen(8080);".green
    , ""
    , ""
    , "\tAPI".red
    , "\t======"
    , ""
    , "\tCreating a node-static Server".cyan
    , "\t-------------------------------"
    , ""
    , "\tCreating a file server instance is as simple as:"
    , ""
    , "\tnew static.Server();".green
    , ""
    , "\tThis will serve files in the current directory. If you want to serve files in a specific"
    , "\tdirectory, pass it as the first argument:"
    , ""

    , "\tnew static.Server('./public');".green
    , ""
    , "\tYou can also specify how long the client is supposed to cache the files node-static serves:"
    , ""

    , "\tnew static.Server('./public', { cache: 3600 });".green
    , ""
    , "\tThis will set the Cache-Control header, telling clients to cache the file for an hour."
    , "\tThis is the default setting."
    , ""

    , "\tServing files under a directory".cyan
    , "\t-------------------------------"
    , ""
    , "\tTo serve files under a directory, simply call the serve method on a Server instance, passing it"
    , "\tthe HTTP request and response object:"
    , ""

    , "\tvar fileServer = new static.Server('./public');".green
    , ""

    , "\trequire('http').createServer(function (request, response) {".green
    , "\t    request.addListener('end', function () {".green
    , "\t        fileServer.serve(request, response);".green
    , "\t    });".green
    , "\t}).listen(8080);".green
    , ""
    , ""
    , "\tServing specific files".cyan
    , "\t--------------------------"
    , ""
    , "\tIf you want to serve a specific file, like an error page for example, use the serveFile method:"
    , ""
    , "\tfileServer.serveFile('/error.html', 500, {}, request, response);".green
    , ""
    , "\tThis will serve the error.html file, from under the file root directory, with a 500 status code."
    , "\tFor example, you could serve an error page, when the initial request wasn't found:"
    , ""

    , "\trequire('http').createServer(function (request, response) {".green
    , "\t    request.addListener('end', function () {".green
    , "\t        fileServer.serve(request, response, function (e, res) {".green
    , "\t            if (e && (e.status === 404)) { // If the file wasn't found".green
    , "\t                fileServer.serveFile('/not-found.html', request, response);".green
    , "\t            }".green
    , "\t        });".green
    , "\t    });".green
    , "\t}).listen(8080);".green
    , ""
    , "\tMore on intercepting errors bellow."
    , ""
    , ""
    , "\tIntercepting errors & Listening".cyan
    , "\t--------------------------------"
    , ""
    , "\tAn optional callback can be passed as last argument, it will be called every time a file"
    , "\thas been served successfully, or if there was an error serving the file:"
    , ""
    , "\tvar fileServer = new static.Server('./public');".green
    , ""
    , "\trequire('http').createServer(function (request, response) {".green
    , "\t    request.addListener('end', function () {".green
    , "\t        fileServer.serve(request, response, function (err, result) {".green
    , "\t            if (err) { // There was an error serving the file".green
    , "\t                sys.error(\"Error serving \" + request.url + \" - \" + err.message);".green

    , "\t                // Respond to the client".green
    , "\t                response.writeHead(err.status, err.headers);".green
    , "\t                response.end();".green
    , "\t            }".green
    , "\t        });".green
    , "\t    });".green
    , "\t}).listen(8080);".green
    , ""
    , "\tNote that if you pass a callback, and there is an error serving the file, node-static"
    , "\twill not respond to the client. This gives you the opportunity to re-route the request,"
    , "\tor handle it differently."
    , ""
    , "\tFor example, you may want to interpret a request as a static request, but if the file isn't found,"
    , "\tsend it to an application."
    , ""
    , "\tIf you only want to listen for errors, you can use event listeners:"
    , ""
    , "\tfileServer.serve(request, response).addListener('error', function (err) {".green
    , "\t    sys.error(\"Error serving \" + request.url + \" - \" + err.message);".green
    , "\t});".green
    , ""
    , "\tWith this method, you don't have to explicitly send the response back, in case of an error."
].join('\n');
