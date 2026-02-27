const fs = require('fs');

console.log("Start");

fs.readFile('text.txt', 'utf8', (err, data) => {
    console.log(data);
});

console.log("End");