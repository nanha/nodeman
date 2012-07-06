exports.name = 'emailjs';
exports.category = 'Server';
exports.context = 'use require';
exports.homepage = 'https://github.com/eleith/emailjs';
exports.description = [
,'\t## INSTALLING'.cyan
,'\t'
,'\t	npm install emailjs'.green
,'\t'
,'\t## FEATURES'.cyan
,'\t - works with SSL and TLS smtp servers (ex: gmail)'
,'\t - supports smtp authentication (PLAIN, LOGIN, CRAMMD5)'
,'\t - emails are queued and the queue is sent asynchronously'
,'\t - supports sending html emails and emails with multiple attachments (MIME)'
,'\t - attachments can be added as strings, streams or file paths'
,'\t - works with nodejs 3.8 and above'
,'\t'
,'\t## REQUIRES'.cyan
,'\t - access to an SMTP Server (ex: gmail)'
,'\t'
,'\t## EXAMPLE USAGE - text only emails'.cyan
,'\t'
,'\tvar email 	= require("./path/to/emailjs/email");'.green
,'\tvar server 	= email.server.connect({'.green
,'\t   user:    "username", '.green
,'\t   password:"password", '.green
,'\t   host:    "smtp.gmail.com", '.green
,'\t   ssl:     true'.green
,'\t   '.green
,'\t});'.green
,'\t'
,'\t// send the message and get a callback with an error or details of the message that was sent'.green
,'\tserver.send({'.green
,'\t   text:    "i hope this works", '.green
,'\t   from:    "you <username@gmail.com>", '.green
,'\t   to:      "someone <someone@gmail.com>, another <another@gmail.com>",'.green
,'\t   cc:      "else <else@gmail.com>",'.green
,'\t   subject: "testing emailjs"'.green
,'\t}, function(err, message) { console.log(err || message); });'.green
,'\t'
,'\t## EXAMPLE USAGE - html emails and attachments'.cyan
,'\t'
,'\tvar email 	= require("./path/to/emailjs/email");'.green
,'\tvar server 	= email.server.connect({'.green
,'\t   user:	"username", '.green
,'\t   password:"password", '.green
,'\t   host:	"smtp.gmail.com", '.green
,'\t   ssl:		true'.green
,'\t});'.green
,'\t'
,'\tvar message	= {'.green
,'\t   text:	"i hope this works", '.green
,'\t   from:	"you <username@gmail.com>", '.green
,'\t   to:		"someone <someone@gmail.com>, another <another@gmail.com>",'.green
,'\t   cc:		"else <else@gmail.com>",'.green
,'\t   subject:	"testing emailjs",'.green
,'\t   attachment: '.green
,'\t   ['.green
,'\t      {data:"<html>i <i>hope</i> this works!</html>", alternative:true},'.green
,'\t      {path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}'.green
,'\t   ]'.green
,'\t};'.green
,'\t'
,'\t// send the message and get a callback with an error or details of the message that was sent'.green
,'\tserver.send(message, function(err, message) { console.log(err || message); });'.green
,'\t'
,'\t// you can continue to send more messages with successive calls to \'server.send\', '.green
,'\t// they will be queued on the same smtp connection'.green
,'\t'
,'\t// or you can create a new server connection with \'email.server.connect\' '.green
,'\t// to asynchronously send individual emails instead of a queue'.green
,'\t'
,'\t# API '.red
,'\t'
,'\t## email.server.connect(options)'.cyan
,'\t'
,'\t	// options is an object with the following keys'.green
,'\t	options ='.green
,'\t	{'.green
,'\t		user 		// username for logging into smtp '.green
,'\t		password // password for logging into smtp'.green
,'\t		host		// smtp host'.green
,'\t		port		// smtp port (if null a standard port number will be used)'.green
,'\t		ssl		// boolean or object {key, ca, cert} (if exists, ssl connection will be made)'.green
,'\t		tls		// boolean (if true, starttls will be initiated)'.green
,'\t		timeout	// max number of milliseconds to wait for smtp responses (defaults to 5000)'.green
,'\t		domain	// domain to greet smtp with (defaults to os.hostname)'.green
,'\t	}'.green
,'\t	'
,'\t## email.server.send(message, callback)'.cyan
,'\t	'
,'\t	// message can be a smtp.Message (as returned by email.message.create)'
,'\t	// or an object identical to the first argument accepted by email.message.create'
,'\t'
,'\t	// callback will be executed with (err, message)'
,'\t	// either when message is sent or an error has occurred'
,'\t'
,'\t## message'.cyan
,'\t'
,'\t	// headers is an object (\'from\' and \'to\' are required)'
,'\t	// returns a Message object'
,'\t'
,'\t	// you can actually pass more message headers than listed, the below are just the'
,'\t	// most common ones you would want to use'
,'\t'
,'\t	headers ='.green
,'\t	{'.green
,'\t		text		// text of the email '.green
,'\t		from		// sender of the format (address or name <address> or "name" <address>)'.green
,'\t		to			// recipients (same format as above), multiple recipients are separated by a comma'.green
,'\t		cc			// carbon copied recipients (same format as above)'.green
,'\t		bcc		// blind carbon copied recipients (same format as above)'.green
,'\t		subject	// string subject of the email'.green
,'\t      attachment // one attachment or array of attachments'.green
,'\t	}'.green
,'\t'
,'\t## attachment'.cyan
,'\t'
,'\t    // can be called multiple times, each adding a new attachment'
,'\t    // options is an object with the following possible keys:'
,'\t    options ='.green
,'\t    {'.green
,'\t        // one of these fields is required'.green
,'\t        path      // string to where the file is located'.green
,'\t        data      // string of the data you want to attach'.green
,'\t        stream    // binary stream that will provide attachment data (make sure it is in the paused state)'.green
,'\t                  // better performance for binary streams is achieved if buffer.length % (76*6) == 0'.green
,'\t                  // current max size of buffer must be no larger than Message.BUFFERSIZE'.green
,'\t      '.green
,'\t        // optionally these fields are also accepted'.green
,'\t        type	      // string of the file mime type'.green
,'\t        name        // name to give the file as perceived by the recipient'.green
,'\t        alternative // if true, will be attached inline as an alternative (also defaults type=\'text/html\')'.green
,'\t        inline      // if true, will be attached inline'.green
,'\t        encoded     // set this to true if the data is already base64 encoded, (avoid this if possible)'.green
,'\t        headers     // object containing header=>value pairs for inclusion in this attachment\'s header'.green
,'\t        related     // an array of attachments that you want to be related to the parent attachment'.green
,'\t    }'.green
,'\t	'
,'\t## Testing'.cyan
,'\t'
,'\t	npm install -d'
,'\t	npm test'
].join('\n');
