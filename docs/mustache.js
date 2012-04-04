exports.name = 'mustache';
exports.category = 'template';
exports.context = 'use require';
exports.homepage = '';
exports.description = [
    "\tMustache.js".red
    , "\t============"
    , ""
    , "\t Logic-less {{mustache}} templates with JavaScript"
    , ""
    , ""
    ,"\tUsage".red
    ,"\t======"
    ,""
    ,"\tBelow is quick example how to use mustache.js:"
    ,""
    ,"\tvar view = {".green
    ,"\t  title: \"Joe\",".green
    ,"\t  calc: function () {".green
    ,"\t    return 2 + 4;".green
    ,"\t  }".green
    ,"\t};".green
    ,""
    ,""
    ,"\tvar output = Mustache.render(\"{{title}} spends {{calc}}\", view);".green
    ,""
    ,"\tIn this example, the Mustache.render function takes two parameters: 1) the mustache template and 2) a view object that contains the data and code needed to render the template."
    ,""
    ,""
    ,"\t\tCommonJS".cyan
    ,"\t\t---------"
    ,""
    ,"\t\tmustache.js is usable without any modification in both browsers and CommonJS environments like node.js. To use it as a CommonJS module, simply require the file, like this:"
    ,""
    ,"\t\tvar Mustache = require(\"mustache\");".green
    ,""
    ,""
    ,"\tTemplates".red
    ,"\t=========="
    ,""
    ,"\tA mustache template is a string that contains any number of mustache tags. Tags are indicated by the double mustaches that surround them. {{person}} is a tag, as is {{#person}}. In both examples we refer to person as the tag's key."
    ,""
    ,"\tThere are several types of tags available in mustache.js."
    ,""
    ,"\t\tVariables".cyan
    ,"\t\t---------"
    ,""
    ,"\t\tThe most basic tag type is a simple variable. A {{name}} tag renders the value of the name key in the current context. If there is no such key, nothing is rendered."
    ,""
    ,"\t\tAll variables are HTML-escaped by default. If you want to render unescaped HTML, use the triple mustache: {{{name}}}. You can also use & to unescape a variable."
    ,""
    ,"\t\tTemplate:".magenta
    ,""
    ,"\t\t* {{name}}".green
    ,"\t\t* {{age}}".green
    ,"\t\t* {{company}}".green
    ,"\t\t* {{{company}}}".green
    ,"\t\t* {{&company}}".green
    ,""
    ,"\t\tView:".magenta
    ,"\t"
    ,"\t\t{".green
    ,"\t\t  \"name\": \"Chris\",".green
    ,"\t\t  \"company\": \"<b>GitHub</b>\"".green
    ,"\t\t}".green
    ,"\t"
    ,"\t\tOutput:".magenta
    ,""
    ,"\t\t* Chris".green
    ,"\t\t*".green
    ,"\t\t* &lt;b&gt;GitHub&lt;/b&gt;".green
    ,"\t\t* <b>GitHub</b>".green
    ,"\t\t* <b>GitHub</b>".green
    ,""
    ,"\t\tJavaScript's dot notation may be used to access keys that are properties of objects in a view."
    ,""
    ,"\t\tTemplate:".magenta
    ,"\t"
    ,"\t\t* {{name.first}} {{name.last}}".green
    ,"\t\t* {{age}}".green
    ,"\t"
    ,"\t\tView:".magenta
    ,""
    ,"\t\t{".green
    ,"\t\t  \"name\": {".green
    ,"\t\t    \"first\": \"Michael\",".green
    ,"\t\t    \"last\": \"Jackson\"".green
    ,"\t\t  },".green
    ,"\t\t  \"age\": \"RIP\"".green
    ,"\t\t}".green
    ,""
    ,"\t\tOutput:".magenta
    ,""
    ,"\t\t* Michael Jackson".green
    ,"\t\t* RIP".green
    ,""
    ,""
    ,"\t\tSections".cyan
    ,"\t\t---------"
    ,""
    ,"\t\tSections render blocks of text one or more times, depending on the value of the key in the current context."
    ,""
    ,"\t\tA section begins with a pound and ends with a slash. That is, {{#person}} begins a person section, while {{/person}} ends it. The text between the two tags is referred to as that section's \"block\"."
    ,""
    ,"\t\tThe behavior of the section is determined by the value of the key."
    ,""
    ,""
    ,"\t\tFalse Values or Empty Lists".cyan
    ,"\t\t----------------------------"
    ,""
    ,"\t\tIf the person key exists and has a value of null, undefined, or false, or is an empty list, the block will not be rendered."
    ,""
    ,"\t\tTemplate:".magenta
    ,""
    ,"\t\tShown.".green
    ,"\t\t{{#nothin}}".green
    ,"\t\tNever shown!".green
    ,"\t\t{{/nothin}}".green
    ,""
    ,"\t\tView:".magenta
    ,""
    ,"\t\t{".green
    ,"\t\t  \"person\": true".green
    ,"\t\t}".green
    ,""
    ,"\t\tOutput:".magenta
	,""
    ,"\t\tShown.".green
	,""
    ,"\t\tNon-Empty Lists".cyan
    ,"\t\t----------------"
	,""
    ,"\t\tIf the person key exists and is not null, undefined, or false, and is not an empty list the block will be rendered one or more times."
	,""
    ,"\t\tWhen the value is a list, the block is rendered once for each item in the list. The context of the block is set to the current item in the list for each iteration. In this way we can loop over collections."
	,""
    ,"\t\tTemplate:".magenta
	,""
    ,"\t\t{{#stooges}}".green
    ,"\t\t<b>{{name}}</b>".green
    ,"\t\t{{/stooges}}".green
	,""
    ,"\t\tView:".magenta
	,""
    ,"\t\t{".green
    ,"\t\t  \"stooges\": [".green
    ,"\t\t    { \"name\": \"Moe\" },".green
    ,"\t\t    { \"name\": \"Larry\" },".green
    ,"\t\t    { \"name\": \"Curly\" }".green
    ,"\t\t  ]".green
    ,"\t\t}".green
	,""
    ,"\t\tOutput:".magenta
	,""
    ,"\t\t<b>Moe</b>".green
    ,"\t\t<b>Larry</b>".green
    ,"\t\t<b>Curly</b>".green
	,""
    ,"\t\tWhen looping over an array of strings, a . can be used to refer to the current item in the list."
	,""
    ,"\t\tTemplate:".magenta
	,""
    ,"\t\t{{#musketeers}}".green
    ,"\t\t* {{.}}".green
    ,"\t\t{{/musketeers}}".green
	,""
    ,"\t\tView:".magenta
	,""
    ,"\t\t{".green
    ,"\t\t  \"musketeers\": [\"Athos\", \"Aramis\", \"Porthos\", \"D'Artagnan\"]".green
    ,"\t\t}".green
	,""
    ,"\t\tOutput:".magenta
	,""
    ,"\t\t* Athos".green
    ,"\t\t* Aramis".green
    ,"\t\t* Porthos".green
    ,"\t\t* D'Artagnan".green
	,""
    ,"\t\tIf the value of a section variable is a function, it will be called in the context of the current item in the list on each iteration."
	,""
    ,"\t\tTemplate:".magenta
	,""
    ,"\t\t{{#beatles}}".green
    ,"\t\t* {{name}}".green
    ,"\t\t{{/beatles}}".green
	,""
    ,"\t\tView:".magenta
	,""
    ,"\t\t{".green
    ,"\t\t  \"beatles\": [".green
    ,"\t\t    { \"firstName\": \"John\", \"lastName\": \"Lennon\" },".green
    ,"\t\t    { \"firstName\": \"Paul\", \"lastName\": \"McCartney\" },".green
    ,"\t\t    { \"firstName\": \"George\", \"lastName\": \"Harrison\" },".green
    ,"\t\t    { \"firstName\": \"Ringo\", \"lastName\": \"Starr\" }".green
    ,"\t\t  ],".green
    ,"\t\t  \"name\": function () {".green
    ,"\t\t    return this.firstName + \" \" + this.lastName;".green
    ,"\t\t  }".green
    ,"\t\t}".green
	,""
    ,"\t\tOutput:".magenta
	,""
    ,"\t\t* John Lennon".green
    ,"\t\t* Paul McCartney".green
    ,"\t\t* George Harrison".green
    ,"\t\t* Ringo Starr".green
	,""
	,""
    ,"\t\tFunctions".cyan
    ,"\t\t-----------"
	,""
    ,"\t\tIf the value of a section key is a function, it is called with the section's literal block of text, un-rendered, as its first argument. The second argument is a special rendering function that uses the current view as its view argument. It is called in the context of the current view object."
	,""
    ,"\t\tTemplate:".magenta
	,""
    ,"\t\t{{#bold}}Hi {{name}}.{{/bold}}".green
	,""
    ,"\t\tView:".magenta
	,""
    ,"\t\t{".green
    ,"\t\t  \"name\": \"Tater\",".green
    ,"\t\t  \"bold\": function () {".green
    ,"\t\t    return function (text, render) {".green
    ,"\t\t      return \"<b>\" + render(text) + \"</b>\";".green
    ,"\t\t    }".green
    ,"\t\t  }".green
    ,"\t\t}".green
	,""
    ,"\t\tOutput:".magenta
    ,"\t\t-------"
    ,"\t\t<b>Hi Tater.</b>".green
	,""
	,""
    ,"\t\tInverted Sections".cyan
    ,"\t\t-------------------"
	,""
    ,"\t\tAn inverted section opens with {{^section}} instead of {{#section}}. The block of an inverted section is rendered only if the value of that section's tag is null, undefined, false, or an empty list."
	,""
    ,"\t\tTemplate:"
	,""
    ,"\t\t{{#repos}}<b>{{name}}</b>{{/repos}}".green
    ,"\t\t{{^repos}}No repos :({{/repos}}".green
	,""
    ,"\t\tView:"
	,""
    ,"\t\t{".green
    ,"\t\t  \"repos\": []".green
    ,"\t\t}".green
	,""
    ,"\t\tOutput:"
	,""
    ,"\t\tNo repos :(".green
	,""
    ,"\t\tComments".cyan
    ,"\t\t----------"
	,""
    ,"\t\tComments begin with a bang and are ignored. The following template:"
	,""
    ,"\t\t<h1>Today{{! ignore me }}.</h1>".green
	,""
    ,"\t\tWill render as follows:"
	,""
    ,"\t\t<h1>Today.</h1>".green
	,""
    ,"\t\tComments may contain newlines."
	,""
	,""
    ,"\t\tPartials".cyan
    ,"\t\t----------"
	,""
    ,"\t\tPartials begin with a greater than sign, like {{> box}}."
	,""
    ,"\t\tPartials are rendered at runtime (as opposed to compile time), so recursive partials are possible. Just avoid infinite loops."
	,""
    ,"\t\tThey also inherit the calling context. Whereas in ERB you may have this:"
	,""
    ,"\t\t<%= partial :next_more, :start => start, :size => size %>"
    ,"\t\tMustache requires only this:"
	,""
    ,"\t\t{{> next_more}}".green
	,""
    ,"\t\tWhy? Because the next_more.mustache file will inherit the size and start variables from the calling context. In this way you may want to think of partials as includes, or template expansion, even though it's not literally true."
	,""
    ,"\t\tFor example, this template and partial:"
	,""
    ,"\t\tbase.mustache:"
    ,"\t\t<h2>Names</h2>".green
    ,"\t\t{{#names}}".green
    ,"\t\t  {{> user}}".green
    ,"\t\t{{/names}}".green
	,""
    ,"\t\tuser.mustache:"
    ,"\t\t<strong>{{name}}</strong>".green
	,""
    ,"\t\tCan be thought of as a single, expanded template:"
	,""
    ,"\t\t<h2>Names</h2>".green
    ,"\t\t{{#names}}".green
    ,"\t\t  <strong>{{name}}</strong>".green
    ,"\t\t{{/names}}".green
    ,""
    ,"\t\tIn mustache.js an object of partials may be passed as the third argument to Mustache.render. The object should be keyed by the name of the partial, and its value should be the partial text."
    ,""
    ,"\t\tSet Delimiter".cyan
    ,"\t\t-------------"
	,""
    ,"\t\tSet Delimiter tags start with an equals sign and change the tag delimiters from {{ and }} to custom strings."
	,""
    ,"\t\tConsider the following contrived example:"
	,""
    ,"\t\t* {{ default_tags }}".green
    ,"\t\t{{=<% %>=}}".green
    ,"\t\t* <% erb_style_tags %>".green
    ,"\t\t<%={{ }}=%>".green
    ,"\t\t* {{ default_tags_again }}".green
	,""
    ,"\t\tHere we have a list with three items. The first item uses the default tag style, the second uses ERB style as defined by the Set Delimiter tag, and the third returns to the default style after yet another Set Delimiter declaration."
	,""
    ,"\t\tAccording to ctemplates, this \"is useful for languages like TeX, where double-braces may occur in the text and are awkward to use for markup.\""
	,""
    ,"\t\tCustom delimiters may not contain whitespace or the equals sign."
	,""
	,""
    ,"\tStreaming".red
    ,"\t==========="
    ,"\tTo stream template results out of mustache.js, you can pass an optional callback to the call to Mustache.render:"
	,""
    ,"\tMustache.render(template, view, partials, function (chunk) {".green
    ,"\t  print(chunk);".green
    ,"\t});".green
	,""
    ,"\tWhen the template is finished rendering, the callback will be called with null after which it won't be called anymore for that rendering."
].join('\n');
