exports.name = 'uuid';
exports.category = 'crypt';
exports.context = 'use require';
exports.homepage = 'https://github.com/broofa/node-uuid';
exports.description = [
     "\tnode-uuid".red
    ,"\t=========="
    , ""
    ,"\tSimple, fast generation of RFC4122 UUIDS."
    ,""
    ,"\tFeatures:"
    ,""
    ,"\t\t- Generate RFC4122 version 1 or version 4 UUIDs"
    ,"\t\t- Runs in node.js and all browsers."
    ,"\t\t- Cryptographically strong random # generation on supporting platforms"
    ,"\t\t- 1.1K minified and gzip'ed (Want something smaller? Check this crazy shit out! )"
    ,"\t\t- Annotated source code"
    , ""
    , ""
    ,"\tExample".red
    ,"\t=========="
    , ""
    ,"\t// Generate a v1 (time-based) id".green
    ,"\tuuid.v1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'".green
    ,"".green
    ,"\t// Generate a v4 (random) id".green
    ,"\tuuid.v4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'".green
    , ""
    , ""
    ,"\tAPI"
    ,"\t===="
    , ""
    ,"\tuuid.v1([options [, buffer [, offset]]])".cyan
    ,"\t------------------------------------------"
    ,""
    ,"\tGenerate and return a RFC4122 v1 (timestamp-based) UUID."
    ,""
    ,"\t- options - (Object) Optional uuid state to apply. Properties may include:"
    ,"\t\t- node - (Array) Node id as Array of 6 bytes (per 4.1.6). Default: Randomnly generated ID. See note 1."
    ,"\t\t- clockseq - (Number between 0 - 0x3fff) RFC clock sequence. Default: An internally maintained clockseq is used."
    ,"\t\t- msecs - (Number | Date) Time in milliseconds since unix Epoch. Default: The current time is used."
    ,"\t\t- nsecs - (Number between 0-9999) additional time, in 100-nanosecond units. Ignored if msecs is unspecified. Default: internal uuid counter is used, as per 4.2.1.2."
    ,"\t- buffer - (Array | Buffer) Array or buffer where UUID bytes are to be written."
    ,"\t- offset - (Number) Starting index in buffer at which to begin writing."
    ,"\t- Returns buffer, if specified, otherwise the string form of the UUID"
    ,""
    ,"\tNotes:"
    ,""
    ,"\tThe randomly generated node id is only guaranteed to stay constant for the lifetime of the current JS runtime. (Future versions of this module may use persistent storage mechanisms to extend this guarantee.)"
    ,"\tExample: Generate string UUID with fully-specified options"
    ,""
    ,"\tuuid.v1({".green
    ,"\t  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],".green
    ,"\t  clockseq: 0x1234,".green
    ,"\t  msecs: new Date('2011-11-01').getTime(),".green
    ,"\t  nsecs: 5678".green
    ,"\t});   // -> \"710b962e-041c-11e1-9234-0123456789ab\"".green
    ,""
    ,""
    ,"\tExample: In-place generation of two binary IDs"
    ,""
    ,"\t// Generate two ids in an array".green
    ,"\tvar arr = new Array(32); // -> []".green
    ,"\tuuid.v1(null, arr, 0);   // -> [02 a2 ce 90 14 32 11 e1 85 58 0b 48 8e 4f c1 15]".green
    ,"\tuuid.v1(null, arr, 16);  // -> [02 a2 ce 90 14 32 11 e1 85 58 0b 48 8e 4f c1 15 02 a3 1c b0 14 32 11 e1 85 58 0b 48 8e 4f c1 15]".green
    ,"".green
    ,"\t// Optionally use uuid.unparse() to get stringify the ids".green
    ,"\tuuid.unparse(buffer);    // -> '02a2ce90-1432-11e1-8558-0b488e4fc115'".green
    ,"\tuuid.unparse(buffer, 16) // -> '02a31cb0-1432-11e1-8558-0b488e4fc115'".green
    ,""
    ,""
    ,"\tuuid.v4([options [, buffer [, offset]]])".cyan
    ,"\t------------------------------------------"
    ,""
    ,"\tGenerate and return a RFC4122 v4 UUID."
    ,""
    ,"\t- options - (Object) Optional uuid state to apply. Properties may include:"
    ,"\t\t- random - (Number[16]) Array of 16 numbers (0-255) to use in place of randomly generated values"
    ,"\t\t- rng - (Function) Random # generator to use. Set to one of the built-in generators - uuid.mathRNG (all platforms), uuid.nodeRNG (node.js only), uuid.whatwgRNG (WebKit only) - or a custom function that returns an array[16] of byte values."
    ,"\t- buffer - (Array | Buffer) Array or buffer where UUID bytes are to be written."
    ,"\t- offset - (Number) Starting index in buffer at which to begin writing."
    ,""
    ,"\tReturns buffer, if specified, otherwise the string form of the UUID"
    ,""
    ,"\tExample: Generate string UUID with fully-specified options"
    ,""
    ,"\tuuid.v4({".green
    ,"\t  random: [".green
    ,"\t    0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,".green
    ,"\t    0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36".green
    ,"\t  ]".green
    ,"\t});".green
    ,"\t// -> \"109156be-c4fb-41ea-b1b4-efe1671c5836\"".green
    ,""
    ,""
    ,"\tExample: Generate two IDs in a single buffer"
    ,""
    ,"\tvar buffer = new Array(32); // (or 'new Buffer' in node.js)".green
    ,"\tuuid.v4(null, buffer, 0);".green
    ,"\tuuid.v4(null, buffer, 16);".green
    ,""
    ,""
    ,"\tuuid.parse(id[, buffer[, offset]])".cyan
    ,"\t-------------------------------"
    ,""
    ,"\tuuid.unparse(buffer[, offset])".cyan
    ,"\t-------------------------------"
    ,""
    ,"\tParse and unparse UUIDs"
    ,""
    ,"\t- id - (String) UUID(-like) string"
    ,"\t- buffer - (Array | Buffer) Array or buffer where UUID bytes are to be written. Default: A new Array or Buffer is used"
    ,"\t- offset - (Number) Starting index in buffer at which to begin writing. Default: 0"
    ,""
    ,""
    ,"\tExample parsing and unparsing a UUID string"
    ,""
    ,"\tvar bytes = uuid.parse('797ff043-11eb-11e1-80d6-510998755d10'); // -> <Buffer 79 7f f0 43 11 eb 11 e1 80 d6 51 09 98 75 5d 10>".green
    ,"\tvar string = uuid.unparse(bytes); // -> '797ff043-11eb-11e1-80d6-510998755d10'".green
].join('\n');
