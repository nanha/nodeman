exports.name = 'mysql';
exports.category = 'dbms';
exports.context = 'use require';
exports.homepage = 'http://startic.kr/njs/package/mysql';
exports.description = [
    "\tPurpose".red
    ,"\t========"
    , ""
    ,"\tA pure node.js JavaScript Client implementing the MySQL protocol."
    , ""
    , ""
    ,"\tSupport this module".red
    ,"\t==================="
    , ""
    ,"\tIf you like this module, check out and spread the word about our service transloadit.com. We provide file uploading and encoding functionality to other applications, and have performed billions of queries with this module so far."
    ,""
    ,""
    ,"\tUsage".red
    ,"\t====="
    ,""
    ,"\tvar mysql = require('mysql');".green
    ,"\tvar TEST_DATABASE = 'nodejs_mysql_test';".green
    ,"\tvar TEST_TABLE = 'test';".green
    ,"\tvar client = mysql.createClient({".green
    ,"\t  user: 'root',".green
    ,"\t  password: 'root',".green
    ,"\t});".green
    ,""
    ,""
    ,"\tclient.query('CREATE DATABASE '+TEST_DATABASE, function(err) {".green
    ,"\t  if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {".green
    ,"\t    throw err;".green
    ,"\t  }".green
    ,"\t});".green
    ,""
    ,""
    ,"\t// If no callback is provided, any errors will be emitted as `'error'`".green
    ,"\t// events by the client".green
    ,"\tclient.query('USE '+TEST_DATABASE);".green
    ,""
    ,"\tclient.query(".green
    ,"\t  'CREATE TEMPORARY TABLE '+TEST_TABLE+".green
    ,"\t  '(id INT(11) AUTO_INCREMENT, '+".green
    ,"\t  'title VARCHAR(255), '+".green
    ,"\t  'text TEXT, '+".green
    ,"\t  'created DATETIME, '+".green
    ,"\t  'PRIMARY KEY (id))'".green
    ,""
    ,""
    ,"\tclient.query(".green
    ,"\t  'INSERT INTO '+TEST_TABLE+' '+".green
    ,"\t  'SET title = ?, text = ?, created = ?',".green
    ,"\t  ['super cool', 'this is a nice text', '2010-08-16 10:00:23']".green
    ,"\t);".green
    ,""
    ,""
    ,"\tvar query = client.query(".green
    ,"\t  'INSERT INTO '+TEST_TABLE+' '+".green
    ,"\t  'SET title = ?, text = ?, created = ?',".green
    ,"\t  ['another entry', 'because 2 entries make a better test', '2010-08-16 12:42:15']".green
    ,""
    ,""
    ,"\tclient.query(".green
    ,"\t  'SELECT * FROM '+TEST_TABLE,".green
    ,"\t  function selectCb(err, results, fields) {".green
    ,"\t    if (err) {".green
    ,"\t      throw err;".green
    ,"\t    }".green
    ,"\t    console.log(results);".green
    ,"\t    console.log(fields);".green
    ,"\t    client.end();".green
    ,"\t  }".green
    ,"\t);".green
    ,""
    ,""
    ,"\tAPI".red
    ,"\t====="
    ,""
    ,"\tmysql.createClient([options])".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tCreates a new client instance. Any client property can be set using the options object."
    ,""
    ,"\tclient.host = 'localhost'".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tThe host to connect to."
    ,""
    ,"\tclient.port = 3306".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tThe port to connect to."
    ,""
    ,"\tclient.user = null".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tThe username to authenticate as."
    ,""
    ,"\tclient.password = null".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tThe password to use."
    ,""
    ,"\tclient.database = null".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tThe name of the database to connect to (optional)."
    ,""
    ,"\tclient.debug = false".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tPrints incoming and outgoing packets, useful for development / testing purposes."
    ,""
    ,"\tclient.flags = Client.defaultFlags".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tConnection flags send to the server."
    ,""
    ,"\tclient.query(sql, [params, cb])".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tSends a sql query to the server. '?' characters can be used as placeholders for an array of params that will be safely escaped before sending the final query."
    ,"\tThis method returns a Query object which can be used to stream incoming row data."
    ,"\tWarning: sql statements with multiple queries separated by semicolons are not supported yet."
    ,""
    ,"\tclient.ping([cb])".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tSends a ping command to the server."
    ,"\tclient.useDatabase(database, [cb])"
    ,"\tSame as issuing a 'USE <database>' query."
    ,""
    ,"\tclient.statistics([cb])".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tReturns some server statistics provided by MySql."
    ,""
    ,"\tclient.format(sql, params)".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tAllows to safely insert a list of params into a sql string using the placeholder mechanism described above."
    ,""
    ,"\tclient.escape(val)".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tEscapes a single val for use inside of a sql string."
    ,""
    ,"\tclient.destroy()".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tForces the client connection / socket to be destroyed right away."
    ,""
    ,"\tclient.end([cb])".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tSchedule a COM_QUIT packet for closing the connection. All currently queued queries will still execute before the graceful termination of the connection is attempted."
    ,"\tclient event: 'error' (err)"
    ,"\tWhen the client has no callback / delegate for an error, it is emitted with this event instead."
    ,""
    ,"\tnew mysql.Query()".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tQuery objects are not meant to be invoked manually. To get a query object, use the client.query API."
    ,""
    ,"\tquery event: 'error' (err)".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tEmitted when mysql returns an error packet for the query."
    ,""
    ,"\tquery event: 'field' (field)".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tEmitted upon receiving a field packet from mysql."
    ,""
    ,"\tquery event: 'row' (row)".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tEmitted upon receiving a row. An option for streaming the contents of the row itself will be made available soon."
    ,""
    ,"\tquery event: 'end' ([result])".cyan
    ,"\t-----------------------------"
    ,""
    ,"\tEmitted once the query is finished. In case there is no result set, a result parameter is provided which contains the information from the mysql OK packet."
].join('\n');
