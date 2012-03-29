exports.__doc__ = "NAME\n".yellow
    + "\tmysql\n"
    + "\n"
    + "CONTEXT\n".yellow
    + "\tuse require\n".magenta
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\t\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    +"\tPurpose\n".red
    +"\t========\n"
    + "\n"
    +"\tA pure node.js JavaScript Client implementing the MySQL protocol.\n"
    + "\n"
    + "\n"
    +"\tSupport this module\n".red
    +"\t===================\n"
    + "\n"
    +"\tIf you like this module, check out and spread the word about our service transloadit.com. We provide file uploading and encoding functionality to other applications, and have performed billions of queries with this module so far.\n"
    +"\n"
    +"\n"
    +"\tUsage\n".red
    +"\t=====\n"
    +"\n"
    +"\tvar mysql = require('mysql');\n".green
    +"\tvar TEST_DATABASE = 'nodejs_mysql_test';\n".green
    +"\tvar TEST_TABLE = 'test';\n".green
    +"\tvar client = mysql.createClient({\n".green
    +"\t  user: 'root',\n".green
    +"\t  password: 'root',\n".green
    +"\t});\n".green
    +"\n"
    +"\n"
    +"\tclient.query('CREATE DATABASE '+TEST_DATABASE, function(err) {\n".green
    +"\t  if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {\n".green
    +"\t    throw err;\n".green
    +"\t  }\n".green
    +"\t});\n".green
    +"\n"
    +"\n"
    +"\t// If no callback is provided, any errors will be emitted as `'error'`\n".green
    +"\t// events by the client\n".green
    +"\tclient.query('USE '+TEST_DATABASE);\n".green
    +"\n"
    +"\tclient.query(\n".green
    +"\t  'CREATE TEMPORARY TABLE '+TEST_TABLE+\n".green
    +"\t  '(id INT(11) AUTO_INCREMENT, '+\n".green
    +"\t  'title VARCHAR(255), '+\n".green
    +"\t  'text TEXT, '+\n".green
    +"\t  'created DATETIME, '+\n".green
    +"\t  'PRIMARY KEY (id))'\n".green
    +"\n"
    +"\n"
    +"\tclient.query(\n".green
    +"\t  'INSERT INTO '+TEST_TABLE+' '+\n".green
    +"\t  'SET title = ?, text = ?, created = ?',\n".green
    +"\t  ['super cool', 'this is a nice text', '2010-08-16 10:00:23']\n".green
    +"\t);\n".green
    +"\n"
    +"\n"
    +"\tvar query = client.query(\n".green
    +"\t  'INSERT INTO '+TEST_TABLE+' '+\n".green
    +"\t  'SET title = ?, text = ?, created = ?',\n".green
    +"\t  ['another entry', 'because 2 entries make a better test', '2010-08-16 12:42:15']\n".green
    +"\n"
    +"\n"
    +"\tclient.query(\n".green
    +"\t  'SELECT * FROM '+TEST_TABLE,\n".green
    +"\t  function selectCb(err, results, fields) {\n".green
    +"\t    if (err) {\n".green
    +"\t      throw err;\n".green
    +"\t    }\n".green
    +"\t    console.log(results);\n".green
    +"\t    console.log(fields);\n".green
    +"\t    client.end();\n".green
    +"\t  }\n".green
    +"\t);\n".green
    +"\n"
    +"\n"
    +"\tAPI\n".red
    +"\t=====\n"
    +"\n"
    +"\tmysql.createClient([options])\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tCreates a new client instance. Any client property can be set using the options object.\n"
    +"\n"
    +"\tclient.host = 'localhost'\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tThe host to connect to.\n"
    +"\n"
    +"\tclient.port = 3306\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tThe port to connect to.\n"
    +"\n"
    +"\tclient.user = null\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tThe username to authenticate as.\n"
    +"\n"
    +"\tclient.password = null\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tThe password to use.\n"
    +"\n"
    +"\tclient.database = null\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tThe name of the database to connect to (optional).\n"
    +"\n"
    +"\tclient.debug = false\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tPrints incoming and outgoing packets, useful for development / testing purposes.\n"
    +"\n"
    +"\tclient.flags = Client.defaultFlags\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tConnection flags send to the server.\n"
    +"\n"
    +"\tclient.query(sql, [params, cb])\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tSends a sql query to the server. '?' characters can be used as placeholders for an array of params that will be safely escaped before sending the final query.\n"
    +"\tThis method returns a Query object which can be used to stream incoming row data.\n"
    +"\tWarning: sql statements with multiple queries separated by semicolons are not supported yet.\n"
    +"\n"
    +"\tclient.ping([cb])\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tSends a ping command to the server.\n"
    +"\tclient.useDatabase(database, [cb])\n"
    +"\tSame as issuing a 'USE <database>' query.\n"
    +"\n"
    +"\tclient.statistics([cb])\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tReturns some server statistics provided by MySql.\n"
    +"\n"
    +"\tclient.format(sql, params)\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tAllows to safely insert a list of params into a sql string using the placeholder mechanism described above.\n"
    +"\n"
    +"\tclient.escape(val)\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tEscapes a single val for use inside of a sql string.\n"
    +"\n"
    +"\tclient.destroy()\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tForces the client connection / socket to be destroyed right away.\n"
    +"\n"
    +"\tclient.end([cb])\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tSchedule a COM_QUIT packet for closing the connection. All currently queued queries will still execute before the graceful termination of the connection is attempted.\n"
    +"\tclient event: 'error' (err)\n"
    +"\tWhen the client has no callback / delegate for an error, it is emitted with this event instead.\n"
    +"\n"
    +"\tnew mysql.Query()\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tQuery objects are not meant to be invoked manually. To get a query object, use the client.query API.\n"
    +"\n"
    +"\tquery event: 'error' (err)\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tEmitted when mysql returns an error packet for the query.\n"
    +"\n"
    +"\tquery event: 'field' (field)\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tEmitted upon receiving a field packet from mysql.\n"
    +"\n"
    +"\tquery event: 'row' (row)\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tEmitted upon receiving a row. An option for streaming the contents of the row itself will be made available soon.\n"
    +"\n"
    +"\tquery event: 'end' ([result])\n".cyan
    +"\t-----------------------------\n"
    +"\n"
    +"\tEmitted once the query is finished. In case there is no result set, a result parameter is provided which contains the information from the mysql OK packet.\n"
    + "\n"
    ;
