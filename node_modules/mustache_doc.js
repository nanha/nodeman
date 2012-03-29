exports.__doc__ = "NAME\n".yellow
    + "\tmustache\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttps://github.com/janl/mustache.js\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tMustache.js\n".red
    + "\t============\n"
    + "\n"
    + "\t Logic-less {{mustache}} templates with JavaScript\n"
    + "\n"
    + "\n"
    +"\tUsage\n".red
    +"\t======\n"
    +"\n"
    +"\tBelow is quick example how to use mustache.js:\n"
    +"\n"
    +"\tvar view = {\n".green
    +"\t  title: \"Joe\",\n".green
    +"\t  calc: function () {\n".green
    +"\t    return 2 + 4;\n".green
    +"\t  }\n".green
    +"\t};\n".green
    +"\n"
    +"\n"
    +"\tvar output = Mustache.render(\"{{title}} spends {{calc}}\", view);\n".green
    +"\n"
    +"\tIn this example, the Mustache.render function takes two parameters: 1) the mustache template and 2) a view object that contains the data and code needed to render the template.\n"
    +"\n"
    +"\n"
    +"\t\tCommonJS\n".cyan
    +"\t\t---------\n"
    +"\n"
    +"\t\tmustache.js is usable without any modification in both browsers and CommonJS environments like node.js. To use it as a CommonJS module, simply require the file, like this:\n"
    +"\n"
    +"\t\tvar Mustache = require(\"mustache\");\n".green
    +"\n"
    +"\n"
    +"\tTemplates\n".red
    +"\t==========\n"
    +"\n"
    +"\tA mustache template is a string that contains any number of mustache tags. Tags are indicated by the double mustaches that surround them. {{person}} is a tag, as is {{#person}}. In both examples we refer to person as the tag's key.\n"
    +"\n"
    +"\tThere are several types of tags available in mustache.js.\n"
    +"\n"
    +"\t\tVariables\n".cyan
    +"\t\t---------\n"
    +"\n"
    +"\t\tThe most basic tag type is a simple variable. A {{name}} tag renders the value of the name key in the current context. If there is no such key, nothing is rendered.\n"
    +"\n"
    +"\t\tAll variables are HTML-escaped by default. If you want to render unescaped HTML, use the triple mustache: {{{name}}}. You can also use & to unescape a variable.\n"
    +"\n"
    +"\t\tTemplate:\n".magenta
    +"\n"
    +"\t\t* {{name}}\n".green
    +"\t\t* {{age}}\n".green
    +"\t\t* {{company}}\n".green
    +"\t\t* {{{company}}}\n".green
    +"\t\t* {{&company}}\n".green
    +"\n"
    +"\t\tView:\n".magenta
    +"\t\n"
    +"\t\t{\n".green
    +"\t\t  \"name\": \"Chris\",\n".green
    +"\t\t  \"company\": \"<b>GitHub</b>\"\n".green
    +"\t\t}\n".green
    +"\t\n"
    +"\t\tOutput:\n".magenta
    +"\n"
    +"\t\t* Chris\n".green
    +"\t\t*\n".green
    +"\t\t* &lt;b&gt;GitHub&lt;/b&gt;\n".green
    +"\t\t* <b>GitHub</b>\n".green
    +"\t\t* <b>GitHub</b>\n".green
    +"\n"
    +"\t\tJavaScript's dot notation may be used to access keys that are properties of objects in a view.\n"
    +"\n"
    +"\t\tTemplate:\n".magenta
    +"\t\n"
    +"\t\t* {{name.first}} {{name.last}}\n".green
    +"\t\t* {{age}}\n".green
    +"\t\n"
    +"\t\tView:\n".magenta
    +"\n"
    +"\t\t{\n".green
    +"\t\t  \"name\": {\n".green
    +"\t\t    \"first\": \"Michael\",\n".green
    +"\t\t    \"last\": \"Jackson\"\n".green
    +"\t\t  },\n".green
    +"\t\t  \"age\": \"RIP\"\n".green
    +"\t\t}\n".green
    +"\n"
    +"\t\tOutput:\n".magenta
    +"\n"
    +"\t\t* Michael Jackson\n".green
    +"\t\t* RIP\n".green
    +"\n"
    +"\n"
    +"\t\tSections\n".cyan
    +"\t\t---------\n"
    +"\n"
    +"\t\tSections render blocks of text one or more times, depending on the value of the key in the current context.\n"
    +"\n"
    +"\t\tA section begins with a pound and ends with a slash. That is, {{#person}} begins a person section, while {{/person}} ends it. The text between the two tags is referred to as that section's \"block\".\n"
    +"\n"
    +"\t\tThe behavior of the section is determined by the value of the key.\n"
    +"\n"
    +"\n"
    +"\t\tFalse Values or Empty Lists\n".cyan
    +"\t\t----------------------------\n"
    +"\n"
    +"\t\tIf the person key exists and has a value of null, undefined, or false, or is an empty list, the block will not be rendered.\n"
    +"\n"
    +"\t\tTemplate:\n".magenta
    +"\n"
    +"\t\tShown.\n".green
    +"\t\t{{#nothin}}\n".green
    +"\t\tNever shown!\n".green
    +"\t\t{{/nothin}}\n".green
    +"\n"
    +"\t\tView:\n".magenta
    +"\n"
    +"\t\t{\n".green
    +"\t\t  \"person\": true\n".green
    +"\t\t}\n".green
    +"\n"
    +"\t\tOutput:\n".magenta
	+"\n"
    +"\t\tShown.\n".green
	+"\n"
    +"\t\tNon-Empty Lists\n".cyan
    +"\t\t----------------\n"
	+"\n"
    +"\t\tIf the person key exists and is not null, undefined, or false, and is not an empty list the block will be rendered one or more times.\n"
	+"\n"
    +"\t\tWhen the value is a list, the block is rendered once for each item in the list. The context of the block is set to the current item in the list for each iteration. In this way we can loop over collections.\n"
	+"\n"
    +"\t\tTemplate:\n".magenta
	+"\n"
    +"\t\t{{#stooges}}\n".green
    +"\t\t<b>{{name}}</b>\n".green
    +"\t\t{{/stooges}}\n".green
	+"\n"
    +"\t\tView:\n".magenta
	+"\n"
    +"\t\t{\n".green
    +"\t\t  \"stooges\": [\n".green
    +"\t\t    { \"name\": \"Moe\" },\n".green
    +"\t\t    { \"name\": \"Larry\" },\n".green
    +"\t\t    { \"name\": \"Curly\" }\n".green
    +"\t\t  ]\n".green
    +"\t\t}\n".green
	+"\n"
    +"\t\tOutput:\n".magenta
	+"\n"
    +"\t\t<b>Moe</b>\n".green
    +"\t\t<b>Larry</b>\n".green
    +"\t\t<b>Curly</b>\n".green
	+"\n"
    +"\t\tWhen looping over an array of strings, a . can be used to refer to the current item in the list.\n"
	+"\n"
    +"\t\tTemplate:\n".magenta
	+"\n"
    +"\t\t{{#musketeers}}\n".green
    +"\t\t* {{.}}\n".green
    +"\t\t{{/musketeers}}\n".green
	+"\n"
    +"\t\tView:\n".magenta
	+"\n"
    +"\t\t{\n".green
    +"\t\t  \"musketeers\": [\"Athos\", \"Aramis\", \"Porthos\", \"D'Artagnan\"]\n".green
    +"\t\t}\n".green
	+"\n"
    +"\t\tOutput:\n".magenta
	+"\n"
    +"\t\t* Athos\n".green
    +"\t\t* Aramis\n".green
    +"\t\t* Porthos\n".green
    +"\t\t* D'Artagnan\n".green
	+"\n"
    +"\t\tIf the value of a section variable is a function, it will be called in the context of the current item in the list on each iteration.\n"
	+"\n"
    +"\t\tTemplate:\n".magenta
	+"\n"
    +"\t\t{{#beatles}}\n".green
    +"\t\t* {{name}}\n".green
    +"\t\t{{/beatles}}\n".green
	+"\n"
    +"\t\tView:\n".magenta
	+"\n"
    +"\t\t{\n".green
    +"\t\t  \"beatles\": [\n".green
    +"\t\t    { \"firstName\": \"John\", \"lastName\": \"Lennon\" },\n".green
    +"\t\t    { \"firstName\": \"Paul\", \"lastName\": \"McCartney\" },\n".green
    +"\t\t    { \"firstName\": \"George\", \"lastName\": \"Harrison\" },\n".green
    +"\t\t    { \"firstName\": \"Ringo\", \"lastName\": \"Starr\" }\n".green
    +"\t\t  ],\n".green
    +"\t\t  \"name\": function () {\n".green
    +"\t\t    return this.firstName + \" \" + this.lastName;\n".green
    +"\t\t  }\n".green
    +"\t\t}\n".green
	+"\n"
    +"\t\tOutput:\n".magenta
	+"\n"
    +"\t\t* John Lennon\n".green
    +"\t\t* Paul McCartney\n".green
    +"\t\t* George Harrison\n".green
    +"\t\t* Ringo Starr\n".green
	+"\n"
	+"\n"
    +"\t\tFunctions\n".cyan
    +"\t\t-----------\n"
	+"\n"
    +"\t\tIf the value of a section key is a function, it is called with the section's literal block of text, un-rendered, as its first argument. The second argument is a special rendering function that uses the current view as its view argument. It is called in the context of the current view object.\n"
	+"\n"
    +"\t\tTemplate:\n".magenta
	+"\n"
    +"\t\t{{#bold}}Hi {{name}}.{{/bold}}\n".green
	+"\n"
    +"\t\tView:\n".magenta
	+"\n"
    +"\t\t{\n".green
    +"\t\t  \"name\": \"Tater\",\n".green
    +"\t\t  \"bold\": function () {\n".green
    +"\t\t    return function (text, render) {\n".green
    +"\t\t      return \"<b>\" + render(text) + \"</b>\";\n".green
    +"\t\t    }\n".green
    +"\t\t  }\n".green
    +"\t\t}\n".green
	+"\n"
    +"\t\tOutput:\n".magenta
    +"\t\t-------\n"
    +"\t\t<b>Hi Tater.</b>\n".green
	+"\n"
	+"\n"
    +"\t\tInverted Sections\n".cyan
    +"\t\t-------------------\n"
	+"\n"
    +"\t\tAn inverted section opens with {{^section}} instead of {{#section}}. The block of an inverted section is rendered only if the value of that section's tag is null, undefined, false, or an empty list.\n"
	+"\n"
    +"\t\tTemplate:\n"
	+"\n"
    +"\t\t{{#repos}}<b>{{name}}</b>{{/repos}}\n".green
    +"\t\t{{^repos}}No repos :({{/repos}}\n".green
	+"\n"
    +"\t\tView:\n"
	+"\n"
    +"\t\t{\n".green
    +"\t\t  \"repos\": []\n".green
    +"\t\t}\n".green
	+"\n"
    +"\t\tOutput:\n"
	+"\n"
    +"\t\tNo repos :(\n".green
	+"\n"
    +"\t\tComments\n".cyan
    +"\t\t----------\n"
	+"\n"
    +"\t\tComments begin with a bang and are ignored. The following template:\n"
	+"\n"
    +"\t\t<h1>Today{{! ignore me }}.</h1>\n".green
	+"\n"
    +"\t\tWill render as follows:\n"
	+"\n"
    +"\t\t<h1>Today.</h1>\n".green
	+"\n"
    +"\t\tComments may contain newlines.\n"
	+"\n"
	+"\n"
    +"\t\tPartials\n".cyan
    +"\t\t----------\n"
	+"\n"
    +"\t\tPartials begin with a greater than sign, like {{> box}}.\n"
	+"\n"
    +"\t\tPartials are rendered at runtime (as opposed to compile time), so recursive partials are possible. Just avoid infinite loops.\n"
	+"\n"
    +"\t\tThey also inherit the calling context. Whereas in ERB you may have this:\n"
	+"\n"
    +"\t\t<%= partial :next_more, :start => start, :size => size %>\n"
    +"\t\tMustache requires only this:\n"
	+"\n"
    +"\t\t{{> next_more}}\n".green
	+"\n"
    +"\t\tWhy? Because the next_more.mustache file will inherit the size and start variables from the calling context. In this way you may want to think of partials as includes, or template expansion, even though it's not literally true.\n"
	+"\n"
    +"\t\tFor example, this template and partial:\n"
	+"\n"
    +"\t\tbase.mustache:\n"
    +"\t\t<h2>Names</h2>\n".green
    +"\t\t{{#names}}\n".green
    +"\t\t  {{> user}}\n".green
    +"\t\t{{/names}}\n".green
	+"\n"
    +"\t\tuser.mustache:\n"
    +"\t\t<strong>{{name}}</strong>\n".green
	+"\n"
    +"\t\tCan be thought of as a single, expanded template:\n"
	+"\n"
    +"\t\t<h2>Names</h2>\n".green
    +"\t\t{{#names}}\n".green
    +"\t\t  <strong>{{name}}</strong>\n".green
    +"\t\t{{/names}}\n".green
    +"\n"
    +"\t\tIn mustache.js an object of partials may be passed as the third argument to Mustache.render. The object should be keyed by the name of the partial, and its value should be the partial text.\n"
    +"\n"
    +"\t\tSet Delimiter\n".cyan
    +"\t\t-------------\n"
	+"\n"
    +"\t\tSet Delimiter tags start with an equals sign and change the tag delimiters from {{ and }} to custom strings.\n"
	+"\n"
    +"\t\tConsider the following contrived example:\n"
	+"\n"
    +"\t\t* {{ default_tags }}\n".green
    +"\t\t{{=<% %>=}}\n".green
    +"\t\t* <% erb_style_tags %>\n".green
    +"\t\t<%={{ }}=%>\n".green
    +"\t\t* {{ default_tags_again }}\n".green
	+"\n"
    +"\t\tHere we have a list with three items. The first item uses the default tag style, the second uses ERB style as defined by the Set Delimiter tag, and the third returns to the default style after yet another Set Delimiter declaration.\n"
	+"\n"
    +"\t\tAccording to ctemplates, this \"is useful for languages like TeX, where double-braces may occur in the text and are awkward to use for markup.\"\n"
	+"\n"
    +"\t\tCustom delimiters may not contain whitespace or the equals sign.\n"
	+"\n"
	+"\n"
    +"\tStreaming\n".red
    +"\t===========\n"
    +"\tTo stream template results out of mustache.js, you can pass an optional callback to the call to Mustache.render:\n"
	+"\n"
    +"\tMustache.render(template, view, partials, function (chunk) {\n".green
    +"\t  print(chunk);\n".green
    +"\t});\n".green
	+"\n"
    +"\tWhen the template is finished rendering, the callback will be called with null after which it won't be called anymore for that rendering.\n"
    + "\n"
    ;
