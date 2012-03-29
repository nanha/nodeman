exports.__doc__ = "NAME\n".yellow
    + "\tbase64\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttps://github.com/brainfucker/node-base64\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    +"\tFunctions\n".red
    +"\t==========\n"
    + "\n"
    +"\t- encode(str); // Encode string\n"
    +"\t- decode(str); // Decode string\n"
    + "\n"
    + "\n"
    +"\tUsage\n".red
    +"\t=======\n"
    + "\n"
    +"\tvar base64 = require('base64');\n".green
    +"\tvar code = base64.encode('text');\n".green
    +"\tvar str = base64.decode(code); // text\n".green
    + "\n"
    + "\n"
    +"\tSpeed testing\n".red
    +"\t==============\n"
    + "\n"
    +"\tTo run speed test on your computer run test.js, here is my: C++ base64 result is: 82 JS base64 result is: 517 C++ module faster than JS in 6.304878048780488 times\n"
    + "\n"
    ;
