exports.name = 'ejs';
exports.category = 'template';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/ejs';
exports.description = [
 '\t# EJS'.red
,'\t'
,'\tEmbedded JavaScript templates.'
,'\t'
,'\t## Installation'.cyan
,'\t'
,'\t    $ npm install ejs'.green
,'\t'
,'\t## Features'.cyan
,'\t'
,'\t  * Complies with the [Express](http://expressjs.com) view system'
,'\t  * Static caching of intermediate JavaScript'
,'\t  * Unbuffered code for conditionals etc `<% code %>`'
,'\t  * Escapes html by default with `<%= code %>`'
,'\t  * Unescaped buffering with `<%- code %>`'
,'\t  * Supports tag customization'
,'\t  * Filter support for designer-friendly templates'
,'\t  * Client-side support'
,'\t  * Newline slurping with `<% code -%>` or `<% -%>` or `<%= code -%>` or `<%- code -%>`'
,'\t'
,'\t## Example'.cyan
,'\t'
,'\t    <% if (user) { %>'.green
,'\t	    <h2><%= user.name %></h2>'.green
,'\t    <% } %>'.green
,'\t'
,'\t## Usage'.cyan
,'\t'
,'\t    ejs.compile(str, options);'.green
,'\t    // => Function'.green
,'\t'.green
,'\t    ejs.render(str, options);'.green
,'\t    // => str'.green
,'\t'
,'\t## Options'.cyan
,'\t'
,'\t  - `cache`           Compiled functions are cached, requires `filename`'
,'\t  - `filename`        Used by `cache` to key caches'
,'\t  - `scope`           Function execution context'
,'\t  - `debug`           Output generated function body'
,'\t  - `open`            Open tag, defaulting to "<%"'
,'\t  - `close`           Closing tag, defaulting to "%>"'
,'\t  - *                 All others are template-local variables'
,'\t'
,'\t## Custom tags'.cyan
,'\t'
,'\tCustom tags can also be applied globally:'
,'\t'
,'\t    var ejs = require(\'ejs\');'.green
,'\t    ejs.open = \'{{\';'.green
,'\t    ejs.close = \'}}\';'.green
,'\t'
,'\tWhich would make the following a valid template:'
,'\t'
,'\t    <h1>{{= title }}</h1>'.green
,'\t'
,'\t## Filters'.cyan
,'\t'
,'\tEJS conditionally supports the concept of "filters". A "filter chain"'
,'\tis a designer friendly api for manipulating data, without writing JavaScript.'
,'\t'
,'\tFilters can be applied by supplying the _:_ modifier, so for example if we wish to take the array `[{ name: \'tj\' }, { name: \'mape\' },  { name: \'guillermo\' }]` and output a list of names we can do this simply with filters:'
,'\t'
,'\tTemplate:'
,'\t'
,'\t    <p><%=: users | map:\'name\' | join %></p>'.green
,'\t'
,'\tOutput:'
,'\t'
,'\t    <p>Tj, Mape, Guillermo</p>'.yellow
,'\t'
,'\tRender call:'
,'\t'
,'\t    ejs.render(str, {'.green
,'\t        users: ['.green
,'\t          { name: \'tj\' },'.green
,'\t          { name: \'mape\' },'.green
,'\t          { name: \'guillermo\' }'.green
,'\t        ]'.green
,'\t    });'.green
,'\t'
,'\tOr perhaps capitalize the first user\'s name for display:'
,'\t'
,'\t    <p><%=: users | first | capitalize %></p>'.green
,'\t'
,'\t## Filter list'.cyan
,'\t'
,'\tCurrently these filters are available:'
,'\t'
,'\t  - first'
,'\t  - last'
,'\t  - capitalize'
,'\t  - downcase'
,'\t  - upcase'
,'\t  - sort'
,'\t  - sort_by:\'prop\''
,'\t  - size'
,'\t  - length'
,'\t  - plus:n'
,'\t  - minus:n'
,'\t  - times:n'
,'\t  - divided_by:n'
,'\t  - join:\'val\''
,'\t  - truncate:n'
,'\t  - truncate_words:n'
,'\t  - replace:pattern,substitution'
,'\t  - prepend:val'
,'\t  - append:val'
,'\t  - map:\'prop\''
,'\t  - reverse'
,'\t  - get:\'prop\''
,'\t'
,'\t## Adding filters'.cyan
,'\t'
,'\t To add a filter simply add a method to the `.filters` object:'
,'\t '
,'\tejs.filters.last = function(obj) {'.green
,'\t  return obj[obj.length - 1];'.green
,'\t};'.green
,'\t'
,'\t## client-side support'.cyan
,'\t'
,'\t  include `./ejs.js` or `./ejs.min.js` and `require("ejs").compile(str)`.'
,'\t'
].join('\n');
