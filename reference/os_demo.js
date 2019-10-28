const os = require('os');
//Get platform

console.log(os.platform());

//CPU architecture
console.log(os.arch());
//CPU core info
console.log(os.cpus());

//Free memory

console.log(os.freemem());

//total memory

console.log(os.totalmem());

//home directory
console.log(os.homedir());

//uptime -- the amount of time your system has been up

console.log(os.uptime());
