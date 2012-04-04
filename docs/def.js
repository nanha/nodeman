exports.name = 'def';
exports.category = 'oop';
exports.context = 'Node.js Black Edition. global, not require';
exports.homepage = '';
exports.description = [
"\tSimple Ruby-style inheritance for JavaScript"
, ""
,"\tExample".red
,"\t========"
, ""
,"\tdef (\"Person\") ({".green
,"\t    init: function(name){".green
,"\t        this.name = name;".green
,"\t    },".green
,""
,"\t    speak: function(text){".green
,"\t        alert(text || \"Hi, my name is \" + this.name);".green
,"\t    }".green
,"\t});".green
,""
,""
,"\tdef (\"Ninja\") << Person ({".green
,"\t    init: function(name){".green
,"\t        this._super();".green
,"\t    },".green
,""
,"\t    kick: function(){".green
,"\t        this.speak(\"I kick u!\");".green
,"\t    }".green
,"\t});".green
,""
,"\tvar ninjy = new Ninja(\"JDD\");".green
,""
,"\tninjy.speak();".green
,"\tninjy.kick(); ".green
].join('\n');
