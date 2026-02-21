import fs from 'fs';

fs.mkdirSync('data', { recursive: true });

fs.writeFileSync('data/mynamefile.txt', 'Demetre Labadze');

// const content = fs.readFileSync('example.txt', 'utf-8');
// console.log('File content:', content);

// fs.appendFileSync('example.txt', '\nAppended line');

// const exists = fs.existsSync('example.txt');
// console.log('File exists:', exists);

// fs.mkdirSync('data', { recursive: true });

// const files = fs.readdirSync('.');
// console.log('Current directory files:', files);

// fs.unlinkSync('example.txt');

// fs.rmdirSync('data');