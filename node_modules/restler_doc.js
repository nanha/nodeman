exports.__doc__ = "NAME\n".yellow
    + "\trestler\n"
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/restler\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tAPI\n".red
    + "\t=====\n"
    + "\n"
    + "\trequest(url, options)\n".cyan
    + "\t----------------------\n"
    + "\n"
    + "\tBasic method to make a request of any type. The function returns a RestRequest object that emits events:\n"
    + "\n"

    + "\tevents\n".magenta
    + "\t-------\n"
    + "\n"
    + "\t- complete: function(result, response) - emitted when the request has finished whether it was successful or not. Gets passed the response result and the response object as arguments. If some error has occurred, result is always instance of Error, otherwise it contains response data.\n"
    + "\t- success: function(data, response) - emitted when the request was successful. Gets passed the response data and the response object as arguments.\n"
    + "\t- fail: function(data, response) - emitted when the request was successful, but 4xx status code returned. Gets passed the response data and the response object as arguments.\n"
    + "\t- error: function(err, response) - emitted when some errors have occurred (eg. connection aborted, parse, encoding, decoding failed or some other unhandled errors). Gets passed the Error object and the response object (when available) as arguments.\n"
    + "\t- abort: function() - emitted when request.abort() is called.\n"
    + "\t- 2XX, 3XX, 4XX, 5XX: function(data, response) - emitted for all requests with response codes in the range (eg. 2XX emitted for 200, 201, 203).\n"
    + "\t- actual response code: function(data, response) - emitted for every single response code (eg. 404, 201, etc).\n"
    + "\n"
    + "\tmembers\n".magenta
    + "\t-------\n"
    + "\n"
    + "\tabort([error]) Cancels request. abort event is emitted. request.aborted is set to true. If non-falsy error is passed, then error will be additionaly emitted (with error passed as a param and error.type is set to \"abort\"). Otherwise only complete event will raise.\n"
    + "\tretry([timeout]) Re-sends request after timeout ms. Pending request is aborted.\n"
    + "\taborted Determines if request was aborted.\n"
    + "\n"
    + "\tget(url, options)\n".cyan
    + "\t-----------------\n"
    + "\tCreate a GET request.\n"
    + "\n"

    + "\tpost(url, options)\n".cyan
    + "\t-----------------\n"
    + "\tCreate a POST request.\n"
    + "\n"

    + "\tput(url, options)\n".cyan
    + "\t-----------------\n"
    + "\tCreate a PUT request.\n"
    + "\n"

    + "\tdel(url, options)\n".cyan
    + "\t-----------------\n"
    + "\tCreate a DELETE request.\n"
    + "\n"

    + "\thead(url, options)\n".cyan
    + "\t-----------------\n"
    + "\tCreate a HEAD request.\n"
    + "\n"

    + "\tjson(url, data, options)\n".cyan
    + "\t-----------------\n"
    + "\tSend json data via GET method.\n"
    + "\n"

    + "\tpostJson(url, data, options)\n".cyan
    + "\t-----------------\n"
    + "\tSend json data via POST method.\n"
    + "\n"
    + "\n"
    + "\tExample usage\n".red
    + "\t===============\n"
    + "\n"
    + "\tvar rest = require('restler');\n".green

    + "\trest.get('http://google.com').on('complete', function(result) {\n".green
    + "\t  if (result instanceof Error) {\n".green
    + "\t    console.log('Error: ' + result.message);\n".green
    + "\t    this.retry(5000); // try again after 5 sec\n".green
    + "\t  } else {\n".green
    + "\t    console.log(result);\n".green
    + "\t  }\n".green
    + "\t});\n".green
    + "\n"
    + "\n"

    + "\trest.get('http://twaud.io/api/v1/users/danwrong.json').on('complete', function(data) {\n".green
    + "\t  console.log(data[0].message); // auto convert to object\n".green
    + "\t});\n".green
    + "\n"
    + "\n"

    + "\trest.get('http://twaud.io/api/v1/users/danwrong.xml').on('complete', function(data) {\n".green
    + "\t  console.log(data[0].sounds[0].sound[0].message); // auto convert to object\n".green
    + "\t});\n".green
    + "\n"
    + "\n"

    + "\t// multipart request sending a file and using https\n".green
    + "\trest.post('https://twaud.io/api/v1/upload.json', {\n".green
    + "\t  multipart: true,\n".green
    + "\t  username: 'danwrong',\n".green
    + "\t  password: 'wouldntyouliketoknow',\n".green
    + "\t  data: {\n".green
    + "\t    'sound[message]': 'hello from restler!',\n".green
    + "\t    'sound[file]': rest.file('doug-e-fresh_the-show.mp3', null, null, null, 'audio/mpeg')\n".green
    + "\t  }\n".green
    + "\t}).on('complete', function(data) {\n".green
    + "\t  console.log(data.audio_url);\n".green
    + "\t});\n".green
    + "\n"

    + "\tmore information: http://startic.kr/njs/package/restler\n".cyan
    ;
