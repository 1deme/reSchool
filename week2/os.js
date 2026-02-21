import os from 'os';

console.log('Platform:', os.platform());

console.log('Architecture:', os.arch());

console.log('CPU count:', os.cpus().length);

console.log('Total memory:', os.totalmem());

console.log('Free memory:', os.freemem());

console.log('Home directory:', os.homedir());

console.log('Temp directory:', os.tmpdir());