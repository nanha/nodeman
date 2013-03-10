# Introduction

  Fast, unopinionated, minimalist web framework for node

```js
    var express = require('express');
    var app = express();

    app.get('/', function(req, res){
      res.send('Hello World');
    });

    app.listen(3000);
```

# Installation

    $ npm install -g express

# Quick Start

The quickest way to get started with express is to utilize the executable `express(1)` to generate an application as shown below:

Create the app:

    $ npm install -g express
    $ express /tmp/foo && cd /tmp/foo

Install dependencies:

    $ npm install

Start the server:

    $ node app

# Features

* Built on [Connect](http://github.com/senchalabs/connect)
* Robust routing
* HTTP helpers (redirection, caching, etc)
* View system supporting 14+ template engines
* Content negotiation
* Focus on high performance
* Environment based configuration
* Executable for generating applications quickly
* High test coverage


# Application

## app.set(name, value)

Assigns setting `name` to `value`.

    app.set('title', 'My Site');
    app.get('title');
    // => "My Site"

## app.get(name)

Get setting `name` value.

    app.get('title');
    // => undefined

    app.set('title', 'My Site');
    app.get('title');
    // => "My Site"

## app.enable(name)

Set setting `name` to `true`.

    app.enable('trust proxy');
    app.get('trust proxy');
    // => true

## app.disable(name)

    Set setting `name` to `false`.

    app.disable('trust proxy');
    app.get('trust proxy');
    // => false

## app.enabled(name)

    Check if setting `name` is enabled.

    app.enabled('trust proxy');
    // => false

    app.enable('trust proxy');
    app.enabled('trust proxy');
    // => true

## app.disabled(name)

    Check if setting `name` is disabled.

    app.disabled('trust proxy');
    // => true

    app.enable('trust proxy');
    app.disabled('trust proxy');
    // => false

## app.configure([env], callback)

Conditionally invoke `callback` when `env` matches `app.get('env')`,
aka `process.env.NODE_ENV`. This method remains for legacy reason, and is effectively
an `if` statement as illustrated in the following snippets. These functions are _not_
required in order to use `app.set()` and other configuration methods.

    // all environments
    app.configure(function(){
      app.set('title', 'My Application');
    })

    // development only
    app.configure('development', function(){
      app.set('db uri', 'localhost/dev');
    })

    // production only
    app.configure('production', function(){
      app.set('db uri', 'n.n.n.n/prod');
    })

effectively sugar for:

    // all environments
    app.set('title', 'My Application');

    // development only
    if ('development' == app.get('env')) {
      app.set('db uri', 'localhost/dev');
    }

    // production only
    if ('production' == app.get('env')) {
      app.set('db uri', 'n.n.n.n/prod');
    }

## app.use([path], function)

Use the given middleware `function`, with optional mount `path`, defaulting to "/".

    var express = require('express');
    var app = express();

    // simple logger
    app.use(function(req, res, next){
      console.log('%s %s', req.method, req.url);
      next();
    });

    // respond
    app.use(function(req, res, next){
      res.send('Hello World');
    });

    app.listen(3000);

The "mount" path is stripped and is **not** visible
to the middleware `function`. The main effect of this feature is that
mounted middleware may operate without code changes regardless of its "prefix"
pathname.

Here's a concrete example, take the typical use-case of serving files in ./public
using the `express.static()` middleware:

    // GET /javascripts/jquery.js
    // GET /style.css
    // GET /favicon.ico
    app.use(express.static(__dirname + '/public'));

Say for example you wanted to prefix all static files with "/static", you could
use the "mounting" feature to support this. Mounted middleware functions are **not**
invoked unless the `req.url` contains this prefix, at which point
it is stripped when the function is invoked. This affects this function only,
subsequent middleware will see `req.url` with "/static" included
unless they are mounted as well.

    // GET /static/javascripts/jquery.js
    // GET /static/style.css
    // GET /static/favicon.ico
    app.use('/static', express.static(__dirname + '/public'));

The order of which middleware are "defined" using `app.use()` is
very important, they are invoked sequentially, thus this defines middleware
precedence. For example usually `express.logger()` is the very
first middleware you would use, logging every request:

    app.use(express.logger());
    app.use(express.static(__dirname + '/public'));
    app.use(function(req, res){
      res.send('Hello');
    });

Now suppose you wanted ignore logging requests for static files, but to
continue logging routes and middleware defined after `logger()`,
you would simply move `static()` above:

    app.use(express.static(__dirname + '/public'));
    app.use(express.logger());
    app.use(function(req, res){
      res.send('Hello');
    });

Another concrete example would be serving files from multiple directories,
giving precedence to "./public" over the others:

    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/files'));
    app.use(express.static(__dirname + '/uploads'));

## settings

The following settings are provided to alter how Express will behave:

*   `env`: Environment mode, defaults to `process.env.NODE_ENV` or "development"
*   `trust proxy`: Enables reverse proxy support, disabled by default
*   `jsonp callback name`: Changes the default callback name of `?callback=`
*   `json replacer`: JSON replacer callback, null by default
*   `json spaces`: JSON response spaces for formatting, defaults to `2` in development, `0` in production
*   `case sensitive routing`: Enable case sensitivity, disabled by default, treating "/Foo" and "/foo" as the same
*   `strict routing`: Enable strict routing, by default "/foo" and "/foo/" are treated the same by the router*   `view cache `Enables view template compilation caching, enabled in production by default
*   `view engine`: The default engine extension to use when omitted
*   `views`: The view directory path</section><section>

## app.engine(ext, callback)

Register the given template engine `callback` as `ext`

By default will `require()` the engine based on the
file extension. For example if you try to render
a "foo.jade" file Express will invoke the following internally,
and cache the `require()` on subsequent calls to increase
performance.

    app.engine('jade', require('jade').__express);

For engines that do not provide `.__express` out of the box -
or if you wish to "map" a different extension to the template engine
you may use this method. For example mapping the EJS template engine to
".html" files:

    app.engine('html', require('ejs').renderFile);

In this case EJS provides a `.renderFile()` method with
the same signature that Express expects: `(path, options, callback)`,
though note that it aliases this method as `ejs.__express` internally
so if you're using ".ejs" extensions you dont need to do anything.

Some template engines do not follow this convention, the
[consolidate.js](https://github.com/visionmedia/consolidate.js)
library was created to map all of node's popular template
engines to follow this convention, thus allowing them to
work seemlessly within Express.

    var engines = require('consolidate');
    app.engine('haml', engines.haml);
    app.engine('html', engines.hogan);

## app.param([name], callback)

Map logic to route parameters. For example when `:user`
is present in a route path you may map user loading logic to automatically
provide `req.user` to the route, or perform validations
on the parameter input.

The following snippet illustrates how the `callback`
is much like middleware, thus supporting async operations, however
providing the additional value of the parameter, here named as `id`.
An attempt to load the user is then performed, assigning `req.user`,
otherwise passing an error to `next(err)`.

    app.param('user', function(req, res, next, id){
      User.find(id, function(err, user){
        if (err) {
          next(err);
        } else if (user) {
          req.user = user;
          next();
        } else {
          next(new Error('failed to load user'));
        }
      });
    });

Alternatively you may pass only a `callback`, in which
case you have the opportunity to alter the `app.param()` API.
For example the [express-params](http://github.com/visionmedia/express-params)
defines the following callback which allows you to restrict parameters to a given
regular expression. 

This example is a bit more advanced, checking if the second argument is a regular
expression, returning the callback which acts much like the "user" param example.

    app.param(function(name, fn){
      if (fn instanceof RegExp) {
        return function(req, res, next, val){
          var captures;
          if (captures = fn.exec(String(val))) {
            req.params[name] = captures;
            next();
          } else {
            next('route');
          }
        }
      }
    });

The method could now be used to effectively validate parameters, or also
parse them to provide capture groups:

    app.param('id', /^\d+$/);

    app.get('/user/:id', function(req, res){
      res.send('user ' + req.params.id);
    });

    app.param('range', /^(\w+)\.\.(\w+)?$/);

    app.get('/range/:range', function(req, res){
      var range = req.params.range;
      res.send('from ' + range[1] + ' to ' + range[2]);
    });


## app.VERB(path, [callback...], callback)

The `app.VERB()` methods provide the routing functionality
in Express, where **VERB** is one of the HTTP verbs, such
as `app.post()`. Multiple callbacks may be given, all are treated
equally, and behave just like middleware, with the one exception that
these callbacks may invoke `next('route')` to bypass the
remaining route callback(s). This mechanism can be used to perform pre-conditions
on a route then pass control to subsequent routes when there is no reason to proceed
with the route matched.

The following snippet illustrates the most simple route definition possible. Express
translates the path strings to regular expressions, used internally to match incoming requests.
Query strings are _not_ considered when peforming these matches, for example "GET /"
would match the following route, as would "GET /?name=tobi".

    app.get('/', function(req, res){
      res.send('hello world');
    });

Regular expressions may also be used, and can be useful
if you have very specific restraints, for example the following
would match "GET /commits/71dbb9c" as well as "GET /commits/71dbb9c..4c084f9".

    app.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res){
      var from = req.params[0];
      var to = req.params[1] || 'HEAD';
      res.send('commit range ' + from + '..' + to);
    });

Several callbacks may also be passed, useful for re-using middleware
that load resources, perform validations, etc.

    app.get('/user/:id', user.load, function(){
      // ... 
    })

These callbacks may be passed within arrays as well, these arrays are
simply flattened when passed:

    var middleware = [loadForum, loadThread];

    app.get('/forum/:fid/thread/:tid', middleware, function(){
      // ...
    })

    app.post('/forum/:fid/thread/:tid', middleware, function(){
      // ...
    })

## app.all(path, [callback...], callback)

This method functions just like the `app.VERB()` methods,
however it matches all HTTP verbs. 

This method is extremely useful for
mapping "global" logic for specific path prefixes or arbitrary matches.
For example if you placed the following route at the top of all other
route definitions, it would require that all routes from that point on
would require authentication, and automatically load a user. Keep in mind
that these callbacks do not have to act as end points, `loadUser`
can perform a task, then `next()` to continue matching subsequent
routes.

    app.all('*', requireAuthentication, loadUser);

Or the equivalent:

    app.all('*', requireAuthentication)
    app.all('*', loadUser);

Another great example of this is white-listed "global" functionality. Here
the example is much like before, however only restricting paths prefixed with
"/api":

    app.all('/api/*', requireAuthentication);

## app.locals

Application local variables are provided to all templates
rendered within the application. This is useful for providing
helper functions to templates, as well as app-level data.

    app.locals.title = 'My App';
    app.locals.strftime = require('strftime');
    

The `app.locals` object is a JavaScript `Function`,
which when invoked with an object will merge properties into itself, providing
a simple way to expose existing objects as local variables.

    app.locals({
      title: 'My App',
      phone: '1-250-858-9990',
      email: 'me@myapp.com'
    });

    app.locals.title
    // => 'My App'

    app.locals.email
    // => 'me@myapp.com'

By default Express exposes only a single app-level local variable, `settings`.

    app.set('title', 'My App');
    // use settings.title in a view

## app.render(view, [options], callback)

Render a `view` with a callback responding with
the rendered string. This is the app-level variant of `res.render()`,
and otherwise behaves the same way.

    app.render('email', function(err, html){
      // ...
    });

    app.render('email', { name: 'Tobi' }, function(err, html){
      // ...
    });

## app.routes

The `app.routes` object houses all of the routes defined mapped
by the associated HTTP verb. This object may be used for introspection capabilities,
for example Express uses this internally not only for routing but to provide default
<string>OPTIONS</string> behaviour unless `app.options()` is used. Your application
or framework may also remove routes by simply by removing them from this object.

    console.log(app.routes)

    { get: 
       [ { path: '/',
           method: 'get',
           callbacks: [Object],
           keys: [],
           regexp: /^\/\/?$/i },
       { path: '/user/:id',
           method: 'get',
           callbacks: [Object],
           keys: [{ name: 'id', optional: false }],
           regexp: /^\/user\/(?:([^\/]+?))\/?$/i } ],
    delete: 
       [ { path: '/user/:id',
           method: 'delete',
           callbacks: [Object],
           keys: [Object],
           regexp: /^\/user\/(?:([^\/]+?))\/?$/i } ] }

## app.listen()

Bind and listen for connections on the given host and port,
this method is identical to node's [http.Server#listen()](http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback).

    var express = require('express');
    var app = express();
    app.listen(3000);

The `app` returned by `express()` is in fact a JavaScript
`Function`, designed to be passed to node's http servers as a callback
to handle requests. This allows you to provide both HTTP and HTTPS versions of
your app with the same codebase easily, as the app does not inherit from these,
it is simply a callback:

    var express = require('express');
    var https = require('https');
    var http = require('http');
    var app = express();

    http.createServer(app).listen(80);
    https.createServer(options, app).listen(443);

The `app.listen()` method is simply a convenience method defined as,
if you wish to use HTTPS or provide both, use the technique above.

    app.listen = function(){
      var server = http.createServer(this);
      return server.listen.apply(server, arguments);
    };


# Request

## req.params

This property is an array containing properties mapped to the named route "parameters".
For example if you have the route `/user/:name`, then the "name" property
is available to you as `req.params.name`. This object defaults to `{}`.

    // GET /user/tj
    req.params.name
    // => "tj"

When a regular expression is used for the route definition, capture groups
are provided in the array using `req.params[N]`, where `N`
is the nth capture group. This rule is applied to unnamed wild-card matches
with string routes such as `/file/*`:

    // GET /file/javascripts/jquery.js
    req.params[0]
    // => "javascripts/jquery.js"

## req.query

This property is an object containing the parsed query-string,
defaulting to `{}`.

    // GET /search?q=tobi+ferret
    req.query.q
    // => "tobi ferret"

    // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
    req.query.order
    // => "desc"

    req.query.shoe.color
    // => "blue"

    req.query.shoe.type
    // => "converse"

## req.body

This property is an object containing the parsed request body. This feature
is provided by the `bodyParser()` middleware, though other body
parsing middleware may follow this convention as well. This property
defaults to `{}` when `bodyParser()` is used.

    // POST user[name]=tobi&user[email]=tobi@learnboost.com
    req.body.user.name
    // => "tobi"

    req.body.user.email
    // => "tobi@learnboost.com"

    // POST { "name": "tobi" }
    req.body.name
    // => "tobi"

## req.files

This property is an object of the files uploaded. This feature
is provided by the `bodyParser()` middleware, though other body
parsing middleware may follow this convention as well. This property
defaults to `{}` when `bodyParser()` is used.

For example if a **file** field was named "image",
and a file was uploaded, `req.files.image` would contain
the following `File` object:

    { size: 74643,
      path: '/tmp/8ef9c52abe857867fd0a4e9a819d1876',
      name: 'edge.png',
      type: 'image/png',
      hash: false,
      lastModifiedDate: Thu Aug 09 2012 20:07:51 GMT-0700 (PDT),
      _writeStream: 
       { path: '/tmp/8ef9c52abe857867fd0a4e9a819d1876',
         fd: 13,
         writable: false,
         flags: 'w',
         encoding: 'binary',
         mode: 438,
         bytesWritten: 74643,
         busy: false,
         _queue: [],
         _open: [Function],
         drainable: true },
      length: [Getter],
      filename: [Getter],
      mime: [Getter] }
      

The `bodyParser()` middleware utilizes the
[node-formidable](https://github.com/felixge/node-formidable)
module internally, and accepts the same options. An example of this
is the `keepExtensions` formidable option, defaulting to **false**
which in this case gives you the filename "/tmp/8ef9c52abe857867fd0a4e9a819d1876" void of
the ".png" extension. To enable this, and others you may pass them to `bodyParser()`:

    app.use(express.bodyParser({ keepExtensions: true, uploadDir: '/my/files' }));

## req.param(name)

Return the value of param `name` when present.

    // ?name=tobi
    req.param('name')
    // => "tobi"

    // POST name=tobi
    req.param('name')
    // => "tobi"

    // /user/tobi for /user/:name 
    req.param('name')
    // => "tobi"
    

Lookup is performed in the following order:

*   `req.params`
*   `req.body`
*   `req.query`

Direct access to `req.body`, `req.params`,
and `req.query` should be favoured for clarity - unless
you truly accept input from each object.

## req.route

The currently matched `Route` containing
several properties such as the route's original path
string, the regexp generated, and so on.

    app.get('/user/:id?', function(req, res){
      console.log(req.route);
    });

    Example output from the previous snippet:

    { path: '/user/:id?',
      method: 'get',
      callbacks: [ [Function] ],
      keys: [ { name: 'id', optional: true } ],
      regexp: /^\/user(?:\/([^\/]+?))?\/?$/i,
      params: [ id: '12' ] }

## req.cookies

When the `cookieParser()` middleware is used this object
defaults to `{}`, otherwise contains the cookies sent by
the user-agent.

    // Cookie: name=tj
    req.cookies.name
    // => "tj"

## req.signedCookies

When the `cookieParser(secret)` middleware is used this object
defaults to `{}`, otherwise contains the signed cookies sent by
the user-agent, unsigned and ready for use. Signed cookies reside in a different
object to show developer intent, otherwise a malicious attack could be
placed on `req.cookie` values which are easy to spoof. Note that signing
a cookie does not mean it is "hidden" nor encrypted, this simply prevents
tampering as the secret used to sign is private.

    // Cookie: user=tobi.CP7AWaXDfAKIRfH49dQzKJx7sKzzSoPq7/AcBBRVwlI3
    req.signedCookies.user
    // => "tobi"

## req.get(field)

Get the case-insensitive request header `field`. 
The _Referrer_ and _Referer_ fields are interchangeable.

    req.get('Content-Type');
    // => "text/plain"

    req.get('content-type');
    // => "text/plain"

    req.get('Something');
    // => undefined

Aliased as `req.header(field)`.

## req.accepts(types)

Check if the given `types` are acceptable, returning
the best match when true, otherwise `undefined` - in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimted list or an array. When a list
or array is given the _best_ match, if any is returned.

    // Accept: text/html
    req.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    req.accepts('html');
    // => "html"
    req.accepts('text/html');
    // => "text/html"
    req.accepts('json, text');
    // => "json"
    req.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png');
    req.accepts('png');
    // => undefined

    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json']);
    req.accepts('html, json');
    // => "json"

## req.accepted

Return an array of Accepted media types ordered from highest quality to lowest.

    [ { value: 'application/json',
        quality: 1,
        type: 'application',
        subtype: 'json' },
    { value: 'text/html',
         quality: 0.5,
         type: 'text',
         subtype: 'html' } ]

## req.is(type)

Check if the incoming request contains the "Content-Type" 
header field, and it matches the give mime `type`.

    // With Content-Type: text/html; charset=utf-8
    req.is('html');
    req.is('text/html');
    req.is('text/*');
    // => true

    // When Content-Type is application/json
    req.is('json');
    req.is('application/json');
    req.is('application/*');
    // => true

    req.is('html');
    // => false

## req.ip

Return the remote address, or when "trust proxy"
is enabled - the upstream address.

    req.ip
    // => "127.0.0.1"

## req.ips

When "trust proxy" is `true`, parse
the "X-Forwarded-For" ip address list
and return an array, otherwise an empty
array is returned.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

## req.path

Returns the request URL pathname.

    // example.com/users?sort=desc
    req.path
    // => "/users"

## req.host

Returns the hostname from the "Host" header field (void of portno).

    // Host: "example.com:3000"
    req.host
    // => "example.com"

## req.fresh

Check if the request is fresh - aka Last-Modified and/or the ETag still match,
indicating that the resource is "fresh".

    req.fresh
    // => true

## req.stale

Check if the request is stale - aka Last-Modified and/or the ETag do not match,
indicating that the resource is "stale".

    req.stale
    // => true

## req.xhr

Check if the request was issued with the "X-Requested-With"
header field set to "XMLHttpRequest" (jQuery etc).

    req.xhr
    // => true

## req.protocol

Return the protocol string "http" or "https"
when requested with TLS. When the "trust proxy" 
is enabled the "X-Forwarded-Proto" header
field will be trusted. If you're running behind
a reverse proxy that supplies https for you this
may be enabled.

    req.protocol
    // => "http"

## req.secure

Check if a TLS connection is established. This is a short-hand for:

    'https' == req.protocol;

## req.subdomains

Return subdomains as an array.

    // Host: "tobi.ferrets.example.com"
    req.subdomains
    // => ["ferrets", "tobi"]

## req.originalUrl

This property is much like `req.url`, however it retains
the original request url, allowing you to rewrite `req.url`
freely for internal routing purposes. For example the "mounting" feature
of [app.use()](#app.use) will rewrite `req.url` to
strip the mount point.

    // GET /search?q=something
    req.originalUrl
    // => "/search?q=something"

## req.acceptedLanguages

Return an array of Accepted languages ordered from highest quality to lowest.

    Accept-Language: en;q=.5, en-us
    // => ['en-us', 'en']

## req.acceptedCharsets

Return an array of Accepted charsets ordered from highest quality to lowest.

    Accept-Charset: iso-8859-5;q=.2, unicode-1-1;q=0.8
    // => ['unicode-1-1', 'iso-8859-5']

## req.acceptsCharset(charset)

Check if the given `charset` are acceptable.

## req.acceptsLanguage(lang)

Check if the given `lang` are acceptable.



# Response

## res.status(code)

Chainable alias of node's '`res.statusCode=`.

    res.status(404).sendfile('path/to/404.png');

## res.set(field, [value])

Set header `field` to `value`,
or pass an object to set multiple fields at once.

    res.set('Content-Type', 'text/plain');

    res.set({
      'Content-Type': 'text/plain',
      'Content-Length': '123',
      'ETag': '12345'
    })

Aliased as `res.header(field, [value])`.

## res.get(field)

Get the case-insensitive response header `field`. 

    res.get('Content-Type');
    // => "text/plain"

## res.cookie(name, value, [options])

Set cookie `name` to `value`, where
which may be a string or object converted to JSON. The `path`
option defaults to "/".

    res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

The `maxAge` option is a convenience option for setting "expires"
relative to the current time in milliseconds. The following is equivalent to
the previous example.

    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

An object may be passed which is then serialized as JSON, which is
automatically parsed by the `bodyParser()` middleware.

    res.cookie('cart', { items: [1,2,3] });
    res.cookie('cart', { items: [1,2,3] }, { maxAge: 900000 });

Signed cookies are also supported through this method. Simply
pass the `signed` option. When given `res.cookie()`
will use the secret passed to `express.cookieParser(secret)`
to sign the value.

    res.cookie('name', 'tobi', { signed: true });

Later you may access this value through the [req.signedCookie](#req.signedCookies)
object.

## res.clearCookie(name, [options])

Clear cookie `name`. The `path`
option defaults to "/".

    res.cookie('name', 'tobi', { path: '/admin' });
    res.clearCookie('name', { path: '/admin' });

## res.redirect([status], url)

Redirect to the given `url` with optional `status` code
defaulting to 302 "Found".

    res.redirect('/foo/bar');
    res.redirect('http://example.com');
    res.redirect(301, 'http://example.com');
    res.redirect('../login');

Express supports a few forms of redirection, first being
a fully qualified URI for redirecting to a different site:

    res.redirect('http://google.com');
    

The second form is the pathname-relative redirect, for example
if you were on `http://example.com/admin/post/new`, the 
following redirect to `/admin` would land you at `http://example.com/admin`:

    res.redirect('/admin');
    

This next redirect is relative to the `mount` point of the application. For example
if you have a blog application mounted at `/blog`, ideally it has no knowledge of
where it was mounted, so where a redirect of `/admin/post/new` would simply give you
`http://example.com/admin/post/new`, the following mount-relative redirect would give
you `http://example.com/blog/admin/post/new`:

    res.redirect('admin/post/new');
    

Pathname relative redirects are also possible. If you were
on `http://example.com/admin/post/new`, the following redirect
would land you at `http//example.com/admin/post`:

    res.redirect('..');
    
The final special-case is a `back` redirect, redirecting back to
the Referer (or Referrer), defaulting to `/` when missing.

    res.redirect('back');

    

## res.location

Set the location header.

    res.location('/foo/bar');
    res.location('foo/bar');
    res.location('http://example.com');
    res.location('../login');
    res.location('back')
    
You can use the same kind of `urls` as in

    `res.redirect()`.

For example, if your application is mounted at `/blog`,
the follwing would set the `location` header to
`/blog/admin`:

    res.location('admin')

## res.charset

Assign the charset. Defaults to "utf-8".

    res.charset = 'value';
    res.send('some html');
    // => Content-Type: text/html; charset=value

## res.send([body|status], [body])

Send a response.

    res.send(new Buffer('whoop'));
    res.send({ some: 'json' });
    res.send('some html');
    res.send(404, 'Sorry, we cannot find that!');
    res.send(500, { error: 'something blew up' });
    res.send(200);
    

This method performs a myriad of
useful tasks for simple non-streaming responses such
as automatically assigning the Content-Length unless
previously defined and providing automatic _HEAD_ and
HTTP cache freshness support.

When a `Buffer` is given
the Content-Type is set to "application/octet-stream"
unless previously defined as shown below:

    res.set('Content-Type', 'text/html');
    res.send(new Buffer('some html'));
    
When a `String` is given the
Content-Type is set defaulted to "text/html":

    res.send('some html');
    
When an `Array` or `Object` is
given Express will respond with the JSON representation:

    res.send({ user: 'tobi' })
    res.send([1,2,3])
    

Finally when a `Number` is given without
any of the previously mentioned bodies, then a response
body string is assigned for you. For example 200 will
respond will the text "OK", and 404 "Not Found" and so on.

    res.send(200)
    res.send(404)
    res.send(500)

## res.json([status|body], [body])

Send a JSON response. This method is identical
to `res.send()` when an object or
array is passed, however it may be used for
explicit JSON conversion of non-objects (null, undefined, etc),
though these are technically not valid JSON.

    res.json(null)
    res.json({ user: 'tobi' })
    res.json(500, { error: 'message' })

## res.jsonp([status|body], [body])

Send a JSON response with JSONP support. This method is identical
to `res.json()` however opts-in to JSONP callback
support.

    res.jsonp(null)
    // => null

    res.jsonp({ user: 'tobi' })
    // => { "user": "tobi" }

    res.jsonp(500, { error: 'message' })
    // => { "error": "message" }
    

By default the JSONP callback name is simply `callback`,
however you may alter this with the [jsonp callback name](#app-settings)
setting. The following are some examples of JSONP responses using the same
code:

    // ?callback=foo
    res.jsonp({ user: 'tobi' })
    // => foo({ "user": "tobi" })

    app.set('jsonp callback name', 'cb');

    // ?cb=foo
    res.jsonp(500, { error: 'message' })
    // => foo({ "error": "message" })

## res.type(type)

Sets the Content-Type to the mime lookup of `type`,
or when "/" is present the Content-Type is simply set to this
literal value.

    res.type('.html');
    res.type('html');
    res.type('json');
    res.type('application/json');
    res.type('png');

## res.format(object)

Performs content-negotiation on the request Accept header
field when present. This method uses `req.accepted`, an array of
acceptable types ordered by their quality values, otherwise the
first callback is invoked. When no match is performed the server
responds with 406 "Not Acceptable", or invokes the `default`
callback.

The Content-Type is set for you when a callback is selected,
however you may alter this within the callback using `res.set()`
or `res.type()` etcetera.

The following example would respond with `{ "message": "hey" }`
when the Accept header field is set to "application/json" or "*/json",
however if "*/*" is given then "hey" will be the response.

    res.format({
      'text/plain': function(){
        res.send('hey');
      },
      'text/html': function(){
        res.send('hey');
      },
      'application/json': function(){
        res.send({ message: 'hey' });
      }
    });
    
In addition to canonicalized MIME types you may also
use extnames mapped to these types, providing a slightly
less verbose implementation:

    res.format({
      text: function(){
        res.send('hey');
      },
      html: function(){
        res.send('hey');
      },
      json: function(){
        res.send({ message: 'hey' });
      }
    });

## res.attachment([filename])

Sets the Content-Disposition header field to "attachment". If
a `filename` is given then the Content-Type will be
automatically set based on the extname via `res.type()`,
and the Content-Disposition's "filename=" parameter will be set.

    res.attachment();
    // Content-Disposition: attachment

    res.attachment('path/to/logo.png');
    // Content-Disposition: attachment; filename="logo.png"
    // Content-Type: image/png

## res.sendfile(path, [options], [fn]])

Transfer the file at the given `path`.

Automatically defaults the Content-Type response header field based
on the filename's extension. The callback `fn(err)` is 
invoked when the transfer is complete or when an error occurs. 

Options:

*   `maxAge` in milliseconds defaulting to 0
*   `root` root directory for relative filenames

This method provides fine-grained support for file serving
as illustrated in the following example:

    app.get('/user/:uid/photos/:file', function(req, res){
      var uid = req.params.uid
        , file = req.params.file;

      req.user.mayViewFilesFrom(uid, function(yes){
        if (yes) {
          res.sendfile('/uploads/' + uid + '/' + file);
        } else {
          res.send(403, 'Sorry! you cant see that.');
        }
      });
    });

## res.download(path, [filename], [fn])

Transfer the file at `path` as an "attachment",
typically browsers will prompt the user for download. The
Content-Disposition "filename=" parameter, aka the one
that will appear in the brower dialog is set to `path`
by default, however you may provide an override `filename`.

When an error has ocurred or transfer is complete the optional 
callback `fn` is invoked. This method uses [res.sendfile()](#res.sendfile)
to transfer the file.

    res.download('/report-12345.pdf');

    res.download('/report-12345.pdf', 'report.pdf');

    res.download('/report-12345.pdf', 'report.pdf', function(err){
      if (err) {
        // handle error, keep in mind the response may be partially-sent
        // so check res.headerSent
      } else {
        // decrement a download credit etc
      }
    });

## res.links(links)

Join the given `links` to populate the "Link"
response header field.

    res.links({
      next: 'http://api.example.com/users?page=2',
      last: 'http://api.example.com/users?page=5'
    });
    
yields:

    Link: &lt;http://api.example.com/users?page=2&gt;; rel="next", 
          &lt;http://api.example.com/users?page=5&gt;; rel="last"

## res.locals

Response local variables are scoped to the request, thus only
available to the view(s) rendered during that request / response
cycle, if any. Otherwise this API is identical to [app.locals](#app.locals).

This object is useful for exposes request-level information such as the
request pathname, authenticated user, user settings etcetera.

    app.use(function(req, res, next){
      res.locals.user = req.user;
      res.locals.authenticated = ! req.user.anonymous;
      next();
    });

## res.render(view, [locals], callback)

Render a `view` with a callback responding with
the rendered string. When an error occurs `next(err)`
is invoked internally. When a callback is provided both the possible error
and rendered string are passed, and no automated response is performed.

    res.render('index', function(err, html){
      // ...
    });

    res.render('user', { name: 'Tobi' }, function(err, html){
      // ...
    });




# Middleware


## basicAuth()

Basic Authentication middleware, populating `req.user`
with the username.

Simple username and password:

    app.use(express.basicAuth('username', 'password'));
    
Callback verification:

    app.use(express.basicAuth(function(user, pass){
      return 'tj' == user & 'wahoo' == pass;
    }));
    
Async callback verification, accepting `fn(err, user)`,
in this case `req.user` will be the user object passed.

    app.use(connect.basicAuth(function(user, pass, fn){
      User.authenticate({ user: user, pass: pass }, fn);
    }))


## bodyParser()

Request body parsing middleware supporting JSON, urlencoded,
and multipart requests. This middleware is simply a wrapper
the `json()`, `urlencoded()`, and
`multipart()` middleware.

    app.use(express.bodyParser());

    // is equivalent to:
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.multipart());

## compress()

Compress response data with gzip / deflate. This middleware
should be placed "high" within the stack to ensure all
responses may be compressed.

    app.use(express.logger());
    app.use(express.compress());
    app.use(express.methodOverride());
    app.use(express.bodyParser());

## cookieParser()

Parses the Cookie header field and populates `req.cookies`
with an object keyed by the cookie names. Optionally you may enabled 
signed cookie support by passing a `secret` string.

    app.use(express.cookieParser());
    app.use(express.cookieParser('some secret'));

## cookieSession()

Provides cookie-based sessions, and populates `req.session`.
This middleware takes the following options:

*   `key` cookie name defaulting to `connect.sess`
*   `secret` prevents cookie tampering
*   `cookie` session cookie settings, defaulting to `{ path: '/', httpOnly: true, maxAge: null }`
*   `proxy` trust the reverse proxy when setting secure cookies (via "x-forwarded-proto")

    app.use(express.cookieSession());

To clear a cookie simply assign the session to null before responding:
req.session = null

## csrf()

CSRF protection middleware.

By default this middleware generates a token named "_csrf"
which should be added to requests which mutate
state, within a hidden form field, query-string etc. This
token is validated against the visitor's `req.session._csrf`
property.

The default `value` function checks `req.body` generated
by the `bodyParser()` middleware, `req.query` generated
by `query()`, and the "X-CSRF-Token" header field.

This middleware requires session support, thus should be added
somewhere below `session()`.

## directory()

Directory serving middleware, serves the given `path`.
This middleware may be paired with `static()` to serve
files, providing a full-featured file browser.

    app.use(express.directory('public'))
    app.use(express.static('public'))

This middleware accepts the following options:

*   `hidden` display hidden (dot) files. Defaults to false.
*   `icons`  display icons. Defaults to false.
*   `filter` Apply this filter function to files. Defaults to false.



# Getting started

With node installed ([download](http://nodejs.org/download)),
get your first application started by creating a directory somewhere
on your machine:

    $ mkdir hello-world
    

In this same directory you'll be defining the application "package", which
are no different than any other node package. You'll need a package.json
file in the directory, with express defined as a dependency. You may use
`npm info express version` to fetch the latest version, it's
preferred that you do this instead of "3.x" below to prevent any future
surprises.

    {
      "name": "hello-world",
      "description": "hello world test app",
      "version": "0.0.1",
      "private": true,
      "dependencies": {
        "express": "3.x"
      }
    }
    

Now that you have a package.json file in this directory you can use
`npm(1)` to install the dependencies, in this case just
Express:

    $ npm install
    

Once npm finishes you'll have a localized Express 3.x dependency in
the ./node_modules directory. You may verify this with `npm ls`
as shown in the following snippet displaying a tree of Express and its
own dependencies.

    $ npm ls
    hello-world@0.0.1 /private/tmp
    └─┬ express@3.0.0beta7
      ├── commander@0.6.1
      ├─┬ connect@2.3.9
      │ ├── bytes@0.1.0
      │ ├── cookie@0.0.4
      │ ├── crc@0.2.0
      │ ├── formidable@1.0.11
      │ └── qs@0.4.2
      ├── cookie@0.0.3
      ├── debug@0.7.0
      ├── fresh@0.1.0
      ├── methods@0.0.1
      ├── mkdirp@0.3.3
      ├── range-parser@0.0.4
      ├─┬ response-send@0.0.1
      │ └── crc@0.2.0
      └─┬ send@0.0.3
        └── mime@1.2.6
        

Now to create the application itself! Create a file named app.js or server.js,
whichever you prefer, require express and then create a new application with `express()`:

    var express = require('express');
    var app = express();
    
With the new application instance you can start defining routes via `app.VERB()`,
in this case "GET /" responding with the "Hello World" string. The `req` and
`res` are the exact same objects that node provides to you, thus you may invoke
`res.pipe()`, `req.on('data', callback)` and anything else you
would do without Express involved.

    app.get('/hello.txt', function(req, res){
      var body = 'Hello World';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', body.length);
      res.end(body);
    });
    

Express augments these objects providing you with higher level
methods such as `res.send()`, which among other things
adds the Content-Length for you:

    app.get('/hello.txt', function(req, res){
      res.send('Hello World');
    });
    
Now to bind and listen for connections invoke the `app.listen()` method,
accepting the same arguments as node's [net.Server#listen()](http://nodejs.org/api/net.html#net_server_listen_port_host_backlog_listeninglistener):

    app.listen(3000);
    console.log('Listening on port 3000');

## Using express(1) to generate an app

Express is bundled with an executable, aptly named `express(1)`.
If you install express globally with npm you'll have it available from anywhere
on your machine:

    $ npm install -g express
    

This tool provides a simple way to get an application skeleton going,
but has limited scope, for example it supports only a few template engines,
whereas Express itself supports virtually any template engine built for node.
Be sure to check out the `--help`:

    Usage: express [options]

    Options:

      -h, --help          output usage information
      -V, --version       output the version number
      -s, --sessions      add session support
      -e, --ejs           add ejs engine support (defaults to jade)
      -J, --jshtml        add jshtml engine support (defaults to jade)
      -H, --hogan         add hogan.js engine support
      -c, --css <engine>  add stylesheet <engine> support (less|stylus) (defaults to plain css)
      -f, --force         force on non-empty directory

If you want to generate an application with EJS, Stylus, and session
support you would simply execute:

    $ express --sessions --css stylus --ejs myapp

    create : myapp
    create : myapp/package.json
    create : myapp/app.js
    create : myapp/public
    create : myapp/public/javascripts
    create : myapp/public/images
    create : myapp/public/stylesheets
    create : myapp/public/stylesheets/style.styl
    create : myapp/routes
    create : myapp/routes/index.js
    create : myapp/views
    create : myapp/views/index.ejs

    install dependencies:
      $ cd myapp && npm install

    run the app:
      $ node app  
      
Like any other node application, you must then install the dependencies:

    $ cd myapp
    $ npm install
    
Then fire it up!

    $ node app
    

That's all you need to get a simple application up and running. Keep in mind
that Express is not bound to any specific directory structure, these are simply
a baseline for you to work from. For application structure alternatives be
sure to view the [examples](https://github.com/visionmedia/express/tree/master/examples)
found in the github repo.

## Error handling

Error-handling middleware are defined just like regular middleware,
however must be defined with an arity of 4, that is the signature
`(err, req, res, next)`:

    app.use(function(err, req, res, next){
      console.error(err.stack);
      res.send(500, 'Something broke!');
    });
    
Though not mandatory error-handling middleware are typically defined
very last, below any other `app.use()` calls as shown here:

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function(err, req, res, next){
      // logic
    });
    

Responses from within these middleware are completely arbitrary. You may
wish to respond with an HTML error page, a simple message, a JSON string,
or anything else you prefer.

For organizational, and higher-level framework purposes you may define
several of these error-handling middleware, much like you would with
regular middleware. For example suppose you wanted to define an error-handler
for requests made via XHR, and those without, you might do:

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);
    
Where the more generic `logErrors` may write request and
error information to stderr, loggly, or similar services:

    function logErrors(err, req, res, next) {
      console.error(err.stack);
      next(err);
    }
    
Where `clientErrorHandler` is defined as the following, note
that the error is explicitly passed along to the next.

    function clientErrorHandler(err, req, res, next) {
      if (req.xhr) {
        res.send(500, { error: 'Something blew up!' });
      } else {
        next(err);
      }
    }
    

The following `errorHandler` "catch-all" implementation may be defined as:

    function errorHandler(err, req, res, next) {
      res.status(500);
      res.render('error', { error: err });
    }

## Users online count

This section details a full (small) application that tracks a users online
count using [Redis](http://redis.io). First up you'll need to 
create a package.json file containing two dependencies, one for the redis
client, another for Express itself. Also make sure you have redis installed
and running via `$ redis-server`.

    {
      "name": "app",
      "version": "0.0.1",
      "dependencies": {
        "express": "3.x",
        "redis": "*"
      }
    }
    
Next you'll need to create an app, and a connection to redis:

    var express = require('express');
    var redis = require('redis');
    var db = redis.createClient();
    var app = express();
    
Next up is the middleware for tracking online users. Here we'll
use sorted sets so that we can query redis for the users
online within the last N milliseconds. We do this by passing
a timestamp as the member's "score". Note that here we're using
the User-Agent string in place of what would normally be a user id.

    app.use(function(req, res, next){
      var ua = req.headers['user-agent'];
      db.zadd('online', Date.now(), ua, next);
    });
    

This next middleware is for fetching the users online
in the last minute using **zrevrangebyscore**
to fetch with a positive infinite max value so that we're
always getting the most recent users, capped with a minimum score
of the current timestamp minus 60,000 milliseconds.

    app.use(function(req, res, next){
      var min = 60 * 1000;
      var ago = Date.now() - min;
      db.zrevrangebyscore('online', '+inf', ago, function(err, users){
        if (err) return next(err);
        req.online = users;
        next();
      });
    });
    

Then finally we use it, and bind to a port! That's
all there is to it, visit the app in a few browsers
and you'll see the count increase.

    app.get('/', function(req, res){
      res.send(req.online.length + ' users online');
    });

    app.listen(3000);


## Express behind proxies

Using Express behind a reverse proxy such as Varnish or Nginx
is trivial, however it does require configuration. By enabling the "trust proxy" setting via 
`app.enable('trust proxy')`,  Express will have knowledge that
it's sitting behind a proxy and that the `X-Forwarded-*` header
fields may be trusted, which otherwise may be easily spoofed.

Enabling this setting has several subtle effects. The first of which is
that `X-Forwarded-Proto` may be set by the reverse proxy to
tell the app that it is https or simply http. This value is reflected
by [req.protocol](/api#req.protocol).

The second change this makes is the [req.ip](/api#req.ip) 
and [req.ips](/api#req.ips) values will be populated with
`X-Forwarded-For`'s list of addresses. 
