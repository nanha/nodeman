exports.name = 'inherits';
exports.category = 'oop';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/inherits';
exports.description = [
     "\tvar inherits = require(\"inherits\")"
    , ""

    , "\tfunction Animal () {"
    , "\t  this.alive = true"
    , "\t}"
    , "\tAnimal.prototype.say = function (what) {"
    , "\t  console.log(what)"
    , "\t}"
    , ""

    , "\tinherits(Dog, Animal)"
    , "\tfunction Dog () {"
    , "\t  Dog.super.apply(this)"
    , "\t}"
    , "\tDog.prototype.sniff = function () {"
    , "\t  this.say(\"sniff sniff\")"
    , "\t}"
    , "\tDog.prototype.bark = function () {"
    , "\t  this.say(\"woof woof\")"
    , "\t}"
    , ""

    , "\tinherits(Chihuahua, Dog)"
    , "\tfunction Chihuahua () {"
    , "\t  Chihuahua.super.apply(this)"
    , "\t}"
    , "\tChihuahua.prototype.bark = function () {"
    , "\t  this.say(\"yip yip\")"
    , "\t}"
    , ""

    , "\t// also works"
    , "\tfunction Cat () {"
    , "\t  Cat.super.apply(this)"
    , "\t}"
    , "\tCat.prototype.hiss = function () {"
    , "\t  this.say(\"CHSKKSS!!\")"
    , "\t}"
    , "\tinherits(Cat, Animal, {"
    , "\t  meow: function () { this.say(\"miao miao\") }"
    , "\t})"
    , "\tCat.prototype.purr = function () {"
    , "\t  this.say(\"purr purr\")"
    , "\t}"
    , ""


    , "\tvar c = new Chihuahua"
    , "\tassert(c instanceof Chihuahua)"
    , "\tassert(c instanceof Dog)"
    , "\tassert(c instanceof Animal)"
].join('\n');
