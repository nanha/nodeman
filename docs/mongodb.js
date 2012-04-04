exports.name = 'mongodb';
exports.category = 'dbms';
exports.context = 'use require';
exports.homepage = 'https://github.com/christkv/node-mongodb-native';
exports.description = [
 '\tMain Documentation site'.red
,'\t======================='
,'\t'
,'\thttp://christkv.github.com/node-mongodb-native/'
,'\t'
,'\tInstall'.red
,'\t========'
,'\t'
,'\tTo install the most recent release from npm, run:'
,'\t'
,'\t    npm install mongodb'.green
,'\t    '
,'\tThat may give you a warning telling you that bugs[\'web\'] should be bugs[\'url\'], it would be safe to ignore it (this has been fixed in the development version) '
,'\t'
,'\tTo install from the latest from the repository, run::'
,'\t'
,'\t    npm install path/to/node-mongodb-native'.green
,'\t'
,'\t'
,'\tIntroduction'.red
,'\t========'
,'\t'
,'\tThis is a node.js driver for MongoDB. It\'s a port (or close to a port) of the library for ruby at http://github.com/mongodb/mongo-ruby-driver/.'
,'\t'
,'\tA simple example of inserting a document.'
,'\t'
,'\t    var client = new Db(\'test\', new Server("127.0.0.1", 27017, {})),'.green
,'\t        test = function (err, collection) {'.green
,'\t          collection.insert({a:2}, function(err, docs) {'.green
,'\t'.green
,'\t            collection.count(function(err, count) {'.green
,'\t              test.assertEquals(1, count);'.green
,'\t            });'.green
,'\t'.green
,'\t            // Locate all the entries using find'.green
,'\t            collection.find().toArray(function(err, results) {'.green
,'\t              test.assertEquals(1, results.length);'.green
,'\t              test.assertTrue(results[0].a === 2);'.green
,'\t'.green
,'\t              // Let\'s close the db'.green
,'\t              client.close();'.green
,'\t            });'.green
,'\t          });'.green
,'\t        };'.green
,'\t'.green
,'\t    client.open(function(err, p_client) {'.green
,'\t      client.collection(\'test_insert\', test);'.green
,'\t    });'.green
,'\t'
,'\tData types'.red
,'\t==========='
,'\t'
,'\tTo store and retrieve the non-JSON MongoDb primitives ([ObjectID](http://www.mongodb.org/display/DOCS/Object+IDs), Long, Binary, [Timestamp](http://www.mongodb.org/display/DOCS/Timestamp+data+type), [DBRef](http://www.mongodb.org/display/DOCS/Database+References#DatabaseReferences-DBRef), Code).'.yellow
,'\t'
,'\tIn particular, every document has a unique `_id` which can be almost any type, and by default a 12-byte ObjectID is created. ObjectIDs can be represented as 24-digit hexadecimal strings, but you must convert the string back into an ObjectID before you can use it in the database. For example: '
,'\t'
,'\t    // Get the objectID type'.green
,'\t    var ObjectID = require(\'mongodb\').ObjectID;'.green
,'\t    '.green
,'\t    var idString = \'4e4e1638c85e808431000003\';'.green
,'\t    collection.findOne({_id: new ObjectID(idString)}, console.log)  // ok'.green
,'\t    collection.findOne({_id: idString}, console.log)  // wrong! callback gets undefined'.green
,'\t'
,'\tHere are the constructors the non-Javascript BSON primitive types:'
,'\t'
,'\t    // Fetch the library'.green
,'\t    var mongo = require(\'mongodb\');'.green
,'\t    // Create new instances of BSON types'.green
,'\t    new mongo.Long(numberString)'.green
,'\t    new mongo.ObjectID(hexString)'.green
,'\t    new mongo.Timestamp()  // the actual unique number is generated on insert.'.green
,'\t    new mongo.DBRef(collectionName, id, dbName)'.green
,'\t    new mongo.Binary(buffer)  // takes a string or Buffer'.green
,'\t    new mongo.Code(code, [context])'.green
,'\t    new mongo.Symbol(string)'.green
,'\t    new mongo.MinKey()'.green
,'\t    new mongo.MaxKey()'.green
,'\t    new mongo.Double(number)	// Force double storage'.green
,'\t'.green
,'\tThe C/C++ bson parser/serializer'.cyan
,'\t---------------------------------'
,'\t'
,'\tFrom V0.8.0 to V0.9.6.9, the Javascript bson parser was slower than an optional C/C++ bson parser. As of V0.9.6.9+, due to performance improvements in the Javascript parser, the C/C++ parser is deprecated and is not installed by default anymore.'
,'\t'
,'\tIf you are running a version of this library has the C/C++ parser compiled, to enable the driver to use the C/C++ bson parser pass it the option native_parser:true like below'
,'\t'
,'\t    // using Deprecated native_parser:'.green
,'\t    var client = new Db(\'integration_tests_20\','.green
,'\t                        new Server("127.0.0.1", 27017),'.green
,'\t                        {native_parser:true});'.green
,'\t'
,'\tThe C++ parser uses the js objects both for serialization and deserialization.'
,'\t'
,'\tGridStore'.red
,'\t========='
,'\t'
,'\tThe GridStore class allows for storage of binary files in mongoDB using the mongoDB defined files and chunks collection definition.'
,'\t'
,'\tFor more information have a look at [Gridstore](https://github.com/christkv/node-mongodb-native/blob/master/docs/gridfs.md)'
,'\t'
,'\tReplicasets'.red
,'\t==========='
,'\tFor more information about how to connect to a replicaset have a look at [Replicasets](https://github.com/christkv/node-mongodb-native/blob/master/docs/replicaset.md)'
,'\t'
,'\tPrimary Key Factories'.cyan
,'\t---------------------'
,'\t'
,'\tDefining your own primary key factory allows you to generate your own series of id\'s'
,'\t(this could f.ex be to use something like ISBN numbers). The generated the id needs to be a 12 byte long "string".'
,'\t'
,'\tSimple example below'
,'\t'
,'\t    // Custom factory (need to provide a 12 byte array);'.green
,'\t    CustomPKFactory = function() {}'.green
,'\t    CustomPKFactory.prototype = new Object();'.green
,'\t    CustomPKFactory.createPk = function() {'.green
,'\t      return new ObjectID("aaaaaaaaaaaa");'.green
,'\t    }'.green
,'\t'.green
,'\t    var p_client = new Db(\'integration_tests_20\', new Server("127.0.0.1", 27017, {}), {\'pk\':CustomPKFactory});'.green
,'\t    p_client.open(function(err, p_client) {'.green
,'\t      p_client.dropDatabase(function(err, done) {'.green
,'\t        p_client.createCollection(\'test_custom_key\', function(err, collection) {'.green
,'\t          collection.insert({\'a\':1}, function(err, docs) {'.green
,'\t            collection.find({\'_id\':new ObjectID("aaaaaaaaaaaa")}, function(err, cursor) {'.green
,'\t              cursor.toArray(function(err, items) {'.green
,'\t                test.assertEquals(1, items.length);'.green
,'\t'.green
,'\t                // Let\'s close the db'.green
,'\t                p_client.close();'.green
,'\t              });'.green
,'\t            });'.green
,'\t          });'.green
,'\t        });'.green
,'\t      });'.green
,'\t    });'.green
,'\t'
,'\tStrict mode'.cyan
,'\t------------'
,'\t'
,'\tEach database has an optional strict mode. If it is set then asking for a collection'
,'\tthat does not exist will return an Error object in the callback. Similarly if you'
,'\tattempt to create a collection that already exists. Strict is provided for convenience.'
,'\t'
,'\t    var error_client = new Db(\'integration_tests_\', new Server("127.0.0.1", 27017, {auto_reconnect: false}), {strict:true});    '.green
,'\t      test.assertEquals(true, error_client.strict);'.green
,'\t      '.green
,'\t      error_client.open(function(err, error_client) {'.green
,'\t      error_client.collection(\'does-not-exist\', function(err, collection) {'.green
,'\t        test.assertTrue(err instanceof Error);'.green
,'\t        test.assertEquals("Collection does-not-exist does not exist. Currently in strict mode.", err.message);'.green
,'\t      });'.green
,'\t'.green
,'\t      error_client.createCollection(\'test_strict_access_collection\', function(err, collection) {'.green
,'\t        error_client.collection(\'test_strict_access_collection\', function(err, collection) {'.green
,'\t          test.assertTrue(collection instanceof Collection);'.green
,'\t          // Let\'s close the db'.green
,'\t          error_client.close();'.green
,'\t        });'.green
,'\t      });'.green
,'\t    });'.green
,'\t'
,'\tDocumentation'.red
,'\t=============='
,'\t'
,'\tIf this document doesn\'t answer your questions, see the source of'
,'\t[Collection](https://github.com/christkv/node-mongodb-native/blob/master/lib/mongodb/collection.js)'
,'\tor [Cursor](https://github.com/christkv/node-mongodb-native/blob/master/lib/mongodb/cursor.js),'
,'\tor the documentation at MongoDB for query and update formats.'
,'\t'
,'\tFind'.cyan
,'\t--------'
,'\t'
,'\tThe find method is actually a factory method to create'
,'\tCursor objects. A Cursor lazily uses the connection the first time'
,'\tyou call `nextObject`, `each`, or `toArray`.'
,'\t'
,'\tThe basic operation on a cursor is the `nextObject` method'
,'\tthat fetches the next matching document from the database. The convenience'
,'\tmethods `each` and `toArray` call `nextObject` until the cursor is exhausted.'
,'\t'
,'\tSignatures:'
,'\t'
,'\t    var cursor = collection.find(query, [fields], options);'.green
,'\t    cursor.sort(fields).limit(n).skip(m).'.green
,'\t'.green
,'\t    cursor.nextObject(function(err, doc) {});'.green
,'\t    cursor.each(function(err, doc) {});'.green
,'\t    cursor.toArray(function(err, docs) {});'.green
,'\t'.green
,'\t    cursor.rewind()  // reset the cursor to its initial state.'.green
,'\t'
,'\tUseful chainable methods of cursor. These can optionally be options of `find` instead of method calls:'
,'\t'
,'\t* `.limit(n).skip(m)` to control paging.'
,'\t* `.sort(fields)` Order by the given fields. There are several equivalent syntaxes:'
,'\t  * `.sort({field1: -1, field2: 1})` descending by field1, then ascending by field2.'
,'\t  * `.sort([[\'field1\', \'desc\'], [\'field2\', \'asc\']])` same as above'
,'\t  * `.sort([[\'field1\', \'desc\'], \'field2\'])` same as above'
,'\t  * `.sort(\'field1\')` ascending by field1'
,'\t'
,'\tOther options of `find`:'
,'\t'
,'\t* `fields` the fields to fetch (to avoid transferring the entire document)'
,'\t* `tailable` if true, makes the cursor [tailable](http://www.mongodb.org/display/DOCS/Tailable+Cursors).'
,'\t* `batchSize` The number of the subset of results to request the database'
,'\tto return for every request. This should initially be greater than 1 otherwise'
,'\tthe database will automatically close the cursor. The batch size can be set to 1'
,'\twith `batchSize(n, function(err){})` after performing the initial query to the database.'
,'\t* `hint` See [Optimization: hint](http://www.mongodb.org/display/DOCS/Optimization#Optimization-Hint).'.red
,'\t* `explain` turns this into an explain query. You can also call'
,'\t`explain()` on any cursor to fetch the explanation.'
,'\t* `snapshot` prevents documents that are updated while the query is active'
,'\tfrom being returned multiple times. See more'
,'\t[details about query snapshots](http://www.mongodb.org/display/DOCS/How+to+do+Snapshotted+Queries+in+the+Mongo+Database).'
,'\t* `timeout` if false, asks MongoDb not to time out this cursor after an'
,'\tinactivity period.'
,'\t'
,'\t'
,'\tFor information on how to create queries, see the'
,'\t[MongoDB section on querying](http://www.mongodb.org/display/DOCS/Querying).'
,'\t'
,'\t    var mongodb = require(\'mongodb\');'.green
,'\t    var server = new mongodb.Server("127.0.0.1", 27017, {});'.green
,'\t    new mongodb.Db(\'test\', server, {}).open(function (error, client) {'.green
,'\t      if (error) throw error;'.green
,'\t      var collection = new mongodb.Collection(client, \'test_collection\');'.green
,'\t      collection.find({}, {limit:10}).toArray(function(err, docs) {'.green
,'\t        console.dir(docs);'.green
,'\t      });'.green
,'\t    });'.green
,'\t'
,'\tInsert'
,'\t--------'
,'\t'
,'\tSignature:'
,'\t'
,'\t    collection.insert(docs, options, [callback]);'.green
,'\t'
,'\twhere `docs` can be a single document or an array of documents.'
,'\t'
,'\tUseful options:'
,'\t'
,'\t* `safe:true` Should always set if you have a callback.'
,'\t'
,'\tSee also: [MongoDB docs for insert](http://www.mongodb.org/display/DOCS/Inserting).'
,'\t'
,'\t    var mongodb = require(\'mongodb\');'.green
,'\t    var server = new mongodb.Server("127.0.0.1", 27017, {});'.green
,'\t    new mongodb.Db(\'test\', server, {}).open(function (error, client) {'.green
,'\t      if (error) throw error;'.green
,'\t      var collection = new mongodb.Collection(client, \'test_collection\');'.green
,'\t      collection.insert({hello: \'world\'}, {safe:true},'.green
,'\t                        function(err, objects) {'.green
,'\t        if (err) console.warn(err.message);'.green
,'\t        if (err && err.message.indexOf(\'E11000 \') !== -1) {'.green
,'\t          // this _id was already inserted in the database'.green
,'\t        }'.green
,'\t      });'.green
,'\t    });'.green
,'\t'
,'\tNote that there\'s no reason to pass a callback to the insert or update commands'
,'\tunless you use the `safe:true` option. If you don\'t specify `safe:true`, then'
,'\tyour callback will be called immediately.'
,'\t'
,'\tUpdate; update and insert (upsert)'.cyan
,'\t----------------------------------'
,'\t'
,'\tThe update operation will update the first document that matches your query'
,'\t(or all documents that match if you use `multi:true`).'
,'\tIf `safe:true`, `upsert` is not set, and no documents match, your callback'
,'\twill be given an error.'
,'\t'
,'\tSee the [MongoDB docs](http://www.mongodb.org/display/DOCS/Updating) for'
,'\tthe modifier (`$inc`, `$set`, `$push`, etc.) formats.'
,'\t'
,'\tSignature:'
,'\t'
,'\t    collection.update(criteria, objNew, options, [callback]);'.green
,'\t'
,'\tUseful options:'
,'\t'
,'\t* `safe:true` Should always set if you have a callback.'
,'\t* `multi:true` If set, all matching documents are updated, not just the first.'
,'\t* `upsert:true` Atomically inserts the document if no documents matched.'
,'\t'
,'\tExample for `update`:'
,'\t'
,'\t    var mongodb = require(\'mongodb\');'.green
,'\t    var server = new mongodb.Server("127.0.0.1", 27017, {});'.green
,'\t    new mongodb.Db(\'test\', server, {}).open(function (error, client) {'.green
,'\t      if (error) throw error;'.green
,'\t      var collection = new mongodb.Collection(client, \'test_collection\');'.green
,'\t      collection.update({hi: \'here\'}, {$set: {hi: \'there\'}}, {safe:true},'.green
,'\t                        function(err) {'.green
,'\t        if (err) console.warn(err.message);'.green
,'\t        else console.log(\'successfully updated\');'.green
,'\t      });'.green
,'\t    });'.green
,'\t'
,'\tFind and modify'.cyan
,'\t-----------------'
,'\t'
,'\t`findAndModify` is like `update`, but it also gives the updated document to'
,'\tyour callback. But there are a few key differences between findAndModify and'
,'\tupdate:'
,'\t'
,'\t  1. The signatures differ.'
,'\t  2. You can only findAndModify a single item, not multiple items.'
,'\t'
,'\tSignature:'
,'\t'
,'\t    collection.findAndModify(query, sort, update, options, callback)'.green
,'\t'
,'\tThe sort parameter is used to specify which object to operate on, if more than'
,'\tone document matches. It takes the same format as the cursor sort (see'
,'\tConnection.find above).'
,'\t'
,'\tSee the'
,'\t[MongoDB docs for findAndModify](http://www.mongodb.org/display/DOCS/findAndModify+Command)'
,'\tfor more details.'
,'\t'
,'\tUseful options:'
,'\t'
,'\t* `remove:true` set to a true to remove the object before returning'
,'\t* `new:true` set to true if you want to return the modified object rather than the original. Ignored for remove.'
,'\t* `upsert:true` Atomically inserts the document if no documents matched.'
,'\t'
,'\tExample for `findAndModify`:'
,'\t'
,'\t    var mongodb = require(\'mongodb\');'.green
,'\t    var server = new mongodb.Server("127.0.0.1", 27017, {});'.green
,'\t    new mongodb.Db(\'test\', server, {}).open(function (error, client) {'.green
,'\t      if (error) throw error;'.green
,'\t      var collection = new mongodb.Collection(client, \'test_collection\');'.green
,'\t      collection.findAndModify({hello: \'world\'}, [[\'_id\',\'asc\']], {$set: {hi: \'there\'}}, {},'.green
,'\t                        function(err, object) {'.green
,'\t        if (err) console.warn(err.message);'.green
,'\t        else console.dir(object);  // undefined if no matching object exists.'.green
,'\t      });'.green
,'\t    });'.green
,'\t'
,'\tSave'.cyan
,'\t--------'
,'\t'
,'\tThe `save` method is a shorthand for upsert if the document contains an'
,'\t`_id`, or an insert if there is no `_id`.'
].join('\n');
