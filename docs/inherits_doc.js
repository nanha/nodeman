exports.__doc__ = "NAME\n".yellow
    + "\tinherits\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://startic.kr/njs/package/inherits\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tvar inherits = require(\"inherits\")\n"
    + "\n"

    + "\tfunction Animal () {\n"
    + "\t  this.alive = true\n"
    + "\t}\n"
    + "\tAnimal.prototype.say = function (what) {\n"
    + "\t  console.log(what)\n"
    + "\t}\n"
    + "\n"

    + "\tinherits(Dog, Animal)\n"
    + "\tfunction Dog () {\n"
    + "\t  Dog.super.apply(this)\n"
    + "\t}\n"
    + "\tDog.prototype.sniff = function () {\n"
    + "\t  this.say(\"sniff sniff\")\n"
    + "\t}\n"
    + "\tDog.prototype.bark = function () {\n"
    + "\t  this.say(\"woof woof\")\n"
    + "\t}\n"
    + "\n"

    + "\tinherits(Chihuahua, Dog)\n"
    + "\tfunction Chihuahua () {\n"
    + "\t  Chihuahua.super.apply(this)\n"
    + "\t}\n"
    + "\tChihuahua.prototype.bark = function () {\n"
    + "\t  this.say(\"yip yip\")\n"
    + "\t}\n"
    + "\n"

    + "\t// also works\n"
    + "\tfunction Cat () {\n"
    + "\t  Cat.super.apply(this)\n"
    + "\t}\n"
    + "\tCat.prototype.hiss = function () {\n"
    + "\t  this.say(\"CHSKKSS!!\")\n"
    + "\t}\n"
    + "\tinherits(Cat, Animal, {\n"
    + "\t  meow: function () { this.say(\"miao miao\") }\n"
    + "\t})\n"
    + "\tCat.prototype.purr = function () {\n"
    + "\t  this.say(\"purr purr\")\n"
    + "\t}\n"
    + "\n"


    + "\tvar c = new Chihuahua\n"
    + "\tassert(c instanceof Chihuahua)\n"
    + "\tassert(c instanceof Dog)\n"
    + "\tassert(c instanceof Animal)\n"
    ;
