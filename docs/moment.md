# Node.js

    $ npm install moment

    var moment = require('moment');
    moment().format();

# Formatting dates


    moment().format('MMMM Do YYYY, h:mm:ss a');
    moment().format('dddd');
    moment().format("MMM Do YY");
    moment().format('YYYY [escaped] YYYY');
    moment().format();


# Timeago

    moment("20111031", "YYYYMMDD").fromNow();
    moment("20120620", "YYYYMMDD").fromNow();
    moment().startOf('day').fromNow();
    moment().endOf('day').fromNow();
    moment().startOf('hour').fromNow();

more go homepage
