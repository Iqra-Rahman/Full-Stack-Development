const os = require('os');

console.log(os.uptime())

const osFeatures = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(osFeatures)