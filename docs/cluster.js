exports.name = 'cluster';
exports.category = 'NativeModule';
exports.context = 'use require';
exports.homepage = 'http://nodejs.org/api/cluster.html';
exports.description = [
 "\t# Cluster".red
,"\t"
,"\tA single instance of Node runs in a single thread. To take advantage of"
,"\tmulti-core systems the user will sometimes want to launch a cluster of Node"
,"\tprocesses to handle the load."
,"\t"
,"\tThe cluster module allows you to easily create a network of processes that"
,"\tall share server ports."
,"\t"
,"\t    var cluster = require('cluster');".green
,"\t    var http = require('http');".green
,"\t    var numCPUs = require('os').cpus().length;".green
,"\t".green
,"\t    if (cluster.isMaster) {".green
,"\t      // Fork workers.".green
,"\t      for (var i = 0; i < numCPUs; i++) {".green
,"\t        cluster.fork();".green
,"\t      }".green
,"\t".green
,"\t      cluster.on('death', function(worker) {".green
,"\t        console.log('worker ' + worker.pid + ' died');".green
,"\t      });".green
,"\t    } else {".green
,"\t      // Worker processes have a http server.".green
,"\t      http.Server(function(req, res) {".green
,"\t        res.writeHead(200);".green
,"\t        res.end(\"hello world\n\");".green
,"\t      }).listen(8000);".green
,"\t    }".green
,"\t"
,"\tRunning node will now share port 8000 between the workers:"
,"\t"
,"\t    % node server.js".yellow
,"\t    Worker 2438 online".yellow
,"\t    Worker 2437 online".yellow
,"\t"
,"\tThe difference between `cluster.fork()` and `child_process.fork()` is simply"
,"\tthat cluster allows TCP servers to be shared between workers. `cluster.fork`"
,"\tis implemented on top of `child_process.fork`. The message passing API that"
,"\tis available with `child_process.fork` is available with `cluster` as well."
,"\tAs an example, here is a cluster which keeps count of the number of requests"
,"\tin the master process via message passing:"
,"\t"
,"\t    var cluster = require('cluster');".green
,"\t    var http = require('http');".green
,"\t    var numReqs = 0;".green
,"\t".green
,"\t    if (cluster.isMaster) {".green
,"\t      // Fork workers.".green
,"\t      for (var i = 0; i < 2; i++) {".green
,"\t        var worker = cluster.fork();".green
,"\t".green
,"\t        worker.on('message', function(msg) {".green
,"\t          if (msg.cmd && msg.cmd == 'notifyRequest') {".green
,"\t            numReqs++;".green
,"\t          }".green
,"\t        });".green
,"\t      }".green
,"\t".green
,"\t      setInterval(function() {".green
,"\t        console.log(\"numReqs =\", numReqs);".green
,"\t      }, 1000);".green
,"\t    } else {".green
,"\t      // Worker processes have a http server.".green
,"\t      http.Server(function(req, res) {".green
,"\t        res.writeHead(200);".green
,"\t        res.end(\"hello world\n\");".green
,"\t        // Send message to master process".green
,"\t        process.send({ cmd: 'notifyRequest' });".green
,"\t      }).listen(8000);".green
,"\t    }".green
,"\t"
,"\t"
,"\t"
,"\t## cluster.fork()".cyan
,"\t"
,"\tSpawn a new worker process. This can only be called from the master process."
,"\t"
,"\t## cluster.isMaster".cyan
,"\t## cluster.isWorker".cyan
,"\t"
,"\tBoolean flags to determine if the current process is a master or a worker"
,"\tprocess in a cluster. A process `isMaster` if `process.env.NODE_WORKER_ID`"
,"\tis undefined."
,"\t"
,"\t## Event: 'death'".cyan
,"\t"
,"\tWhen any of the workers die the cluster module will emit the 'death' event."
,"\tThis can be used to restart the worker by calling `fork()` again."
,"\t"
,"\t    cluster.on('death', function(worker) {".green
,"\t      console.log('worker ' + worker.pid + ' died. restart...');".green
,"\t      cluster.fork();".green
,"\t    });".green
,"\t"
,"\tDifferent techniques can be used to restart the worker depending on the"
,"\tapplication."
].join('\n');
