exports.name = 'async';
exports.category = 'ControlFlow';
exports.context = 'use require';
exports.homepage = 'https://github.com/caolan/async';
exports.description = [
 '\t# Async.js'.red
,'\t'
,'\t## Quick Examples'.cyan
,'\t'
,'\t    async.map([\'file1\',\'file2\',\'file3\'], fs.stat, function(err, results){'.green
,'\t        // results is now an array of stats for each file'.green
,'\t    });'.green
,'\t'.green
,'\t    async.filter([\'file1\',\'file2\',\'file3\'], path.exists, function(results){'.green
,'\t        // results now equals an array of the existing files'.green
,'\t    });'.green
,'\t'.green
,'\t    async.parallel(['.green
,'\t        function(){ ... },'.green
,'\t        function(){ ... }'.green
,'\t    ], callback);'.green
,'\t'.green
,'\t    async.series(['.green
,'\t        function(){ ... },'.green
,'\t        function(){ ... }'.green
,'\t    ]);'.green
,'\t'
,'\tThere are many more functions available so take a look at the docs below for a'
,'\tfull list. This module aims to be comprehensive, so if you feel anything is'
,'\tmissing please create a GitHub issue for it.'
,'\t'
,'\t'
,'\t## Download'.cyan
,'\t'
,'\t    npm install async'.green
,'\t'
,'\t## Documentation'.cyan
,'\t'
,'\t### Collections'.magenta
,'\t'
,'\t* [forEach](#forEach)'.red
,'\t* [map](#map)'.red
,'\t* [filter](#filter)'.red
,'\t* [reject](#reject)'.red
,'\t* [reduce](#reduce)'.red
,'\t* [detect](#detect)'.red
,'\t* [sortBy](#sortBy)'.red
,'\t* [some](#some)'.red
,'\t* [every](#every)'.red
,'\t* [concat](#concat)'.red
,'\t'
,'\t### Control Flow'.magenta
,'\t'
,'\t* [series](#series)'.red
,'\t* [parallel](#parallel)'.red
,'\t* [whilst](#whilst)'.red
,'\t* [until](#until)'.red
,'\t* [waterfall](#waterfall)'.red
,'\t* [queue](#queue)'.red
,'\t* [auto](#auto)'.red
,'\t* [iterator](#iterator)'.red
,'\t* [apply](#apply)'.red
,'\t* [nextTick](#nextTick)'.red
,'\t'
,'\t### Utils'.magenta
,'\t'
,'\t* [memoize](#memoize)'.red
,'\t* [unmemoize](#unmemoize)'.red
,'\t* [log](#log)'.red
,'\t* [dir](#dir)'.red
,'\t* [noConflict](#noConflict)'.red
,'\t'
,'\t'
,'\t## Collections'.cyan
,'\t'
,'\t### forEach(arr, iterator, callback)'.magenta
,'\t'
,'\tApplies an iterator function to each item in an array, in parallel.'
,'\tThe iterator is called with an item from the list and a callback for when it'
,'\thas finished. If the iterator passes an error to this callback, the main'
,'\tcallback for the forEach function is immediately called with the error.'
,'\t'
,'\tNote, that since this function applies the iterator to each item in parallel'
,'\tthere is no guarantee that the iterator functions will complete in order.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* iterator(item, callback) - A function to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed.'.yellow
,'\t* callback(err) - A callback which is called after all the iterator functions'.yellow
,'\t  have finished, or an error has occurred.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    // assuming openFiles is an array of file names and saveFile is a function'.green
,'\t    // to save the modified contents of that file:'.green
,'\t'.green
,'\t    async.forEach(openFiles, saveFile, function(err){'.green
,'\t        // if any of the saves produced an error, err would equal that error'.green
,'\t    });'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### forEachSeries(arr, iterator, callback)'.magenta
,'\t'
,'\tThe same as forEach only the iterator is applied to each item in the array in'
,'\tseries. The next iterator is only called once the current one has completed'
,'\tprocessing. This means the iterator functions will complete in order.'
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### forEachLimit(arr, limit, iterator, callback)'.magenta
,'\t'
,'\tThe same as forEach only the iterator is applied to batches of items in the'
,'\tarray, in series. The next batch of iterators is only called once the current'
,'\tone has completed processing.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* limit - How many items should be in each batch.'.yellow
,'\t* iterator(item, callback) - A function to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed.'.yellow
,'\t* callback(err) - A callback which is called after all the iterator functions'.yellow
,'\t  have finished, or an error has occurred.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    // Assume documents is an array of JSON objects and requestApi is a'.green
,'\t    // function that interacts with a rate-limited REST api.'.green
,'\t'.green
,'\t    async.forEachLimit(documents, 20, requestApi, function(err){'.green
,'\t        // if any of the saves produced an error, err would equal that error'.green
,'\t    });'.green
,'\t---------------------------------------'
,'\t'
,'\t### map(arr, iterator, callback)'.magenta
,'\t'
,'\tProduces a new array of values by mapping each value in the given array through'
,'\tthe iterator function. The iterator is called with an item from the array and a'
,'\tcallback for when it has finished processing. The callback takes 2 arguments, '
,'\tan error and the transformed item from the array. If the iterator passes an'
,'\terror to this callback, the main callback for the map function is immediately'
,'\tcalled with the error.'
,'\t'
,'\tNote, that since this function applies the iterator to each item in parallel'
,'\tthere is no guarantee that the iterator functions will complete in order, however'
,'\tthe results array will be in the same order as the original array.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* iterator(item, callback) - A function to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed'.yellow
,'\t  with an error (which can be null) and a transformed item.'.yellow
,'\t* callback(err, results) - A callback which is called after all the iterator'.yellow
,'\t  functions have finished, or an error has occurred. Results is an array of the'.yellow
,'\t  transformed items from the original array.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.map([\'file1\',\'file2\',\'file3\'], fs.stat, function(err, results){'.green
,'\t        // results is now an array of stats for each file'.green
,'\t    });'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### mapSeries(arr, iterator, callback)'.magenta
,'\t'
,'\tThe same as map only the iterator is applied to each item in the array in'
,'\tseries. The next iterator is only called once the current one has completed'
,'\tprocessing. The results array will be in the same order as the original.'
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### filter(arr, iterator, callback)'.magenta
,'\t'
,'\t__Alias:__ select'
,'\t'
,'\tReturns a new array of all the values which pass an async truth test.'
,'\t_The callback for each iterator call only accepts a single argument of true or'
,'\tfalse, it does not accept an error argument first!_ This is in-line with the'
,'\tway node libraries work with truth tests like path.exists. This operation is'
,'\tperformed in parallel, but the results array will be in the same order as the'
,'\toriginal.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* iterator(item, callback) - A truth test to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed.'.yellow
,'\t* callback(results) - A callback which is called after all the iterator'.yellow
,'\t  functions have finished.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.filter([\'file1\',\'file2\',\'file3\'], path.exists, function(results){'.green
,'\t        // results now equals an array of the existing files'.green
,'\t    });'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### filterSeries(arr, iterator, callback)'.magenta
,'\t'
,'\t__alias:__ selectSeries'
,'\t'
,'\tThe same as filter only the iterator is applied to each item in the array in'
,'\tseries. The next iterator is only called once the current one has completed'
,'\tprocessing. The results array will be in the same order as the original.'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### reject(arr, iterator, callback)'.magenta
,'\t'
,'\tThe opposite of filter. Removes values that pass an async truth test.'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### rejectSeries(arr, iterator, callback)'.magenta
,'\t'
,'\tThe same as filter, only the iterator is applied to each item in the array'
,'\tin series.'
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### reduce(arr, memo, iterator, callback)'.magenta
,'\t'
,'\t__aliases:__ inject, foldl'
,'\t'
,'\tReduces a list of values into a single value using an async iterator to return'
,'\teach successive step. Memo is the initial state of the reduction. This'
,'\tfunction only operates in series. For performance reasons, it may make sense to'
,'\tsplit a call to this function into a parallel map, then use the normal'
,'\tArray.prototype.reduce on the results. This function is for situations where'
,'\teach step in the reduction needs to be async, if you can get the data before'
,'\treducing it then its probably a good idea to do so.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* memo - The initial state of the reduction.'.yellow
,'\t* iterator(memo, item, callback) - A function applied to each item in the'.yellow
,'\t  array to produce the next step in the reduction. The iterator is passed a'.yellow
,'\t  callback which accepts an optional error as its first argument, and the state'.yellow
,'\t  of the reduction as the second. If an error is passed to the callback, the'.yellow
,'\t  reduction is stopped and the main callback is immediately called with the'.yellow
,'\t  error.'.yellow
,'\t* callback(err, result) - A callback which is called after all the iterator'.yellow
,'\t  functions have finished. Result is the reduced value.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.reduce([1,2,3], 0, function(memo, item, callback){'.green
,'\t        // pointless async:'.green
,'\t        process.nextTick(function(){'.green
,'\t            callback(null, memo + item)'.green
,'\t        });'.green
,'\t    }, function(err, result){'.green
,'\t        // result is now equal to the last value of memo, which is 6'.green
,'\t    });'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### reduceRight(arr, memo, iterator, callback)'.magenta
,'\t'
,'\t__Alias:__ foldr'
,'\t'
,'\tSame as reduce, only operates on the items in the array in reverse order.'
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### detect(arr, iterator, callback)'.magenta
,'\t'
,'\tReturns the first value in a list that passes an async truth test. The'
,'\titerator is applied in parallel, meaning the first iterator to return true will'
,'\tfire the detect callback with that result. That means the result might not be'
,'\tthe first item in the original array (in terms of order) that passes the test.'
,'\t'
,'\tIf order within the original array is important then look at detectSeries.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* iterator(item, callback) - A truth test to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed.'.yellow
,'\t* callback(result) - A callback which is called as soon as any iterator returns'.yellow
,'\t  true, or after all the iterator functions have finished. Result will be'.yellow
,'\t  the first item in the array that passes the truth test (iterator) or the'.yellow
,'\t  value undefined if none passed.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.detect([\'file1\',\'file2\',\'file3\'], path.exists, function(result){'.green
,'\t        // result now equals the first file in the list that exists'.green
,'\t    });'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### detectSeries(arr, iterator, callback)'.magenta
,'\t'
,'\tThe same as detect, only the iterator is applied to each item in the array'
,'\tin series. This means the result is always the first in the original array (in'
,'\tterms of array order) that passes the truth test.'
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### sortBy(arr, iterator, callback)'.magenta
,'\t'
,'\tSorts a list by the results of running each value through an async iterator.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* iterator(item, callback) - A function to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed'.yellow
,'\t  with an error (which can be null) and a value to use as the sort criteria.'.yellow
,'\t* callback(err, results) - A callback which is called after all the iterator'.yellow
,'\t  functions have finished, or an error has occurred. Results is the items from'.yellow
,'\t  the original array sorted by the values returned by the iterator calls.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.sortBy([\'file1\',\'file2\',\'file3\'], function(file, callback){'.green
,'\t        fs.stat(file, function(err, stats){'.green
,'\t            callback(err, stats.mtime);'.green
,'\t        });'.green
,'\t    }, function(err, results){'.green
,'\t        // results is now the original array of files sorted by'.green
,'\t        // modified date'.green
,'\t    });'.green
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### some(arr, iterator, callback)'.magenta
,'\t'
,'\t__Alias:__ any'
,'\t'
,'\tReturns true if at least one element in the array satisfies an async test.'
,'\t_The callback for each iterator call only accepts a single argument of true or'
,'\tfalse, it does not accept an error argument first!_ This is in-line with the'
,'\tway node libraries work with truth tests like path.exists. Once any iterator'
,'\tcall returns true, the main callback is immediately called.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* iterator(item, callback) - A truth test to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed.'.yellow
,'\t* callback(result) - A callback which is called as soon as any iterator returns'.yellow
,'\t  true, or after all the iterator functions have finished. Result will be'.yellow
,'\t  either true or false depending on the values of the async tests.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.some([\'file1\',\'file2\',\'file3\'], path.exists, function(result){'.green
,'\t        // if result is true then at least one of the files exists'.green
,'\t    });'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### every(arr, iterator, callback)'.magenta
,'\t'
,'\t__Alias:__ all'
,'\t'
,'\tReturns true if every element in the array satisfies an async test.'
,'\t_The callback for each iterator call only accepts a single argument of true or'
,'\tfalse, it does not accept an error argument first!_ This is in-line with the'
,'\tway node libraries work with truth tests like path.exists.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over.'.yellow
,'\t* iterator(item, callback) - A truth test to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed.'.yellow
,'\t* callback(result) - A callback which is called after all the iterator'.yellow
,'\t  functions have finished. Result will be either true or false depending on'.yellow
,'\t  the values of the async tests.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.every([\'file1\',\'file2\',\'file3\'], path.exists, function(result){'.green
,'\t        // if result is true then every file exists'.green
,'\t    });'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### concat(arr, iterator, callback)'.magenta
,'\t'
,'\tApplies an iterator to each item in a list, concatenating the results. Returns the'
,'\tconcatenated list. The iterators are called in parallel, and the results are'
,'\tconcatenated as they return. There is no guarantee that the results array will'
,'\tbe returned in the original order of the arguments passed to the iterator function.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* arr - An array to iterate over'.yellow
,'\t* iterator(item, callback) - A function to apply to each item in the array.'.yellow
,'\t  The iterator is passed a callback which must be called once it has completed'.yellow
,'\t  with an error (which can be null) and an array of results.'.yellow
,'\t* callback(err, results) - A callback which is called after all the iterator'.yellow
,'\t  functions have finished, or an error has occurred. Results is an array containing'.yellow
,'\t  the concatenated results of the iterator function.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.concat([\'dir1\',\'dir2\',\'dir3\'], fs.readdir, function(err, files){'.green
,'\t        // files is now a list of filenames that exist in the 3 directories'.green
,'\t    });'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### concatSeries(arr, iterator, callback)'.magenta
,'\t'
,'\tSame as async.concat, but executes in series instead of parallel.'
,'\t'
,'\t'
,'\t## Control Flow'.cyan
,'\t'
,'\t### series(tasks, [callback])'.magenta
,'\t'
,'\tRun an array of functions in series, each one running once the previous'
,'\tfunction has completed. If any functions in the series pass an error to its'
,'\tcallback, no more functions are run and the callback for the series is'
,'\timmediately called with the value of the error. Once the tasks have completed,'
,'\tthe results are passed to the final callback as an array.'
,'\t'
,'\tIt is also possible to use an object instead of an array. Each property will be'
,'\trun as a function and the results will be passed to the final callback as an object'
,'\tinstead of an array. This can be a more readable way of handling results from'
,'\tasync.series.'
,'\t'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* tasks - An array or object containing functions to run, each function is passed'.yellow
,'\t  a callback it must call on completion.'.yellow
,'\t* callback(err, results) - An optional callback to run once all the functions'.yellow
,'\t  have completed. This function gets an array of all the arguments passed to'.yellow
,'\t  the callbacks used in the array.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.series(['.green
,'\t        function(callback){'.green
,'\t            // do some stuff ...'.green
,'\t            callback(null, \'one\');'.green
,'\t        },'.green
,'\t        function(callback){'.green
,'\t            // do some more stuff ...'.green
,'\t            callback(null, \'two\');'.green
,'\t        },'.green
,'\t    ],'.green
,'\t    // optional callback'.green
,'\t    function(err, results){'.green
,'\t        // results is now equal to [\'one\', \'two\']'.green
,'\t    });'.green
,'\t'.green
,'\t'.green
,'\t    // an example using an object instead of an array'.green
,'\t    async.series({'.green
,'\t        one: function(callback){'.green
,'\t            setTimeout(function(){'.green
,'\t                callback(null, 1);'.green
,'\t            }, 200);'.green
,'\t        },'.green
,'\t        two: function(callback){'.green
,'\t            setTimeout(function(){'.green
,'\t                callback(null, 2);'.green
,'\t            }, 100);'.green
,'\t        },'.green
,'\t    },'.green
,'\t    function(err, results) {'.green
,'\t        // results is now equal to: {one: 1, two: 2}'.green
,'\t    });'.green
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### parallel(tasks, [callback])'.magenta
,'\t'
,'\tRun an array of functions in parallel, without waiting until the previous'
,'\tfunction has completed. If any of the functions pass an error to its'
,'\tcallback, the main callback is immediately called with the value of the error.'
,'\tOnce the tasks have completed, the results are passed to the final callback as an'
,'\tarray.'
,'\t'
,'\tIt is also possible to use an object instead of an array. Each property will be'
,'\trun as a function and the results will be passed to the final callback as an object'
,'\tinstead of an array. This can be a more readable way of handling results from'
,'\tasync.parallel.'
,'\t'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* tasks - An array or object containing functions to run, each function is passed a'.yellow
,'\t  callback it must call on completion.'.yellow
,'\t* callback(err, results) - An optional callback to run once all the functions'.yellow
,'\t  have completed. This function gets an array of all the arguments passed to'.yellow
,'\t  the callbacks used in the array.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.parallel(['.green
,'\t        function(callback){'.green
,'\t            setTimeout(function(){'.green
,'\t                callback(null, \'one\');'.green
,'\t            }, 200);'.green
,'\t        },'.green
,'\t        function(callback){'.green
,'\t            setTimeout(function(){'.green
,'\t                callback(null, \'two\');'.green
,'\t            }, 100);'.green
,'\t        },'.green
,'\t    ],'.green
,'\t    // optional callback'.green
,'\t    function(err, results){'.green
,'\t        // the results array will equal [\'one\',\'two\'] even though'.green
,'\t        // the second function had a shorter timeout.'.green
,'\t    });'.green
,'\t'.green
,'\t'.green
,'\t    // an example using an object instead of an array'.green
,'\t    async.parallel({'.green
,'\t        one: function(callback){'.green
,'\t            setTimeout(function(){'.green
,'\t                callback(null, 1);'.green
,'\t            }, 200);'.green
,'\t        },'.green
,'\t        two: function(callback){'.green
,'\t            setTimeout(function(){'.green
,'\t                callback(null, 2);'.green
,'\t            }, 100);'.green
,'\t        },'.green
,'\t    },'.green
,'\t    function(err, results) {'.green
,'\t        // results is now equals to: {one: 1, two: 2}'.green
,'\t    });'.green
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### whilst(test, fn, callback)'.magenta
,'\t'
,'\tRepeatedly call fn, while test returns true. Calls the callback when stopped,'
,'\tor an error occurs.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* test() - synchronous truth test to perform before each execution of fn.'.yellow
,'\t* fn(callback) - A function to call each time the test passes. The function is'.yellow
,'\t  passed a callback which must be called once it has completed with an optional'.yellow
,'\t  error as the first argument.'.yellow
,'\t* callback(err) - A callback which is called after the test fails and repeated'.yellow
,'\t  execution of fn has stopped.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    var count = 0;'.green
,'\t'.green
,'\t    async.whilst('.green
,'\t        function () { return count < 5; },'.green
,'\t        function (callback) {'.green
,'\t            count++;'.green
,'\t            setTimeout(callback, 1000);'.green
,'\t        },'.green
,'\t        function (err) {'.green
,'\t            // 5 seconds have passed'.green
,'\t        }'.green
,'\t    );'.green
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### until(test, fn, callback)'.magenta
,'\t'
,'\tRepeatedly call fn, until test returns true. Calls the callback when stopped,'
,'\tor an error occurs.'
,'\t'
,'\tThe inverse of async.whilst.'
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### waterfall(tasks, [callback])'.magenta
,'\t'
,'\tRuns an array of functions in series, each passing their results to the next in'
,'\tthe array. However, if any of the functions pass an error to the callback, the'
,'\tnext function is not executed and the main callback is immediately called with'
,'\tthe error.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* tasks - An array of functions to run, each function is passed a callback it'.yellow
,'\t  must call on completion.'.yellow
,'\t* callback(err, [results]) - An optional callback to run once all the functions'.yellow
,'\t  have completed. This will be passed the results of the last task\'s callback.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.waterfall(['.green
,'\t        function(callback){'.green
,'\t            callback(null, \'one\', \'two\');'.green
,'\t        },'.green
,'\t        function(arg1, arg2, callback){'.green
,'\t            callback(null, \'three\');'.green
,'\t        },'.green
,'\t        function(arg1, callback){'.green
,'\t            // arg1 now equals \'three\''.green
,'\t            callback(null, \'done\');'.green
,'\t        }'.green
,'\t    ], function (err, result) {'.green
,'\t       // result now equals \'done\'    '.green
,'\t    });'.green
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### queue(worker, concurrency)'.magenta
,'\t'
,'\tCreates a queue object with the specified concurrency. Tasks added to the'
,'\tqueue will be processed in parallel (up to the concurrency limit). If all'
,'\tworkers are in progress, the task is queued until one is available. Once'
,'\ta worker has completed a task, the task\'s callback is called.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* worker(task, callback) - An asynchronous function for processing a queued'.yellow
,'\t  task.'.yellow
,'\t* concurrency - An integer for determining how many worker functions should be'.yellow
,'\t  run in parallel.'.yellow
,'\t'
,'\t__Queue objects__'
,'\t'
,'\tThe queue object returned by this function has the following properties and'
,'\tmethods:'
,'\t'
,'\t* length() - a function returning the number of items waiting to be processed.'.yellow
,'\t* concurrency - an integer for determining how many worker functions should be'.yellow
,'\t  run in parallel. This property can be changed after a queue is created to'.yellow
,'\t  alter the concurrency on-the-fly.'.yellow
,'\t* push(task, [callback]) - add a new task to the queue, the callback is called'.yellow
,'\t  once the worker has finished processing the task.'.yellow
,'\t  instead of a single task, an array of tasks can be submitted. the respective callback is used for every task in the list.'.yellow
,'\t* saturated - a callback that is called when the queue length hits the concurrency and further tasks will be queued'.yellow
,'\t* empty - a callback that is called when the last item from the queue is given to a worker'.yellow
,'\t* drain - a callback that is called when the last item from the queue has returned from the worker'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    // create a queue object with concurrency 2'.green
,'\t'.green
,'\t    var q = async.queue(function (task, callback) {'.green
,'\t        console.log(\'hello \' + task.name);'.green
,'\t        callback();'.green
,'\t    }, 2);'.green
,'\t'.green
,'\t'.green
,'\t    // assign a callback'.green
,'\t    q.drain = function() {'.green
,'\t        console.log(\'all items have been processed\');'.green
,'\t    }'.green
,'\t'.green
,'\t    // add some items to the queue'.green
,'\t'.green
,'\t    q.push({name: \'foo\'}, function (err) {'.green
,'\t        console.log(\'finished processing foo\');'.green
,'\t    });'.green
,'\t    q.push({name: \'bar\'}, function (err) {'.green
,'\t        console.log(\'finished processing bar\');'.green
,'\t    });'.green
,'\t'.green
,'\t    // add some items to the queue (batch-wise)'.green
,'\t'.green
,'\t    q.push([{name: \'baz\'},{name: \'bay\'},{name: \'bax\'}], function (err) {'.green
,'\t        console.log(\'finished processing bar\');'.green
,'\t    });'.green
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### auto(tasks, [callback])'.magenta
,'\t'
,'\tDetermines the best order for running functions based on their requirements.'
,'\tEach function can optionally depend on other functions being completed first,'
,'\tand each function is run as soon as its requirements are satisfied. If any of'
,'\tthe functions pass an error to their callback, that function will not complete'
,'\t(so any other functions depending on it will not run) and the main callback'
,'\twill be called immediately with the error. Functions also receive an object'
,'\tcontaining the results of functions which have completed so far.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* tasks - An object literal containing named functions or an array of'.yellow
,'\t  requirements, with the function itself the last item in the array. The key'.yellow
,'\t  used for each function or array is used when specifying requirements. The'.yellow
,'\t  syntax is easier to understand by looking at the example.'.yellow
,'\t* callback(err, results) - An optional callback which is called when all the'.yellow
,'\t  tasks have been completed. The callback will receive an error as an argument'.yellow
,'\t  if any tasks pass an error to their callback. If all tasks complete'.yellow
,'\t  successfully, it will receive an object containing their results.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    async.auto({'.green
,'\t        get_data: function(callback){'.green
,'\t            // async code to get some data'.green
,'\t        },'.green
,'\t        make_folder: function(callback){'.green
,'\t            // async code to create a directory to store a file in'.green
,'\t            // this is run at the same time as getting the data'.green
,'\t        },'.green
,'\t        write_file: [\'get_data\', \'make_folder\', function(callback){'.green
,'\t            // once there is some data and the directory exists,'.green
,'\t            // write the data to a file in the directory'.green
,'\t            callback(null, filename);'.green
,'\t        }],'.green
,'\t        email_link: [\'write_file\', function(callback, results){'.green
,'\t            // once the file is written let\'s email a link to it...'.green
,'\t            // results.write_file contains the filename returned by write_file.'.green
,'\t        }]'.green
,'\t    });'.green
,'\t'
,'\tThis is a fairly trivial example, but to do this using the basic parallel and'
,'\tseries functions would look like this:'
,'\t'
,'\t    async.parallel(['.green
,'\t        function(callback){'.green
,'\t            // async code to get some data'.green
,'\t        },'.green
,'\t        function(callback){'.green
,'\t            // async code to create a directory to store a file in'.green
,'\t            // this is run at the same time as getting the data'.green
,'\t        }'.green
,'\t    ],'.green
,'\t    function(results){'.green
,'\t        async.series(['.green
,'\t            function(callback){'.green
,'\t                // once there is some data and the directory exists,'.green
,'\t                // write the data to a file in the directory'.green
,'\t            },'.green
,'\t            email_link: function(callback){'.green
,'\t                // once the file is written let\'s email a link to it...'.green
,'\t            }'.green
,'\t        ]);'.green
,'\t    });'.green
,'\t'
,'\tFor a complicated series of async tasks using the auto function makes adding'
,'\tnew tasks much easier and makes the code more readable.'
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### iterator(tasks)'.magenta
,'\t'
,'\tCreates an iterator function which calls the next function in the array,'
,'\treturning a continuation to call the next one after that. Its also possible to'
,'\t\'peek\' the next iterator by doing iterator.next().'
,'\t'
,'\tThis function is used internally by the async module but can be useful when'
,'\tyou want to manually control the flow of functions in series.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* tasks - An array of functions to run, each function is passed a callback it'.yellow
,'\t  must call on completion.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    var iterator = async.iterator(['.green
,'\t        function(){ sys.p(\'one\'); },'.green
,'\t        function(){ sys.p(\'two\'); },'.green
,'\t        function(){ sys.p(\'three\'); }'.green
,'\t    ]);'.green
,'\t'.green
,'\t    node> var iterator2 = iterator();'.green
,'\t    \'one\''.green
,'\t    node> var iterator3 = iterator2();'.green
,'\t    \'two\''.green
,'\t    node> iterator3();'.green
,'\t    \'three\''.green
,'\t    node> var nextfn = iterator2.next();'.green
,'\t    node> nextfn();'.green
,'\t    \'three\''.green
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### apply(function, arguments..)'.magenta
,'\t'
,'\tCreates a continuation function with some arguments already applied, a useful'
,'\tshorthand when combined with other control flow functions. Any arguments'
,'\tpassed to the returned function are added to the arguments originally passed'
,'\tto apply.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* function - The function you want to eventually apply all arguments to.'.yellow
,'\t* arguments... - Any number of arguments to automatically apply when the'.yellow
,'\t  continuation is called.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    // using apply'.green
,'\t'.green
,'\t    async.parallel(['.green
,'\t        async.apply(fs.writeFile, \'testfile1\', \'test1\'),'.green
,'\t        async.apply(fs.writeFile, \'testfile2\', \'test2\'),'.green
,'\t    ]);'.green
,'\t'.green
,'\t'.green
,'\t    // the same process without using apply'.green
,'\t'.green
,'\t    async.parallel(['.green
,'\t        function(callback){'.green
,'\t            fs.writeFile(\'testfile1\', \'test1\', callback);'.green
,'\t        },'.green
,'\t        function(callback){'.green
,'\t            fs.writeFile(\'testfile2\', \'test2\', callback);'.green
,'\t        },'.green
,'\t    ]);'.green
,'\t'.green
,'\tIt\'s possible to pass any number of additional arguments when calling the'.green
,'\tcontinuation:'.green
,'\t'.green
,'\t    node> var fn = async.apply(sys.puts, \'one\');'.green
,'\t    node> fn(\'two\', \'three\');'.green
,'\t    one'.green
,'\t    two'.green
,'\t    three'.green
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### nextTick(callback)'.magenta
,'\t'
,'\tCalls the callback on a later loop around the event loop. In node.js this just'
,'\tcalls process.nextTick, in the browser it falls back to setTimeout(callback, 0),'
,'\twhich means other higher priority events may precede the execution of the callback.'
,'\t'
,'\tThis is used internally for browser-compatibility purposes.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* callback - The function to call on a later loop around the event loop.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    var call_order = [];'.green
,'\t    async.nextTick(function(){'.green
,'\t        call_order.push(\'two\');'.green
,'\t        // call_order now equals [\'one\',\'two]'.green
,'\t    });'.green
,'\t    call_order.push(\'one\')'.green
,'\t'
,'\t'
,'\t## Utils'.cyan
,'\t'
,'\t### memoize(fn, [hasher])'.magenta
,'\t'
,'\tCaches the results of an async function. When creating a hash to store function'
,'\tresults against, the callback is omitted from the hash and an optional hash'
,'\tfunction can be used.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* fn - the function you to proxy and cache results from.'.yellow
,'\t* hasher - an optional function for generating a custom hash for storing'.yellow
,'\t  results, it has all the arguments applied to it apart from the callback, and'.yellow
,'\t  must be synchronous.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    var slow_fn = function (name, callback) {'.green
,'\t        // do something'.green
,'\t        callback(null, result);'.green
,'\t    };'.green
,'\t    var fn = async.memoize(slow_fn);'.green
,'\t'.green
,'\t    // fn can now be used as if it were slow_fn'.green
,'\t    fn(\'some name\', function () {'.green
,'\t        // callback'.green
,'\t    });'.green
,'\t'
,'\t### unmemoize(fn)'.magenta
,'\t'
,'\tUndoes a memoized function, reverting it to the original, unmemoized'
,'\tform. Comes handy in tests.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* fn - the memoized function'.yellow
,'\t'
,'\t### log(function, arguments)'.magenta
,'\t'
,'\tLogs the result of an async function to the console. Only works in node.js or'
,'\tin browsers that support console.log and console.error (such as FF and Chrome).'
,'\tIf multiple arguments are returned from the async function, console.log is'
,'\tcalled on each argument in order.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* function - The function you want to eventually apply all arguments to.'.yellow
,'\t* arguments... - Any number of arguments to apply to the function.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    var hello = function(name, callback){'.green
,'\t        setTimeout(function(){'.green
,'\t            callback(null, \'hello \' + name);'.green
,'\t        }, 1000);'.green
,'\t    };'.green
,'\t'.green
,'\t    node> async.log(hello, \'world\');'.green
,'\t    \'hello world\''.green
,'\t'
,'\t'
,'\t---------------------------------------'
,'\t'
,'\t### dir(function, arguments)'.magenta
,'\t'
,'\tLogs the result of an async function to the console using console.dir to'
,'\tdisplay the properties of the resulting object. Only works in node.js or'
,'\tin browsers that support console.dir and console.error (such as FF and Chrome).'
,'\tIf multiple arguments are returned from the async function, console.dir is'
,'\tcalled on each argument in order.'
,'\t'
,'\t__Arguments__'
,'\t'
,'\t* function - The function you want to eventually apply all arguments to.'.yellow
,'\t* arguments... - Any number of arguments to apply to the function.'.yellow
,'\t'
,'\t__Example__'
,'\t'
,'\t    var hello = function(name, callback){'.green
,'\t        setTimeout(function(){'.green
,'\t            callback(null, {hello: name});'.green
,'\t        }, 1000);'.green
,'\t    };'.green
,'\t'.green
,'\t    node> async.dir(hello, \'world\');'.green
,'\t    {hello: \'world\'}'.green
].join('\n');
