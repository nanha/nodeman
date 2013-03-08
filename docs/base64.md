# node-base64
* C/C++ library for encode and decode in base 64


## Install:
### way 1
1) go to the directory with node-base64 library

2) execute `node-waf configure build`

3) get module from `./build/default/base64.node`

You should use `var base64 = require("./build/default/base64");` (way to module)

### way 2 (works if node are installed in default path)
1) go to the directory with node-base64 library

2) execute `make`

You can use `var base64 = require("base64");` (from any path)

## Functions:
  encode(str); // Encode string
  decode(str); // Decode string
  
## Usage:
  var base64 = require('base64');
  var code = base64.encode('text');
  var str = base64.decode(code); // text
  
## Speed testing
To run speed test on your computer run test.js, here is my:
  C++ base64 result is: 82
  JS base64 result is: 517
  C++ module faster than JS in 6.304878048780488 times

<img src="http://nodejs.ru/img/small.png">



MIT License

 Copyright (c) <year> <copyright holders>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
