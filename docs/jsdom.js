exports.name = 'jsdom';
exports.category = 'scrap';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/jsdom';
exports.description = [
 '\t# jsdom'.red
,'\t'
,'\tA javascript implementation of the W3C DOM.'
,'\t'
,'\t## Install'.cyan
,'\t'
,'\t    npm install jsdom'.green
,'\t'
,'\tor'
,'\t'
,'\t    git clone http://github.com/tmpvar/jsdom.git'.green
,'\t    cd jsdom'.green
,'\t    npm link'.green
,'\t'
,'\t## Easymode'.cyan
,'\t'
,'\tBootstrapping a DOM is generally a difficult process involving many error prone steps. We didn\'t want jsdom to fall into the same trap and that is why a new method, `jsdom.env()`, has been added in jsdom 0.2.0 which should make everyone\'s lives easier.'
,'\t'
,'\twith URL'
,'\t'
,'\t    // Count all of the links from the nodejs build page'.green
,'\t    var jsdom = require("jsdom");'.green
,'\t'.green
,'\t    jsdom.env("http://nodejs.org/dist/", ['.green
,'\t      \'http://code.jquery.com/jquery-1.5.min.js\''.green
,'\t    ],'.green
,'\t    function(errors, window) {'.green
,'\t      console.log("there have been", window.$("a").length, "nodejs releases!");'.green
,'\t    });'.green
,'\t'
,'\tor with raw html'
,'\t'
,'\t    // Run some jQuery on a html fragment'.green
,'\t    var jsdom = require(\'jsdom\');'.green
,'\t'.green
,'\t    jsdom.env(\'<p><a class="the-link" href="http://jsdom.org>JSDOM\'s Homepage</a></p>\', ['.green
,'\t      \'http://code.jquery.com/jquery-1.5.min.js\''.green
,'\t    ],'.green
,'\t    function(errors, window) {'.green
,'\t      console.log("contents of a.the-link:", window.$("a.the-link").text());'.green
,'\t    });'.green
,'\t'
,'\t'
,'\tor with a configuration object'
,'\t'
,'\t    // Print all of the news items on hackernews'.green
,'\t    var jsdom = require(\'jsdom\');'.green
,'\t'.green
,'\t    jsdom.env({'.green
,'\t      html: \'http://news.ycombinator.com/\','.green
,'\t      scripts: ['.green
,'\t        \'http://code.jquery.com/jquery-1.5.min.js\''.green
,'\t      ],'.green
,'\t      done: function(errors, window) {'.green
,'\t        var $ = window.$;'.green
,'\t        console.log(\'HN Links\');'.green
,'\t        $(\'td.title:not(:last) a\').each(function() {'.green
,'\t          console.log(\' -\', $(this).text());'.green
,'\t        });'.green
,'\t      }'.green
,'\t    });'.green
,'\t'
,'\tor with raw javascript source'
,'\t'
,'\t    // Print all of the news items on hackernews'.green
,'\t    var jsdom  = require(\'jsdom\');'.green
,'\t    var fs     = require(\'fs\');'.green
,'\t    var jquery = fs.readFileSync("./jquery-1.6.2.min.js").toString();'.green
,'\t'.green
,'\t    jsdom.env({'.green
,'\t      html: \'http://news.ycombinator.com/\','.green
,'\t      src: ['.green
,'\t        jquery'.green
,'\t      ],'.green
,'\t      done: function(errors, window) {'.green
,'\t        var $ = window.$;'.green
,'\t        console.log(\'HN Links\');'.green
,'\t        $(\'td.title:not(:last) a\').each(function() {'.green
,'\t          console.log(\' -\', $(this).text());'.green
,'\t        });'.green
,'\t      }'.green
,'\t    });'.green
,'\t'
,'\t### How it works'.magenta
,'\t  `jsdom.env` is built for ease of use, which is rare in the world of the DOM!  Since the web has some absolutely horrible javascript on it, as of jsdom 0.2.0 `jsdom.env` will not process external resources (scripts, images, etc).  If you want to process the javascript use one of the methods below (`jsdom.jsdom` or `jsdom.jQueryify`)'
,'\t'
,'\t    jsdom.env(html, [scripts], [config], callback)'.green
,'\t'
,'\t  - `html` (**required**)'.yellow
,'\t    May be a url, html fragment, or file'
,'\t'
,'\t  - `scripts` (**optional**)'.yellow
,'\t    May contain files or urls'
,'\t'
,'\t  - `callback` (**required**)'.yellow
,'\t    Takes 2 arguments:'
,'\t    - `errors` : array of errors'
,'\t    - `window` : a brand new window'
,'\t'
,'\t    _example:_  '
,'\t'
,'\t        jsdom.env(html, function(`errors`, `window`) {'.green
,'\t          // free memory associated with the window'.green
,'\t          window.close();'.green
,'\t        });'.green
,'\t'
,'\tIf you would like to specify a configuration object'
,'\t'
,'\t    jsdom.env({ /* config */ })'.green
,'\t'
,'\t  - config.html     : see `html` above'
,'\t  - config.scripts  : see `scripts` above'
,'\t  - config.src      : An array of javascript strings that will be evaluated against the resulting document.  Similar to `scripts`, but it accepts javascript instead of paths/urls.'
,'\t  - config.done     : see `callback` above'
,'\t  - config.document :'
,'\t   - referer : the new document will have this referer'
,'\t   - cookie : manually set a cookie value i.e. `\'key=value; expires=Wed, Sep 21 2011 12:00:00 GMT; path=/\'`'
,'\t  - config.features : see `Flexibility` section below. **Note**: the default feature set for jsdom.env does _not_ include fetching remote javascript and executing it.  This is something that you will need to **carefully** enable yourself.'
,'\t'
,'\t## For the hardcore'.cyan
,'\t'
,'\tIf you want to spawn a document/window and specify all sorts of options this is the section for you. This section covers the `jsdom.jsdom` method:'
,'\t'
,'\t    var jsdom  = require("jsdom").jsdom,'.green
,'\t        doc    = jsdom(markup, level, options),'.green
,'\t        window = doc.createWindow();'.green
,'\t'
,'\t - `markup` is an html/xml document to be parsed. You can also pass `null` or an undefined value to get a basic document with empty head and body tags. Document fragments are also supported (including `""`), and will behave as sanely as possible (eg. the resulting document will lack the `head`, `body` and `documentElement` properties if the corresponding elements aren\'t included).'
,'\t - `level` is `null` (which means level3) by default, but you can pass another level if you\'d like.'
,'\t'
,'\t'
,'\t        var jsdom = require(\'jsdom\'),'.green
,'\t            doc   = jsdom.jsdom(\'<html><body></body></html>\', jsdom.level(1, \'core\'))'.green
,'\t'
,'\t - `options` see the **Flexibility** section below'
,'\t'
,'\t### Flexibility'.magenta
,'\t'
,'\tOne of the goals of jsdom is to be as minimal and light as possible. This section details how'
,'\tsomeone can change the behavior of `Document`s on the fly.  These features are baked into'
,'\tthe `DOMImplementation` that every `Document` has, and may be tweaked in two ways:'
,'\t'
,'\t1. When you create a new `Document` using the jsdom builder (`require(\'jsdom\').jsdom()`)'
,'\t'
,'\t        var jsdom = require(\'jsdom\').jsdom,'.green
,'\t            doc   = jsdom("<html><body></body></html>", null, {'.green
,'\t              features: {'.green
,'\t                FetchExternalResources : [\'img\']'.green
,'\t              }'.green
,'\t            });'.green
,'\t'
,'\t Do note, that this will only affect the document that is currently being created.  All other documents'
,'\twill use the defaults specified below (see: Default Features)'
,'\t'
,'\t2. Previous to creating any documents you can modify the defaults for all future documents'
,'\t'
,'\t        require(\'jsdom\').defaultDocumentFeatures = {'.green
,'\t          FetchExternalResources   : [\'script\'],'.green
,'\t          ProcessExternalResources : false,'.green
,'\t          MutationEvents           : false,'.green
,'\t          QuerySelector            : false'.green
,'\t        }'.green
,'\t'
,'\t'
,'\t'
,'\t#### Default Features'.magenta
,'\t'
,'\tDefault features are extremely important for jsdom as they lower the configuration requirement and present developers a set of consistent default behaviors. The following sections detail the available features, their defaults, and the values that jsdom uses.'
,'\t'
,'\t'
,'\t`FetchExternalResources`'
,'\t_Default_: [\'script\']'
,'\t_Allowed_: [\'script\', \'img\', \'css\', \'frame\', \'link\'] or false'
,'\t'
,'\tEnables/Disables fetching files over the filesystem/http'
,'\t'
,'\t`ProcessExternalResources`'
,'\t_default_: [\'script\']'
,'\t_allowed_: [\'script\'] or false'
,'\t'
,'\tDisabling this will disable script execution (currently only javascript).'
,'\t'
,'\t`MutationEvents`'
,'\t_default_: \'2.0\''
,'\t_allowed_ : \'2.0\' or false'
,'\t'
,'\tInitially enabled to be up to spec. Disable this if you do not need mutation events and want jsdom to be a bit more efficient.'
,'\t'
,'\t**Note**: `ProcessExternalResources` requires this to be enabled'
,'\t'
,'\t`QuerySelector`'
,'\t_default_ : false'
,'\t_allowed_ : true'
,'\t'
,'\tThis feature is backed by [sizzle][] but currently causes problems with some libraries.  Enable this if you want `document.querySelector` and friends, but be aware that many libraries feature detect for this, and it may cause you a bit of trouble.'
,'\t'
,'\t[sizzle]:http://sizzlejs.com/'
,'\t'
,'\t# More Examples'.red
,'\t'
,'\t## Creating a document-less window'.cyan
,'\t'
,'\t    var jsdom  = require("jsdom"),'.green
,'\t        window = jsdom.createWindow();'.green
,'\t'.green
,'\t    console.log(window.document);'.green
,'\t    // output: undefined'.green
,'\t'
,'\t## Creating a document'.cyan
,'\t'
,'\t    var jsdom = require("jsdom"),'.green
,'\t        doc   = new (jsdom.level(1, \'core\').Document)();'.green
,'\t    console.log(doc.nodeName);'.green
,'\t    // outputs: #document'.green
,'\t'
,'\t## Creating a browser-like BOM/DOM/Window'.cyan
,'\t'
,'\t    var jsdom    = require("./lib/jsdom").jsdom,'.green
,'\t        document = jsdom("<html><head></head><body>hello world</body></html>"),'.green
,'\t        window   = document.createWindow();'.green
,'\t'.green
,'\t    console.log(window.document.innerHTML);'.green
,'\t    // output: \'<html><head></head><body>hello world</body></html>\''.green
,'\t'.green
,'\t    console.log(window.innerWidth)'.green
,'\t    // output: 1024'.green
,'\t'.green
,'\t    console.log(typeof window.document.getElementsByClassName);'.green
,'\t    // outputs: function'.green
,'\t'
,'\t'
,'\t## jQueryify'.cyan
,'\t'
,'\t    var jsdom  = require("jsdom"),'.green
,'\t        window = jsdom.jsdom().createWindow();'.green
,'\t'.green
,'\t    jsdom.jQueryify(window, \'http://code.jquery.com/jquery-1.4.2.min.js\' , function() {'.green
,'\t      window.$(\'body\').append(\'<div class="testing">Hello World, It works</div>\');'.green
,'\t      console.log(window.$(\'.testing\').text());'.green
,'\t    });'.green
].join('\n');
