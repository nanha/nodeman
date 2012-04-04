exports.name = 'request';
exports.category = 'scrap';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/request';
exports.description = [
,"\tRequest -- Simplified HTTP request method".red
,"\t========================================="
,""
,"\tSuper simple to use".cyan
,"\t-------------------"
,""
,"\tRequest is designed to be the simplest way possible to make http calls. It support HTTPS and follows redirects by default."
,""
,"\tvar request = require('request');".green
,"\trequest('http://www.google.com', function (error, response, body) {".green
,"\t  if (!error && response.statusCode == 200) {".green
,"\t    console.log(body) // Print the google web page.".green
,"\t  }".green
,"\t})".green
,""
,""
,"\tStreaming".cyan
,"\t-----------"
,""
,"\tYou can stream any response to a file stream."
,""
,"\trequest('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))".green
,""
,"\tYou can also stream a file to a PUT or POST request. This method will also check the file extension against a mapping of file extensions to content-types, in this case application/json, and use the proper content-type in the PUT request if one is not already provided in the headers."
,""
,"\tfs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'))".green
,""
,"\tRequest can also pipe to itself. When doing so the content-type and content-length will be preserved in the PUT headers."
,""
,"\trequest.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'))".green
,""
,"\tNow let's get fancy."
,""
,"\thttp.createServer(function (req, resp) {".green
,"\t  if (req.url === '/doodle.png') {".green
,"\t    if (req.method === 'PUT') {".green
,"\t      req.pipe(request.put('http://mysite.com/doodle.png'))".green
,"\t    } else if (req.method === 'GET' || req.method === 'HEAD') {".green
,"\t      request.get('http://mysite.com/doodle.png').pipe(resp)".green
,"\t    } ".green
,"\t  }".green
,"\t})".green
,""
,""
,"\tYou can also pipe() from a http.ServerRequest instance and to a http.ServerResponse instance. The HTTP method and headers will be sent as well as the entity-body data. Which means that, if you don't really care about security, you can do:"
,""
,"\thttp.createServer(function (req, resp) {".green
,"\t  if (req.url === '/doodle.png') {".green
,"\t    var x = request('http://mysite.com/doodle.png')".green
,"\t    req.pipe(x)".green
,"\t    x.pipe(resp)".green
,"\t  }".green
,"\t})".green
,""
,"\tAnd since pipe() returns the destination stream in node 0.5.x you can do one line proxying :)"
,""
,"\treq.pipe(request('http://mysite.com/doodle.png')).pipe(resp)".green
,""
,"\tAlso, none of this new functionality conflicts with requests previous features, it just expands them."
,""
,"\tvar r = request.defaults({'proxy':'http://localproxy.com'})".green
,""
,"\thttp.createServer(function (req, resp) {".green
,"\t  if (req.url === '/doodle.png') {".green
,"\t    r.get('http://google.com/doodle.png').pipe(resp)".green
,"\t  }".green
,"\t})".green
,""
,"\tYou can still use intermediate proxies, the requests will still follow HTTP forwards, etc."
,""
,""
,"\tOAuth Signing".red
,"\t=============="
,""
,"\t// Twitter OAuth".green
,"\tvar qs = require('querystring')".green
,"\t  , oauth =".green
,"\t    { callback: 'http://mysite.com/callback/'".green
,"\t    , consumer_key: CONSUMER_KEY".green
,"\t    , consumer_secret: CONSUMER_SECRET".green
,"\t    }".green
,"\t  , url = 'https://api.twitter.com/oauth/request_token'".green
,"\t  ;".green
,"\trequest.post({url:url, oauth:oauth}, function (e, r, body) {".green
,"\t  // Assume by some stretch of magic you aquired the verifier".green
,"\t  var access_token = qs.parse(body)".green
,"\t    , oauth = ".green
,"\t      { consumer_key: CONSUMER_KEY".green
,"\t      , consumer_secret: CONSUMER_SECRET".green
,"\t      , token: access_token.oauth_token".green
,"\t      , verifier: VERIFIER".green
,"\t      , token_secret: access_token.oauth_token_secret".green
,"\t      }".green
,"\t    , url = 'https://api.twitter.com/oauth/access_token'".green
,"\t    ;".green
,"\t  request.post({url:url, oauth:oauth}, function (e, r, body) {".green
,"\t    var perm_token = qs.parse(body)".green
,"\t      , oauth = ".green
,"\t        { consumer_key: CONSUMER_KEY".green
,"\t        , consumer_secret: CONSUMER_SECRET".green
,"\t        , token: perm_token.oauth_token".green
,"\t        , token_secret: perm_token.oauth_token_secret".green
,"\t        }".green
,"\t      , url = 'https://api.twitter.com/1/users/show.json?'".green
,"\t      , params = ".green
,"\t        { screen_name: perm_token.screen_name".green
,"\t        , user_id: perm_token.user_id".green
,"\t        }".green
,"\t      ;".green
,"\t    url += qs.stringify(params)".green
,"\t    request.get({url:url, oauth:oauth, json:true}, function (e, r, user) {".green
,"\t      console.log(user)".green
,"\t    })".green
,"\t  })".green
,"\t})".green
,""
,""
,"\trequest(options, callback)".cyan
,"\t---------------------------"
,""
,"\tThe first argument can be either a url or an options object. The only required option is uri, all others are optional."
,""
,"\turi || url - fully qualified uri or a parsed url object from url.parse()"
,"\tqs - object containing querystring values to be appended to the uri"
,"\tmethod - http method, defaults to GET"
,"\theaders - http headers, defaults to {}"
,"\tbody - entity body for POST and PUT requests. Must be buffer or string."
,"\tform - sets body but to querystring representation of value and adds Content-type: application/x-www-form-urlencoded; charset=utf-8 header."
,"\tjson - sets body but to JSON representation of value and adds Content-type: application/json header."
,"\tmultipart - (experimental) array of objects which contains their own headers and body attribute. Sends multipart/related request. See example below."
,"\tfollowRedirect - follow HTTP 3xx responses as redirects. defaults to true."
,"\tfollowAllRedirects - follow non-GET HTTP 3xx responses as redirects. defaults to false."
,"\tmaxRedirects - the maximum number of redirects to follow, defaults to 10."
,"\tonResponse - If true the callback will be fired on the \"response\" event instead of \"end\". If a function it will be called on \"response\" and not effect the regular semantics of the main callback on \"end\"."
,"\tencoding - Encoding to be used on setEncoding of response data. If set to null, the body is returned as a Buffer."
,"\tpool - A hash object containing the agents for these requests. If omitted this request will use the global pool which is set to node's default maxSockets."
,"\tpool.maxSockets - Integer containing the maximum amount of sockets in the pool."
,"\ttimeout - Integer containing the number of milliseconds to wait for a request to respond before aborting the request"
,"\tproxy - An HTTP proxy to be used. Support proxy Auth with Basic Auth the same way it's supported with the url parameter by embedding the auth info in the uri."
,"\toauth - Options for OAuth HMAC-SHA1 signing, see documentation above."
,"\tstrictSSL - Set to true to require that SSL certificates be valid. Note: to use your own certificate authority, you need to specify an agent that was created with that ca as an option."
,"\tjar - Set to false if you don't want cookies to be remembered for future use or define your custom cookie jar (see examples section)"
,"\tThe callback argument gets 3 arguments. The first is an error when applicable (usually from the http.Client option not the http.ClientRequest object). The second in an http.ClientResponse object. The third is the response body String or Buffer."
,""
,""
,"\tConvenience methods".red
,"\t===================="
,""
,"\tThere are also shorthand methods for different HTTP METHODs and some other conveniences."
,""
,"\trequest.defaults(options)".cyan
,"\t-------------------------"
,""
,"\tThis method returns a wrapper around the normal request API that defaults to whatever options you pass in to it."
,""
,"\trequest.put".cyan
,"\t-------------------------"
,"\tSame as request() but defaults to method: \"PUT\"."
,""
,"\trequest.put(url)".green
,""
,"\trequest.post".cyan
,"\t-------------------------"
,"\tSame as request() but defaults to method: \"POST\"."
,""
,"\trequest.post(url)".green
,""
,"\trequest.head".cyan
,"\t-------------------------"
,"\tSame as request() but defaults to method: \"HEAD\"."
,""
,"\trequest.head(url)".green
,""
,"\trequest.del".cyan
,"\t-------------------------"
,"\tSame as request() but defaults to method: \"DELETE\"."
,""
,"\trequest.del(url)".green
,""
,"\trequest.get".cyan
,"\t-------------------------"
,"\tAlias to normal request method for uniformity."
,""
,"\trequest.get(url)".green
,""
,"\trequest.cookie".cyan
,"\t-------------------------"
,"\tFunction that creates a new cookie."
,""
,"\trequest.cookie('cookie_string_here')".green
,""
,"\trequest.jar".cyan
,"\t-------------------------"
,"\tFunction that creates a new cookie jar."
,""
,"\trequest.jar()".cyan
,""
,""
,"\tExamples:".cyan
,"\t--------------"
,""
,"\t  var request = require('request')".green
,"\t    , rand = Math.floor(Math.random()*100000000).toString()".green
,"\t    ;".green
,"\t  request(".green
,"\t    { method: 'PUT'".green
,"\t    , uri: 'http://mikeal.iriscouch.com/testjs/' + rand".green
,"\t    , multipart: ".green
,"\t      [ { 'content-type': 'application/json'".green
,"\t        ,  body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})".green
,"\t        }".green
,"\t      , { body: 'I am an attachment' }".green
,"\t      ] ".green
,"\t    }".green
,"\t  , function (error, response, body) {".green
,"\t      if(response.statusCode == 201){".green
,"\t        console.log('document saved as: http://mikeal.iriscouch.com/testjs/'+ rand)".green
,"\t      } else {".green
,"\t        console.log('error: '+ response.statusCode)".green
,"\t        console.log(body)".green
,"\t      }".green
,"\t    }".green
,"\t  )".green
,""
,""
,"\tCookies are enabled by default (so they can be used in subsequent requests). To disable cookies set jar to false (either in defaults or in the options sent)."
,""
,"\tvar request = request.defaults({jar: false})".green
,"\trequest('http://www.google.com', function () {".green
,"\t  request('http://images.google.com')".green
,"\t})".green
,""
,"\tIf you to use a custom cookie jar (instead of letting request use its own global cookie jar) you do so by setting the jar default or by specifying it as an option:"
,""
,"\tvar j = request.jar()".green
,"\tvar request = request.defaults({jar:j})".green
,"\trequest('http://www.google.com', function () {".green
,"\t  request('http://images.google.com')".green
,"\t})".green
,""
,"\tOR"
,""
,"\tvar j = request.jar()".green
,"\tvar cookie = request.cookie('your_cookie_here')".green
,"\tj.add(cookie)".green
,"\trequest({url: 'http://www.google.com', jar: j}, function () {".green
,"\t  request('http://images.google.com')".green
,"\t})".green
].join('\n');
