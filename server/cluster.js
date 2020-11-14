const cpus = require('os').cpus();
const cluster = require('cluster');

const numCpus = cpus.length;
if (cluster.isMaster) {
  for (let i = 0; i < numCpus; i += 1) {
    cluster.fork();
  }
  cluster.on('online', (worker) => {
    console.log(`Worker${worker.process.pid}started`);
  });
  // If a worker died
  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker' + worker.process.pid + 'died with code:' + code + ', and signal:' + signal);
    console.log('Starting a new worker');
  });
} else {
  require('./start.js');
}
