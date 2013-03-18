# Overview

CoffeeScript on the left, compiled JavaScript output on the right.

## Assignment:

- from

    number   = 42
    opposite = true

- to

    var number, opposite;

    number = 42;
    opposite = true;

## Conditions:

- from

    number = -42 if opposite

- to

    if (opposite) {
      number = -42;
    }

## Functions:


- from

    square = (x) -> x * x

- to

    square = function(x) {
      return x * x;
    };

## Arrays:

- from

    list = [1, 2, 3, 4, 5]

- to

    list = [1, 2, 3, 4, 5];

## Objects:

- from

    math =
      root:   Math.sqrt
      square: square
      cube:   (x) -> x * square x

- to

    var square;
    math = {
      root: Math.sqrt,
      square: square,
      cube: function(x) {
        return x * square(x);
      }
    };

## Splats

- from

    race = (winner, runners...) ->
      print winner, runners

- to

    var __slice = [].slice;
    race = function() {
      var runners, winner;

      winner = arguments[0], runners = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return print(winner, runners);
    };

## Existence

- from

    alert "I knew it!" if elvis?

- to

    if (typeof elvis !== "undefined" && elvis !== null) {
      alert("I knew it!");
    }

## Array comprehensions

- from

    cubes = (math.cube num for num in list)

- to

    var cubes;
    cubes = (function() {
      var _i, _len, _results;

      _results = [];
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        num = list[_i];
        _results.push(math.cube(num));
      }
      return _results;
    })();



# Installation

The CoffeeScript compiler is itself written in CoffeeScript, using the Jison parser generator. The command-line version of coffee is available as a Node.js utility. The core compiler however, does not depend on Node, and can be run in any JavaScript environment, or in the browser (see "Try CoffeeScript", above).

To install, first make sure you have a working copy of the latest stable version of Node.js, and npm (the Node Package Manager). You can then install CoffeeScript with npm:

    npm install -g coffee-script

