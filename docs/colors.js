exports.name = 'colors';
exports.category = 'string';
exports.context = 'global, not require';
exports.homepage = 'http://startic.kr/njs/package/colors';
exports.description = [
"\tget color and style in your node.js console http://bit.ly/yIWvPi"
, ""
, "\tcolors and styles:"
, "\t - bold"
, "\t - italic"
, "\t - underline"
, "\t - inverse"
, "\t - yellow"
, "\t - cyan"
, "\t - white"
, "\t - magenta"
, "\t - green"
, "\t - red"
, "\t - grey"
, "\t - blue"
, "\t - rainbow"
, "\t - zebra"
, "\t - random\n"
, ""
, "\tUsage".red
, "\t======="
, ""
, "\t console.log('hello'.green); // outputs green text".green
, "\t console.log('i like cake and pies'.underline.red) // outputs red underlined text".green
, "\t console.log('inverse the color'.inverse); // inverses the color".green
, "\t console.log('OMG Rainbows!'.rainbow); // rainbow (ignores spaces)".green
].join('\n');
