exports.name = 'Class';
exports.category = 'OOP';
exports.context = 'Node.js Black Edition. global, not require';
exports.homepage = 'http://code.google.com/p/inheritance';
exports.description = [
"\tExample".red
,"\t========"
, ""
,"\tPerson = Class.extend({".green
,"\t  // initializer function".green
,"\t  initialize: function(name) {".green
,"\t    this.name = name;".green
,"\t  },".green
,""
,"\t  // ... methods ...".green
,"\t  getName: function() { return this.name; },".green
,""
,"\t  toString: function() {".green
,"\t    return this.name;".green
,"\t  }".green
,"\t});".green
,""
,"\tEmployee = Class.extend(Person, {".green
,"\t  // initializer function".green
,"\t  initialize: function(name, dept) {".green
,"\t    // call parent function".green
,"\t    this.parent(name);".green
,""
,"\t    // more initialization".green
,"\t    this.dept = dept;".green
,"\t  },".green
,""
,"\t  // ... methods ...".green
,""
,"\t  toString: function() {".green
,"\t    // call parent function".green
,"\t    return this.parent() + ' works in ' + this.dept;".green
,"\t  }".green
,"\t});".green
,""
,"\tvar name = 'nanha';".green
,"\tvar dept = 'devops';".green
,"\tvar o = new Employee(name, dept);".green
,"\tconsole.log(o.getName());".green
].join('\n');
