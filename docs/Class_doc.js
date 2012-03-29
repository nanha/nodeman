exports.__doc__ = "NAME\n".yellow
    + "\tClass\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tglobal, not require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttp://code.google.com/p/inheritance\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    +"\tExample\n".red
    +"\t========\n"
    + "\n"
    +"\tPerson = Class.extend({\n".green
    +"\t  // initializer function\n".green
    +"\t  initialize: function(name) {\n".green
    +"\t    this.name = name;\n".green
    +"\t  },\n".green
    +"\n"
    +"\t  // ... methods ...\n".green
    +"\t  getName: function() { return this.name; },\n".green
    +"\n"
    +"\t  toString: function() {\n".green
    +"\t    return this.name;\n".green
    +"\t  }\n".green
    +"\t});\n".green
    +"\n"
    +"\tEmployee = Class.extend(Person, {\n".green
    +"\t  // initializer function\n".green
    +"\t  initialize: function(name, dept) {\n".green
    +"\t    // call parent function\n".green
    +"\t    this.parent(name);\n".green
    +"\n"
    +"\t    // more initialization\n".green
    +"\t    this.dept = dept;\n".green
    +"\t  },\n".green
    +"\n"
    +"\t  // ... methods ...\n".green
    +"\n"
    +"\t  toString: function() {\n".green
    +"\t    // call parent function\n".green
    +"\t    return this.parent() + ' works in ' + this.dept;\n".green
    +"\t  }\n".green
    +"\t});\n".green
    +"\n"
    +"\tvar name = 'nanha';\n".green
    +"\tvar dept = 'devops';\n".green
    +"\tvar o = new Employee(name, dept);\n".green
    +"\tconsole.log(o.getName());\n".green

    + "\n"
    ;
