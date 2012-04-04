exports.name = 'mongoose';
exports.category = 'dbms';
exports.context = 'use require';
exports.homepage = 'https://github.com/LearnBoost/mongoose';
exports.description = [
 '\t## What\'s Mongoose?'.cyan
,'\t'
,'\tMongoose is a [MongoDB](http://www.mongodb.org/) object modeling tool designed to work in an asynchronous environment.'
,'\t'
,'\tDefining a model is as easy as:'
,'\t'
,'\t    var Comment = new Schema({'.green
,'\t        title     : String'.green
,'\t      , body      : String'.green
,'\t      , date      : Date'.green
,'\t    });'.green
,'\t'.green
,'\t    var BlogPost = new Schema({'.green
,'\t        author    : ObjectId'.green
,'\t      , title     : String'.green
,'\t      , body      : String'.green
,'\t      , buf       : Buffer'.green
,'\t      , date      : Date'.green
,'\t      , comments  : [Comment]'.green
,'\t      , meta      : {'.green
,'\t          votes : Number'.green
,'\t        , favs  : Number'.green
,'\t      }'.green
,'\t    });'.green
,'\t'.green
,'\t    var Post = mongoose.model(\'BlogPost\', BlogPost);'.green
,'\t'
,'\t## Installation'.cyan
,'\t'
,'\tThe recommended way is through the excellent [NPM](http://www.npmjs.org/):'
,'\t'
,'\t    $ npm install mongoose'.green
,'\t'
,'\tOtherwise, you can check it in your repository and then expose it:'
,'\t'
,'\t    $ git clone git://github.com/LearnBoost/mongoose.git node_modules/mongoose/'.green
,'\t'
,'\tAnd install dependency modules written on `package.json`.'
,'\t'
,'\tThen you can `require` it:'
,'\t'
,'\t    require(\'mongoose\')'.green
,'\t'
,'\t## Connecting to MongoDB'.cyan
,'\t'
,'\tFirst, we need to define a connection. If your app uses only one database, you should use `mongose.connect`. If you need to create additional connections, use `mongoose.createConnection`.'
,'\t'
,'\tBoth `connect` and `createConnection` take a `mongodb://` URI, or the parameters `host, database, port, options`.'
,'\t'
,'\t    var mongoose = require(\'mongoose\');'.green
,'\t'.green
,'\t    mongoose.connect(\'mongodb://localhost/my_database\');'.green
,'\t'
,'\tOnce connected, the `open` event is fired on the `Connection` instance. If you\'re using `mongoose.connect`, the `Connection` is `mongoose.connection`. Otherwise, `mongoose.createConnection` return value is a `Connection`.'
,'\t'
,'\t**Important!** Mongoose buffers all the commands until it\'s connected to the database. This means that you don\'t have to wait until it connects to MongoDB in order to define models, run queries, etc.'
,'\t'
,'\t## Defining a Model'.cyan
,'\t'
,'\tModels are defined through the `Schema` interface. '
,'\t'
,'\t    var Schema = mongoose.Schema'.green
,'\t      , ObjectId = Schema.ObjectId;'.green
,'\t'.green
,'\t    var BlogPost = new Schema({'.green
,'\t        author    : ObjectId'.green
,'\t      , title     : String'.green
,'\t      , body      : String'.green
,'\t      , date      : Date'.green
,'\t    });'.green
,'\t'
,'\tAside from defining the structure of your documents and the types of data you\'re storing, a Schema handles the definition of:'
,'\t'
,'\t* [Validators](http://mongoosejs.com/docs/validation.html) (async and sync)'.yellow
,'\t* [Defaults](http://mongoosejs.com/docs/schematypes.html)'.yellow
,'\t* [Getters](http://mongoosejs.com/docs/getters-setters.html)'.yellow
,'\t* [Setters](http://mongoosejs.com/docs/getters-setters.html)'.yellow
,'\t* [Indexes](http://mongoosejs.com/docs/indexes.html)'.yellow
,'\t* [Middleware](http://mongoosejs.com/docs/middleware.html)'.yellow
,'\t* [Methods](http://mongoosejs.com/docs/methods-statics.html) definition'.yellow
,'\t* [Statics](http://mongoosejs.com/docs/methods-statics.html) definition'.yellow
,'\t* [Plugins](http://mongoosejs.com/docs/plugins.html)'.yellow
,'\t* [DBRefs](http://mongoosejs.com/docs/dbrefs.html)'.yellow
,'\t'
,'\tThe following example shows some of these features:'
,'\t'
,'\t    var Comment = new Schema({'.green
,'\t        name  :  { type: String, default: \'hahaha\' }'.green
,'\t      , age   :  { type: Number, min: 18, index: true }'.green
,'\t      , bio   :  { type: String, match: /[a-z]/ }'.green
,'\t      , date  :  { type: Date, default: Date.now }'.green
,'\t      , buff  :  Buffer'.green
,'\t    });'.green
,'\t'.green
,'\t    // a setter'.green
,'\t    Comment.path(\'name\').set(function (v) {'.green
,'\t      return capitalize(v);'.green
,'\t    });'.green
,'\t'.green
,'\t    // middleware'.green
,'\t    Comment.pre(\'save\', function (next) {'.green
,'\t      notify(this.get(\'email\'));'.green
,'\t      next();'.green
,'\t    });'.green
,'\t'
,'\tTake a look at the example in `examples/schema.js` for an end-to-end example of a typical setup.'
,'\t'
,'\t## Accessing a Model'.cyan
,'\t'
,'\tOnce we define a model through `mongoose.model(\'ModelName\', mySchema)`, we can access it through the same function'
,'\t'
,'\t    var myModel = mongoose.model(\'ModelName\');'.green
,'\t'
,'\tOr just do it all at once'
,'\t'
,'\t    var MyModel = mongoose.model(\'ModelName\', mySchema);'.green
,'\t'
,'\tWe can then instantiate it, and save it:'
,'\t'
,'\t    var instance = new MyModel();'.green
,'\t    instance.my.key = \'hello\';'.green
,'\t    instance.save(function (err) {'.green
,'\t      //'.green
,'\t    });'.green
,'\t'
,'\tOr we can find documents from the same collection'
,'\t'
,'\t    MyModel.find({}, function (err, docs) {'.green
,'\t      // docs.forEach'.green
,'\t    });'.green
,'\t'
,'\tYou can also `findOne`, `findById`, `update`, etc. For more details check out [this link](http://mongoosejs.com/docs/finding-documents.html).'
,'\t'
,'\t**Important!** If you opened a separate connection using `mongoose.createConnection()` but attempt to access the model through `mongoose.model(\'ModelName\')` it will not work as expected since it is not hooked up to an active db connection. In this case access your model through the connection you created:'
,'\t'
,'\t    var conn = mongoose.createConnection(\'your connection string\');'.green
,'\t    var MyModel = conn.model(\'ModelName\', schema);'.green
,'\t    var m = new MyModel;'.green
,'\t    m.save() // works'.green
,'\t'
,'\t    vs'
,'\t'
,'\t    var conn = mongoose.createConnection(\'your connection string\');'.green
,'\t    var MyModel = mongoose.model(\'ModelName\', schema);'.green
,'\t    var m = new MyModel;'.green
,'\t    m.save() // does not work b/c the default connection object was never connected'.green
,'\t'
,'\t## Embedded Documents'.cyan
,'\t'
,'\tIn the first example snippet, we defined a key in the Schema that looks like:'
,'\t'
,'\t    comments: [Comments]'.green
,'\t'
,'\tWhere `Comments` is a `Schema` we created. This means that creating embedded documents is as simple as:'
,'\t'
,'\t    // retrieve my model'.green
,'\t    var BlogPost = mongoose.model(\'BlogPost\');'.green
,'\t'.green
,'\t    // create a blog post'.green
,'\t    var post = new BlogPost();'.green
,'\t'.green
,'\t    // create a comment'.green
,'\t    post.comments.push({ title: \'My comment\' });'.green
,'\t'.green
,'\t    post.save(function (err) {'.green
,'\t      if (!err) console.log(\'Success!\');'.green
,'\t    });'.green
,'\t'
,'\tThe same goes for removing them:'
,'\t'
,'\t    BlogPost.findById(myId, function (err, post) {'.green
,'\t      if (!err) {'.green
,'\t        post.comments[0].remove();'.green
,'\t        post.save(function (err) {'.green
,'\t          // do something'.green
,'\t        });'.green
,'\t      }'.green
,'\t    });'.green
,'\t'
,'\tEmbedded documents enjoy all the same features as your models. Defaults, validators, middleware. Whenever an error occurs, it\'s bubbled to the `save()` error callback, so error handling is a snap!'
,'\t'
,'\tMongoose interacts with your embedded documents in arrays _atomically_, out of the box.'
,'\t'
,'\t## Middleware'.cyan
,'\t'
,'\tMiddleware is one of the most exciting features about Mongoose. Middleware takes away all the pain of nested callbacks.'
,'\t'
,'\tMiddleware are defined at the Schema level and are applied for the methods `init` (when a document is initialized with data from MongoDB), `save` (when a document or embedded document is saved).'
,'\t'
,'\tThere\'s two types of middleware:'
,'\t'
,'\t- Serial'
,'\t  Serial middleware are defined like:'
,'\t'
,'\t        .pre(method, function (next, methodArg1, methodArg2, ...) {'.green
,'\t          // ...'.green
,'\t        })'.green
,'\t'
,'\t  They\'re executed one after the other, when each middleware calls `next`.'
,'\t'
,'\t  You can also intercept the `method`\'s incoming arguments via your middleware -- notice `methodArg1`, `methodArg2`, etc in the `pre` definition above. See section "Intercepting and mutating method arguments" below.'
,'\t'
,'\t'
,'\t- Parallel'
,'\t  Parallel middleware offer more fine-grained flow control, and are defined like:'
,'\t'
,'\t        .pre(method, true, function (next, done, methodArg1, methodArg2) {'.green
,'\t          // ...'.green
,'\t        })'.green
,'\t'
,'\t  Parallel middleware can `next()` immediately, but the final argument will be called when all the parallel middleware have called `done()`.'
,'\t'
,'\t### Error handling'.magenta
,'\t'
,'\tIf any middleware calls `next` or `done` with an `Error` instance, the flow is interrupted, and the error is passed to the function passed as an argument.'
,'\t'
,'\tFor example:'
,'\t'
,'\t    schema.pre(\'save\', function (next) {'.green
,'\t      // something goes wrong'.green
,'\t      next(new Error(\'something went wrong\'));'.green
,'\t    });'.green
,'\t'
,'\t    // later...'.green
,'\t'.green
,'\t    myModel.save(function (err) {'.green
,'\t      // err can come from a middleware'.green
,'\t    });'.green
,'\t'
,'\t### Intercepting and mutating method arguments'.magenta
,'\t'
,'\tYou can intercept method arguments via middleware.'
,'\t'
,'\tFor example, this would allow you to broadcast changes about your Documents every time someone `set`s a path in your Document to a new value:'
,'\t'
,'\t    schema.pre(\'set\', function (next, path, val, typel) {'.green
,'\t      // `this` is the current Document'.green
,'\t      this.emit(\'set\', path, val);'.green
,'\t'.green
,'\t      // Pass control to the next pre'.green
,'\t      next();'.green
,'\t    });'.green
,'\t'
,'\tMoreover, you can mutate the incoming `method` arguments so that subsequent middleware see different values for those arguments. To do so, just pass the new values to `next`:'
,'\t'
,'\t    .pre(method, function firstPre (next, methodArg1, methodArg2) {'.green
,'\t      // Mutate methodArg1'.green
,'\t      next("altered-" + methodArg1.toString(), methodArg2);'.green
,'\t    })'.green
,'\t'.green
,'\t    // pre declaration is chainable'.green
,'\t    .pre(method, function secondPre (next, methodArg1, methodArg2) {'.green
,'\t      console.log(methodArg1);'.green
,'\t      // => \'altered-originalValOfMethodArg1\' '.green
,'\t      '.green
,'\t      console.log(methodArg2);'.green
,'\t      // => \'originalValOfMethodArg2\' '.green
,'\t      '.green
,'\t      // Passing no arguments to `next` automatically passes along the current argument values'.green
,'\t      // i.e., the following `next()` is equivalent to `next(methodArg1, methodArg2)`'.green
,'\t      // and also equivalent to, with the example method arg '.green
,'\t      // values, `next(\'altered-originalValOfMethodArg1\', \'originalValOfMethodArg2\')`'.green
,'\t      next();'.green
,'\t    })'.green
,'\t'
,'\t### Schema gotcha'.magenta
,'\t'
,'\t`type`, when used in a schema has special meaning within Mongoose. If your schema requires using `type` as a nested property you must use object notation:'
,'\t'
,'\t    new Schema({'.green
,'\t        broken: { type: Boolean }'.green
,'\t      , asset : {'.green
,'\t            name: String'.green
,'\t          , type: String // uh oh, it broke. asset will be interpreted as String'.green
,'\t        }'.green
,'\t    });'.green
,'\t'.green
,'\t    new Schema({'.green
,'\t        works: { type: Boolean }'.green
,'\t      , asset : {'.green
,'\t            name: String'.green
,'\t          , type: { type: String } // works. asset is an object with a type property'.green
,'\t        }'.green
,'\t    });'.green
,'\t'
,'\t## API docs'.cyan
,'\t'
,'\tYou can find the [Dox](http://github.com/visionmedia/dox) generated API docs [here](http://mongoosejs.com/docs/api.html).'
].join('\n');