(Leave off the -g if you don't wish to install globally.)

If you'd prefer to install the latest master version of CoffeeScript, you can clone the CoffeeScript source repository from GitHub, or download the source directly. To install the lastest master CoffeeScript compiler with npm:

npm install -g http://github.com/jashkenas/coffee-script/tarball/master
Or, if you want to install to /usr/local, and don't want to use npm to manage it, open the coffee-script directory and run:

    sudo bin/cake install




# Usage

Once installed, you should have access to the coffee command, which can execute scripts, compile .coffee files into .js, and provide an interactive REPL. The coffee command takes the following options:

`-c, --compile`  Compile a `.coffee` script into a `.js` JavaScript file of the same name.
`-m, --map`  Generate source maps alongside the compiled JavaScript files. Adds `sourceMappingURL` directives to the JavaScript as well.
`-i, --interactive`  Launch an interactive CoffeeScript session to try short snippets. Identical to calling `coffee` with no arguments.
`-o, --output [DIR]`   Write out all compiled JavaScript files into the specified directory. Use in conjunction with `--compile` or `--watch`.
`-j, --join [FILE]`  Before compiling, concatenate all scripts together in the order they were passed, and write them into the specified file. Useful for building large projects.
`-w, --watch`  Watch files for changes, rerunning the specified command when any file is updated.
`-p, --print`  Instead of writing out the JavaScript as a file, print it directly to stdout.
`-l, --lint`   If the jsl (JavaScript Lint) command is installed, use it to check the compilation of a CoffeeScript file. (Handy in conjunction with 
--watch)
`-s, --stdio`  Pipe in CoffeeScript to STDIN and get back JavaScript over STDOUT. Good for use with processes written in other languages. An example: `cat src/cake.coffee | coffee -sc`
`-e, --eval`   Compile and print a little snippet of CoffeeScript directly from the command line. For example: `coffee -e "console.log num for num in [10..1]"`
`-b, --bare`   Compile the JavaScript without the top-level function safety wrapper.
`-t, --tokens`   Instead of parsing the CoffeeScript, just lex it, and print out the token stream: [IDENTIFIER square] [ASSIGN =] [PARAM_START (] ...
`-n, --nodes`  Instead of compiling the CoffeeScript, just lex and parse it, and print out the parse tree:
Expressions
  Assign
    Value "square"
    Code "x"
      Op *
        Value "x"
        Value "x"
`--nodejs`   The node executable has some useful options you can set, such as `--debug, --debug-brk, --max-stack-size, and --expose-gc`. Use this flag to forward options directly to Node.js. To pass multiple flags, use `--nodejs` multiple times.

## Examples:

Compile a directory tree of .coffee files in src into a parallel tree of .js files in lib:

    coffee --compile --output lib/ src/

Watch a file for changes, and recompile it every time the file is saved:

    coffee --watch --compile experimental.coffee

Concatenate a list of files into a single script:

    coffee --join project.js --compile src/*.coffee

Print out the compiled JS from a one-liner:

    coffee -bpe "alert i for i in [0..10]"

All together now, watch and recompile an entire project as you work on it:

    coffee -o lib/ -cw src/

Start the CoffeeScript REPL (Ctrl-D to exit, Ctrl-Vfor multi-line):
coffee



# Functions


Functions are defined by an optional list of parameters in parentheses, an arrow, and the function body. The empty function looks like this: `->`

- from

    square = (x) -> x * x
    cube   = (x) -> square(x) * x

- to

    var cube, square;

    square = function(x) {
      return x * x;
    };

    cube = function(x) {
      return square(x) * x;
    };


Functions may also have default values for arguments. Override the default value by passing a non-null argument.


- from

    fill = (container, liquid = "coffee") ->
      "Filling the #{container} with #{liquid}..."

- to

    var fill;

    fill = function(container, liquid) {
      if (liquid == null) {
        liquid = "coffee";
      }
      return "Filling the " + container + " with " + liquid + "...";
    };


# Objects and Arrays

The CoffeeScript literals for objects and arrays look very similar to their JavaScript cousins. When each property is listed on its own line, the commas are optional. Objects may be created using indentation instead of explicit braces, similar to YAML.


- from

    song = ["do", "re", "mi", "fa", "so"]

    singers = {Jagger: "Rock", Elvis: "Roll"}

    bitlist = [
      1, 0, 1
      0, 0, 1
      1, 1, 0
    ]

    kids =
      brother:
        name: "Max"
        age:  11
      sister:
        name: "Ida"
        age:  9


- to

    var bitlist, kids, singers, song;

    song = ["do", "re", "mi", "fa", "so"];

    singers = {
      Jagger: "Rock",
      Elvis: "Roll"
    };

    bitlist = [1, 0, 1, 0, 0, 1, 1, 1, 0];

    kids = {
      brother: {
        name: "Max",
        age: 11
      },
      sister: {
        name: "Ida",
        age: 9
      }
    };



In JavaScript, you can't use reserved words, like class, as properties of an object, without quoting them as strings. CoffeeScript notices reserved words used as keys in objects and quotes them for you, so you don't have to worry about it (say, when using jQuery).


- from

    $('.account').attr class: 'active'

    log object.class

- to

    $('.account').attr({
      "class": 'active'
    });

    log(object["class"]);




# Lexical Scoping and Variable Safety

The CoffeeScript compiler takes care to make sure that all of your variables are properly declared within lexical scope — you never need to write  var yourself.

- from

    outer = 1
    changeNumbers = ->
      inner = -1
      outer = 10
    inner = changeNumbers()

- to

    var changeNumbers, inner, outer;

    outer = 1;

    changeNumbers = function() {
      var inner;

      inner = -1;
      return outer = 10;
    };

    inner = changeNumbers();


# If, Else, Unless, and Conditional Assignment

- from

    mood = greatlyImproved if singing

    if happy and knowsIt
      clapsHands()
      chaChaCha()
    else
      showIt()

    date = if friday then sue else jill

- to

    var date, mood;

    if (singing) {
      mood = greatlyImproved;
    }

    if (happy && knowsIt) {
      clapsHands();
      chaChaCha();
    } else {
      showIt();
    }

    date = friday ? sue : jill;





# Splats...

The JavaScript arguments object is a useful way to work with functions that accept variable numbers of arguments. CoffeeScript provides splats ..., both for function definition as well as invocation, making variable numbers of arguments a little bit more palatable.


- from

    gold = silver = rest = "unknown"

    awardMedals = (first, second, others...) ->
      gold   = first
      silver = second
      rest   = others

    contenders = [
      "Michael Phelps"
      "Liu Xiang"
      "Yao Ming"
      "Allyson Felix"
      "Shawn Johnson"
      "Roman Sebrle"
      "Guo Jingjing"
      "Tyson Gay"
      "Asafa Powell"
      "Usain Bolt"
    ]

    awardMedals contenders...

    alert "Gold: " + gold
    alert "Silver: " + silver
    alert "The Field: " + rest


- to

    var awardMedals, contenders, gold, rest, silver,
      __slice = [].slice;

    gold = silver = rest = "unknown";

    awardMedals = function() {
      var first, others, second;

      first = arguments[0], second = arguments[1], others = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      gold = first;
      silver = second;
      return rest = others;
    };

    contenders = ["Michael Phelps", "Liu Xiang", "Yao Ming", "Allyson Felix", "Shawn Johnson", "Roman Sebrle", "Guo Jingjing", "Tyson Gay", "Asafa Powell", "Usain Bolt"];

    awardMedals.apply(null, contenders);

    alert("Gold: " + gold);

    alert("Silver: " + silver);

    alert("The Field: " + rest);






# Loops and Comprehensions

Most of the loops you'll write in CoffeeScript will be comprehensions over arrays, objects, and ranges. Comprehensions replace (and compile into) for loops, with optional guard clauses and the value of the current array index. Unlike for loops, array comprehensions are expressions, and can be returned and assigned.

- from

    # Eat lunch.
    eat food for food in ['toast', 'cheese', 'wine']

    # Fine five course dining.
    courses = ['greens', 'caviar', 'truffles', 'roast', 'cake']
    menu i + 1, dish for dish, i in courses

    # Health conscious meal.
    foods = ['broccoli', 'spinach', 'chocolate']
    eat food for food in foods when food isnt 'chocolate'

- to

    var courses, dish, food, foods, i, _i, _j, _k, _len, _len1, _len2, _ref;

    _ref = ['toast', 'cheese', 'wine'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      food = _ref[_i];
      eat(food);
    }

    courses = ['greens', 'caviar', 'truffles', 'roast', 'cake'];

    for (i = _j = 0, _len1 = courses.length; _j < _len1; i = ++_j) {
      dish = courses[i];
      menu(i + 1, dish);
    }

    foods = ['broccoli', 'spinach', 'chocolate'];

    for (_k = 0, _len2 = foods.length; _k < _len2; _k++) {
      food = foods[_k];
      if (food !== 'chocolate') {
        eat(food);
      }
    }



Comprehensions should be able to handle most places where you otherwise would use a loop, each/forEach, map, or select/filter, for example: shortNames = (name for name in list when name.length < 5)
If you know the start and end of your loop, or would like to step through in fixed-size increments, you can use a range to specify the start and end of your comprehension.


- from

    countdown = (num for num in [10..1])


- to

    var countdown, num;

    countdown = (function() {
      var _i, _results;

      _results = [];
      for (num = _i = 10; _i >= 1; num = --_i) {
        _results.push(num);
      }
      return _results;
    })();






Note how because we are assigning the value of the comprehensions to a variable in the example above, CoffeeScript is collecting the result of each iteration into an array. Sometimes functions end with loops that are intended to run only for their side-effects. Be careful that you're not accidentally returning the results of the comprehension in these cases, by adding a meaningful return value — like true — or null, to the bottom of your function.

To step through a range comprehension in fixed-size chunks, use by, for example:
evens = (x for x in [0..10] by 2)

Comprehensions can also be used to iterate over the keys and values in an object. Use of to signal comprehension over the properties of an object instead of the values in an array.


- from

    yearsOld = max: 10, ida: 9, tim: 11

    ages = for child, age of yearsOld
      "#{child} is #{age}"

- to

    var age, ages, child, yearsOld;

    yearsOld = {
      max: 10,
      ida: 9,
      tim: 11
    };

    ages = (function() {
      var _results;

      _results = [];
      for (child in yearsOld) {
        age = yearsOld[child];
        _results.push("" + child + " is " + age);
      }
      return _results;
    })();






If you would like to iterate over just the keys that are defined on the object itself, by adding a hasOwnProperty check to avoid properties that may be inherited from the prototype, use
for own key, value of object

The only low-level loop that CoffeeScript provides is the while loop. The main difference from JavaScript is that the while loop can be used as an expression, returning an array containing the result of each iteration through the loop.


- from

    # Econ 101
    if this.studyingEconomics
      buy()  while supply > demand
      sell() until supply > demand

    # Nursery Rhyme
    num = 6
    lyrics = while num -= 1
      "#{num} little monkeys, jumping on the bed.
        One fell out and bumped his head."

- to

    var lyrics, num;

    if (this.studyingEconomics) {
      while (supply > demand) {
        buy();
      }
      while (!(supply > demand)) {
        sell();
      }
    }

    num = 6;

    lyrics = (function() {
      var _results;

      _results = [];
      while (num -= 1) {
        _results.push("" + num + " little monkeys, jumping on the bed.    One fell out and bumped his head.");
      }
      return _results;
    })();






For readability, the until keyword is equivalent to while not, and the loop keyword is equivalent to while true.

When using a JavaScript loop to generate functions, it's common to insert a closure wrapper in order to ensure that loop variables are closed over, and all the generated functions don't just share the final values. CoffeeScript provides the do keyword, which immediately invokes a passed function, forwarding any arguments.

- from

    for filename in list
      do (filename) ->
        fs.readFile filename, (err, contents) ->
          compile filename, contents.toString()

- to

    var filename, _fn, _i, _len;

    _fn = function(filename) {
      return fs.readFile(filename, function(err, contents) {
        return compile(filename, contents.toString());
      });
    };
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      filename = list[_i];
      _fn(filename);
    }






# Array Slicing and Splicing with Ranges

Ranges can also be used to extract slices of arrays. With two dots (3..6), the range is inclusive (3, 4, 5, 6); with three dots (3...6), the range excludes the end (3, 4, 5). Slices indices have useful defaults. An omitted first index defaults to zero and an omitted second index defaults to the size of the array.

- from

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    start   = numbers[0..2]

    middle  = numbers[3...6]

    end     = numbers[6..]

    copy    = numbers[..]

- to

    var copy, end, middle, numbers, start;

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    start = numbers.slice(0, 3);

    middle = numbers.slice(3, 6);

    end = numbers.slice(6);

    copy = numbers.slice(0);



The same syntax can be used with assignment to replace a segment of an array with new values, splicing it.

- from

    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    numbers[3..6] = [-3, -4, -5, -6]

- to

    var numbers, _ref;

    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    [].splice.apply(numbers, [3, 4].concat(_ref = [-3, -4, -5, -6])), _ref;








# Everything is an Expression (at least, as much as possible)

You might have noticed how even though we don't add return statements to CoffeeScript functions, they nonetheless return their final value. The CoffeeScript compiler tries to make sure that all statements in the language can be used as expressions. Watch how the return gets pushed down into each possible branch of execution in the function below.

- from

    grade = (student) ->
      if student.excellentWork
        "A+"
      else if student.okayStuff
        if student.triedHard then "B" else "B-"
      else
        "C"

    eldest = if 24 > 21 then "Liz" else "Ike"

- to

    var eldest, grade;

    grade = function(student) {
      if (student.excellentWork) {
        return "A+";
      } else if (student.okayStuff) {
        if (student.triedHard) {
          return "B";
        } else {
          return "B-";
        }
      } else {
        return "C";
      }
    };

    eldest = 24 > 21 ? "Liz" : "Ike";



Even though functions will always return their final value, it's both possible and encouraged to return early from a function body writing out the explicit return (return value), when you know that you're done.

Because variable declarations occur at the top of scope, assignment can be used within expressions, even for variables that haven't been seen before:

- from

    six = (one = 1) + (two = 2) + (three = 3)

- to

    var one, six, three, two;

    six = (one = 1) + (two = 2) + (three = 3);






Things that would otherwise be statements in JavaScript, when used as part of an expression in CoffeeScript, are converted into expressions by wrapping them in a closure. This lets you do useful things, like assign the result of a comprehension to a variable:

- from

    # The first ten global properties.
    globals = (name for name of window)[0...10]

- to

    var globals, name;

    globals = ((function() {
      var _results;

      _results = [];
      for (name in window) {
        _results.push(name);
      }
      return _results;
    })()).slice(0, 10);




As well as silly things, like passing a try/catch statement directly into a function call:


- from

    alert(
      try
        nonexistent / undefined
      catch error
        "And the error is ... #{error}"
    )

- to

    var error;

    alert((function() {
      try {
        return nonexistent / void 0;
      } catch (_error) {
        error = _error;
        return "And the error is ... " + error;
      }
    })());


There are a handful of statements in JavaScript that can't be meaningfully converted into expressions, namely break, continue, and return. If you make use of them within a block of code, CoffeeScript won't try to perform the conversion.




# Operators and Aliases

Because the `==` operator frequently causes undesirable coercion, is intransitive, and has a different meaning than in other languages, CoffeeScript compiles `==` into `===`, and `!=` into  `!==`. In addition, is compiles into `===`, and `isnt` into `!==`.

You can use `not` as an alias for `!`.

For logic, `and` compiles to `&&`, and `or` into `||`.

Instead of a newline or semicolon, then can be used to separate conditions from expressions, in while, if/else, and switch/when statements.

As in YAML, `on` and `yes` are the same as boolean `true`, while `off` and `no` are boolean `false`.

`unless` can be used as the inverse of `if`.

As a shortcut for `this.property`, you can use `@property`.

You can use `in` to test for array presence, and `of` to test for JavaScript object-key presence.

All together now:

`CoffeeScript`    `JavaScript`
     is         ===
     isnt       !==
     not        !
     and        &&
     or         ||
true, yes, on   true
false, no, off  false
@, this         this
     of         in
     in         no JS equivalent


- from

    launch() if ignition is on

    volume = 10 if band isnt SpinalTap

    letTheWildRumpusBegin() unless answer is no

    if car.speed < limit then accelerate()

    winner = yes if pick in [47, 92, 13]

    print inspect "My name is #{@name}"

- to

    var volume, winner;

    if (ignition === true) {
      launch();
    }

    if (band !== SpinalTap) {
      volume = 10;
    }

    if (answer !== false) {
      letTheWildRumpusBegin();
    }

    if (car.speed < limit) {
      accelerate();
    }

    if (pick === 47 || pick === 92 || pick === 13) {
      winner = true;
    }

    print(inspect("My name is " + this.name));







# The Existential Operator

It's a little difficult to check for the existence of a variable in JavaScript. if (variable) ... comes close, but fails for zero, the empty string, and false. CoffeeScript's existential operator ? returns true unless a variable is null or undefined, which makes it analogous to Ruby's nil?

It can also be used for safer conditional assignment than ||= provides, for cases where you may be handling numbers or strings.

- from

    solipsism = true if mind? and not world?

    speed = 0
    speed ?= 15

    footprints = yeti ? "bear"


- to

    var footprints, solipsism, speed;

    if ((typeof mind !== "undefined" && mind !== null) && (typeof world === "undefined" || world === null)) {
      solipsism = true;
    }

    speed = 0;

    if (speed == null) {
      speed = 15;
    }

    footprints = typeof yeti !== "undefined" && yeti !== null ? yeti : "bear";





The accessor variant of the existential operator ?. can be used to soak up null references in a chain of properties. Use it instead of the dot accessor . in cases where the base value may be null or undefined. If all of the properties exist then you'll get the expected result, if the chain is broken, undefined is returned instead of the TypeError that would be raised otherwise.

- from

    zip = lottery.drawWinner?().address?.zipcode

- to

    var zip, _ref;

    zip = typeof lottery.drawWinner === "function" ? (_ref = lottery.drawWinner().address) != null ? _ref.zipcode : void 0 : void 0;

Soaking up nulls is similar to Ruby's andand gem, and to the safe navigation operator in Groovy.










# Classes, Inheritance, and Super

JavaScript's prototypal inheritance has always been a bit of a brain-bender, with a whole family tree of libraries that provide a cleaner syntax for classical inheritance on top of JavaScript's prototypes: Base2, Prototype.js, JS.Class, etc. The libraries provide syntactic sugar, but the built-in inheritance would be completely usable if it weren't for a couple of small exceptions: it's awkward to call super (the prototype object's implementation of the current function), and it's awkward to correctly set the prototype chain.

Instead of repetitively attaching functions to a prototype, CoffeeScript provides a basic `class` structure that allows you to name your class, set the superclass, assign prototypal properties, and define the constructor, in a single assignable expression.

Constructor functions are named, to better support helpful stack traces. In the first class in the example below, `this.constructor.name is "Animal"`.

- from

    class Animal
      constructor: (@name) ->

      move: (meters) ->
        alert @name + " moved #{meters}m."

    class Snake extends Animal
      move: ->
        alert "Slithering..."
        super 5

    class Horse extends Animal
      move: ->
        alert "Galloping..."
        super 45

    sam = new Snake "Sammy the Python"
    tom = new Horse "Tommy the Palomino"

    sam.move()
    tom.move()

- to

    var Animal, Horse, Snake, sam, tom, _ref, _ref1,
      __hasProp = {}.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Animal = (function() {
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.move = function(meters) {
        return alert(this.name + (" moved " + meters + "m."));
      };

      return Animal;

    })();

    Snake = (function(_super) {
      __extends(Snake, _super);

      function Snake() {
        _ref = Snake.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Snake.prototype.move = function() {
        alert("Slithering...");
        return Snake.__super__.move.call(this, 5);
      };

      return Snake;

    })(Animal);

    Horse = (function(_super) {
      __extends(Horse, _super);

      function Horse() {
        _ref1 = Horse.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      Horse.prototype.move = function() {
        alert("Galloping...");
        return Horse.__super__.move.call(this, 45);
      };

      return Horse;

    })(Animal);

    sam = new Snake("Sammy the Python");

    tom = new Horse("Tommy the Palomino");

    sam.move();

    tom.move();





If structuring your prototypes classically isn't your cup of tea, CoffeeScript provides a couple of lower-level conveniences. The extends operator helps with proper prototype setup, and can be used to create an inheritance chain between any pair of constructor functions; :: gives you quick access to an object's prototype; and super() is converted into a call against the immediate ancestor's method of the same name.

- from

    String::dasherize = ->
      this.replace /_/g, "-"

- to

    String.prototype.dasherize = function() {
      return this.replace(/_/g, "-");
    };


Finally, class definitions are blocks of executable code, which make for interesting metaprogramming possibilities. Because in the context of a class definition,  `this` is the class object itself (the constructor function), you can assign static properties by using 
`@property: value`, and call functions defined in parent classes: `@attr 'title', type: 'text'`










# Destructuring Assignment

To make extracting values from complex arrays and objects more convenient, CoffeeScript implements ECMAScript Harmony's proposed destructuring assignment syntax. When you assign an array or object literal to a value, CoffeeScript breaks up and matches both sides against each other, assigning the values on the right to the variables on the left. In the simplest case, it can be used for parallel assignment:

- from

    theBait   = 1000
    theSwitch = 0
    [theBait, theSwitch] = [theSwitch, theBait]

- to

    var theBait, theSwitch, _ref;

    theBait = 1000;

    theSwitch = 0;

    _ref = [theSwitch, theBait], theBait = _ref[0], theSwitch = _ref[1];


But it's also helpful for dealing with functions that return multiple values.

- from

    weatherReport = (location) ->
      # Make an Ajax request to fetch the weather...
      [location, 72, "Mostly Sunny"]

    [city, temp, forecast] = weatherReport "Berkeley, CA"


- to

    var city, forecast, temp, weatherReport, _ref;

    weatherReport = function(location) {
      return [location, 72, "Mostly Sunny"];
    };

    _ref = weatherReport("Berkeley, CA"), city = _ref[0], temp = _ref[1], forecast = _ref[2];


Destructuring assignment can be used with any depth of array and object nesting, to help pull out deeply nested properties.

- from

    futurists =
      sculptor: "Umberto Boccioni"
      painter:  "Vladimir Burliuk"
      poet:
        name:   "F.T. Marinetti"
        address: [
          "Via Roma 42R"
          "Bellagio, Italy 22021"
        ]

    {poet: {name, address: [street, city]}} = futurists

- to

    var city, futurists, name, street, _ref, _ref1;

    futurists = {
      sculptor: "Umberto Boccioni",
      painter: "Vladimir Burliuk",
      poet: {
        name: "F.T. Marinetti",
        address: ["Via Roma 42R", "Bellagio, Italy 22021"]
      }
    };

    _ref = futurists.poet, name = _ref.name, (_ref1 = _ref.address, street = _ref1[0], city = _ref1[1]);

Destructuring assignment can even be combined with splats.


- from

    tag = "<impossible>"

    [open, contents..., close] = tag.split("")


- to

    var close, contents, open, tag, _i, _ref,
      __slice = [].slice;

    tag = "<impossible>";

    _ref = tag.split(""), open = _ref[0], contents = 3 <= _ref.length ? __slice.call(_ref, 1, _i = _ref.length - 1) : (_i = 1, []), close = _ref[_i++];

Destructuring assignment is also useful when combined with class constructors to assign propeties to your instance from an options object passed to the constructor.

- from

    class Person
      constructor: (options) -> 
        {@name, @age, @height} = options

- to

    var Person;

    Person = (function() {
      function Person(options) {
        this.name = options.name, this.age = options.age, this.height = options.height;
      }

      return Person;

    })();


# Function binding

In JavaScript, the this keyword is dynamically scoped to mean the object that the current function is attached to. If you pass a function as a callback or attach it to a different object, the original value of this will be lost. If you're not familiar with this behavior, this Digital Web article gives a good overview of the quirks.

The fat arrow => can be used to both define a function, and to bind it to the current value of this, right on the spot. This is helpful when using callback-based libraries like Prototype or jQuery, for creating iterator functions to pass to each, or event-handler functions to use with bind. Functions created with the fat arrow are able to access properties of the this where they're defined.

- from

    Account = (customer, cart) ->
      @customer = customer
      @cart = cart

      $('.shopping_cart').bind 'click', (event) =>
        @customer.purchase @cart

- to

    var Account;

    Account = function(customer, cart) {
      var _this = this;

      this.customer = customer;
      this.cart = cart;
      return $('.shopping_cart').bind('click', function(event) {
        return _this.customer.purchase(_this.cart);
      });
    };

If we had used -> in the callback above, @customer would have referred to the undefined "customer" property of the DOM element, and trying to call purchase() on it would have raised an exception.

When used in a class definition, methods declared with the fat arrow will be automatically bound to each instance of the class when the instance is constructed.

# Embedded JavaScript

Hopefully, you'll never need to use it, but if you ever need to intersperse snippets of JavaScript within your CoffeeScript, you can use backticks to pass it straight through.


- from

    hi = `function() {
      return [document.title, "Hello JavaScript"].join(": ");
    }`

- to

    var hi;

    hi = function() {
      return [document.title, "Hello JavaScript"].join(": ");
    };

# Switch/When/Else

Switch statements in JavaScript are a bit awkward. You need to remember to break at the end of every case statement to avoid accidentally falling through to the default case. CoffeeScript prevents accidental fall-through, and can convert the switch into a returnable, assignable expression. The format is: switch condition,  when clauses, else the default case.

As in Ruby, switch statements in CoffeeScript can take multiple values for each when clause. If any of the values match, the clause runs.

- from

    switch day
      when "Mon" then go work
      when "Tue" then go relax
      when "Thu" then go iceFishing
      when "Fri", "Sat"
        if day is bingoDay
          go bingo
          go dancing
      when "Sun" then go church
      else go work

- to

    switch (day) {
      case "Mon":
        go(work);
        break;
      case "Tue":
        go(relax);
        break;
      case "Thu":
        go(iceFishing);
        break;
      case "Fri":
      case "Sat":
        if (day === bingoDay) {
          go(bingo);
          go(dancing);
        }
        break;
      case "Sun":
        go(church);
        break;
      default:
        go(work);
    }

Switch statements can also be used without a control expression, turning them in to a cleaner alternative to if/else chains.

- from

    score = 76
    grade = switch
      when score < 60 then 'F'
      when score < 70 then 'D'
      when score < 80 then 'C'
      when score < 90 then 'B'
      else 'A'
    # grade == 'C'

- to

    var grade, score;

    score = 76;

    grade = (function() {
      switch (false) {
        case !(score < 60):
          return 'F';
        case !(score < 70):
          return 'D';
        case !(score < 80):
          return 'C';
        case !(score < 90):
          return 'B';
        default:
          return 'A';
      }
    })();


# Try/Catch/Finally

Try/catch statements are just about the same as JavaScript (although they work as expressions).


- from

    try
      allHellBreaksLoose()
      catsAndDogsLivingTogether()
    catch error
      print error
    finally
      cleanUp()

- to

    var error;

    try {
      allHellBreaksLoose();
      catsAndDogsLivingTogether();
    } catch (_error) {
      error = _error;
      print(error);
    } finally {
      cleanUp();
    }


# Chained Comparisons

CoffeeScript borrows chained comparisons from Python — making it easy to test if a value falls within a certain range.


- from

    cholesterol = 127

    healthy = 200 > cholesterol > 60


- to

    var cholesterol, healthy;

    cholesterol = 127;

    healthy = (200 > cholesterol && cholesterol > 60);


# String Interpolation, Block Strings, and Block Comments

Ruby-style string interpolation is included in CoffeeScript. Double-quoted strings allow for interpolated values, using #{ ... }, and single-quoted strings are literal.

- from

    author = "Wittgenstein"
    quote  = "A picture is a fact. -- #{ author }"

    sentence = "#{ 22 / 7 } is a decent approximation of π"

- to

    var author, quote, sentence;

    author = "Wittgenstein";

    quote = "A picture is a fact. -- " + author;

    sentence = "" + (22 / 7) + " is a decent approximation of π";


# Multiline strings are allowed in CoffeeScript.

- from

    mobyDick = "Call me Ishmael. Some years ago --
     never mind how long precisely -- having little
     or no money in my purse, and nothing particular
     to interest me on shore, I thought I would sail
     about a little and see the watery part of the
     world..."

- to

    var mobyDick;

    mobyDick = "Call me Ishmael. Some years ago -- never mind how long precisely -- having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world...";


Block strings can be used to hold formatted or indentation-sensitive text (or, if you just don't feel like escaping quotes and apostrophes). The indentation level that begins the block is maintained throughout, so you can keep it all aligned with the body of your code.

- from

    html = """
           <strong>
             cup of coffeescript
           </strong>
           """
       
- to

    var html;

    html = "<strong>\n  cup of coffeescript\n</strong>";


Double-quoted block strings, like other double-quoted strings, allow interpolation.

Sometimes you'd like to pass a block comment through to the generated JavaScript. For example, when you need to embed a licensing header at the top of a file. Block comments, which mirror the syntax for block strings, are preserved in the generated code.

- from

    ###
    SkinnyMochaHalfCaffScript Compiler v1.0
    Released under the MIT License
    ###

- to

    /*
    SkinnyMochaHalfCaffScript Compiler v1.0
    Released under the MIT License
    */


# Block Regular Expressions

Similar to block strings and comments, CoffeeScript supports block regexes — extended regular expressions that ignore internal whitespace and can contain comments and interpolation. Modeled after Perl's /x modifier, CoffeeScript's block regexes are delimited by /// and go a long way towards making complex regular expressions readable. To quote from the CoffeeScript source:


- from

    OPERATOR = /// ^ (
      ?: [-=]>             # function
       | [-+*/%<>&|^!?=]=  # compound assign / compare
       | >>>=?             # zero-fill right shift
       | ([-+:])\1         # doubles
       | ([&|<>])\2=?      # logic / shift
       | \?\.              # soak access
       | \.{2,3}           # range or splat
    ) ///

- to

    var OPERATOR;

    OPERATOR = /^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>])\2=?|\?\.|\.{2,3})/;


