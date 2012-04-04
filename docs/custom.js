exports.name = 'print, etc...';
exports.category = 'util';
exports.context = 'Node.js Black Edition. global, not require';
exports.homepage = '';
exports.description = [
"\tprint".red
, "\t======="
, ""
, "\tconsole.log alternative"
, ""
, "\t> print('count: %d', 1)".green
, "\tcount: 1".yellow
, ""
, ""
, "\tString.prototype.stripTag".red
, "\t========================="
, ""
, "\t> \"<a href='#'>Hello Node.js Black Edition</a>\".stripTag()".green
, "\t'Hello Node.js Black Edition'".yellow
, ""
, ""
, "\tString.prototype.numberFormat".red
, "\t=============================="
, ""
,"\t> \"123456789\".numberFormat()".green
,"\t'123,456,789'".yellow
, ""
, ""
, "\tString.prototype.toArray".red
, "\t========================"
, ""
,"\t> \"123456789\".toArray()".green
,"\t[ '1',".yellow
,"\t  '2',".yellow
,"\t  '3',".yellow
,"\t  '4',".yellow
,"\t  '5',".yellow
,"\t  '6',".yellow
,"\t  '7',".yellow
,"\t  '8',".yellow
,"\t  '9' ],".yellow
, ""
, ""
, "\tArray.prototype.sum".red
, "\t========================"
, ""
,"\t> \"[1, 2, 3]\".sum()".green
,"\t6".yellow
].join('\n');
