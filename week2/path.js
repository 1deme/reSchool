import path from 'path';

const joined = path.join('folder', 'file.txt');
console.log('Joined path:', joined);

const absolute = path.resolve('file.txt');
console.log('Absolute path:', absolute);

console.log('Basename:', path.basename('/users/test/file.txt'));

console.log('Dirname:', path.dirname('/users/test/file.txt'));

console.log('Extension:', path.extname('file.txt'));

console.log('Parsed:', path.parse('/users/test/file.txt'));