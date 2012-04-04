exports.name = 'jade';
exports.category = 'template';
exports.context = 'use require';
exports.homepage = 'https://github.com/visionmedia/jade';
exports.description = [
 '\t# Jade - template engine'.red
,'\t'
,'\t Jade is a high performance template engine heavily influenced by [Haml](http://haml-lang.com)'
,'\t and implemented with JavaScript for [node](http://nodejs.org).'
,'\t'
,'\t## Installation'.cyan
,'\t'
,'\tvia npm:'
,'\t'
,'\t$ npm install jade'.green
,'\t$ man jade'.green
,'\t'
,'\t## Browser Support'.cyan
,'\t'
,'\t To compile jade to a single file compatible for client-side use simply execute:'
,'\t'
,'\t$ make jade.js'.green
,'\t'
,'\t Alternatively, if uglifyjs is installed via npm (`npm install uglify-js`) you may execute the following which will create both files. However each release builds these for you.'
,'\t'
,'\t$ make jade.min.js'.green
,'\t'
,'\t  By default Jade instruments templates with line number statements such as `__.lineno = 3` for debugging purposes. When used in a browser it\'s useful to minimize this boiler plate, you can do so by passing the option `{ compileDebug: false }`. The following template'
,'\t'
,'\tp Hello #{name}'
,'\t'
,'\t Can then be as small as the following generated function:'
,'\t'
,'\tfunction anonymous(locals, attrs, escape, rethrow) {'.green
,'\t  var buf = [];'.green
,'\t  with (locals || {}) {'.green
,'\t    var interp;'.green
,'\t    buf.push(\'\n<p>Hello \' + escape((interp = name) == null ? \'\' : interp) + \'\n</p>\');'.green
,'\t  }'.green
,'\t  return buf.join("");'.green
,'\t}'.green
,'\t'
,'\t  Through the use of Jade\'s `./runtime.js` you may utilize these pre-compiled templates on the client-side _without_ Jade itself, all you need is the associated utility functions (in runtime.js), which are then available as `jade.attrs`, `jade.escape` etc. To enable this you should pass `{ client: true }` to `jade.compile()` to tell Jade to reference the helper functions'
,'\t  via `jade.attrs`, `jade.escape` etc.'
,'\t'
,'\tfunction anonymous(locals, attrs, escape, rethrow) {'.green
,'\t  var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;'.green
,'\t  var buf = [];'.green
,'\t  with (locals || {}) {'.green
,'\t    var interp;'.green
,'\t    buf.push(\'\n<p>Hello \' + escape((interp = name) == null ? \'\' : interp) + \'\n</p>\');'.green
,'\t  }'.green
,'\t  return buf.join("");'.green
,'\t}'.green
,'\t'
,'\t## Public API'.cyan
,'\t'
,'\tvar jade = require(\'jade\');'.green
,'\t'.green
,'\t// Compile a function'.green
,'\tvar fn = jade.compile(\'string of jade\', options);'.green
,'\tfn(locals);'.green
,'\t'
,'\t### Options'.magenta
,'\t'
,'\t - `self`      Use a `self` namespace to hold the locals. _false by default_'
,'\t - `locals`    Local variable object'
,'\t - `filename`  Used in exceptions, and required when using includes'
,'\t - `debug`     Outputs tokens and function body generated'
,'\t - `compiler`  Compiler to replace jade\'s default'
,'\t - `compileDebug`  When `false` no debug instrumentation is compiled'
,'\t'
,'\t## Syntax'.cyan
,'\t'
,'\t### Line Endings'.magenta
,'\t'
,'\t**CRLF** and **CR** are converted to **LF** before parsing.'
,'\t'
,'\t### Tags'.magenta
,'\t'
,'\tA tag is simply a leading word:'
,'\t'
,'\thtml'.green
,'\t'
,'\tfor example is converted to `<html></html>`'.yellow
,'\t'
,'\ttags can also have ids:'
,'\t'
,'\tdiv#container'.green
,'\t'
,'\twhich would render `<div id="container"></div>`'.yellow
,'\t'
,'\thow about some classes?'
,'\t'
,'\tdiv.user-details'.green
,'\t'
,'\trenders `<div class="user-details"></div>`'.yellow
,'\t'
,'\tmultiple classes? _and_ an id? sure:'
,'\t'
,'\tdiv#foo.bar.baz'.green
,'\t'
,'\trenders `<div id="foo" class="bar baz"></div>`'.yellow
,'\t'
,'\tdiv div div sure is annoying, how about:'
,'\t'
,'\t#foo'.green
,'\t.bar'.green
,'\t'
,'\twhich is syntactic sugar for what we have already been doing, and outputs:'
,'\t'
,'\t<div id="foo"></div><div class="bar"></div>'.yellow
,'\t'
,'\t'
,'\t### Tag Text'.magenta
,'\t'
,'\tSimply place some content after the tag:'
,'\t'
,'\tp wahoo!'.green
,'\t'
,'\trenders `<p>wahoo!</p>`.'.yellow
,'\t'
,'\twell cool, but how about large bodies of text:'
,'\t'
,'\tp'.green
,'\t  | foo bar baz'.green
,'\t  | rawr rawr'.green
,'\t  | super cool'.green
,'\t  | go jade go'.green
,'\t'
,'\trenders `<p>foo bar baz rawr.....</p>`'.yellow
,'\t'
,'\tinterpolation? yup! both types of text can utilize interpolation,'
,'\tif we passed `{ name: \'tj\', email: \'tj@vision-media.ca\' }` to the compiled function we can do the following:'
,'\t'
,'\t#user #{name} &lt;#{email}&gt;'.green
,'\t'
,'\toutputs `<div id="user">tj &lt;tj@vision-media.ca&gt;</div>`'.yellow
,'\t'
,'\tActually want `#{}` for some reason? escape it!'
,'\t'
,'\tp \#{something}'.green
,'\t'
,'\tnow we have `<p>#{something}</p>`'.yellow
,'\t'
,'\tWe can also utilize the unescaped variant `!{html}`, so the following'
,'\twill result in a literal script tag:'
,'\t'

,'\t- var html = "<script></script>"'.green
,'\t| !{html}'.green
,'\t'
,'\tNested tags that also contain text can optionally use a text block:'
,'\t'
,'\tlabel'.green
,'\t  | Username:'.green
,'\t  input(name=\'user[name]\')'.green
,'\t'
,'\tor immediate tag text:'
,'\t'
,'\tlabel Username:'.green
,'\t  input(name=\'user[name]\')'.green
,'\t'
,'\tTags that accept _only_ text such as `script` and `style` do not'
,'\tneed the leading `|` character, for example:'
,'\t'

,'\thtml'.green
,'\t  head'.green
,'\t    title Example'.green
,'\t    script'.green
,'\t      if (foo) {'.green
,'\t        bar();'.green
,'\t      } else {'.green
,'\t        baz();'.green
,'\t      }'.green
,'\t'
,'\tOnce again as an alternative, we may use a trailing `.` to indicate a text block, for example:'
,'\t'

,'\tp.'.green
,'\t  foo asdf'.green
,'\t  asdf'.green
,'\t   asdfasdfaf'.green
,'\t   asdf'.green
,'\t  asd.'.green
,'\t'
,'\toutputs:'
,'\t'
,'\t<p>foo asdf'.yellow
,'\tasdf'.yellow
,'\t  asdfasdfaf'.yellow
,'\t  asdf'.yellow
,'\tasd.'.yellow
,'\t</p>'.yellow
,'\t'
,'\tThis however differs from a trailing `.` followed by a space, which although is ignored by the Jade parser, tells Jade that this period is a literal:'
,'\t'

,'\tp .'.green
,'\t'
,'\toutputs:'
,'\t'

,'\t<p>.</p>'.yellow

,'\t'
,'\tIt should be noted that text blocks should be doubled escaped.  For example if you desire the following output.'
,'\t'

,'\t<p>foo\bar</p>'.yellow

,'\t'
,'\tuse:'
,'\t'

,'\tp.'.green
,'\t  foo\\bar'.green

,'\t'
,'\t### Comments'.magenta
,'\t'
,'\tSingle line comments currently look the same as JavaScript comments,'
,'\taka `//` and must be placed on their own line:'
,'\t'

,'\t// just some paragraphs'.green
,'\tp foo'.green
,'\tp bar'.green

,'\t'
,'\twould output'
,'\t'

,'\t<!-- just some paragraphs -->'.yellow
,'\t<p>foo</p>'.yellow
,'\t<p>bar</p>'.yellow

,'\t'
,'\tJade also supports unbuffered comments, by simply adding a hyphen:'
,'\t'

,'\t//- will not output within markup'.green
,'\tp foo'.green
,'\tp bar'.green

,'\t'
,'\toutputting'
,'\t'

,'\t<p>foo</p>'.yellow
,'\t<p>bar</p>'.yellow

,'\t'
,'\t### Block Comments'.magenta
,'\t'
,'\t A block comment is legal as well:'
,'\t'

,'\tbody'.green
,'\t  //'.green
,'\t    #content'.green
,'\t      h1 Example'.green

,'\t'
,'\toutputting'
,'\t'

,'\t<body>'.yellow
,'\t  <!--'.yellow
,'\t  <div id="content">'.yellow
,'\t    <h1>Example</h1>'.yellow
,'\t  </div>'.yellow
,'\t  -->'.yellow
,'\t</body>'.yellow

,'\t'
,'\tJade supports conditional-comments as well, for example:'
,'\t'

,'\thead'.green
,'\t  //if lt IE 8'.green
,'\t    script(src=\'/ie-sucks.js\')'.green

,'\t'
,'\toutputs:'
,'\t'

,'\t<body>'.yellow
,'\t  <!--[if lt IE 8]>'.yellow
,'\t    <script src="/ie-sucks.js"></script>'.yellow
,'\t  <![endif]-->'.yellow
,'\t</body>'.yellow

,'\t'
,'\t### Nesting'.magenta
,'\t'
,'\t Jade supports nesting to define the tags in a natural way:'
,'\t'

,'\tul'.green
,'\t  li.first'.green
,'\t    a(href=\'#\') foo'.green
,'\t  li'.green
,'\t    a(href=\'#\') bar'.green
,'\t  li.last'.green
,'\t    a(href=\'#\') baz'.green

,'\t'
,'\t### Block Expansion'.magenta
,'\t'
,'\t Block expansion allows you to create terse single-line nested tags,'
,'\t the following example is equivalent to the nesting example above.'
,'\t'

,'\tul'.green
,'\t  li.first: a(href=\'#\') foo'.green
,'\t  li: a(href=\'#\') bar'.green
,'\t  li.last: a(href=\'#\') baz'.green

,'\t'
,'\t### Case'.magenta
,'\t'
,'\t The case statement takes the following form:'
,'\t'

,'\thtml'.green
,'\t  body'.green
,'\t    friends = 10'.green
,'\t    case friends'.green
,'\t      when 0'.green
,'\t        p you have no friends'.green
,'\t      when 1'.green
,'\t        p you have a friend'.green
,'\t      default'.green
,'\t        p you have #{friends} friends'.green

,'\t'
,'\t Block expansion may also be used:'
,'\t'

,'\tfriends = 5'.green
,'\t'.green
,'\thtml'.green
,'\t  body'.green
,'\t    case friends'.green
,'\t      when 0: p you have no friends'.green
,'\t      when 1: p you have a friend'.green
,'\t      default: p you have #{friends} friends'.green

,'\t'
,'\t### Attributes'.magenta
,'\t'
,'\tJade currently supports `(` and `)` as attribute delimiters.'
,'\t'

,'\ta(href=\'/login\', title=\'View login page\') Login'.green

,'\t'
,'\tWhen a value is `undefined` or `null` the attribute is _not_ added,'
,'\tso this is fine, it will not compile `something="null"`.'
,'\t'

,'\tdiv(something=null)'.green

,'\t'
,'\tBoolean attributes are also supported:'
,'\t'

,'\tinput(type="checkbox", checked)'.green

,'\t'
,'\tBoolean attributes with code will only output the attribute when `true`:'
,'\t'

,'\tinput(type="checkbox", checked=someValue)'.green

,'\t'
,'\tMultiple lines work too:'
,'\t'

,'\tinput(type=\'checkbox\','.green
,'\t  name=\'agreement\','.green
,'\t  checked)'.green

,'\t'
,'\tMultiple lines without the comma work fine:'
,'\t'

,'\tinput(type=\'checkbox\''.green
,'\t  name=\'agreement\''.green
,'\t  checked)'.green

,'\t'
,'\tFunky whitespace? fine:'
,'\t'

,'\tinput('.green
,'\t  type=\'checkbox\''.green
,'\t  name=\'agreement\''.green
,'\t  checked)'.green

,'\t'
,'\tColons work:'
,'\t'

,'\trss(xmlns:atom="atom")'.green

,'\t'
,'\tSuppose we have the `user` local `{ id: 12, name: \'tobi\' }`'
,'\tand we wish to create an anchor tag with `href` pointing to "/user/12"'
,'\twe could use regular javascript concatenation:'
,'\t'

,'\ta(href=\'/user/\' + user.id)= user.name'.green

,'\t'
,'\tor we could use jade\'s interpolation, which I added because everyone'
,'\tusing Ruby or CoffeeScript seems to think this is legal js..:'
,'\t'

,'\ta(href=\'/user/#{user.id}\')= user.name'.green

,'\t'
,'\tThe `class` attribute is special-cased when an array is given,'
,'\tallowing you to pass an array such as `bodyClasses = [\'user\', \'authenticated\']` directly:'
,'\t'

,'\tbody(class=bodyClasses)'.green

,'\t'
,'\t### HTML'.magenta
,'\t'
,'\t Inline html is fine, we can use the pipe syntax to'
,'\t write arbitrary text, in this case some html:'
,'\t'

,'\thtml'.green
,'\t  body'.green
,'\t    | <h1>Title</h1>'.green
,'\t    | <p>foo bar baz</p>'.green

,'\t'
,'\t Or we can use the trailing `.` to indicate to Jade that we'
,'\t only want text in this block, allowing us to omit the pipes:'
,'\t'

,'\thtml'.green
,'\t  body.'.green
,'\t    <h1>Title</h1>'.green
,'\t    <p>foo bar baz</p>'.green

,'\t'
,'\t Both of these examples yield the same result:'
,'\t'

,'\t<html><body><h1>Title</h1>'.yellow
,'\t<p>foo bar baz</p>'.yellow
,'\t</body></html>'.yellow

,'\t'
,'\t The same rule applies for anywhere you can have text'
,'\t in jade, raw html is fine:'
,'\t'

,'\thtml'.green
,'\t  body'.green
,'\t    h1 User <em>#{name}</em>'.green

,'\t'
,'\t### Doctypes'.magenta
,'\t'
,'\tTo add a doctype simply use `!!!`, or `doctype` followed by an optional value:'
,'\t'

,'\t!!!'.green

,'\t'
,'\tWill output the _transitional_ doctype, however:'
,'\t'

,'\t!!! 5'.green

,'\t'
,'\tor'
,'\t'

,'\t!!! html'.green

,'\t'
,'\tor'
,'\t'

,'\tdoctype html'.green

,'\t'
,'\tWill output the _html 5_ doctype.'
,'\t'
,'\tDoctypes are case-insensitive, so the following are equivalent:'
,'\t'

,'\tdoctype Basic'.green
,'\tdoctype basic'.green

,'\t'
,'\tit\'s also possible to simply pass a doctype literal:'
,'\t'

,'\tdoctype html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN'.green

,'\t'
,'\tyielding:'
,'\t'

,'\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN>'.yellow

,'\t'
,'\tBelow are the doctypes defined by default, which can easily be extended:'
,'\t'
,'\tvar doctypes = exports.doctypes = {'.green
,'\t  \'5\': \'<!DOCTYPE html>\','.green
,'\t  \'xml\': \'<?xml version="1.0" encoding="utf-8" ?>\','.green
,'\t  \'default\': \'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\','.green
,'\t  \'transitional\': \'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\','.green
,'\t  \'strict\': \'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\','.green
,'\t  \'frameset\': \'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">\','.green
,'\t  \'1.1\': \'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\','.green
,'\t  \'basic\': \'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">\','.green
,'\t  \'mobile\': \'<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">\''.green
,'\t};'.green

,'\t'
,'\tTo alter the default simply change:'
,'\t'
,'\tjade.doctypes.default = \'whatever you want\';'.green

,'\t'
,'\t## Filters'.cyan
,'\t'
,'\tFilters are prefixed with `:`, for example `:markdown` and'
,'\tpass the following block of text to an arbitrary function for processing. View the _features_'
,'\tat the top of this document for available filters.'
,'\t'

,'\tbody'.green
,'\t  :markdown'.green
,'\t    Woah! jade _and_ markdown, very **cool**'.green
,'\t    we can even link to [stuff](http://google.com)'.green

,'\t'
,'\tRenders:'
,'\t'

,'\t<body><p>Woah! jade <em>and</em> markdown, very <strong>cool</strong> we can even link to <a href="http://google.com">stuff</a></p></body>'.yellow

,'\t'
,'\t## Code'.cyan
,'\t'
,'\tJade currently supports three classifications of executable code. The first'
,'\tis prefixed by `-`, and is not buffered:'
,'\t'

,'\t- var foo = \'bar\';'.green

,'\t'
,'\tThis can be used for conditionals, or iteration:'
,'\t'

,'\t- for (var key in obj)'.green
,'\t  p= obj[key]'.green

,'\t'
,'\tDue to Jade\'s buffering techniques the following is valid as well:'
,'\t'

,'\t- if (foo)'.green
,'\t  ul'.green
,'\t    li yay'.green
,'\t    li foo'.green
,'\t    li worked'.green
,'\t- else'.green
,'\t  p oh no! didnt work'.green

,'\t'
,'\tHell, even verbose iteration:'
,'\t'

,'\t- if (items.length)'.green
,'\t  ul'.green
,'\t    - items.forEach(function(item){'.green
,'\t      li= item'.green
,'\t    - })'.green

,'\t'
,'\tAnything you want!'
,'\t'
,'\tNext up we have _escaped_ buffered code, which is used to'
,'\tbuffer a return value, which is prefixed by `=`:'
,'\t'

,'\t- var foo = \'bar\''.green
,'\t= foo'.green
,'\th1= foo'.green

,'\t'
,'\tWhich outputs `bar<h1>bar</h1>`. Code buffered by `=` is escaped'
,'\tby default for security, however to output unescaped return values'
,'\tyou may use `!=`:'
,'\t'

,'\tp!= aVarContainingMoreHTML'.green

,'\t'
,'\t Jade also has designer-friendly variants, making the literal JavaScript'
,'\t more expressive and declarative. For example the following assignments'
,'\t are equivalent, and the expression is still regular javascript:'
,'\t'

,'\t- var foo = \'foo \' + \'bar\''.green
,'\tfoo = \'foo \' + \'bar\''.green

,'\t'
,'\t  Likewise Jade has first-class `if`, `else if`, `else`, `until`, `while`, `unless` among others, however you must remember that the expressions are still regular javascript:'
,'\t'

,'\tif foo == \'bar\''.green
,'\t  ul'.green
,'\t    li yay'.green
,'\t    li foo'.green
,'\t    li worked'.green
,'\telse'.green
,'\t  p oh no! didnt work'.green

,'\t'
,'\t## Iteration'.cyan
,'\t'
,'\t Along with vanilla JavaScript Jade also supports a subset of'
,'\t constructs that allow you to create more designer-friendly templates,'
,'\t one of these constructs is `each`, taking the form:'
,'\t'

,'\teach VAL[, KEY] in OBJ'.green

,'\t'
,'\tAn example iterating over an array:'
,'\t'

,'\t- var items = ["one", "two", "three"]'.green
,'\teach item in items'.green
,'\t  li= item'.green

,'\t'
,'\toutputs:'
,'\t'

,'\t<li>one</li>'.yellow
,'\t<li>two</li>'.yellow
,'\t<li>three</li>'.yellow

,'\t'
,'\titerating an array with index:'
,'\t'

,'\titems = ["one", "two", "three"]'.green
,'\teach item, i in items'.green
,'\t  li #{item}: #{i}'.green

,'\t'
,'\toutputs:'
,'\t'

,'\t<li>one: 0</li>'.yellow
,'\t<li>two: 1</li>'.yellow
,'\t<li>three: 2</li>'.yellow

,'\t'
,'\titerating an object\'s keys and values:'
,'\t'

,'\tobj = { foo: \'bar\' }'.green
,'\teach val, key in obj'.green
,'\t  li #{key}: #{val}'.green

,'\t'
,'\twould output `<li>foo: bar</li>`'
,'\t'
,'\tInternally Jade converts these statements to regular'
,'\tJavaScript loops such as `users.forEach(function(user){`,'
,'\tso lexical scope and nesting applies as it would with regular'
,'\tJavaScript:'
,'\t'

,'\teach user in users'.green
,'\t  each role in user.roles'.green
,'\t    li= role'.green

,'\t'
,'\t You may also use `for` if you prefer:'
,'\t'

,'\tfor user in users'.green
,'\t  for role in user.roles'.green
,'\t    li= role'.green

,'\t'
,'\t## Conditionals'.cyan
,'\t'
,'\t Jade conditionals are equivalent to those using the code (`-`) prefix,'
,'\t however allow you to ditch parenthesis to become more designer friendly,'
,'\t however keep in mind the expression given is _regular_ JavaScript:'
,'\t'

,'\tfor user in users'.green
,'\t  if user.role == \'admin\''.green
,'\t    p #{user.name} is an admin'.green
,'\t  else'.green
,'\t    p= user.name'.green

,'\t'
,'\t is equivalent to the following using vanilla JavaScript literals:'
,'\t'

,'\tfor user in users'.green
,'\t  - if (user.role == \'admin\')'.green
,'\t    p #{user.name} is an admin'.green
,'\t  - else'.green
,'\t    p= user.name'.green

,'\t'
,'\t  Jade also provides have `unless` which is equivalent to `if (!(expr))`:'
,'\t'

,'\tfor user in users'.green
,'\t  unless user.isAnonymous'.green
,'\t    p'.green
,'\t      | Click to view'.green
,'\t      a(href=\'/users/\' + user.id)= user.name'.green

,'\t'
,'\t## Template inheritance'.cyan
,'\t'
,'\t  Jade supports template inheritance via the `block` and `extends` keywords. A block is simply a "block" of Jade that may be replaced within a child template, this process is recursive. To activate template inheritance in Express 2.x you must add: `app.set(\'view options\', { layout: false });`.'
,'\t'
,'\t  Jade blocks can provide default content if desired, however optional as shown below by `block scripts`, `block content`, and `block foot`.'
,'\t'

,'\thtml'.green
,'\t  head'.green
,'\t    h1 My Site - #{title}'.red
,'\t    block scripts'.green
,'\t      script(src=\'/jquery.js\')'.green
,'\t  body'.green
,'\t    block content'.green
,'\t    block foot'.green
,'\t      #footer'.red
,'\t        p some footer content'.green

,'\t'
,'\t  Now to extend the layout, simply create a new file and use the `extends` directive as shown below, giving the path (with or without the .jade extension). You may now define one or more blocks that will override the parent block content, note that here the `foot` block is _not_ redefined and will output "some footer content".'
,'\t'

,'\textends layout'.green
,'\t'.green
,'\tblock scripts'.green
,'\t  script(src=\'/jquery.js\')'.green
,'\t  script(src=\'/pets.js\')'.green
,'\t'.green
,'\tblock content'.green
,'\t  h1= title'.green
,'\t  each pet in pets'.green
,'\t    include pet'.green

,'\t'
,'\t  It\'s also possible to override a block to provide additional blocks, as shown in the following example where `content` now exposes a `sidebar` and `primary` block for overriding, or the child template could override `content` all together.'
,'\t'

,'\textends regular-layout'.green
,'\t'.green
,'\tblock content'.green
,'\t  .sidebar'.green
,'\t    block sidebar'.green
,'\t      p nothing'.green
,'\t  .primary'.green
,'\t    block primary'.green
,'\t      p nothing'.green

,'\t'
,'\t## Block append / prepend'.cyan
,'\t'
,'\t Jade allows you to _replace_ (default), _prepend_, or _append_ blocks. Suppose for example you have default scripts in a "head" block that you wish to utilize on _every_ page, you might do this:'
,'\t'

,'\thtml'.green
,'\t  head'.green
,'\t    block head'.green
,'\t      script(src=\'/vendor/jquery.js\')'.green
,'\t      script(src=\'/vendor/caustic.js\')'.green
,'\t    body'.green
,'\t      block content'.green

,'\t'
,'\t Now suppose you have a page of your application for a JavaScript game, you want some game related scripts as well as these defaults, you can simply `append` the block:'
,'\t'

,'\tinclude layout'.green
,'\t'.green
,'\tblock append head'.green
,'\t  script(src=\'/vendor/three.js\')'.green
,'\t  script(src=\'/game.js\')'.green

,'\t'
,'\t  When using `block append` or `block prepend` the `block` is optional:'
,'\t'

,'\tinclude layout'.green
,'\t'.green
,'\tappend head'.green
,'\t  script(src=\'/vendor/three.js\')'.green
,'\t  script(src=\'/game.js\')'.green

,'\t'
,'\t## Includes'.cyan
,'\t'
,'\t Includes allow you to statically include chunks of Jade,'
,'\t or other content like css, or html which lives in separate files. The classical example is including a header and footer. Suppose we have the following directory structure:'
,'\t'
,'\t    ./layout.jade'.green
,'\t    ./includes/'.green
,'\t      ./head.jade'.green
,'\t      ./foot.jade'.green
,'\t'
,'\tand the following _layout.jade_:'
,'\t'

,'\thtml'.green
,'\t  include includes/head'.green
,'\t  body'.green
,'\t    h1 My Site'.green
,'\t    p Welcome to my super amazing site.'.green
,'\t    include includes/foot'.green

,'\t'
,'\tboth includes _includes/head_ and _includes/foot_ are'
,'\tread relative to the `filename` option given to _layout.jade_,'
,'\twhich should be an absolute path to this file, however Express does this for you. Include then parses these files, and injects the AST produced to render what you would expect:'
,'\t'

,'\t<html>'.yellow
,'\t  <head>'.yellow
,'\t    <title>My Site</title>'.yellow
,'\t    <script src="/javascripts/jquery.js">'.yellow
,'\t    </script><script src="/javascripts/app.js"></script>'.yellow
,'\t  </head>'.yellow
,'\t  <body>'.yellow
,'\t    <h1>My Site</h1>'.yellow
,'\t    <p>Welcome to my super lame site.</p>'.yellow
,'\t    <div id="footer">'.yellow
,'\t      <p>Copyright>(c) foobar</p>'.yellow
,'\t    </div>'.yellow
,'\t  </body>'.yellow
,'\t</html>'.yellow

,'\t'
,'\t As mentioned `include` can be used to include other content'
,'\t such as html or css. By providing an extension Jade will not'
,'\t assume that the file is Jade source and will include it as'
,'\t a literal:'
,'\t'

,'\thtml'.green
,'\t  body'.green
,'\t    include content.html'.green

,'\t'
,'\t  Include directives may also accept a block, in which case the'
,'\t  the given block will be appended to the _last_ block defined'
,'\t  in the file. For example if `head.jade` contains:'
,'\t'

,'\thead'.yellow
,'\t  script(src=\'/jquery.js\')'.yellow

,'\t'
,'\t We may append values by providing a block to `include head`'
,'\t as shown below, adding the two scripts.'
,'\t'

,'\thtml'.green
,'\t  include head'.green
,'\t    script(src=\'/foo.js\')'.green
,'\t    script(src=\'/bar.js\')'.green
,'\t  body'.green
,'\t    h1 test'.green

,'\t'
,'\t You may also `yield` within an included template, allowing you to explicitly mark where the block given to `include` will be placed. Suppose for example you wish to prepend scripts rather than append, you might do the following:'
,'\t'

,'\thead'.yellow
,'\t  yield'.yellow
,'\t  script(src=\'/jquery.js\')'.yellow
,'\t  script(src=\'/jquery.ui.js\')'.yellow

,'\t'
,'\t Since included Jade is parsed and literally merges the AST, lexically scoped variables function as if the included Jade was written right in the same file. This means `include` may be used as sort of partial, for example support we have `user.jade` which utilizes a `user` variable.'
,'\t'

,'\th1= user.name'.green
,'\tp= user.occupation'.green

,'\t'
,'\tWe could then simply `include user` while iterating users, and since the `user` variable is already defined within the loop the included template will have access to it.'
,'\t'

,'\tusers = [{ name: \'Tobi\', occupation: \'Ferret\' }]'.green
,'\t'.green
,'\teach user in users'.green
,'\t  .user'.green
,'\t    include user'.green

,'\t'
,'\tyielding:'
,'\t'

,'\t<div class="user">'.yellow
,'\t  <h1>Tobi</h1>'.yellow
,'\t  <p>Ferret</p>'.yellow
,'\t</div>'.yellow

,'\t'
,'\tIf we wanted to expose a different variable name as `user` since `user.jade` references that name, we could simply define a new variable as shown here with `user = person`:'
,'\t'

,'\teach person in users'.green
,'\t  .user'.green
,'\t    user = person'.green
,'\t    include user'.green

,'\t'
,'\t## Mixins'.cyan
,'\t'
,'\t Mixins are converted to regular JavaScript functions in'
,'\t the compiled template that Jade constructs. Mixins may'
,'\t take arguments, though not required:'
,'\t'

,'\tmixin list'.green
,'\t  ul'.green
,'\t    li foo'.green
,'\t    li bar'.green
,'\t    li baz'.green

,'\t'
,'\t  Utilizing a mixin without args looks similar, just without a block:'
,'\t'

,'\th2 Groceries'.green
,'\tmixin list'.green

,'\t'
,'\t  Mixins may take one or more arguments as well, the arguments'
,'\t  are regular javascripts expressions, so for example the following:'
,'\t'

,'\tmixin pets(pets)'.green
,'\t  ul.pets'.green
,'\t    - each pet in pets'.green
,'\t      li= pet'.green
,'\t'.green
,'\tmixin profile(user)'.green
,'\t  .user'.green
,'\t    h2= user.name'.green
,'\t    mixin pets(user.pets)'.green

,'\t'
,'\t   Would yield something similar to the following html:'
,'\t'

,'\t<div class="user">'.yellow
,'\t  <h2>tj</h2>'.yellow
,'\t  <ul class="pets">'.yellow
,'\t    <li>tobi</li>'.yellow
,'\t    <li>loki</li>'.yellow
,'\t    <li>jane</li>'.yellow
,'\t    <li>manny</li>'.yellow
,'\t  </ul>'.yellow
,'\t</div>'.yellow

,'\t'
,'\t## Generated Output'.cyan
,'\t'
,'\t Suppose we have the following Jade:'
,'\t'

,'\t- var title = \'yay\''.green
,'\th1.title #{title}'.green
,'\tp Just an example'.green

,'\t'
,'\t When the `compileDebug` option is not explicitly `false`, Jade'
,'\t will compile the function instrumented with `__.lineno = n;`, which'
,'\t in the event of an exception is passed to `rethrow()` which constructs'
,'\t a useful message relative to the initial Jade input.'
,'\t'
,'\tfunction anonymous(locals) {'.green
,'\t  var __ = { lineno: 1, input: "- var title = \'yay\'\nh1.title #{title}\np Just an example", filename: "testing/test.js" };'.green
,'\t  var rethrow = jade.rethrow;'.green
,'\t  try {'.green
,'\t    var attrs = jade.attrs, escape = jade.escape;'.green
,'\t    var buf = [];'.green
,'\t    with (locals || {}) {'.green
,'\t      var interp;'.green
,'\t      __.lineno = 1;'.green
,'\t       var title = \'yay\''.green
,'\t      __.lineno = 2;'.green
,'\t      buf.push(\'<h1\');'.green
,'\t      buf.push(attrs({ "class": (\'title\') }));'.green
,'\t      buf.push(\'>\');'.green
,'\t      buf.push(\'\' + escape((interp = title) == null ? \'\' : interp) + \'\');'.green
,'\t      buf.push(\'</h1>\');'.green
,'\t      __.lineno = 3;'.green
,'\t      buf.push(\'<p>\');'.green
,'\t      buf.push(\'Just an example\');'.green
,'\t      buf.push(\'</p>\');'.green
,'\t    }'.green
,'\t    return buf.join("");'.green
,'\t  } catch (err) {'.green
,'\t    rethrow(err, __.input, __.filename, __.lineno);'.green
,'\t  }'.green
,'\t}'.green

,'\t'
,'\tWhen the `compileDebug` option _is_ explicitly `false`, this instrumentation'
,'\tis stripped, which is very helpful for light-weight client-side templates. Combining Jade\'s options with the `./runtime.js` file in this repo allows you'
,'\tto toString() compiled templates and avoid running the entire Jade library on'
,'\tthe client, increasing performance, and decreasing the amount of JavaScript'
,'\trequired.'
,'\t'
,'\tfunction anonymous(locals) {'.green
,'\t  var attrs = jade.attrs, escape = jade.escape;'.green
,'\t  var buf = [];'.green
,'\t  with (locals || {}) {'.green
,'\t    var interp;'.green
,'\t    var title = \'yay\''.green
,'\t    buf.push(\'<h1\');'.green
,'\t    buf.push(attrs({ "class": (\'title\') }));'.green
,'\t    buf.push(\'>\');'.green
,'\t    buf.push(\'\' + escape((interp = title) == null ? \'\' : interp) + \'\');'.green
,'\t    buf.push(\'</h1>\');'.green
,'\t    buf.push(\'<p>\');'.green
,'\t    buf.push(\'Just an example\');'.green
,'\t    buf.push(\'</p>\');'.green
,'\t  }'.green
,'\t  return buf.join("");'.green
,'\t}'.green

,'\t## jade(1)'.cyan
,'\t'

,'\t'
,'\tUsage: jade [options] [dir|file ...]'
,'\t'
,'\tOptions:'
,'\t'
,'\t  -h, --help         output usage information'.yellow
,'\t  -V, --version      output the version number'.yellow
,'\t  -o, --obj <str>    javascript options object'.yellow
,'\t  -O, --out <dir>    output the compiled html to <dir>'.yellow
,'\t  -p, --path <path>  filename used to resolve includes'.yellow
,'\t  -P, --pretty       compile pretty html output'.yellow
,'\t  -c, --client       compile for client-side runtime.js'.yellow
,'\t  -D, --no-debug     compile without debugging (smaller functions)'.yellow
,'\t'
,'\tExamples:'
,'\t'
,'\t  # translate jade the templates dir'
,'\t  $ jade templates'
,'\t'
,'\t  # create {foo,bar}.html'
,'\t  $ jade {foo,bar}.jade'
,'\t'
,'\t  # jade over stdio'
,'\t  $ jade < my.jade > my.html'
,'\t'
,'\t  # jade over stdio'
,'\t  $ echo "h1 Jade!" | jade'
,'\t'
,'\t  # foo, bar dirs rendering to /tmp'
,'\t  $ jade foo bar --out /tmp'
].join('\n');
