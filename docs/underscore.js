exports.name = 'underscore';
exports.category = 'Manipulate';
exports.context = 'use require';
exports.homepage = 'http://documentcloud.github.com/underscore';
exports.description = [
 "\tCollection Functions (Arrays or Objects)".red
,"\t========================================="
,""
,"\teach_.each(list, iterator, [context]) Alias: forEach ".cyan
,"\t--------------------------------------------------------"
,""
,"\tIterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists."
,""
,"\t_.each([1, 2, 3], function(num){ alert(num); });".green
,"\t=> alerts each number in turn...".yellow
,"\t_.each({one : 1, two : 2, three : 3}, function(num, key){ alert(num); });".green
,"\t=> alerts each number in turn...".yellow
,""
,""
,"\tmap_.map(list, iterator, [context]) Alias: collect ".cyan
,"\t--------------------------------------------------------"
,""
,"\tProduces a new array of values by mapping each value in list through a transformation function (iterator). If the native map method exists, it will be used instead. If list is a JavaScript object, iterator's arguments will be (value, key, list)."
,"\t"
,"\t_.map([1, 2, 3], function(num){ return num * 3; });".green
,"\t=> [3, 6, 9]".yellow
,"\t_.map({one : 1, two : 2, three : 3}, function(num, key){ return num * 3; });".green
,"\t=> [3, 6, 9]".yellow
,""
,""
,"\tfilter_.filter(list, iterator, [context]) Alias: select ".cyan
,"\t--------------------------------------------------------"
,""
,"\tLooks through each value in the list, returning an array of all the values that pass a truth test (iterator). Delegates to the native filter method, if it exists."
,"\t"
,"\tvar evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });".green
,"\t=> [2, 4, 6]".yellow
, ""
, ""
, "\tmore information: http://documentcloud.github.com/underscore/".yellow
].join('\n');
