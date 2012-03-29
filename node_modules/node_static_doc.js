exports.__doc__ = "NAME\n".yellow
    + "\tnode_static\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/node-static\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tnode-static\n".red
    + "\t=============\n"
    + "\n"
    + "\tnode-static has an in-memory file cache, making it highly efficient.\n"
    + "\tnode-static understands and supports conditional GET and HEAD requests.\n"
    + "\tnode-static was inspired by some of the other static-file serving modules out there,\n"
    + "\tsuch as node-paperboy and antinode.\n"
    + "\n"
    + "\n"
    + "\tsynopsis\n".red
    + "\t=============\n"
    + "\n"
    + "\tvar static = require('node_static');\n".green
    + "\n"
    + "\t//\n".green
    + "\t// Create a node-static server instance to serve the './public' folder\n".green
    + "\t//\n".green
    + "\tvar file = new(static.Server)('./public');\n".green
    + "\n"
    + "\trequire('http').createServer(function (request, response) {\n".green
    + "\t    request.addListener('end', function () {\n".green
    + "\t        //\n".green
    + "\t        // Serve files!\n".green
    + "\t        //\n".green
    + "\t        file.serve(request, response);\n".green
    + "\t    });\n".green
    + "\t}).listen(8080);\n".green
    + "\n"
    + "\n"
    + "\tAPI\n".red
    + "\t======\n"
    + "\n"
    + "\tCreating a node-static Server\n".cyan
    + "\t-------------------------------\n"
    + "\n"
    + "\tCreating a file server instance is as simple as:\n"
    + "\n"
    + "\tnew static.Server();\n".green
    + "\n"
    + "\tThis will serve files in the current directory. If you want to serve files in a specific\n"
    + "\tdirectory, pass it as the first argument:\n"
    + "\n"

    + "\tnew static.Server('./public');\n".green
    + "\n"
    + "\tYou can also specify how long the client is supposed to cache the files node-static serves:\n"
    + "\n"

    + "\tnew static.Server('./public', { cache: 3600 });\n".green
    + "\n"
    + "\tThis will set the Cache-Control header, telling clients to cache the file for an hour.\n"
    + "\tThis is the default setting.\n"
    + "\n"

    + "\tServing files under a directory\n".cyan
    + "\t-------------------------------\n"
    + "\n"
    + "\tTo serve files under a directory, simply call the serve method on a Server instance, passing it\n"
    + "\tthe HTTP request and response object:\n"
    + "\n"

    + "\tvar fileServer = new static.Server('./public');\n".green
    + "\n"

    + "\trequire('http').createServer(function (request, response) {\n".green
    + "\t    request.addListener('end', function () {\n".green
    + "\t        fileServer.serve(request, response);\n".green
    + "\t    });\n".green
    + "\t}).listen(8080);\n".green
    + "\n"
    + "\n"
    + "\tServing specific files\n".cyan
    + "\t--------------------------\n"
    + "\n"
    + "\tIf you want to serve a specific file, like an error page for example, use the serveFile method:\n"
    + "\n"
    + "\tfileServer.serveFile('/error.html', 500, {}, request, response);\n".green
    + "\n"
    + "\tThis will serve the error.html file, from under the file root directory, with a 500 status code.\n"
    + "\tFor example, you could serve an error page, when the initial request wasn't found:\n"
    + "\n"

    + "\trequire('http').createServer(function (request, response) {\n".green
    + "\t    request.addListener('end', function () {\n".green
    + "\t        fileServer.serve(request, response, function (e, res) {\n".green
    + "\t            if (e && (e.status === 404)) { // If the file wasn't found\n".green
    + "\t                fileServer.serveFile('/not-found.html', request, response);\n".green
    + "\t            }\n".green
    + "\t        });\n".green
    + "\t    });\n".green
    + "\t}).listen(8080);\n".green
    + "\n"
    + "\tMore on intercepting errors bellow.\n"
    + "\n"
    + "\n"
    + "\tIntercepting errors & Listening\n".cyan
    + "\t--------------------------------\n"
    + "\n"
    + "\tAn optional callback can be passed as last argument, it will be called every time a file\n"
    + "\thas been served successfully, or if there was an error serving the file:\n"
    + "\n"
    + "\tvar fileServer = new static.Server('./public');\n".green
    + "\n"
    + "\trequire('http').createServer(function (request, response) {\n".green
    + "\t    request.addListener('end', function () {\n".green
    + "\t        fileServer.serve(request, response, function (err, result) {\n".green
    + "\t            if (err) { // There was an error serving the file\n".green
    + "\t                sys.error(\"Error serving \" + request.url + \" - \" + err.message);\n".green

    + "\t                // Respond to the client\n".green
    + "\t                response.writeHead(err.status, err.headers);\n".green
    + "\t                response.end();\n".green
    + "\t            }\n".green
    + "\t        });\n".green
    + "\t    });\n".green
    + "\t}).listen(8080);\n".green
    + "\n"
    + "\tNote that if you pass a callback, and there is an error serving the file, node-static\n"
    + "\twill not respond to the client. This gives you the opportunity to re-route the request,\n"
    + "\tor handle it differently.\n"
    + "\n"
    + "\tFor example, you may want to interpret a request as a static request, but if the file isn't found,\n"
    + "\tsend it to an application.\n"
    + "\n"
    + "\tIf you only want to listen for errors, you can use event listeners:\n"
    + "\n"
    + "\tfileServer.serve(request, response).addListener('error', function (err) {\n".green
    + "\t    sys.error(\"Error serving \" + request.url + \" - \" + err.message);\n".green
    + "\t});\n".green
    + "\n"
    + "\tWith this method, you don't have to explicitly send the response back, in case of an error.\n"
    ;
