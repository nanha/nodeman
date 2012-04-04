exports.name = 'moment';
exports.category = 'date';
exports.context = 'use require';
exports.homepage = 'http://momentjs.com';
exports.description = [
	"\tvar moment = require('moment');".green
    , ""
	, "\tmoment().format('dddd, MMMM Do YYYY, h:mm:ss a');".green
	, "\tmoment().format('dddd [on the] wo [week of the year]');".green
	, "\tmoment().format(\"MMM Do 'YY\");".green
	, "\tmoment().format(); // defaults to ISO-8601".green
    , ""
    , "\tmore info: http://momentjs.com".red
].join('\n');
