exports.name = 'cluster';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/cluster.html';
exports.description = [
  "\t# Cluster".red
,"\t============="
,""
, "\tStability: 1 Experimental - Drastic changes in future versions"
, "\tA single instance of Node runs in a single thread. To take advantage of multi-core systems the user will sometimes want to launch a cluster of Node processes to handle the load."
,""
, "\tThe cluster module allows you to easily create a network of processes that all share server ports."
,""
, "\tvar cluster = require('cluster');".green
, "\tvar http = require('http');".green
, "\tvar numCPUs = require('os').cpus().length;".green
,"".green
, "\tif (cluster.isMaster) {".green
, "\t  // Fork workers.".green
, "\t  for (var i = 0; i < numCPUs; i++) {".green
, "\t    cluster.fork();".green
, "\t  }".green
,"".green
, "\t  cluster.on('death', function(worker) {".green
, "\t    console.log('worker ' + worker.pid + ' died');".green
, "\t  });".green
, "\t} else {".green
, "\t  // Worker processes have a http server.".green
, "\t  http.Server(function(req, res) {".green
, "\t    res.writeHead(200);".green
, "\t    res.end(\"hello world\\n\");".green
, "\t  }).listen(8000);".green
, "\t}".green
, "\tRunning node will now share port 8000 between the workers:"
,""
, "\t% node server.js".yellow
, "\tWorker 2438 online".yellow
, "\tWorker 2437 online".yellow
,""
,""
, "\tThe difference between cluster.fork() and child_process.fork() is simply that cluster allows TCP servers to be shared between workers. cluster.fork is implemented on top of child_process.fork. The message passing API that is available with child_process.fork is available with cluster as well. As an example, here is a cluster which keeps count of the number of requests in the master process via message passing:"
,""
, "\tvar cluster = require('cluster');".green
, "\tvar http = require('http');".green
, "\tvar numReqs = 0;".green
,"".green
, "\tif (cluster.isMaster) {".green
, "\t  // Fork workers.".green
, "\t  for (var i = 0; i < 2; i++) {".green
, "\t    var worker = cluster.fork();".green
,"".green
, "\t    worker.on('message', function(msg) {".green
, "\t      if (msg.cmd && msg.cmd == 'notifyRequest') {".green
, "\t        numReqs++;".green
, "\t      }".green
, "\t    });".green
, "\t  }".green
,"".green
, "\t  setInterval(function() {".green
, "\t    console.log(\"numReqs =\", numReqs);".green
, "\t  }, 1000);".green
, "\t} else {".green
, "\t  // Worker processes have a http server.".green
, "\t  http.Server(function(req, res) {".green
, "\t    res.writeHead(200);".green
, "\t    res.end(\"hello world\\n\");".green
, "\t    // Send message to master process".green
, "\t    process.send({ cmd: 'notifyRequest' });".green
, "\t  }).listen(8000);".green
, "\t}".green
,""
,""
, "\tcluster.fork()".red
,"\t============="
,""
, "\tSpawn a new worker process. This can only be called from the master process."
,""
, "\tcluster.isMaster".red
,"\t============="
, "\tcluster.isWorker".red
,"\t============="
,""
, "\tBoolean flags to determine if the current process is a master or a worker process in a cluster. A process isMaster if process.env.NODE_WORKER_ID is undefined."
,""
, "\tEvent: 'death'".red
,"\t============="
,""
, "\tWhen any of the workers die the cluster module will emit the 'death' event. This can be used to restart the worker by calling fork() again."
,""
, "\tcluster.on('death', function(worker) {".green
, "\t  console.log('worker ' + worker.pid + ' died. restart...');".green
, "\t  cluster.fork();".green
, "\t});".green
,""
, "\tDifferent techniques can be used to restart the worker depending on the application."
].join('\n');