# Cake, and Cakefiles

CoffeeScript includes a (very) simple build system similar to Make and Rake. Naturally, it's called Cake, and is used for the tasks that build and test the CoffeeScript language itself. Tasks are defined in a file named Cakefile, and can be invoked by running cake [task] from within the directory. To print a list of all the tasks and options, just type cake.

Task definitions are written in CoffeeScript, so you can put arbitrary code in your Cakefile. Define a task with a name, a long description, and the function to invoke when the task is run. If your task takes a command-line option, you can define the option with short and long flags, and it will be made available in the options object. Here's a task that uses the Node.js API to rebuild CoffeeScript's parser:

- from

    fs = require 'fs'

    option '-o', '--output [DIR]', 'directory for compiled code'

    task 'build:parser', 'rebuild the Jison parser', (options) ->
      require 'jison'
      code = require('./lib/grammar').parser.generate()
      dir  = options.output or 'lib'
      fs.writeFile "#{dir}/parser.js", code

- to

    var fs;

    fs = require('fs');

    option('-o', '--output [DIR]', 'directory for compiled code');

    task('build:parser', 'rebuild the Jison parser', function(options) {
      var code, dir;

      require('jison');
      code = require('./lib/grammar').parser.generate();
      dir = options.output || 'lib';
      return fs.writeFile("" + dir + "/parser.js", code);
    });


