exports.__doc__ = "NAME\n".yellow
    + "\tdef\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tglobal, not require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttps://github.com/tobeytailor/def.js\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    +"\tSimple Ruby-style inheritance for JavaScript\n"
    + "\n"
    +"\tExample\n".red
    +"\t========\n"
    + "\n"
    +"\tdef (\"Person\") ({\n".green
    +"\t    init: function(name){\n".green
    +"\t        this.name = name;\n".green
    +"\t    },\n".green
    +"\n"
    +"\t    speak: function(text){\n".green
    +"\t        alert(text || \"Hi, my name is \" + this.name);\n".green
    +"\t    }\n".green
    +"\t});\n".green
    +"\n"
    +"\tdef (\"Ninja\") << Person ({\n".green
    +"\t    init: function(name){\n".green
    +"\t        this._super();\n".green
    +"\t    },\n".green
    +"\n"
    +"\t    kick: function(){\n".green
    +"\t        this.speak(\"I kick u!\");\n".green
    +"\t    }\n".green
    +"\t});\n".green
    +"\n"
    +"\tvar ninjy = new Ninja(\"JDD\");\n".green
    +"\n"
    +"\tninjy.speak();\n".green
    +"\tninjy.kick(); \n".green
    + "\n"
    ;
