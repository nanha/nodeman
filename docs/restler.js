exports.name = 'restler';
exports.category = 'scrap';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/restler';
exports.description = [
      "\tAPI".red
    , "\t====="
    , ""
    , "\trequest(url, options)".cyan
    , "\t----------------------"
    , ""
    , "\tBasic method to make a request of any type. The function returns a RestRequest object that emits events:"
    , ""

    , "\tevents".magenta
    , "\t-------"
    , ""
    , "\t- complete: function(result, response) - emitted when the request has finished whether it was successful or not. Gets passed the response result and the response object as arguments. If some error has occurred, result is always instance of Error, otherwise it contains response data."
    , "\t- success: function(data, response) - emitted when the request was successful. Gets passed the response data and the response object as arguments."
    , "\t- fail: function(data, response) - emitted when the request was successful, but 4xx status code returned. Gets passed the response data and the response object as arguments."
    , "\t- error: function(err, response) - emitted when some errors have occurred (eg. connection aborted, parse, encoding, decoding failed or some other unhandled errors). Gets passed the Error object and the response object (when available) as arguments."
    , "\t- abort: function() - emitted when request.abort() is called."
    , "\t- 2XX, 3XX, 4XX, 5XX: function(data, response) - emitted for all requests with response codes in the range (eg. 2XX emitted for 200, 201, 203)."
    , "\t- actual response code: function(data, response) - emitted for every single response code (eg. 404, 201, etc)."
    , ""
    , "\tmembers".magenta
    , "\t-------"
    , ""
    , "\tabort([error]) Cancels request. abort event is emitted. request.aborted is set to true. If non-falsy error is passed, then error will be additionaly emitted (with error passed as a param and error.type is set to \"abort\"). Otherwise only complete event will raise."
    , "\tretry([timeout]) Re-sends request after timeout ms. Pending request is aborted."
    , "\taborted Determines if request was aborted."
    , ""
    , "\tget(url, options)".cyan
    , "\t-----------------"
    , "\tCreate a GET request."
    , ""

    , "\tpost(url, options)".cyan
    , "\t-----------------"
    , "\tCreate a POST request."
    , ""

    , "\tput(url, options)".cyan
    , "\t-----------------"
    , "\tCreate a PUT request."
    , ""

    , "\tdel(url, options)".cyan
    , "\t-----------------"
    , "\tCreate a DELETE request."
    , ""

    , "\thead(url, options)".cyan
    , "\t-----------------"
    , "\tCreate a HEAD request."
    , ""

    , "\tjson(url, data, options)".cyan
    , "\t-----------------"
    , "\tSend json data via GET method."
    , ""

    , "\tpostJson(url, data, options)".cyan
    , "\t-----------------"
    , "\tSend json data via POST method."
    , ""
    , ""
    , "\tExample usage".red
    , "\t==============="
    , ""
    , "\tvar rest = require('restler');".green

    , "\trest.get('http://google.com').on('complete', function(result) {".green
    , "\t  if (result instanceof Error) {".green
    , "\t    console.log('Error: ' + result.message);".green
    , "\t    this.retry(5000); // try again after 5 sec".green
    , "\t  } else {".green
    , "\t    console.log(result);".green
    , "\t  }".green
    , "\t});".green
    , ""
    , ""

    , "\trest.get('http://twaud.io/api/v1/users/danwrong.json').on('complete', function(data) {".green
    , "\t  console.log(data[0].message); // auto convert to object".green
    , "\t});".green
    , ""
    , ""

    , "\trest.get('http://twaud.io/api/v1/users/danwrong.xml').on('complete', function(data) {".green
    , "\t  console.log(data[0].sounds[0].sound[0].message); // auto convert to object".green
    , "\t});".green
    , ""
    , ""

    , "\t// multipart request sending a file and using https".green
    , "\trest.post('https://twaud.io/api/v1/upload.json', {".green
    , "\t  multipart: true,".green
    , "\t  username: 'danwrong',".green
    , "\t  password: 'wouldntyouliketoknow',".green
    , "\t  data: {".green
    , "\t    'sound[message]': 'hello from restler!',".green
    , "\t    'sound[file]': rest.file('doug-e-fresh_the-show.mp3', null, null, null, 'audio/mpeg')".green
    , "\t  }".green
    , "\t}).on('complete', function(data) {".green
    , "\t  console.log(data.audio_url);".green
    , "\t});".green
    , ""

    , "\tmore information: http://startic.kr/njs/package/restler".cyan
].join('\n');