If you need to invoke one task before another — for example, running  build before test, you can use the invoke function:  invoke 'build'. Cake tasks are a minimal way to expose your CoffeeScript functions to the command line, so don't expect any fanciness built-in. If you need dependencies, or async callbacks, it's best to put them in your code itself — not the cake task.

# Source Maps

CoffeeScript 1.6.1 and above include support for generating source maps, a way to tell your JavaScript engine what part of your CoffeeScript program matches up with the code being evaluated. Browsers that support it can automatically use source maps to show your original source code in the debugger. To generate source maps alongside your JavaScript files, pass the --map or -m flag to the compiler.

For a full introduction to source maps, how they work, and how to hook them up in your browser, read the HTML5 Tutorial.

# "text/coffeescript" Script Tags

While it's not recommended for serious use, CoffeeScripts may be included directly within the browser using <script type="text/coffeescript"> tags. The source includes a compressed and minified version of the compiler (Download current version here, 39k when gzipped) as extras/coffee-script.js. Include this file on a page with inline CoffeeScript tags, and it will compile and evaluate them in order.

In fact, the little bit of glue script that runs "Try CoffeeScript" above, as well as the jQuery for the menu, is implemented in just this way. View source and look at the bottom of the page to see the example. Including the script also gives you access to CoffeeScript.compile() so you can pop open Firebug and try compiling some strings.

The usual caveats about CoffeeScript apply — your inline scripts will run within a closure wrapper, so if you want to expose global variables or functions, attach them to the window object.


